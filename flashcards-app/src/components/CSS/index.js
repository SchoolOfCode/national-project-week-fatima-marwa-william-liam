import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function CSS() {
  const [questions, setQuestions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    async function getCSSQuestions() {
      const response = await fetch("https://flashcard-application1.herokuapp.com/css");
      const data = await response.json();
      setQuestions(data.payload);
    }
    getCSSQuestions();
  }, []);

  return (
    <div>
      <Header
        style={{ backgroundColor: "var(--CSS-clr)" }}
        title="CSS"
        subtitle="(Cascading Style Sheets)"
      />
      <nav className="navBar">
        <Link to="/">
          <button className="btn home-btn">HOME</button>
        </Link>
        <Link to="/html">
          <button className="btn html-btn">HTML</button>
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

export default CSS;
