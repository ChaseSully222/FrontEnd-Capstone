import React, { useState } from "react";
import GalleryManager from "../../modules/GalleryManager";

const GalleryForm = props => {
  const [painting, setPainting] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...painting };
    stateToChange[evt.target.id] = evt.target.value;
    setPainting(stateToChange);
  };

  const constructNewPainting = evt => {
    evt.preventDefault();
    if (painting.name === "") {
      window.alert("Please input a name");
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