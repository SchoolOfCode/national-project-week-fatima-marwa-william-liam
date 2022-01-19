import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Link to="/notes">
        <button className="btn notes-btn">Notes</button>
      </Link>
    </div>
  );
}

export default Footer;
