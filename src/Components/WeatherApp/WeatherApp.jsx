import "./WeatherApp.css";

// Icons
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { MdCloudQueue } from "react-icons/md";
import { BsCloudDrizzle } from "react-icons/bs";
import { GiHeavyRain } from "react-icons/gi";
import { BsSnow2 } from "react-icons/bs";
import { RiCloudWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search..." />
        <div className="search-icon">
          <BsSearch />
        </div>
      </div>
      <div className="weather-image">
        <MdCloudQueue />
      </div>
      <div className="weather-temp">24C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <WiHumidity />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <RiCloudWindyLine />
          <div className="data">
            <div className="humidity-percent">18 km/hour</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
