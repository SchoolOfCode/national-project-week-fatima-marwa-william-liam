import React from "react";

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
    <li>
      <h2>{note.username}</h2>
      <h2>{note.note}</h2>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default ListItem;
