import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "../Home/index";
import HTML from "../HTML/index";
import CSS from "../CSS/index";
import JS from "../JS/index";

//const question = { question: "What does HTML stand for?", answer: "HyperText Markup Language"};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/js" element={<JS />} />
      </Routes>
    </div>
  );
}

export default App;
