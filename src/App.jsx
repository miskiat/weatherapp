import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Atmosphere from "./components/Atmosphere";
import Skys from "./components/Sky";
import { atmospheres, sky } from "./data/data";

function App() {
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`;
  // console.log(city);
  const fetchWeather = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => console.log(res));
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="name">Ikeja</h1>
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
        <img className="sun" src="/public/Image/sun-fill.svg" />
        <p className="number">
          14
          <sup>o</sup>
        </p>

        <div className="location">
          <div className="place">Ikeja,Lagos</div>
          <div className="right">
            <div className="time">8:00 AM</div>
            <div>Sunset time, Monday</div>
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
