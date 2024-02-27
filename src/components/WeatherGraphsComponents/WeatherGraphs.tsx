// Importing necessary components and hooks
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ButtonContainer,
  GraphButton,
  TitleBtnContainer,
  TitleContainer,
  WeatherGraphsWrapper,
} from "../styles.module";
import { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../../utils/fetchWeather";

// Interfaces for type definitions
interface WeatherDataProps {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    gust_kph: number;
  };
  forecast: {
    forecastday: [
      {
        hour: [
          {
            temp_c: number;
            time: string;
            condition: {
              icon: string;
            };
            humidity: number;
            precip_mm: number;
            uv: number;
          }
        ];
      }
    ];
  };
}

interface ChartData {
  time: string;
  Humidity: number;
  Precipitation: number;
  Uv: number;
}

interface WeatherGraphsProps {
  selectedCity?: string;
}

// WeatherGraphs component to display weather data charts
export const WeatherGraphs: React.FC<WeatherGraphsProps> = ({
  selectedCity,
}) => {
  // State hooks for weather data and chart data
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [activeDataKey, setActiveDataKey] = useState<
    "Humidity" | "Precipitation" | "Uv"
  >("Humidity");

  // Effect hook to fetch weather data based on the selected city or current location
  useEffect(() => {
    const fetchWeatherData = async () => {
      let data;
      if (selectedCity) {
        data = await fetchCurrentWeather(selectedCity);
      } else {
        data = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                const weatherData = await fetchCurrentWeather(
                  `${latitude},${longitude}`
                );
                resolve(weatherData);
              } catch (error) {
                reject(error);
              }
            },
            (error) => {
              reject(error);
            }
          );
        });
      }
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [selectedCity]);

  // Effect hook to transform weather data into chart data format
  useEffect(() => {
    if (weatherData) {
      const transformedData = weatherData.forecast.forecastday[0].hour.map(
        (hour) => ({
          time: hour.time.split(" ")[1],
          Humidity: hour.humidity,
          Precipitation: hour.precip_mm,
          Uv: hour.uv,
        })
      );

      setChartData(transformedData);
    }
  }, [weatherData]);

  return (
    // Rendering the chart with buttons to switch between data types
    <WeatherGraphsWrapper>
      <TitleBtnContainer>
        <TitleContainer>
          <p>Overview</p>
        </TitleContainer>
        <ButtonContainer>
          <GraphButton
            isActive={activeDataKey === "Humidity"}
            onClick={() => setActiveDataKey("Humidity")}
          >
            Humidity
          </GraphButton>
          <GraphButton
            isActive={activeDataKey === "Precipitation"}
            onClick={() => setActiveDataKey("Precipitation")}
          >
            Precipitation
          </GraphButton>
          <GraphButton
            isActive={activeDataKey === "Uv"}
            onClick={() => setActiveDataKey("Uv")}
          >
            UV
          </GraphButton>
        </ButtonContainer>
      </TitleBtnContainer>
      <ResponsiveContainer height={350}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey={activeDataKey} stroke="#8cd2ce" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </WeatherGraphsWrapper>
  );
};
