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
      <div className="section-one">
        {atmospheres.map((atmosphere, index) => (
          <Atmosphere
            key={index}
            icon={atmosphere.icon}
            title={atmosphere.title}
            desc={atmosphere.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
