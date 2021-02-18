import "./App.css";
import Form from "./components/form/Form";
import shapeSvg from "./assets/shape.svg";
import manSvg from "./assets/man.svg";

function App() {
  return (
    <div className="App">
      <img src={shapeSvg} className="shape-svg" alt="shape" />
      <img src={manSvg} className="man-svg" alt="man" />
      <Form label="login" />
    </div>
  );
}

export default App;
