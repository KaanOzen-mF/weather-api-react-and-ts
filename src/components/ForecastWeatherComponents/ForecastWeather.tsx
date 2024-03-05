import { useState, useEffect } from "react";

import { useTemperature } from "../TemperatureContext";
import { fetchForecastWeather } from "../../utils/fetchWeather";
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

interface UserLocation {
  lat: number | null;
  lng: number | null;
}

interface WeatherProps {
  selectedCity: string;
  userLocation: UserLocation;
}

export const ForecastWeather: React.FC<WeatherProps> = ({
  selectedCity,
  userLocation,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const { isCelsius } = useTemperature();

  console.log(userLocation);
  useEffect(() => {
    const fetchWeather = () => {
      let query = selectedCity;

      if (!query && userLocation.lat !== null && userLocation.lng !== null) {
        query = `${userLocation.lat},${userLocation.lng}`;
      }

      if (query) {
        fetchForecastWeather(query)
          .then((currentWeather) => {
            setWeatherData(currentWeather);
          })
          .catch((error) => {
            console.error("Weather data fetching error:", error);
          });
      }
    };

    fetchWeather();
  }, [selectedCity, userLocation]);

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
