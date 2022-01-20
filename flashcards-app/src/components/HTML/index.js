import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function HTML() {
  const [questions, setQuestions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    async function getHTMLQuestions() {
      const response = await fetch("https://flashcard-application1.herokuapp.com/html");
      const data = await response.json();
      setQuestions(data.payload);
    }
    getHTMLQuestions();
  }, []);

  return (
    <div>
      <Header
        style={{ backgroundColor: "var(--HTML-clr)" }}
        title="HTML"
        subtitle="(HyperText Markup Language)"
      />
      <nav className="navBar">
        <Link to="/">
          <button className="btn home-btn">HOME</button>
        </Link>
        <Link to="/css">
          <button className="btn css-btn">CSS</button>
        </Link>
        <Link to="/js">
          <button className="btn js-btn">JS</button>
        </Link>
      </nav>
      <Body
        questions={questions}
        correctCount={correctCount}
        setCorrectCount={setCorrectCount}
        incorrectCount={incorrectCount}
        setIncorrectCount={setIncorrectCount}
      />
      <Footer correctCount={correctCount} incorrectCount={incorrectCount} />
    </div>
  );
}

export default HTML;
