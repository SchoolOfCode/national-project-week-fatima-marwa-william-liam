import { useState } from "react";

function Flashcard({ questions }) {
  const [index, setIndex] = useState(0);

  function nextQuestion() {
    if (index) setIndex(index + 1);
  }

  function previousQuestion() {
    if (index && index > 0) setIndex(index - 1);
  }

  return (
    <div>
      <div className="container">
        <h2 className="questions">{questions[index].question}</h2>
        <h2 className="answers">{questions[index].answer}</h2>
      </div>
      <button onClick={previousQuestion}>Prev</button>
      <button>Flip</button>
      <button onClick={nextQuestion}>Next</button>
      {/* <h3 className="questionCount"></h3> */}
    </div>
  );
}

export default Flashcard;

/* <div id="Flashcard">
<h3>{isFlipped ? "Answer" : "Question"}</h3>
<p>{isFlipped ? answer : question}</p>
</div> */
