import axios from "axios";

// Cache to store weather data and reduce API calls
const weatherCache = new Map();

// Function to fetch current weather data for a given location query
const fetchCurrentWeather = async (query: string) => {
  const cacheKey = `current-${query}`;
  // Check if data is already cached to avoid redundant API calls
  if (weatherCache.has(cacheKey)) {
    return weatherCache.get(cacheKey);
  }

  // API request options
  const options = {
    method: "GET",
    url: `https://${import.meta.env.VITE_RAPIDAPI_HOST}/forecast.json`,
    params: { q: query },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };

  // Make the API request and cache the result
  try {
    const response = await axios.request(options);
    weatherCache.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Function to fetch forecast weather data for a given location and number of days
const fetchForecastWeather = async (query: string, days: number = 3) => {
  const cacheKey = `forecast-${query}-${days}`;
  if (weatherCache.has(cacheKey)) {
    return weatherCache.get(cacheKey);
  }

  const options = {
    method: "GET",
    url: `https://${import.meta.env.VITE_RAPIDAPI_HOST}/forecast.json`,
    params: { q: query, days: days },
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

// Function to fetch city suggestions based on a query string
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
