import React, { useState } from "react";
import { fetchCurrentWeather } from "../../utils/fetchWeather";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Modal from "../Modal";
import CityCard from "./CityCard";
import AddCityCard from "./AddCityCard";
import { AddCityInput, CitySlider, CitySwiper } from "../styles.module";

type CityWeather = {
  name: string;
  forecast: {
    forecastday: [
      {
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
};

const CityWeather: React.FC = () => {
  const [cities, setCities] = useState<CityWeather[]>(() => {
    const savedCities = localStorage.getItem("cities");
    return savedCities ? JSON.parse(savedCities) : [];
  });
  const [newCityName, setNewCityName] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const closeAddCityModal = () => setIsAdding(false);

  const addCity = async (cityName: string) => {
    const weatherData = await fetchCurrentWeather(cityName);
    if (weatherData) {
      const updatedCities = [
        ...cities,
        {
          name: weatherData.location.name,
          forecast: weatherData.forecast,
        },
      ];
      setCities(updatedCities);
      localStorage.setItem("cities", JSON.stringify(updatedCities));
      setNewCityName("");
      setIsAdding(false);
    }
  };

  const removeCity = (cityName: string) => {
    const updatedCities = cities.filter((city) => city.name !== cityName);
    setCities(updatedCities);
    localStorage.setItem("cities", JSON.stringify(updatedCities));
  };

  return (
    <>
      <Modal
        show={isAdding}
        onClose={closeAddCityModal}
        onAddCity={() => addCity(newCityName)}
      >
        <div>
          <AddCityInput
            type="text"
            value={newCityName}
            onChange={(e) => setNewCityName(e.target.value)}
            placeholder="Enter city name"
            onKeyDown={(e) => e.key === "Enter" && addCity(newCityName)}
            className="addCityInput"
          />
        </div>
      </Modal>
      <CitySwiper
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          300: { slidesPerView: 2, spaceBetween: 10 },
          400: { slidesPerView: 2, spaceBetween: 1 },
          500: { slidesPerView: 2, spaceBetween: 10 },
          600: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1200: { slidesPerView: 4 },
          2000: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <CitySlider>
            <AddCityCard onAddClick={() => setIsAdding(true)} />
          </CitySlider>
        </SwiperSlide>
        {cities.map((cityWeather, index) => (
          <SwiperSlide key={index}>
            <CitySlider>
              <CityCard
                cityWeather={cityWeather}
                onRemove={() => removeCity(cityWeather.name)}
              />
            </CitySlider>
          </SwiperSlide>
        ))}
      </CitySwiper>
    </>
  );
};

export default CityWeather;
