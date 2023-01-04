import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    axios
      //this is the connection url copied from sheet.best
      .get("https://sheet.best/api/sheets/bb184c51-a1ab-434f-99fc-41b915851af3")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
