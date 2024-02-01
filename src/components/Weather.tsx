import axios from "axios";
import { FaCloud } from "react-icons/fa";
import { useEffect, useState } from "react";

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

  const fetchCurrentWeather = async (query: string) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { query },
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
      Promise.all([fetchCurrentWeather(`${latitude},${longitude}`)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
        }
      );
    });
  }, []);

  console.log(weatherData);
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
