import React from "react";
import Time from "./Components/time";
import Button from "./Components/button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Time idA={"minA"} idB={"maxA"} title={"Formule Midi"} />
      <Time idA={"minB"} idB={"maxB"} title={"Formule Dessert"} />
      <Button />
    </div>
  );
}

export default App;
