import { useState, useEffect } from "react";
import { fetchForecastWeather } from "../utils/fetchWeather";

interface WeatherDataProps {
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            icon: string;
          };
        };
      }
    ];
  };
}

export default function ForecastWeather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchForecastWeather(latitude, longitude).then((currentWeather) => {
        setWeatherData(currentWeather);
      });
    });
  }, []);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      weekday: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="forecastContainer">
      <div className="forecastTitleContainer">
        <p>Forecast</p>
        <p className="forecastTitleDays">3 Days</p>
      </div>
      {weatherData?.forecast.forecastday.map((i, k) => (
        <div className="forecastWeatherContainer" key={k}>
          <div className="forecastWeatherTempContainer">
            <img src={i.day.condition.icon} alt="" />
            <p className="forecastWeatherMaxTemp">{i.day.maxtemp_c}</p>
            <p className="forecastWeatherMinTemp">/{i.day.mintemp_c}</p>
          </div>
          <p>{formatDate(i.date)}</p>
        </div>
      ))}
    </div>
  );
}
