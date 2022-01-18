import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function CSS() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getCSSQuestions() {
      const response = await fetch(
        "https://flashcard-application1.herokuapp.com/css"
      );
      const data = await response.json();
      setQuestions(data.payload);
    }
    getCSSQuestions();
  }, []);

  return (
    <div>
      <Header title="CSS (Cascading Style Sheets)" />
      <Body
        questions={questions}
        navButton1="HOME"
        navButton2="HTML"
        navButton3="JS"
      />
      <Footer />
    </div>
  );
}

export default CSS;
