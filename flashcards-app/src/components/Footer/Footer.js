import { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [text, setText] = useState("");

  function updateText(e) {
    setText(e.target.value);
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={updateText} type="text" />
      </form>
      <Link to="/notes">
        <button className="btn notes-btn">Notes</button>
      </Link>
    </div>
  );
}

export default Footer;
