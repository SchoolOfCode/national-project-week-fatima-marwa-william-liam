import { Link } from "react-router-dom";
import Flashcard from "../Flashcard";

function Body({ questions, navButton1, navButton2, navButton3 }) {
  return (
    <div>
      <nav className="navBar">
        <Link to="/">
          <button className="home-button">{navButton1}</button>
        </Link>
        <Link to={`/${navButton2}`}>
          <button className="navButton2">{navButton2}</button>
        </Link>
        <Link to={`/${navButton3}`}>
          <button className="navButton3">{navButton3}</button>
        </Link>
      </nav>
      <h2 className="flipComment">Flip the card to see the correct answer!</h2>
      {questions.length > 0 ? <Flashcard questions={questions} /> : "Loading..."}
    </div>
  );
}

export default Body;
