export default function WeatherDate() {
  const dateObject = new Date();

  let date = dateObject.toUTCString();
  date = date.split(" ").slice(0, 4).join(" ");
  return (
    <div className="dateContainer">
      <p className="dateText">{date}</p>
    </div>
  );
}
