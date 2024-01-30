import { useState } from "react";

export default function TemperatureSwitch() {
  const [isCelsius, setIsCelsius] = useState(true); // Initialize to Celsius

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius); // Toggle the temperature unit
  };

  console.log(isCelsius);

  return (
    <div className="switch-container" onClick={toggleTemperature}>
      <div
        className={`switch ${
          isCelsius ? "celsius-active" : "fahrenheit-active"
        }`}
      >
        <span className="temperature-label fahrenheit">F°</span>
        <span className="temperature-label celsius">C°</span>
        <div className="switch-circle"></div>
      </div>
    </div>
  );
}
