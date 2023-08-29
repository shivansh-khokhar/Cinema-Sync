import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website's home page.</p>
      <div>
        <Link to="/contact">goto Contact</Link>
      </div>
      <div>
        <Link to="/about">goto About</Link>
      </div>
    </div>
  );
}

export default Home;
