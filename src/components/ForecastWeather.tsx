import { useState, useEffect } from "react";
import axios from "axios";

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

  const fetchCurrentWeather = async (
    latitude: number,
    longitude: number,
    days: number = 3
  ) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: `${latitude},${longitude}`,
        days: days,
      },
      headers: {
        "X-RapidAPI-Key": "b12886698dmsh2a39c211cc8b4aep12a465jsn115794388fb5",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchCurrentWeather(latitude, longitude).then((currentWeather) => {
        setWeatherData(currentWeather);
      });
    });
  }, []);

  weatherData?.forecast.forecastday.map((i) => console.log(i));
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
      {weatherData?.forecast.forecastday.map((i) => (
        <div className="forecastWeatherContainer">
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
