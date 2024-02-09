import axios from "axios";

const fetchCurrentWeather = async (query: string) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: query },
    headers: {
      "X-RapidAPI-Key": "b12886698dmsh2a39c211cc8b4aep12a465jsn115794388fb5",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchForecastWeather = async (
  latitude: number,
  longitude: number,
  days: number = 3
) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: `${latitude},${longitude}`,
      days: days,
    },
    headers: {
      "X-RapidAPI-Key": "b12886698dmsh2a39c211cc8b4aep12a465jsn115794388fb5",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchCurrentWeather, fetchForecastWeather };
