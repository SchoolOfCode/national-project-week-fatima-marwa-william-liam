import { useState, useEffect } from "react";
import Header from "../Header/Header";
import NoteList from "../NoteList";
import "./notes.css";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      const response = await fetch(
        "https://flashcard-application1.herokuapp.com/notes"
      );
      const data = await response.json();
      setNotes(data.payload);
    }
    getNotes();
  }, []);

  return (
    <div>
      <Header
        style={{ backgroundColor: "var(--NOTES-clr)" }}
        title="NOTES"
        title_id="title-dark"
        Logo_id="Logo-dark"
      />
      <NoteList notes={notes} />
    </div>
  );
}

export default Notes;
