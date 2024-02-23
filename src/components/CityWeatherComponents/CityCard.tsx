import { FaX } from "react-icons/fa6";
import { useTemperature } from "../TemperatureContext";

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

const CityCard: React.FC<{
  cityWeather: CityWeather;
  onRemove: () => void;
}> = ({ cityWeather, onRemove }) => {
  const { isCelsius } = useTemperature();

  const maxTemp = isCelsius
    ? cityWeather.forecast.forecastday[0].day.maxtemp_c
    : (cityWeather.forecast.forecastday[0].day.maxtemp_c * 9) / 5 + 32;
  const minTemp = isCelsius
    ? cityWeather.forecast.forecastday[0].day.mintemp_c
    : (cityWeather.forecast.forecastday[0].day.mintemp_c * 9) / 5 + 32;

  return (
    <div className="city-card">
      <p className="cityWeatherName">{cityWeather.name}</p>
      <p className="cityWeatherDegree">
        {maxTemp.toFixed()}°{isCelsius ? "C" : "F"} / {minTemp.toFixed()}°
        {isCelsius ? "C" : "F"}
      </p>
      <img
        src={cityWeather.forecast.forecastday[0].day.condition.icon}
        alt="Weather Icon"
        className="cityWeatherIconImg"
      />
      <FaX onClick={onRemove} className="removeBtn" />
    </div>
  );
};

export default CityCard;
