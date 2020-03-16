import React, { useState, useEffect } from "react";

const AboutMe = props => {
  return (
    <>
      <h1>About the artist</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          props.history.push("/gallery");
        }}
      >
        Gallery
      </button>
    </>
  );
};

export default AboutMe;
