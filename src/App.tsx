import "./App.css";
import DisplayCityWeather from "./components/DisplayCityWeather";
import { DisplayWeather } from "./components/DisplayWeather";
import DisplayForecastWeather from "./components/DisplayForecastWeather";
import { WeatherNavBar } from "./components/WeatherNavBar";

function App() {
  return (
    <>
      <WeatherNavBar />
      <DisplayWeather />
      <DisplayCityWeather />
      <DisplayForecastWeather />
    </>
  );
}

export default App;
