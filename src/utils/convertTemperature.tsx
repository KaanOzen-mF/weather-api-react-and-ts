// Function to convert temperature from Celsius to Fahrenheit or vice versa
export const convertTemperature = (temp: number, isCelsius: boolean) => {
  return isCelsius
    ? `${temp.toFixed()}°C` // Return temperature in Celsius if isCelsius is true
    : `${((temp * 9) / 5 + 32).toFixed()}°F`; // Convert to Fahrenheit and return if isCelsius is false
};
