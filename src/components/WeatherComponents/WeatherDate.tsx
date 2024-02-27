import { DateContainer, DateText } from "../styles.module";

// WeatherDate component to display the current date
export default function WeatherDate() {
  const dateObject = new Date(); // Create a new date object to get the current date

  // Convert the date to UTC string and then format it by taking only the first 4 parts (Day, Date, Month, Year)
  let date = dateObject.toUTCString();
  date = date.split(" ").slice(0, 4).join(" ");
  return (
    <DateContainer>
      <DateText>{date}</DateText>
    </DateContainer>
  );
}
