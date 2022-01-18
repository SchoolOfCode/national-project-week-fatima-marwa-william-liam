import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function Home() {
  return (
    <div>
      <Header />
      <h2>Revision made easy with</h2>
      <h1>DevCards.</h1>
      <h3>Choose a category to see relevant question/answer cards.</h3>
      <div class="options">
        <button class="HTML">HTML</button>
        <button class="CSS">CSS</button>
        <button class="JavaScript">JavaScript</button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
