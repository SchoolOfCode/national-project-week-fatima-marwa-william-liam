import React from "react";
import Header from "../Header/Header";

function Notes() {
  return (
    <div>
      <Header
        style={{ backgroundColor: "var(--NOTES-clr)" }}
        title="NOTES"
        title_id="title-dark"
      />
    </div>
  );
}

export default Notes;
