import { FaCloud } from "react-icons/fa";

export default function Weather() {
  return (
    <div className="weatherInfoContainer">
      <FaCloud size={64} />
      <div className="weatherInfoCard">
        <p className="weatherInfoTitle">Konya</p>
        <p className="weatherInfoSubTitle">Turkey</p>
      </div>
      <div className="weatherInfoCard">
        <p className="weatherInfoTitle">0°</p>
        <p className="weatherInfoSubTitle">Temperature</p>
      </div>
      <div className="weatherInfoCard">
        <p className="weatherInfoTitle">25%</p>
        <p className="weatherInfoSubTitle">Humidity</p>
      </div>
      <div className="weatherInfoCard">
        <p className="weatherInfoTitle">13km/h</p>
        <p className="weatherInfoSubTitle">Wind Speed</p>
      </div>
    </div>
  );
}
