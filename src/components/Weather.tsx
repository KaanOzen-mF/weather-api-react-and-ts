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
      text: string;
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

interface WeatherProps {
  setBackground: (background: string) => void;
}

export const Weather: React.FC<WeatherProps> = ({ setBackground }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      Promise.all([fetchCurrentWeather(`${latitude},${longitude}`)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
          const weatherCondition = currentWeather.current.condition.text;
          updateBackground(weatherCondition, setBackground);
          console.log(currentWeather);
        }
      );
    });
  }, [setBackground]);

  const updateBackground = (
    weather: string,
    setBackground: (background: string) => void
  ) => {
    let background: string;
    switch (weather) {
      case "Partly cloudy":
        background = "src/assets/partlyCloudly.jpg";
        break;
      case "Sunny":
        background = "src/assets/sunny.jpg";
        break;
      case "Mist":
        background = "src/assets/mist.jpg";
        break;
      default:
        background = "src/assets/rainy.jpg";
    }
    setBackground(background);
  };

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
};
