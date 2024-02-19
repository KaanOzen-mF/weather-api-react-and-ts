import SearchBar from "./SearchBar";
import { NavbarWrapper } from "./styles.module";
import TemperatureSwitch from "./TemperatureSwitch";

interface WeatherNavBarProps {
  onCitySelect: (city: string) => void;
}

export const WeatherNavBar = ({ onCitySelect }: WeatherNavBarProps) => {
  return (
    <NavbarWrapper>
      <SearchBar onCitySelect={onCitySelect} />
      <TemperatureSwitch />
    </NavbarWrapper>
  );
};
