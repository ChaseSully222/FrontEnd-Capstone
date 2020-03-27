import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  
  const setHasUser = useState(isAuthenticated());

  const clearUser = () => {
    sessionStorage.clear();
    // setHasUser(isAuthenticated());
  }

  return (
    <>
      <section className="section-content">
        <h1>WELCOME TO CSART!</h1>
        <hr></hr>
      </section>
        <p>Hey there! Thank you for checking out my new gallery. Stay tuned for future updates to place orders for a spray painting. Enjoy the art!</p>
      <p><Link to={`/gallery`} onClick={clearUser}><button type="button">Guest</button></Link></p>
      <Link to={`/login`}><button type="button">Sign In</button></Link>
      <Link to={`/register`}><button type="button">Register</button></Link>
    </>
  );
};

export default Home;
