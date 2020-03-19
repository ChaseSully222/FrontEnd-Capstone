import React, { useState } from "react";
import UserManager from "../../modules/UserManager";

const Register = props => {
    const [credentials, setCredentials] = useState({ email: "" });
    const [user, setUser] = useState({ email: "", username: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  const constructNewUser = evt => {
    evt.preventDefault();
    setIsLoading(true);
    const newUser = {
      ...user
    };
    UserManager.postUser(newUser).then(() => props.history.push("/login"));
  };

  const handleLogin = e => {
    e.preventDefault();
    UserManager.getUser(credentials.email).then(result => {
      if (result.length === 0) {
        window.alert("Please enter a valid email");
      } else {
        props.setUser(result[0].id);
        props.history.push("/gallery");
      }
    });
  };

  return (
    <form onSubmit={constructNewUser} className="register_form">
      <label htmlFor="inputEmail">Register an Account</label>
      <div className="formgrid">
        <input
          onChange={handleFieldChange}
          type="email"
          id="email"
          placeholder="Email address"
          required=""
          autoFocus=""
        />
      </div>
      <div>
        <input
          onChange={handleFieldChange}
          type="username"
          id="username"
          placeholder="Username"
          required=""
          autoFocus=""
        />
      </div>
      <button type="submit" bg="dark" variant="dark" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
};

export default Register;
