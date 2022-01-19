import React from "react";
import ListItem from "../ListItem";

function NoteList({ notes }) {
  return (
    <ol>
      {notes.map((note) => {
        return <ListItem note={note} />;
      })}
    </ol>
  );
}

export default NoteList;
