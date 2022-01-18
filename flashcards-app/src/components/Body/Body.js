import Flashcard from "../Flashcard";

function Body({ questions }) {
  return (
    <div>
      <nav className="navBar">
        <button className="homeButton">HOME</button>
        <button className="cssButton">CSS</button>
        <button className="jsButton">JavaScript</button>
      </nav>
      <h2 className="flipComment">Flip the card to see the correct answer!</h2>
      {questions.length > 0 ? <Flashcard questions={questions} /> : "Loading..."}
    </div>
  );
}

export default Body;
