import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Atmosphere from "./components/Atmosphere";
import Skys from "./components/Sky";
import { atmospheres, sky } from "./data/data";

function App() {
  const [city, setCity] = useState("Ilorin");
  const [data, setData] = useState();
  const atmospheres = [
    {
      icon1: "/image/humidity.svg",
      title1: "Humidity",
      desc1: data?.current?.humidity + "%",

      icon2: "/image/uv-index.svg",
      title2: "Uv Index",
      desc2: data?.current?.uv_index + " out of 10",
    },
    {
      icon1: "/image/sunset.svg",
      title1: "Sunset",
      desc1: "7;50 pm",

      icon2: "/image/sunrise.svg",
      title2: "Sunrise",
      desc2: "6:35am",
    },
  ];
  const key = "a13b33931f1fea30c1c867c34d203957";
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${city}`;
  // console.log(city);
  const fetchWeather = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  };
  console.log(data);
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="name">{data?.location?.name}</h1>
        <div className="inputt">
          <form onSubmit={fetchWeather}>
            <input
              placeholder="Enter city name...."
              type="name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>

          <img className="search-icon" src="/public/image/search.svg" />
        </div>
      </header>
      <div className="sky">
        <img className="sun" src={data?.current?.weather_icons[0]} />
        <p className="number">
          {data?.current?.temperature}
          <sup>o</sup>
        </p>

        <div className="location">
          <div className="place">
            {data?.location?.name},{data?.location?.region}
          </div>
          <div className="right">
            <div className="time">{data?.location?.localtime}</div>
            <div>Sunset time, Monday{}</div>
          </div>
        </div>
      </div>
      <div className="temperature-readings">
        <div>
          <div className="section">
            {atmospheres.map((atmosphere, index) => (
              <Atmosphere key={index} {...atmosphere} />
            ))}
          </div>
          <div className="section-two">
            <div className="upper">
              <p>Monthly Rainfall</p>
              <p>This Year</p>
            </div>
            <div className="lower">
              <p>45mm</p>
              <p>+17%</p>
            </div>
          </div>
        </div>

        <div className="section-three">
          <p className="weather-condition">Temperature . Precipitation .Wind</p>

          <div className="week-weather">
            {sky.map((sky, index) => (
              <Skys
                key={index}
                title={sky.title}
                icon={sky.icon}
                desc={sky.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
