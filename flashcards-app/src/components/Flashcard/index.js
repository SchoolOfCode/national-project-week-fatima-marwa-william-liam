import { useState } from "react";
import "./flashcard.css";

function Flashcard({
  questions,
  correctCount,
  setCorrectCount,
  incorrectCount,
  setIncorrectCount,
}) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipAnimation, setFlipAnimation] = useState(false);

  function toggleFlipped() {
    setIsFlipped(!isFlipped);
    setFlipAnimation(true);
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

  function addCorrect() {
    if (correctCount + incorrectCount === questions.length) return;
    setCorrectCount(correctCount + 1);
    nextQuestion();
  }
  function addIncorrect() {
    if (correctCount + incorrectCount === questions.length) return;
    setIncorrectCount(incorrectCount + 1);
    nextQuestion();
  }

  return (
    <div>
      <div
        className={`container ${flipAnimation ? "flip" : ""}`}
        onAnimationEnd={() => setFlipAnimation(false)}
      >
        <h2 className="question-title">
          {isFlipped ? "Answer:" : "Question:"}
        </h2>
        <h2 className="question-body">
          {isFlipped ? questions[index].answer : questions[index].question}
        </h2>
        <div className="check-answers">
          <button className="btn correct-btn" onClick={addCorrect}>
            <i className="fas fa-check"></i>
          </button>
          <button className="btn incorrect-btn" onClick={addIncorrect}>
            <i className="fas fa-times"></i>
          </button>
        </div>
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
