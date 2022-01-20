import React from "react";
import ListItem from "../ListItem";
import "./NoteList.css";

function NoteList({ notes, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note, index) => {
        return (
          <ListItem
            note={note}
            index={index}
            deleteNote={deleteNote}
            key={note.note_id}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
