import { useState, useEffect } from "react";
import axios from "axios";

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
  }, []); // Add 'days' as a dependency here

  console.log(weatherData);
  return (
    <div>
      <p>Forecast Weather</p>
    </div>
  );
}
