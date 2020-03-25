import React from "react";

const AboutMe = props => {
  return (
    <>
      <h1>About the artist</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Tincidunt lobortis feugiat vivamus at augue. Tincidunt ornare massa eget egestas purus viverra. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Justo laoreet sit amet cursus sit amet dictum sit. Faucibus ornare suspendisse sed nisi. At elementum eu facilisis sed odio morbi quis commodo odio. Ac turpis egestas maecenas pharetra convallis.</p>
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
