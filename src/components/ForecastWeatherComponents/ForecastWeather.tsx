// Importing necessary hooks and utilities from React, context, utilities, and styled components
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

// Interface for the structure of weather data received from the API
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

// Props definition for the ForecastWeather component
interface WeatherProps {
  selectedCity: string;
}

// The ForecastWeather component displays weather forecast data for a selected city
export const ForecastWeather: React.FC<WeatherProps> = ({ selectedCity }) => {
  // State to hold the fetched weather data
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  // Accessing the temperature unit (Celsius/Fahrenheit) from context
  const { isCelsius } = useTemperature();

  // Fetching the forecast weather data on component mount or when selectedCity changes
  useEffect(() => {
    // Fetch weather data for the selected city
    if (selectedCity) {
      fetchForecastWeather(selectedCity).then((currentWeather) => {
        setWeatherData(currentWeather);
      });
    } else {
      // Use geolocation to fetch weather data if no city is selected
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

  // Function to format date strings
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      weekday: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    // Render the forecast weather data with styled components
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
