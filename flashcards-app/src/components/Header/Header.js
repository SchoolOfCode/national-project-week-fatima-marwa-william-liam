import React from "react";

function Header({ title }) {
  return (
    <div>
      <h2 className="Logo">DevCards</h2>
      <button className="login">Login</button>
      <h1 className="title">{title}</h1>
    </div>
  );
}
export default Header;
