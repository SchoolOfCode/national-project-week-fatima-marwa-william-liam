import "./header.css";

function Header({ title }) {
  return (
    <div className="header">
      <h2 className="Logo">DevCards</h2>
      <button id="login-btn">Login</button>
      <h1 className="title">{title}</h1>
    </div>
  );
}
export default Header;
