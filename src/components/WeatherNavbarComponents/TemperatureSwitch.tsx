import { useTemperature } from "../TemperatureContext";
import {
  SwitchContainer,
  Switch,
  TemperatureLabel,
  SwitchCircle,
} from "../styles.module";

// This component is responsible for switching between Celsius and Fahrenheit.
export default function TemperatureSwitch() {
  // Hook to access temperature context for the current temperature unit and toggle function.
  const { isCelsius, toggleTemperature } = useTemperature();

  // Render the switch with labels for C° and F°.
  // Clicking the switch container will toggle the temperature unit.
  return (
    <SwitchContainer onClick={toggleTemperature}>
      {/* The switch visual representation. 
          It shows the active temperature unit and allows the user to change it. */}
      <Switch isActive={isCelsius}>
        {/* Label for Celsius. It's highlighted when Celsius is active. */}
        <TemperatureLabel isActive={!isCelsius}>C°</TemperatureLabel>
        {/* Label for Fahrenheit. It's highlighted when Fahrenheit is active. */}
        <TemperatureLabel isActive={isCelsius}>F°</TemperatureLabel>
        {/* A circle that slides to the left or right to visually represent the active temperature unit. */}
        <SwitchCircle isCelsius={isCelsius} />
      </Switch>
    </SwitchContainer>
  );
}
