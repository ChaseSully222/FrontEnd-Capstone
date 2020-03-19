import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [credentials, setCredentials] = useState({ email: "", username: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();
    props.setUser(credentials);
    props.history.push("/animals");
  };
  
  return (
    <>
      <h1>Welcome Message!</h1>
      <p><Link to={`/aboutme`}><button type="button">Guest</button></Link></p>
      <Link to={`/login`}><button type="button">Sign In</button></Link>
      <button type="button">New Acc</button>
    </>
  );
};

export default Home;
