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
import { useEffect, useState } from "react";

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

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search..." />
        <div className="search-icon" onClick={search}>
          <BsSearch />
        </div>
      </div>
      <div className="weather-image">
        <MdCloudQueue />
      </div>
      <div className="weather-temp">{w_data.main.temp.toFixed(0)}°</div>
      <div className="weather-location">{w_data.name}</div>
      <div className="data-container">
        <div className="element">
          <WiHumidity />
          <div className="data">
            <div className="humidity-percent">{w_data.main.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <RiCloudWindyLine />
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
