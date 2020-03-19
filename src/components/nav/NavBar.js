import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/login");
  };

  return (
    <header>
      <h1 className="site-title">
        Logo
        <br />
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/aboutme">
              {" "}
              About Me{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">
              {" "}
              Gallery{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/favorites">
              {" "}
              Favorites{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              {" "}
              Contact{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
