import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

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
      <Header title="JavaScript" />
      <Body
        questions={questions}
        navButton1="HOME"
        navButton2="HTML"
        navButton3="CSS"
      />
      <Footer />
    </div>
  );
}

export default JS;
