import { useState, useEffect } from "react";
import "./App.css";
import DisplayCityWeather from "./components/CityWeatherComponents/DisplayCityWeather";
import { DisplayWeather } from "./components/WeatherComponents/DisplayWeather";
import DisplayForecastWeather from "./components/ForecastWeatherComponents/DisplayForecastWeather";
import { WeatherNavBar } from "./components/WeatherNavbarComponents/WeatherNavBar";
import { WeatherGraphs } from "./components/WeatherGraphsComponents/WeatherGraphs";
import { TemperatureProvider } from "./components/TemperatureContext";
import {
  MainPage,
  WeatherMainPageContainer,
  WeatherMainPageLeftContainer,
  WeatherMainPageRightContainer,
  LoadingScreen,
} from "./components/styles.module";

function App() {
  // State to manage the background image based on weather conditions
  const [background, setBackground] = useState<string>("");

  // State to manage the currently selected city for weather details
  const [selectedCity, setSelectedCity] = useState<string>("");

  // State to manage the loading state of the application
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle city selection from the navbar
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  // Effect to simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  // Render loading screen if the app is in the loading state
  if (isLoading) {
    return <LoadingScreen>Loading...</LoadingScreen>;
  }

  // Main app structure wrapped in a TemperatureProvider for global state management
  return (
    <TemperatureProvider>
      <MainPage style={{ backgroundImage: `url(${background})` }}>
        <WeatherNavBar onCitySelect={handleCitySelect} />
        <WeatherMainPageContainer>
          <WeatherMainPageLeftContainer>
            <DisplayWeather
              setBackground={setBackground}
              selectedCity={selectedCity}
            />
            <WeatherGraphs selectedCity={selectedCity} />
          </WeatherMainPageLeftContainer>
          <WeatherMainPageRightContainer>
            <DisplayForecastWeather selectedCity={selectedCity} />
            <DisplayCityWeather />
          </WeatherMainPageRightContainer>
        </WeatherMainPageContainer>
      </MainPage>
    </TemperatureProvider>
  );
}

export default App;
