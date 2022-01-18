import React from "react";
import "./App.css";
import {useState, useEffect} from "react";
import Flashcard from "../Flashcard/index";
import Home from "../Home/index" ;
import HTML from "../HTML/index";


function App() {
  const [isFlipped, setIsFlipped] = useState(false);
const [questions, setQuestions] = useState([]);

function toggleFlipped(){
  setIsFlipped(!isFlipped);
}

  return <div className="App">
    <Home />
    <HTML />
    <CSS />
    <JS />
  </div>;
}

export default App;
