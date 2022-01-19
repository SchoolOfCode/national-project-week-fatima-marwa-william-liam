import React from "react";

function ListItem({ note }) {
  return (
    <li>
      <h2>{note.username}</h2>
      <h2>{note.note}</h2>
    </li>
  );
}

export default ListItem;
