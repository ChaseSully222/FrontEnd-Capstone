import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  
  const setHasUser = useState(isAuthenticated());

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <>
      <h1>Welcome Message!</h1>
      <p><Link to={`/gallery`} onClick={clearUser}><button type="button">Guest</button></Link></p>
      <Link to={`/login`}><button type="button">Sign In</button></Link>
      <Link to={`/register`}><button type="button">Register</button></Link>
    </>
  );
};

export default Home;
