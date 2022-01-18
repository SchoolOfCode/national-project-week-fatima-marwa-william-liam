import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function HTML() {
  const [questions, setQuestions] = useState([]);

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
      <Header />
      <Body questions={questions} />
      <Footer />
    </div>
  );
}

export default HTML;
