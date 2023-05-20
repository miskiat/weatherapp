import "./App.css";
import Atmosphere from "./components/Atmosphere";
import { atmospheres } from "./data/data";

function App() {
  return (
    <div>
      <header>
        <h1 className="name">Ryan</h1>
        <input
          className="input"
          placeholder="Enter city name... "
          type="name"
        />
      </header>
      <div className="sky">
        <img className="sun" src="/public/Image/sun-fill.svg" />
        <h1 className="number">13 o</h1>
        <div id="container"></div>
        <div className="location">
          <div className="place">Ilorin,Kwara</div>
          <div className="right">
            <div className="time">7:00 PM</div>
            <div>Sunset time, Monday</div>
          </div>
        </div>
      </div>
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
      <div className="section-three">
        <div>Temperature . Precipitation .Wind</div>

        <div>
          <p>MON</p>
          <img src="/public/image/cloud-rain-bold-svgrepo-com.svg" />
          <p>12</p>
          <p>TUE</p>
          <img src="/public/image/clouds-1274-svgrepo-com.svg" />
          <p>13</p>
          <p>WED</p>
          <img src="/public/image/clouds-1277-svgrepo-com.svg" />
          <p>9</p>
          <p>THU</p>
          <img />
          <p>8</p>
          <p>FRI</p>
          <img />
          <p>7</p>
        </div>
      </div>
    </div>
  );
}

export default App;
