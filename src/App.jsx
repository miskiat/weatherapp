import "./App.css";
import Atmosphere from "./components/Atmosphere";
import Skys from "./components/Sky";
import { atmospheres, sky } from "./data/data";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="name">Ryan</h1>
        <input
          className="input"
          placeholder="Enter city name... "
          type="name"
        />
      </header>
      <div className="sky">
        <img className="sun" src="/public/Image/sun-fill.svg" />

        <span className="number">13</span>
        <span className="number">o</span>

        <div className="location">
          <div className="place">Ilorin,Kwara</div>
          <div className="right">
            <div className="time">7:00 PM</div>
            <div>Sunset time, Monday</div>
          </div>
        </div>
      </div>
      <div className="temperature-readings">
        <div>
          <div className="section">
            {atmospheres.map((atmosphere, index) => (
              <Atmosphere
                key={index}
                icon={atmosphere.icon}
                title={atmosphere.title}
                desc={atmosphere.desc}
              />
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
          <div className="weather-condition">
            Temperature . Precipitation .Wind
          </div>

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
