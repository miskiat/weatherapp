import axios from "axios";
import { useState } from "react";
import "./App.css";
import Atmosphere from "./components/Atmosphere";
import Skys from "./components/Sky";
import { atmospheres, sky } from "./data/data";

function App() {
  const [city, setCity] = useState("");
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=ea0882e898c0bb2a7027b57e21054421`;
  // console.log(city);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => console.log(res));
  };
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="name">Ilorin</h1>
        <div className="inputt">
          <form onSubmit={handleSubmit}>
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
          13
          <sup>o</sup>
        </p>

        <div className="location">
          <div className="place">Ilorin,Kwara</div>
          <div className="right">
            <div className="time">7:00 PM</div>
            <div>Sunset time, Mondayyyyyyy</div>
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
