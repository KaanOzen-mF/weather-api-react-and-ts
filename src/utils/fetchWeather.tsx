import axios from "axios";

const weatherCache = new Map();

const fetchCurrentWeather = async (query: string) => {
  const cacheKey = `current-${query}`;
  if (weatherCache.has(cacheKey)) {
    return weatherCache.get(cacheKey);
  }

  const options = {
    method: "GET",
    url: `https://${import.meta.env.VITE_RAPIDAPI_HOST}/forecast.json`,
    params: { q: query },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    weatherCache.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchForecastWeather = async (query: string, days: number = 3) => {
  const cacheKey = `forecast-${query}-${days}`;
  if (weatherCache.has(cacheKey)) {
    return weatherCache.get(cacheKey);
  }
  const options = {
    method: "GET",
    url: `https://${import.meta.env.VITE_RAPIDAPI_HOST}/forecast.json`,
    params: {
      q: query,
      days: days,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    weatherCache.set(cacheKey, response.data);
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
      url: `https://${import.meta.env.VITE_RAPIDAPI_HOST}/search.json`,
      params: { q: query },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
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
