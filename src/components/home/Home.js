import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
   
  return (
    <>
      <h1>Welcome Message!</h1>
      <p><Link to={`/gallery`}><button type="button">Guest</button></Link></p>
      <Link to={`/login`}><button type="button">Sign In</button></Link>
      <button type="button">New Acc</button>
    </>
  );
};

export default Home;
