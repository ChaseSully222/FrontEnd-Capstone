import React from "react";

const AboutMe = props => {
  return (
    <>
      <section className="section-content">
        <h1>ABOUT THE ARTIST</h1>
        <hr></hr>
      </section>
      <p>Hello there! My name is Chase Sullins. I'm currently a spray paint artists based in the Nashville area. I first started spray painting around 2016 after looking for a new medium to express myself through art. </p>
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
