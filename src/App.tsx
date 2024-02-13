import "./App.css";
import DisplayCityWeather from "./components/DisplayCityWeather";
import { DisplayWeather } from "./components/DisplayWeather";
import DisplayForecastWeather from "./components/DisplayForecastWeather";
import { WeatherNavBar } from "./components/WeatherNavBar";
import WeatherGraphs from "./components/WeatherGraphs";

function App() {
  return (
    <>
      <WeatherNavBar />
      <div className="weatherMainPageContainer">
        <div className="weatherMainPageLeftContainer">
          <DisplayWeather />
          <WeatherGraphs />
        </div>
        <div className="weatherMainPageRightContainer">
          <DisplayForecastWeather />
          <DisplayCityWeather />
        </div>
      </div>
    </>
  );
}

export default App;
