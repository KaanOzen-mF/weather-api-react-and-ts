import "./App.css";
import DisplayCityWeather from "./components/DisplayCityWeather";
import { DisplayWeather } from "./components/DisplayWeather";
import { WeatherNavBar } from "./components/WeatherNavBar";

function App() {
  return (
    <>
      <WeatherNavBar />
      <DisplayWeather />
      <DisplayCityWeather />
    </>
  );
}

export default App;
