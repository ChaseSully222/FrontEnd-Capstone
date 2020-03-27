import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const setHasUser = useState(isAuthenticated());

  const clearUser = () => {
    sessionStorage.clear(() => {
      setHasUser(isAuthenticated());
    });
  };

  return (
    <>
      <div className="welcome-content">
        <div className="welcome-msg">
          <h1>WELCOME TO CSART!</h1>
          <h3>
            Hey there! Thank you for checking out my new gallery. Stay tuned for
            future updates to place orders for a spray painting. Enjoy the art!
          </h3>

          <Link to={`/gallery`} onClick={clearUser}>
            <button type="button" className="home-btn">Guest</button>
          </Link>

          <Link to={`/login`}>
            <button type="button" className="home-btn">Sign In</button>
          </Link>
          <Link to={`/register`}>
            <button type="button" className="home-btn">Register</button>
          </Link>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Home;
