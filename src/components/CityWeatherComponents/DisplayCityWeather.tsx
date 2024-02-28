// Importing the CityWeather component and styled component for layout
import CityWeather from "./CityWeather";
import { CityWeatherWrapper } from "../styles.module";

// The DisplayCityWeather functional component acts as a container for CityWeather
export default function DisplayCityWeather() {
  // Rendering the CityWeather component within a styled wrapper for consistent styling
  return (
    <CityWeatherWrapper>
      <CityWeather />
    </CityWeatherWrapper>
  );
}
