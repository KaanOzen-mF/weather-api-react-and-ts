import "./App.css";
import { DisplayWeather } from "./components/DisplayWeather";
import { WeatherNavBar } from "./components/WeatherNavBar";

function App() {
  return (
    <>
      <WeatherNavBar />
      <DisplayWeather />
    </>
  );
}

export default App;
