import { WeatherWrapper } from "../styles.module";
import { Weather } from "./Weather";
import WeatherDate from "./WeatherDate";
import { WeatherInfoCard } from "./WeatherInfoCard";

interface DisplayWeatherProps {
  setBackground: (background: string) => void;
  selectedCity: string;
}

export const DisplayWeather: React.FC<DisplayWeatherProps> = ({
  setBackground,
  selectedCity,
}) => {
  return (
    <WeatherWrapper>
      <WeatherDate />
      <Weather setBackground={setBackground} selectedCity={selectedCity} />
      <WeatherInfoCard selectedCity={selectedCity} />
    </WeatherWrapper>
  );
};
