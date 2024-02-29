import { useEffect, useState } from "react";

import { useTemperature } from "../TemperatureContext";

import { fetchCurrentWeather } from "../../utils/fetchWeather";
import { convertTemperature } from "../../utils/convertTemperature";

import {
  WeatherInfoCard,
  WeatherInfoContainer,
  WeatherInfoImg,
  WeatherInfoSubTitle,
  WeatherInfoTitle,
} from "../styles.module";

// Define the structure of weather data received from the API
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
  setBackground: (background: string) => void; // Function to update the background based on weather condition
  selectedCity: string; // Selected city for which the weather data is fetched
}

export const Weather: React.FC<WeatherProps> = ({
  setBackground,
  selectedCity,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null); // State to store fetched weather data
  const { isCelsius } = useTemperature(); // Use temperature context to check if the unit is Celsius

  useEffect(() => {
    // Effect to fetch weather data based on selected city or current location
    if (selectedCity) {
      fetchCurrentWeather(selectedCity).then((currentWeather) => {
        setWeatherData(currentWeather);
        const weatherCondition = currentWeather.current.condition.text; // Extract the weather condition text
        updateBackground(weatherCondition, setBackground); // Update the background based on weather condition
      });
    } else {
      // If no city is selected, use geolocation to fetch weather data for current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCurrentWeather(`${latitude},${longitude}`).then(
            (currentWeather) => {
              setWeatherData(currentWeather);
              const weatherCondition = currentWeather.current.condition.text;
              updateBackground(weatherCondition, setBackground);
            }
          );
        },
        (error) => {
          console.error(
            "An error occurred while retrieving location information:",
            error
          );
          // If geolocation fails or permission is denied, fetch weather data for Adana as the default city
          fetchCurrentWeather("37.0,35.3213").then(
            // Adana's approximate coordinates
            (currentWeather) => {
              setWeatherData(currentWeather);
              const weatherCondition = currentWeather.current.condition.text;
              updateBackground(weatherCondition, setBackground);
            }
          );
        }
      );
    }
  }, [selectedCity, setBackground]); // Rerun the effect when selectedCity or setBackground function changes

  const updateBackground = (
    weather: string,
    setBackground: (background: string) => void
  ) => {
    // Function to update background based on weather condition
    let background: string;
    switch (weather) {
      // Set background image based on the weather condition
      case "Partly cloudy":
        background = "/static/partlycloudly.jpg";
        break;
      case "Sunny":
        background = "/static/sunny.jpg";
        break;
      case "Fog":
        background = "/static/mist.jpg";
        break;
      case "Overcast":
        background = "/static/overcast.jpg";
        break;
      case "Clean":
        background = "/static/clean.jpg";
        break;
      default:
        background = "/static/rainy.jpg";
    }
    setBackground(background); // Set the background state in the parent component
  };

  return (
    <WeatherInfoContainer>
      {weatherData && (
        <>
          <WeatherInfoImg src={weatherData.current.condition.icon} alt="" />
          <WeatherInfoCard>
            <WeatherInfoTitle>{weatherData.location.name}</WeatherInfoTitle>
            <WeatherInfoSubTitle>
              {weatherData.location.country}
            </WeatherInfoSubTitle>
          </WeatherInfoCard>
          <WeatherInfoCard>
            <WeatherInfoTitle>
              {convertTemperature(weatherData.current.temp_c, isCelsius)}
            </WeatherInfoTitle>
            <WeatherInfoSubTitle>Temperature</WeatherInfoSubTitle>
          </WeatherInfoCard>
          <WeatherInfoCard>
            <WeatherInfoTitle>{weatherData.current.humidity}%</WeatherInfoTitle>
            <WeatherInfoSubTitle>Humidity</WeatherInfoSubTitle>
          </WeatherInfoCard>
          <WeatherInfoCard>
            <WeatherInfoTitle>
              {weatherData.current.gust_kph}km/h
            </WeatherInfoTitle>
            <WeatherInfoSubTitle>Wind Speed</WeatherInfoSubTitle>
          </WeatherInfoCard>
        </>
      )}
    </WeatherInfoContainer>
  );
};
