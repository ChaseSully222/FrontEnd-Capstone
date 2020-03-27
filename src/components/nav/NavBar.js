import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/login");
  };

  return (
    <div>
      <header>
        <nav>
          <ul className="container">
            <li>
              <Link className="site-title" to="/">
                <img src="https://i.imgur.com/0QngnHV.png"></img>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/aboutme">
                About-Me
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
    </div>
  );
};

export default withRouter(NavBar);
