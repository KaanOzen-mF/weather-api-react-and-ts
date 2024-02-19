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

const fetchForecastWeather = async (query: string, days: number = 3) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: query,
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

const fetchCitySuggestions = async (query: string): Promise<any[]> => {
  if (!query) return [];
  try {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/search.json",
      params: { q: query },
      headers: {
        "X-RapidAPI-Key": "b12886698dmsh2a39c211cc8b4aep12a465jsn115794388fb5",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data.map((item: any) => ({
      name: item.name,
      region: item.region,
      country: item.country,
    }));
  } catch (error) {
    console.error("Fetching city suggestions failed:", error);
    return [];
  }
};

export { fetchCurrentWeather, fetchForecastWeather, fetchCitySuggestions };
