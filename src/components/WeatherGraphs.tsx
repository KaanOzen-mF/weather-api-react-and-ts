import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { WeatherGraphsWrapper } from "./styles.module";
import { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../utils/fetchWeather";

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
  humidity: number;
  precip_mm: number;
  uv: number;
}

export default function WeatherGraphs() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [activeDataKey, setActiveDataKey] = useState<
    "humidity" | "precip_mm" | "uv"
  >("humidity");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchCurrentWeather(`${latitude},${longitude}`).then((currentWeather) => {
        setWeatherData(currentWeather);
      });
    });
  }, []);

  useEffect(() => {
    if (weatherData) {
      const transformedData = weatherData.forecast.forecastday[0].hour.map(
        (hour) => ({
          time: hour.time.split(" ")[1],
          humidity: hour.humidity,
          precip_mm: hour.precip_mm,
          uv: hour.uv,
        })
      );

      setChartData(transformedData);
    }
  }, [weatherData]);

  return (
    <WeatherGraphsWrapper>
      <button onClick={() => setActiveDataKey("humidity")}>Humidity</button>
      <button onClick={() => setActiveDataKey("precip_mm")}>
        Precipitation
      </button>
      <button onClick={() => setActiveDataKey("uv")}>UV</button>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey={activeDataKey} stroke="#030303" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </WeatherGraphsWrapper>
  );
}
