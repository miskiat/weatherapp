import "./App.css";

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
      <section>
        <div>
          <img />
          <p>Humidity</p>
          <p>29%</p>
        </div>
        <div>
          <img />
          <p>Uv Index</p>
          <p>0 out of 10</p>
        </div>
        <div>
          <img />
          <p>Sunset</p>
          <p>7;50 pm</p>
        </div>
        <div>
          <img />
          <p>Uv Index</p>
          <p>0 out of 10</p>
        </div>
      </section>
    </div>
  );
}

export default App;
