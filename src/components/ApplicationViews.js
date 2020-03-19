import { Route, Redirect } from "react-router-dom";
import React from "react";

import Login from "./auth/Login";
import Home from "./home/Home";
import AboutMe from "./aboutme/AboutMe";
import GalleryList from "./gallery/GalleryList";
import GalleryForm from "./gallery/GalleryForm";
import GalleryEditForm from "./gallery/GalleryEditForm";
import PaintingDetail from "./gallery/GalleryDetails";
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
          return <Home {...props} />;
        }}
      />
      {/* <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      /> */}
      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
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
          return <GalleryList hasUser={hasUser} {...props} />;
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
          return <Favorites hasUser={hasUser} {...props} />;
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
