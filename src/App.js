import "./App.css";
import Form from "./components/form/Form";
import iconShape from "./assets/shape.svg";
import iconMan from "./assets/man.svg";
import iconOne from "./assets/icon1.svg";
import iconPlus from "./assets/icon2.svg";
import iconCalendar from "./assets/iconCalendar.svg";
import iconMountain from "./assets/iconMountain.svg";
import iconWeather from "./assets/iconWeather.svg";

function App() {
  return (
    <div className="App">
      <img src={iconShape} className="svg shape-svg" alt="shape" />
      <img src={iconMan} className="svg man-svg" alt="man" />
      <img src={iconOne} className="svg one-svg first" alt="man" />
      <img src={iconOne} className="svg one-svg second" alt="man" />
      <img src={iconPlus} className="svg mobile plus-svg first" alt="man" />
      <img src={iconPlus} className="svg mobile plus-svg second" alt="man" />
      <img
        src={iconCalendar}
        className="svg mobile bottom-svg calendar-svg"
        alt="man"
      />
      <img
        src={iconMountain}
        className="svg mobile bottom-svg mountain-svg"
        alt="man"
      />
      <img
        src={iconWeather}
        className="svg mobile bottom-svg weather-svg"
        alt="man"
      />
      <Form label="login" btnText="LOG IN" />
    </div>
  );
}

export default App;
