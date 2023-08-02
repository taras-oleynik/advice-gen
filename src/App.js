import React, { useState, useEffect } from "react";
import "./App.css";
import icon from "./images/icon-dice.svg";
import { BsFillPauseFill } from "react-icons/bs";

function App() {
  const [advice, setAdvice] = React.useState("");

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.error("Error fetching advice:", error));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="adv-frame">
        <p className="adv-id">ADVICE #{advice.id}</p>
        <p> "{advice.advice}"</p>
        <div className="devider-container">
          <hr />
          <BsFillPauseFill />
        </div>
      </div>
      <button className="randAdv" onClick={fetchAdvice}>
        <img src={icon} alt="search Icon" />
      </button>
    </div>
  );
}

export default App;
