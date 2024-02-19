import React, { useState } from "react";
import { fetchCurrentWeather } from "../utils/fetchWeather";
import { useTemperature } from "./TemperatureContext";
import { FaX } from "react-icons/fa6";

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

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button className="modalCloseBtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const CityCard: React.FC<{
  cityWeather: CityWeather;
  onRemove: () => void;
}> = ({ cityWeather, onRemove }) => {
  const { isCelsius } = useTemperature();

  const maxTemp = isCelsius
    ? cityWeather.forecast.forecastday[0].day.maxtemp_c
    : (cityWeather.forecast.forecastday[0].day.maxtemp_c * 9) / 5 + 32;
  const minTemp = isCelsius
    ? cityWeather.forecast.forecastday[0].day.mintemp_c
    : (cityWeather.forecast.forecastday[0].day.mintemp_c * 9) / 5 + 32;

  return (
    <div className="city-card">
      <h2>{cityWeather.name}</h2>
      <p>
        {maxTemp.toFixed()}°{isCelsius ? "C" : "F"} / {minTemp.toFixed()}°
        {isCelsius ? "C" : "F"}
      </p>
      <img
        src={cityWeather.forecast.forecastday[0].day.condition.icon}
        alt="Weather Icon"
      />
      <FaX onClick={onRemove} className="removeBtn" />
      {/* Remove butonu eklendi */}
    </div>
  );
};

const AddCityCard: React.FC<{ onAddClick: () => void }> = ({ onAddClick }) => {
  return (
    <div className="add-city-card" onClick={onAddClick}>
      <div className="add-city-content">
        <span className="plus-icon">+</span>
        <span>Add City</span>
      </div>
    </div>
  );
};

const WeatherForecast: React.FC = () => {
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
      localStorage.setItem("cities", JSON.stringify(updatedCities)); // Save to local storage
      setNewCityName(""); // Clear the input after adding a city
      setIsAdding(false); // Close the modal
    }
  };

  const removeCity = (cityName: string) => {
    const updatedCities = cities.filter((city) => city.name !== cityName);
    setCities(updatedCities);
    localStorage.setItem("cities", JSON.stringify(updatedCities)); // Güncellenen şehir listesini localStorage'a kaydet
  };
  return (
    <div className="weather-forecast">
      <Modal show={isAdding} onClose={closeAddCityModal}>
        <div className="add-city-modal">
          <input
            type="text"
            value={newCityName}
            onChange={(e) => setNewCityName(e.target.value)}
            placeholder="Enter city name"
            onKeyDown={(e) => e.key === "Enter" && addCity(newCityName)}
            className="addCityInput"
          />
          <button
            onClick={() => addCity(newCityName)}
            className="addCityButton"
          >
            Add
          </button>
        </div>
      </Modal>

      <div className="city-list">
        <AddCityCard onAddClick={() => setIsAdding(true)} />

        {cities.map((cityWeather, index) => (
          <CityCard
            key={index}
            cityWeather={cityWeather}
            onRemove={() => removeCity(cityWeather.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
