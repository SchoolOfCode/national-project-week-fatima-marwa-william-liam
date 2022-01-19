import { useState } from "react";
import "./flashcard.css";

function Flashcard({ questions }) {
  const [index, setIndex] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  function toggleFlipped() {
    setIsFlipped(!isFlipped);
  }

  function nextQuestion() {
    setIsFlipped(false);
    if (index + 1 >= questions.length) return;
    else setIndex(index + 1);
  }

  function previousQuestion() {
    setIsFlipped(false);
    if (index - 1 < 0) return;
    else setIndex(index - 1);
  }

  return (
    <div>
      <div className="container">
        <h2 className="question-title">
          {isFlipped ? "Answer:" : "Question:"}
        </h2>
        <h2 className="question-body">
          {isFlipped ? questions[index].answer : questions[index].question}
        </h2>
      </div>
      <h3 className="question-count">
        Question: {index + 1}/{questions.length}
      </h3>
      <div className="control-btns">
        <button className="btn prev-btn" onClick={previousQuestion}>
          Prev
        </button>
        <button className="btn flip-btn" onClick={toggleFlipped}>
          Flip
        </button>
        <button className="btn next-btn" onClick={nextQuestion}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Flashcard;

/* <div id="Flashcard">
<h3>{isFlipped ? "Answer" : "Question"}</h3>
<p>{isFlipped ? answer : question}</p>
</div> */
