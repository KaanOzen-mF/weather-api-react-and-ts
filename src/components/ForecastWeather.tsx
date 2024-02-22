import { useState, useEffect } from "react";
import { fetchForecastWeather } from "../utils/fetchWeather";
import { useTemperature } from "./TemperatureContext";

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

interface WeatherProps {
  selectedCity: string;
}

export const ForecastWeather: React.FC<WeatherProps> = ({ selectedCity }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const { isCelsius } = useTemperature();

  useEffect(() => {
    if (selectedCity) {
      fetchForecastWeather(selectedCity).then((currentWeather) => {
        setWeatherData(currentWeather);
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchForecastWeather(`${latitude},${longitude}`).then(
            (currentWeather) => {
              setWeatherData(currentWeather);
            }
          );
        },
        (error) => {
          console.error(
            "An error occurred while retrieving location information:",
            error
          );
        }
      );
    }
  }, [selectedCity]);

  console.log(selectedCity);
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      weekday: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  const convertTemperature = (temp: number) => {
    return isCelsius
      ? `${temp.toFixed()}°C`
      : `${((temp * 9) / 5 + 32).toFixed()}°F`;
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
            <img
              className="forecastWeatherImg"
              src={i.day.condition.icon}
              alt=""
            />
            <p className="forecastWeatherMaxTemp">
              {convertTemperature(i.day.maxtemp_c)}
            </p>
            <p className="forecastWeatherMinTemp">
              /{convertTemperature(i.day.mintemp_c)}
            </p>
          </div>
          <p className="forecastWeatherDate">{formatDate(i.date)}</p>
        </div>
      ))}
    </div>
  );
};
