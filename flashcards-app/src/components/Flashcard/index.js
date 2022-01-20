import { useState } from "react";
import "./flashcard.css";

function Flashcard({ questions }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flip, setFlip] = useState(false);

  function toggleFlipped() {
    setIsFlipped(!isFlipped);
    setFlip(true);
    setTimeout(() => {
      setFlip(false);
    }, 500);
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
      <div onClick={() => setFlip(!flip)} className={`container ${flip ? "flip" : ""}`}>
        <h2 className="question-title">{isFlipped ? "Answer:" : "Question:"}</h2>
        <h2 className="question-body">
          {isFlipped ? questions[index].answer : questions[index].question}
        </h2>
      </div>
      <h3 className="question-count">
        Question: {index + 1}/{questions.length}
      </h3>
      <div className="control-btns">
        <button className="btn prev-btn" onClick={previousQuestion}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className="btn flip-btn" onClick={toggleFlipped}>
          <i className="fas fa-sync"></i>
        </button>
        <button className="btn next-btn" onClick={nextQuestion}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Flashcard;
