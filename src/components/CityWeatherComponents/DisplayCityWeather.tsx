import CityWeather from "./CityWeather";
import { CityWeatherWrapper } from "../styles.module";

export default function DisplayCityWeather() {
  return (
    <CityWeatherWrapper>
      <CityWeather />
    </CityWeatherWrapper>
  );
}
