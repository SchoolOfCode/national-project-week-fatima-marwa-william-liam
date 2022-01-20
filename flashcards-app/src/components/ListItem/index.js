import React from "react";
import "./ListItem.css";

function ListItem({ note, deleteNote, index }) {
  async function handleDelete() {
    deleteNote(index);
    const response = await fetch(
      `https://flashcard-application1.herokuapp.com/notes/${note.note_id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <li className="note-container">
      <p className="note-text">{note.note}</p>
      <button className="btn edit-btn"> ✏️ </button>
      <button onClick={handleDelete} className="btn delete-btn">
        🗑
      </button>
    </li>
  );
}

export default ListItem;
