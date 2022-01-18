import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <h2>Revision made easy with</h2>
      <h1>DevCards.</h1>
      <h3>Choose a category to see relevant question/answer cards.</h3>
      <div className="options">
        <Link to="/html">
          <button className="HTML">HTML</button>
        </Link>
        <Link to="/css">
          <button className="CSS">CSS</button>
        </Link>
        <Link to="/js">
          <button className="JS">JavaScript</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
