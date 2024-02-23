export const convertTemperature = (temp: number, isCelsius: boolean) => {
  return isCelsius
    ? `${temp.toFixed()}°C`
    : `${((temp * 9) / 5 + 32).toFixed()}°F`;
};
