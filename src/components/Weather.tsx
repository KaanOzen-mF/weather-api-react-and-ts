import { useEffect, useState } from "react";
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
    condition: {
      icon: string;
    };
  };
  forecast: {
    forecastday: [
      {
        hour: [
          {
            temp_c: number;
            time: string;
          }
        ];
      }
    ];
  };
}

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

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

  return (
    <div className="weatherInfoContainer">
      {weatherData && (
        <>
          <img src={weatherData.current.condition.icon} alt="" />
          <div className="weatherInfoCard">
            <p className="weatherInfoTitle">{weatherData.location.name}</p>
            <p className="weatherInfoSubTitle">
              {weatherData.location.country}
            </p>
          </div>
          <div className="weatherInfoCard">
            <p className="weatherInfoTitle">{weatherData.current.temp_c}°</p>
            <p className="weatherInfoSubTitle">Temperature</p>
          </div>
          <div className="weatherInfoCard">
            <p className="weatherInfoTitle">{weatherData.current.humidity}%</p>
            <p className="weatherInfoSubTitle">Humidity</p>
          </div>
          <div className="weatherInfoCard">
            <p className="weatherInfoTitle">
              {weatherData.current.gust_kph}km/h
            </p>
            <p className="weatherInfoSubTitle">Wind Speed</p>
          </div>
        </>
      )}
    </div>
  );
}
