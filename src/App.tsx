import "./App.css";
import DisplayCityWeather from "./components/CityWeatherComponents/DisplayCityWeather";
import { DisplayWeather } from "./components/WeatherComponents/DisplayWeather";
import DisplayForecastWeather from "./components/ForecastWeatherComponents/DisplayForecastWeather";
import { WeatherNavBar } from "./components/WeatherNavbarComponents/WeatherNavBar";
import { WeatherGraphs } from "./components/WeatherGraphsComponents/WeatherGraphs";
import { useState, useEffect } from "react";
import { TemperatureProvider } from "./components/TemperatureContext";

const LoadingScreen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    Loading...
  </div>
);
function App() {
  const [background, setBackground] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <TemperatureProvider>
      <div
        className="mainPage"
        style={{ backgroundImage: `url(${background})` }}
      >
        <WeatherNavBar onCitySelect={handleCitySelect} />
        <div className="weatherMainPageContainer">
          <div className="weatherMainPageLeftContainer">
            <DisplayWeather
              setBackground={setBackground}
              selectedCity={selectedCity}
            />
            <WeatherGraphs selectedCity={selectedCity} />
          </div>
          <div className="weatherMainPageRightContainer">
            <DisplayForecastWeather selectedCity={selectedCity} />

            <DisplayCityWeather />
          </div>
        </div>
      </div>
    </TemperatureProvider>
  );
}

export default App;
