import { FaCloud } from "react-icons/fa";
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

  return (
    <div className="weatherHourlyCardContainer">
      {weatherData?.forecast.forecastday[0].hour.map((i) => (
        <div className="weatherHourlyCard">
          <p className="weatherCardText">
            {i.time.split(" ")[1].split(":")[0]} am
          </p>
          <img src={i.condition.icon} alt="" />
          <p className="weatherCardText">{i.temp_c}°</p>
        </div>
      ))}
    </div>
  );
}
