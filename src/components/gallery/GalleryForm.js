import React, { useState } from "react";
import GalleryManager from "../../modules/GalleryManager";

const GalleryForm = props => {
  const [painting, setPainting] = useState({ name: "", artWork:"", description:"", size: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...painting };
    stateToChange[evt.target.id] = evt.target.value;
    setPainting(stateToChange);
  };

  const constructNewPainting = evt => {
    evt.preventDefault();
    if (painting.name === "" || painting.artWork === "" || painting.description === "" || painting.size === "") {
      window.alert("Please fill out all input fields");
    } else {
      setIsLoading(true);
      GalleryManager.post(painting).then(() =>
        props.history.push("/gallery")
      );
    }
  };

  return (
    <form>
      <fieldset>
        <div className="formgrid">
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="name"
            placeholder="Painting Name"
          />
          <label htmlFor="name">Painting Name</label>
          <input
              type="text"
              required
              onChange={handleFieldChange}
              id="artWork"
              placeholder="Artwork"
            />
            <label htmlFor="Artwork">Artwork</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="Description"
            />
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="size"
              placeholder="size"
            />
            <label htmlFor="Size">Size</label>
        </div>
        <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewPainting}
            >Submit</button>
          </div>
      </fieldset>
    </form>
  );
};


export default GalleryForm