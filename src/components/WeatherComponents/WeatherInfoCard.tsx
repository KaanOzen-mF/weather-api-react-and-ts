import { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../../utils/fetchWeather";
import { useTemperature } from "../TemperatureContext";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { convertTemperature } from "../../utils/convertTemperature";

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

interface WeatherProps {
  selectedCity: string;
}

export const WeatherInfoCard: React.FC<WeatherProps> = ({ selectedCity }) => {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  const { isCelsius } = useTemperature();

  useEffect(() => {
    if (selectedCity) {
      fetchCurrentWeather(selectedCity).then((currentWeather) => {
        setWeatherData(currentWeather);
      });
    } else {
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
        }
      );
    }
  }, [selectedCity]);

  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      breakpoints={{
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
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 8,
        },
      }}
      className="weatherHourlyCardContainer"
    >
      {weatherData?.forecast.forecastday[0].hour.map((i, k) => (
        <SwiperSlide>
          <div className="weatherHourlyCard" key={k}>
            <p className="weatherCardText">
              {i.time.split(" ")[1].split(":")[0]} am
            </p>
            <img src={i.condition.icon} alt="" className="weatherCardImg" />
            <p className="weatherCardText">
              {convertTemperature(i.temp_c, isCelsius)}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
