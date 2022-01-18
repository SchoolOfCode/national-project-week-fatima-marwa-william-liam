import { useState } from "react";

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
    if (index - 1 <= 0) return;
    else setIndex(index - 1);
  }

  return (
    <div>
      <div className="container">
        <h2 className="questions">
          {isFlipped ? questions[index].answer : questions[index].question}
        </h2>
      </div>
      <button onClick={previousQuestion}>Prev</button>
      <button onClick={toggleFlipped}>Flip</button>
      <button onClick={nextQuestion}>Next</button>
      <h3 className="questionCount">
        Question: {index + 1}/{questions.length}
      </h3>
    </div>
  );
}

export default Flashcard;

/* <div id="Flashcard">
<h3>{isFlipped ? "Answer" : "Question"}</h3>
<p>{isFlipped ? answer : question}</p>
</div> */
