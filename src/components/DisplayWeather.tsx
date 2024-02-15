import { WeatherWrapper } from "./styles.module";
import { Weather } from "./Weather";
import WeatherDate from "./WeatherDate";
import WeatherInfoCard from "./WeatherInfoCard";

interface DisplayWeatherProps {
  setBackground: (background: string) => void;
}

export const DisplayWeather: React.FC<DisplayWeatherProps> = ({
  setBackground,
}) => {
  return (
    <WeatherWrapper>
      <WeatherDate />
      <Weather setBackground={setBackground} />
      <WeatherInfoCard />
    </WeatherWrapper>
  );
};
