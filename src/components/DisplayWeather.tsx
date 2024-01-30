import { WeatherWrapper } from "./styles.module";
import Weather from "./Weather";
import WeatherDate from "./WeatherDate";
import WeatherInfoCard from "./WeatherInfoCard";

export const DisplayWeather = () => {
  return (
    <WeatherWrapper>
      <WeatherDate />
      <Weather />
      <WeatherInfoCard />
    </WeatherWrapper>
  );
};
