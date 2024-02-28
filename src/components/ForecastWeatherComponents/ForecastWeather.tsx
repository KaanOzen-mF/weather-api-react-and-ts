import { useState, useEffect } from "react";
import { fetchForecastWeather } from "../../utils/fetchWeather";
import { useTemperature } from "../TemperatureContext";
import { convertTemperature } from "../../utils/convertTemperature";
import {
  ForecastContainer,
  ForecastTitleContainer,
  ForecastTitleDays,
  ForecastWeatherContainer,
  ForecastWeatherImg,
  ForecastWeatherMaxTemp,
  ForecastWeatherMinTemp,
  ForecastWeatherTempContainer,
} from "../styles.module";

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

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      weekday: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <ForecastContainer>
      <ForecastTitleContainer>
        <p>Forecast</p>
        <ForecastTitleDays>3 Days</ForecastTitleDays>
      </ForecastTitleContainer>
      {weatherData?.forecast.forecastday.map((i, k) => (
        <ForecastWeatherContainer key={k}>
          <ForecastWeatherTempContainer>
            <ForecastWeatherImg src={i.day.condition.icon} alt="" />
            <ForecastWeatherMaxTemp>
              {convertTemperature(i.day.maxtemp_c, isCelsius)}
            </ForecastWeatherMaxTemp>
            <ForecastWeatherMinTemp>
              /{convertTemperature(i.day.mintemp_c, isCelsius)}
            </ForecastWeatherMinTemp>
          </ForecastWeatherTempContainer>
          <p className="forecastWeatherDate">{formatDate(i.date)}</p>
        </ForecastWeatherContainer>
      ))}
    </ForecastContainer>
  );
};
