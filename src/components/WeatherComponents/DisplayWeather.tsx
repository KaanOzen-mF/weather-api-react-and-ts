import { WeatherWrapper } from "../styles.module";
import { Weather } from "./Weather";
import WeatherDate from "./WeatherDate";
import { WeatherInfoCard } from "./WeatherInfoCard";

// Props definition for DisplayWeather component
interface DisplayWeatherProps {
  setBackground: (background: string) => void; // Function to set the background based on weather conditions
  selectedCity: string; // The city selected by the user
}

// DisplayWeather component to render weather-related components
export const DisplayWeather: React.FC<DisplayWeatherProps> = ({
  setBackground,
  selectedCity,
}) => {
  return (
    <WeatherWrapper>
      {/* Component to display the current date */}
      <WeatherDate />
      {/* Weather component that displays current weather data and updates the background */}
      <Weather setBackground={setBackground} selectedCity={selectedCity} />
      {/* Component to display detailed weather information for the selected city */}
      <WeatherInfoCard selectedCity={selectedCity} />
    </WeatherWrapper>
  );
};
