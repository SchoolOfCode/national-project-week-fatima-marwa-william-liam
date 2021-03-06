import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./js.css";

function JS() {
  const [questions, setQuestions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    async function getJSQuestions() {
      const response = await fetch("https://flashcard-application1.herokuapp.com/js");
      const data = await response.json();
      setQuestions(data.payload);
    }
    getJSQuestions();
  }, []);

  return (
    <div>
      <Header
        style={{ backgroundColor: "var(--JS-clr)" }}
        title="JavaScript"
        title_id="title-dark"
      />
      <nav className="navBar">
        <Link to="/">
          <button className="btn home-btn">HOME</button>
        </Link>
        <Link to="/html">
          <button className="btn html-btn">HTML</button>
        </Link>
        <Link to="/css">
          <button className="btn css-btn">CSS</button>
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

export default JS;
