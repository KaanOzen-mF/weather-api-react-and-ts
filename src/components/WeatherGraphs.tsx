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

  const getButtonClass = (key: "humidity" | "precip_mm" | "uv") => {
    return `weatherGraphsButton ${activeDataKey === key ? "active" : ""}`;
  };

  return (
    <WeatherGraphsWrapper>
      <div className="weatherGraphsTitleBtnContainer">
        <div className="weatherGrapsTitleContainer">
          <p>Overview</p>
        </div>
        <div className="weatherGrapsButtonContainer">
          <button
            className={getButtonClass("humidity")}
            onClick={() => setActiveDataKey("humidity")}
          >
            Humidity
          </button>
          <button
            className={getButtonClass("precip_mm")}
            onClick={() => setActiveDataKey("precip_mm")}
          >
            Precipitation
          </button>
          <button
            className={getButtonClass("uv")}
            onClick={() => setActiveDataKey("uv")}
          >
            UV
          </button>
        </div>
      </div>

      <LineChart
        width={875}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey={activeDataKey} stroke="#8cd2ce" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
      </LineChart>
    </WeatherGraphsWrapper>
  );
}
