import React from "react";
import Time from "./Components/time";
import Button from "./Components/button";
import Message from "./Components/message";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Time idA={"minA"} idB={"maxA"} title={"Formule Midi"} />
      <Time idA={"minB"} idB={"maxB"} title={"Formule Dessert"} />
      <Button />
      <Message />
    </div>
  );
}

export default App;
