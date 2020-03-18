import { Route, Redirect } from "react-router-dom";
import React from "react";

import Home from "./home/Home";
import Login from "./auth/Login";
import AboutMe from "./aboutme/AboutMe";
import GalleryList from "./gallery/GalleryList";
import GalleryForm from "./gallery/GalleryForm";
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
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/accountform"
        render={props => {
          return <Login {...props} />;
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
          return <GalleryList {...props} />;
        }}
      />
      <Route
        path="/paintings/new"
        render={props => {
          return <GalleryForm {...props} />;
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
