import "./WeatherApp.css";
import MainPage from "./mainPage";

// Icons
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import NotFound from "./notFound";

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
    setWData(data);
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") search();
  };

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
      {w_data.cod === "404" ? <NotFound /> : <MainPage w_data={w_data} />}
    </div>
  );
};

export default WeatherApp;
