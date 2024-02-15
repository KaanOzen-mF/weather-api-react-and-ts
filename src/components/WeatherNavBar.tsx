import SearchBar from "./SearchBar";
import { NavbarWrapper } from "./styles.module";
import TemperatureSwitch from "./TemperatureSwitch";

export const WeatherNavBar = () => {
  return (
    <NavbarWrapper>
      <SearchBar />
      <TemperatureSwitch />
    </NavbarWrapper>
  );
};
