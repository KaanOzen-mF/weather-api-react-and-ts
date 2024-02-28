// Importing the ForecastWeather component and styled component for styling
import { ForecastWeather } from "./ForecastWeather";
import { ForecastWeatherWrapper } from "../styles.module";

// Interface for the props expected by the DisplayForecastWeather component
interface DisplayForecastWeatherProps {
  selectedCity: string; //The city for which the forecast weather will be displayed
}

// The DisplayForecastWeather component is responsible for wrapping the ForecastWeather component
// and passing the selectedCity prop to it.
export default function DisplayForecastWeather({
  selectedCity,
}: DisplayForecastWeatherProps) {
  return (
    // The ForecastWeatherWrapper styled component is used here to apply consistent styling
    // to the ForecastWeather component, which actually displays the forecast.
    <ForecastWeatherWrapper>
      {/* The ForecastWeather component is passed the selectedCity prop to fetch and display
          the weather forecast for that specific city. */}
      <ForecastWeather selectedCity={selectedCity} />
    </ForecastWeatherWrapper>
  );
}
