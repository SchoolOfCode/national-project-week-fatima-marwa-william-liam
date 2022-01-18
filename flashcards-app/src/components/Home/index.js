import "./home.css";
import Header from "../Header/Header.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="Home">
      <Header />
      <div className="home-text">
        <h2>
          Revision made easy with<span className="home-logo"> DevCards.</span>
        </h2>
        <h3 className="cta">Choose a category to see relevant question/answer cards.</h3>
      </div>
      <div className="categories">
        <Link to="/html">
          <button className="btn HTML">HTML</button>
        </Link>
        <Link to="/css">
          <button className="btn CSS">CSS</button>
        </Link>
        <Link to="/js">
          <button className="btn JS">JavaScript</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
