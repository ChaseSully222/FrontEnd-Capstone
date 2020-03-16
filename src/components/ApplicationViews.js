import { Route, Redirect } from "react-router-dom";
import React from "react";

import Home from "./home/Home";
import AboutMe from "./aboutme/AboutMe";
import Gallery from "./gallery/gallery";
import Favorites from "./favorites/favorites";
import Contact from "./contact/contact";

const ApplicationViews = props => {
  const setUser = props.setUser;
  const hasUser = props.hasUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/aboutme"
        render={props => {
          return <AboutMe {...props} />;
        }}
      />
      <Route
        exact
        path="/gallery"
        render={props => {
          return <Gallery {...props} />;
        }}
      />
      <Route
        exact
        path="/favorites"
        render={props => {
          return <Favorites {...props} />;
        }}
      />
      <Route
        exact
        path="/contact"
        render={props => {
          return <Contact {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
