import "./body.css";
import Flashcard from "../Flashcard";

function Body({ questions, correctCount, setCorrectCount, incorrectCount, setIncorrectCount }) {
  return (
    <div id="body">
      <h2 className="flip-comment">Flip the card to see the correct answer!</h2>
      {questions.length > 0 ? (
        <Flashcard
          questions={questions}
          correctCount={correctCount}
          setCorrectCount={setCorrectCount}
          incorrectCount={incorrectCount}
          setIncorrectCount={setIncorrectCount}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Body;
