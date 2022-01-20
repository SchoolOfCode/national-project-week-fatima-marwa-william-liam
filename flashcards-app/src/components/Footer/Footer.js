import { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer({ correctCount, incorrectCount }) {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function updateText(e) {
    setText(e.target.value);
  }

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://flashcard-application1.herokuapp.com/notes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "Bootcamper", note: text }),
    });
    const data = await response.json();
    console.log(data);
    e.target[0].value = "";
    toggleVisibility();
  }

  return (
    <div>
      <div className="counter-container">
        <div className="correct">
          <h3>Correct</h3>
          <h4>{correctCount}</h4>
        </div>
        <div className="incorrect">
          <h3>Incorrect</h3>
          <h4>{incorrectCount}</h4>
        </div>
      </div>
      {isVisible ? (
        <></>
      ) : (
        <button onClick={toggleVisibility} className="btn add-note-btn">
          Add Note
        </button>
      )}
      {isVisible ? (
        <form id="note-input" className="note-input-form" onSubmit={handleSubmit}>
          <button onClick={toggleVisibility} className="btn cancel-btn">
            <i className="fas fa-times"></i>
          </button>
          <textarea
            className="note-text-field"
            onChange={updateText}
            form="note-input"
            maxLength={100}
            required
            placeholder="Enter your note..."
          />
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <></>
      )}
      <Link to="/notes">
        <button className="btn notes-btn">Notes</button>
      </Link>
    </div>
  );
}

export default Footer;
