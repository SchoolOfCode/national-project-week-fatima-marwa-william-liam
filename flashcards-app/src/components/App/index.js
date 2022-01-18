import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "../Home/index";
import HTML from "../HTML/index";
import CSS from "../CSS/index";
import JS from "../JS/index";

//const question = { question: "What does HTML stand for?", answer: "HyperText Markup Language"};

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleFlipped() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="App">
      <Home />
      <HTML />
      <CSS />
      <JS />
    </div>
  );
}

export default App;
