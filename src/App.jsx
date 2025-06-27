import React from "react";
import BirthdayCard from "./BirthdayCard";
import ConfettiEffect from "./ConfettiEffect";
import "./index.css";

function App() {
  return (
    <div className="app">
      <ConfettiEffect />
      <BirthdayCard />
    </div>
  );
}

export default App;
