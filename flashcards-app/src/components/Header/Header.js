import "./header.css";

function Header({ title, subtitle, style, title_id, Logo_id, loggedIn }) {
  return (
    <div className="header" style={style}>
      <h2 className="Logo" id={Logo_id ? Logo_id : ""}>
        DevCards
      </h2>
      <button id={loggedIn ? "log-out-btn" : "log-in-btn"}>{loggedIn ? "Logout" : "Login"}</button>
      <h1 className="title" id={title_id ? title_id : ""}>
        {title}
      </h1>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
}
export default Header;
