import React from "react";
import ListItem from "../ListItem";

function NoteList({ notes, deleteNote }) {
  return (
    <ol>
      {notes.map((note, index) => {
        return <ListItem note={note} index={index} deleteNote={deleteNote} />;
      })}
    </ol>
  );
}

export default NoteList;
