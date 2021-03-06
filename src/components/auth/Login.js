import React, { useState } from "react";
import UserManager from "../../modules/UserManager";

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();
    UserManager.getUser(credentials.email).then(result => {
      if (result.length === 0) {
        window.alert("Please enter a valid email");
      } else {
        props.setUser(result[0].id);
        // const isAdmin = result[0].isAdmin
        // console.log(isAdmin)
        // props.setUserIsAdmin(true)
        props.history.push("/gallery");
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputEmail">Email address</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;
