import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/index";
import HTML from "../HTML/index";
import CSS from "../CSS/index";
import JS from "../JS/index";
import Notes from "../Notes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/js" element={<JS />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
