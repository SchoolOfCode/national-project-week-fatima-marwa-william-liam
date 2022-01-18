import React from "react";

function Flashcard() {
  return (
    <div>
      <div className="container">
        <h2 className="questions">?</h2>
        <h2 className="answers">Answer</h2>
      </div>
      <h3 className="questionCount"></h3>
    </div>
  );
}

export default Flashcard;

/* <div id="Flashcard">
<h3>{isFlipped ? "Answer" : "Question"}</h3>
<p>{isFlipped ? answer : question}</p>
</div> */
