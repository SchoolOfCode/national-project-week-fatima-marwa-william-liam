import "./header.css";

function Header({ title, subtitle, style }) {
  return (
    <div className="header" style={style}>
      <h2 className="Logo">DevCards</h2>
      <button id="login-btn">Login</button>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
}
export default Header;
