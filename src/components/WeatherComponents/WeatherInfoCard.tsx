import { useState, useEffect } from "react";

import { useTemperature } from "../TemperatureContext";

import { fetchCurrentWeather } from "../../utils/fetchWeather";
import { convertTemperature } from "../../utils/convertTemperature";

// Importing Swiper styles for the carousel
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Importing styled components for styling
import {
  WeatherCardImg,
  WeatherCardText,
  WeatherHourlyCard,
  WeatherHourlyCardContainer,
} from "../styles.module";

// Interface for typing the weather data received from the API
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

// Props interface for this component
interface WeatherProps {
  selectedCity: string;
}

// WeatherInfoCard component displays hourly weather information for the selected city
export const WeatherInfoCard: React.FC<WeatherProps> = ({ selectedCity }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  // Using the TemperatureContext to determine if the temperature should be displayed in Celsius or Fahrenheit
  const { isCelsius } = useTemperature();

  // Fetch weather data on component mount or when the selected city changes
  useEffect(() => {
    if (selectedCity) {
      // Fetch weather data for the selected city
      fetchCurrentWeather(selectedCity).then((currentWeather) => {
        setWeatherData(currentWeather);
      });
    } else {
      // Use geolocation to fetch weather data for the current location if no city is selected
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          Promise.all([fetchCurrentWeather(`${latitude},${longitude}`)]).then(
            ([currentWeather]) => {
              setWeatherData(currentWeather);
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
            }
          );
        }
      );
    }
  }, [selectedCity]);

  return (
    // Render the weather hourly card carousel
    <WeatherHourlyCardContainer
      grabCursor={true} // Enables grab cursor for the swiper
      pagination={{
        dynamicBullets: true, // Dynamic bullets for the swiper pagination
      }}
      modules={[Pagination]} // Including the Pagination module for swiper
      breakpoints={{
        // Responsive breakpoints for the swiper
        300: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        400: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
        },
        2000: {
          slidesPerView: 8,
        },
      }}
    >
      {weatherData?.forecast.forecastday[0].hour.map((i, k) => (
        <SwiperSlide key={k}>
          <WeatherHourlyCard>
            <WeatherCardText>
              {i.time.split(" ")[1].split(":")[0]} am
            </WeatherCardText>
            <WeatherCardImg src={i.condition.icon} alt="" />
            <WeatherCardText>
              {convertTemperature(i.temp_c, isCelsius)}
            </WeatherCardText>
          </WeatherHourlyCard>
        </SwiperSlide>
      ))}
    </WeatherHourlyCardContainer>
  );
};
