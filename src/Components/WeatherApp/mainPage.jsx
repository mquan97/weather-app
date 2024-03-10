import "./WeatherApp.css";

import { MdOutlineClear } from "react-icons/md";
import { MdCloudQueue } from "react-icons/md";
import { BsCloudDrizzle } from "react-icons/bs";
import { GiHeavyRain } from "react-icons/gi";
import { BsSnow2 } from "react-icons/bs";
import { RiCloudWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { FaCircle } from "react-icons/fa";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { RiThunderstormsLine } from "react-icons/ri";
import { RiMistFill } from "react-icons/ri";
import { LuCloudy } from "react-icons/lu";

const MainPage = ({ w_data }) => {
  const weatherCode = w_data?.weather[0].icon;

  return (
    <>
      <div className="weather-image">
        {["01d", "01n"].includes(weatherCode) ? (
          <FaCircle className="weather-icon" />
        ) : ["02d", "02n"].includes(weatherCode) ? (
          <IoPartlySunnyOutline className="weather-icon" />
        ) : ["03d", "03n"].includes(weatherCode) ? (
          <MdCloudQueue className="weather-icon" />
        ) : ["04d", "04n"].includes(weatherCode) ? (
          <LuCloudy className="weather-icon" />
        ) : ["09d", "09n"].includes(weatherCode) ? (
          <GiHeavyRain className="weather-icon" />
        ) : ["10d", "10n"].includes(weatherCode) ? (
          <BsCloudDrizzle className="weather-icon" />
        ) : ["11d", "11n"].includes(weatherCode) ? (
          <RiThunderstormsLine className="weather-icon" />
        ) : ["13d", "13n"].includes(weatherCode) ? (
          <BsSnow2 className="weather-icon" />
        ) : ["50d", "50n"].includes(weatherCode) ? (
          <RiMistFill className="weather-icon" />
        ) : (
          <MdCloudQueue className="weather-icon" />
        )}
      </div>
      <div className="weather-temp">{w_data.main.temp.toFixed(0)}°</div>
      <div className="weather-location">{w_data.name}</div>
      <div className="data-container">
        <div className="element">
          <WiHumidity style={{ fontSize: 35 }} />
          <div className="data">
            <div className="humidity-percent">{w_data.main.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <RiCloudWindyLine style={{ fontSize: 35 }} />
          <div className="data">
            <div className="wind-rate">{w_data.wind.speed} km/hour</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
