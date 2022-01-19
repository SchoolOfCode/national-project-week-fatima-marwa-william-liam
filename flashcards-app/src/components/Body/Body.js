import "./body.css";
import Flashcard from "../Flashcard";

function Body({ questions }) {
  return (
    <div id="body">
      <h2 className="flip-comment">Flip the card to see the correct answer!</h2>
      {questions.length > 0 ? (
        <Flashcard questions={questions} />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Body;
