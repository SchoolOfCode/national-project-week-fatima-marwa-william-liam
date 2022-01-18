import Flashcard from "../Flashcard";

function Body({ questions, navButton1, navButton2, navButton3 }) {
  return (
    <div>
      <nav className="navBar">
        <button className="navButton1">{navButton1}</button>
        <button className="navButton2">{navButton2}</button>
        <button className="navButton3">{navButton3}</button>
      </nav>
      <h2 className="flipComment">Flip the card to see the correct answer!</h2>
      {questions.length > 0 ? (
        <Flashcard questions={questions} />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Body;
