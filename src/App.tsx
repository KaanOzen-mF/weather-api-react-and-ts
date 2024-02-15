import "./App.css";
import DisplayCityWeather from "./components/DisplayCityWeather";
import { DisplayWeather } from "./components/DisplayWeather";
import DisplayForecastWeather from "./components/DisplayForecastWeather";
import { WeatherNavBar } from "./components/WeatherNavBar";
import WeatherGraphs from "./components/WeatherGraphs";
import { useState } from "react";
import { TemperatureProvider } from "./components/TemperatureContext";

function App() {
  const [background, setBackground] = useState<string>("");

  return (
    <TemperatureProvider>
      <div
        className="mainPage"
        style={{ backgroundImage: `url(${background})` }}
      >
        <WeatherNavBar />
        <div className="weatherMainPageContainer">
          <div className="weatherMainPageLeftContainer">
            <DisplayWeather setBackground={setBackground} />
            <WeatherGraphs />
          </div>
          <div className="weatherMainPageRightContainer">
            <DisplayForecastWeather />
            <DisplayCityWeather />
          </div>
        </div>
      </div>
    </TemperatureProvider>
  );
}

export default App;
