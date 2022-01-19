import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import "./js.css";

function JS() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getJSQuestions() {
      const response = await fetch(
        "https://flashcard-application1.herokuapp.com/js"
      );
      const data = await response.json();
      setQuestions(data.payload);
    }
    getJSQuestions();
  }, []);

  return (
    <div>
      <Header
        id="title-dark"
        style={{ backgroundColor: "var(--JS-clr)" }}
        title="JavaScript"
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
      <Body questions={questions} />
      <Footer />
    </div>
  );
}

export default JS;
