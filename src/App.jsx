// File: src/App.jsx
import React from "react";
import BirthdayCard from "./BirthdayCard.jsx";
import ConfettiEffect from "./ConfettiEffect.jsx";
import HeartRain from "./HeartRain.jsx";
import "./index.css";

function App() {
  return (
    <div className="app">
      <ConfettiEffect />
      <HeartRain />
      <BirthdayCard />
    </div>
  );
}

export default App;
