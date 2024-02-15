import { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../utils/fetchWeather";
import { useTemperature } from "./TemperatureContext";

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
          }
        ];
      }
    ];
  };
}
export default function WeatherInfoCard() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  const { isCelsius } = useTemperature();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      Promise.all([fetchCurrentWeather(`${latitude},${longitude}`)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
        }
      );
    });
  }, []);
  const convertTemperature = (temp: number) => {
    return isCelsius
      ? `${temp.toFixed()}°C`
      : `${((temp * 9) / 5 + 32).toFixed()}°F`;
  };
  return (
    <div className="weatherHourlyCardContainer">
      {weatherData?.forecast.forecastday[0].hour.map((i, k) => (
        <div className="weatherHourlyCard" key={k}>
          <p className="weatherCardText">
            {i.time.split(" ")[1].split(":")[0]} am
          </p>
          <img src={i.condition.icon} alt="" />
          <p className="weatherCardText">{convertTemperature(i.temp_c)}</p>
        </div>
      ))}
    </div>
  );
}
