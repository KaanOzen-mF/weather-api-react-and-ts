// Importing the SearchBar component, styled NavbarWrapper, and TemperatureSwitch component
import SearchBar from "./SearchBar";
import { NavbarWrapper } from "../styles.module";
import TemperatureSwitch from "./TemperatureSwitch";

// Defining the interface for the WeatherNavBarProps which requires a function that takes a city name as argument
interface WeatherNavBarProps {
  onCitySelect: (city: string) => void;
}

// The WeatherNavBar functional component which accepts props of type WeatherNavBarProps
export const WeatherNavBar = ({ onCitySelect }: WeatherNavBarProps) => {
  // The returned JSX includes the NavbarWrapper styled component containing the SearchBar and TemperatureSwitch
  return (
    <NavbarWrapper>
      {/* SearchBar component which is passed the onCitySelect function to lift the state up when a city is selected */}
      <SearchBar onCitySelect={onCitySelect} />
      {/* TemperatureSwitch component which allows the user to switch between Celsius and Fahrenheit */}
      <TemperatureSwitch />
    </NavbarWrapper>
  );
};
