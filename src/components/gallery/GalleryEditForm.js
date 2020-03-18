import React, { useState, useEffect } from "react";
import GalleryManager from "../../modules/GalleryManager";

const GalleryEditForm = props => {
  const [painting, setPainting] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...painting };
    stateToChange[evt.target.id] = evt.target.value;
    setPainting(stateToChange);
  };

  const updateExistingGallery = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedPainting = {
      id: props.match.params.paintingId,
      name: painting.name
    };
    GalleryManager.update(editedPainting).then(() =>
      props.history.push("/gallery")
    );
  };

  useEffect(() => {
      GalleryManager.get(props.match.params.paintingId)
      .then(painting => {
          GalleryManager.getAll().then(() => {
              setPainting(painting);
              setIsLoading(false);
          })
      })
  }, []);

  return (
      <>
      <form>
          <fieldset>
              <div className="formgrid">
                  <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="name"
                  value={painting.name}
                  />
                  <label htmlFor="name">Painting Name</label>
              </div>
              <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingGallery}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          </fieldset>
      </form>
      </>
  )
};

export default GalleryEditForm;