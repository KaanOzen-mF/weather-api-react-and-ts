import ForecastWeather from "./ForecastWeather";
import { ForecastWeatherWrapper } from "./styles.module";

export default function DisplayForecastWeather() {
  return (
    <ForecastWeatherWrapper>
      <ForecastWeather />
    </ForecastWeatherWrapper>
  );
}
