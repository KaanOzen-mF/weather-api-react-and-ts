import { useTemperature } from "../TemperatureContext";

export default function TemperatureSwitch() {
  const { isCelsius, toggleTemperature } = useTemperature();

  return (
    <div className="switch-container" onClick={toggleTemperature}>
      <div
        className={`switch ${
          isCelsius ? "celsius-active" : "fahrenheit-active"
        }`}
      >
        <span className="temperature-label fahrenheit">C°</span>
        <span className="temperature-label celsius">F°</span>
        <div className="switch-circle"></div>
      </div>
    </div>
  );
}
