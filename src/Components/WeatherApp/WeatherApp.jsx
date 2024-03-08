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
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { RiThunderstormsLine } from "react-icons/ri";
import { RiMistFill } from "react-icons/ri";
import { LuCloudy } from "react-icons/lu";

const WeatherApp = () => {
  const defaultState = {
    coord: {
      lon: 105.8412,
      lat: 21.0245,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    base: "stations",
    main: {
      temp: 13,
      feels_like: 12.34,
      temp_min: 13,
      temp_max: 13,
      pressure: 1018,
      humidity: 76,
      sea_level: 1018,
      grnd_level: 1017,
    },
    visibility: 10000,
    wind: {
      speed: 1.74,
      deg: 54,
      gust: 2.02,
    },
    clouds: {
      all: 100,
    },
    dt: 1708893666,
    sys: {
      type: 1,
      id: 9308,
      country: "VN",
      sunrise: 1708903217,
      sunset: 1708945167,
    },
    timezone: 25200,
    id: 1581130,
    name: "Hanoi",
    cod: 200,
  };
  let api_key = "677296da301fdcc5d410e99f32247c8b";
  const [w_data, setWData] = useState(defaultState);

  const weatherCode = w_data.weather[0].icon;

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    // const humidity = document.getElementsByClassName("humidity-percent");
    // const wind = document.getElementsByClassName("wind-rate");
    // const temp = document.getElementsByClassName("weather-temp");
    // const location = document.getElementsByClassName("weather-location");
    setWData(data);
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") search();
  };

  console.log("weatherCode", weatherCode);

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search..."
          onKeyDown={(e) => enterSearch(e)}
        />
        <div className="search-icon" onClick={search}>
          <BsSearch />
        </div>
      </div>

      {/* import { BsSearch } from "react-icons/bs";
          import { MdOutlineClear } from "react-icons/md";
          import { MdCloudQueue } from "react-icons/md";
          import { BsCloudDrizzle } from "react-icons/bs";
          import { GiHeavyRain } from "react-icons/gi";
          import { BsSnow2 } from "react-icons/bs";
          import { RiCloudWindyLine } from "react-icons/ri";
          import { WiHumidity } from "react-icons/wi"; */}

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
    </div>
  );
};

export default WeatherApp;
