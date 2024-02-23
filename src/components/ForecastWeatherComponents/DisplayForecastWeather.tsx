import { ForecastWeather } from "./ForecastWeather";
import { ForecastWeatherWrapper } from "../styles.module";

interface DisplayForecastWeatherProps {
  selectedCity: string;
}

export default function DisplayForecastWeather({
  selectedCity,
}: DisplayForecastWeatherProps) {
  return (
    <ForecastWeatherWrapper>
      <ForecastWeather selectedCity={selectedCity} />
    </ForecastWeatherWrapper>
  );
}
