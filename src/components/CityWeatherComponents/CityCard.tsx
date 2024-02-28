import { useTemperature } from "../TemperatureContext";
import {
  CityCardWrapper,
  CityWeatherDegree,
  CityWeatherIconImg,
  CityWeatherName,
  RemoveButton,
} from "../styles.module";

// Type definition for the city weather data
type CityWeather = {
  name: string;
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            icon: string;
          };
        };
      }
    ];
  };
};

// CityCard component displays weather information for a single city
const CityCard: React.FC<{
  cityWeather: CityWeather; // Props for the city weather data
  onRemove: () => void; // Callback function to trigger when the remove button is clicked
}> = ({ cityWeather, onRemove }) => {
  const { isCelsius } = useTemperature(); // Accessing the temperature unit from context

  // Convert temperature to the selected unit (Celsius or Fahrenheit)
  const maxTemp = isCelsius
    ? cityWeather.forecast.forecastday[0].day.maxtemp_c
    : (cityWeather.forecast.forecastday[0].day.maxtemp_c * 9) / 5 + 32;

  const minTemp = isCelsius
    ? cityWeather.forecast.forecastday[0].day.mintemp_c
    : (cityWeather.forecast.forecastday[0].day.mintemp_c * 9) / 5 + 32;

  return (
    <CityCardWrapper>
      <CityWeatherName>{cityWeather.name}</CityWeatherName> {/* City name */}
      <CityWeatherDegree>
        {maxTemp.toFixed()}°{isCelsius ? "C" : "F"} / {minTemp.toFixed()}°
        {isCelsius ? "C" : "F"} {/* Displaying the temperature */}
      </CityWeatherDegree>
      <CityWeatherIconImg
        src={cityWeather.forecast.forecastday[0].day.condition.icon}
        alt="Weather Icon" // Weather condition icon
      />
      <RemoveButton onClick={onRemove} />{" "}
      {/* Remove button to delete the city card */}
    </CityCardWrapper>
  );
};

export default CityCard; // Exporting the CityCard component for use in other parts of the application
