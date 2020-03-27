import { Route } from "react-router-dom";
import React from "react";

import Login from "./auth/Login";
import Register from "./register/Register";
import Home from "./home/Home";
import AboutMe from "./aboutme/AboutMe";
import GalleryList from "./gallery/GalleryList";
import GalleryForm from "./gallery/GalleryForm";
import GalleryEditForm from "./gallery/GalleryEditForm";
import PaintingDetail from "./gallery/GalleryDetails";
import FavoritesList from "./favorites/favorites";
import Contact from "./contact/contact";

const ApplicationViews = props => {
  const setUser = props.setUser;
  const hasUser = props.hasUser;
  const setUserIsAdmin = props.setUserIsAdmin;
  const userIsAdmin = props.userIsAdmin;
  
  

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}
      />
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} setUserIsAdmin={setUserIsAdmin} {...props} />;
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
          return <GalleryList hasUser={hasUser} {...props} userIsAdmin={userIsAdmin} />;
        }}
      />
      <Route
        path="/gallery/new"
        render={props => {
          return <GalleryForm hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        path="/gallery/:paintingId(\d+)/edit"
        render={props => {
          return <GalleryEditForm {...props} />;
        }}
      />
      <Route
        path="/gallery/:paintingId(\d+)"
        render={props => {
          return (
            <PaintingDetail
              paintingId={parseInt(props.match.params.paintingId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/favorites"
        render={props => {
          return <FavoritesList hasUser={hasUser} {...props} />;
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
