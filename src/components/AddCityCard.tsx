import React, { useState } from "react";
import axios from "axios";

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

interface CityCardProps {
  cityWeather: CityWeather;
}

const CityCard: React.FC<CityCardProps> = ({ cityWeather }) => (
  <div className="city-card">
    <h2>{cityWeather.name}</h2>
    <p>
      {cityWeather.forecast.forecastday[0].day.maxtemp_c}°C /{" "}
      {cityWeather.forecast.forecastday[0].day.mintemp_c}°C
    </p>
    <img src={cityWeather.forecast.forecastday[0].day.condition.icon} alt="" />
    {/* Additional weather info can be added here */}
  </div>
);

const AddCityInput: React.FC<{
  onAddCity: (cityName: string) => Promise<void>;
}> = ({ onAddCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = async () => {
    if (inputValue.trim()) {
      await onAddCity(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type city name and press enter"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

const WeatherForecast: React.FC = () => {
  const [cities, setCities] = useState<CityWeather[]>([]);
  const [addingCity, setAddingCity] = useState(false);

  const fetchCurrentWeather = async (query: string) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: query }, // Fixed here
      headers: {
        "X-RapidAPI-Key": "b12886698dmsh2a39c211cc8b4aep12a465jsn115794388fb5",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data; // Make sure to handle and parse this data correctly
    } catch (error) {
      console.error(error);
    }
  };

  const addCity = async (cityName: string) => {
    const weatherData = await fetchCurrentWeather(cityName);
    if (weatherData) {
      const newCityWeather: CityWeather = {
        name: weatherData.location.name,
        forecast: weatherData.forecast, // Adjusted to match the type
      };
      setCities([...cities, newCityWeather]);
    }
    setAddingCity(false);
  };

  return (
    <div className="weather-forecast">
      <button onClick={() => setAddingCity(!addingCity)}>+ Add City</button>
      {addingCity && <AddCityInput onAddCity={addCity} />}
      <div className="city-list">
        {cities.map((cityWeather, index) => (
          <CityCard key={index} cityWeather={cityWeather} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
