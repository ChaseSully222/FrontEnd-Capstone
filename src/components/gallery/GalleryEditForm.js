import React, { useState, useEffect } from "react";
import GalleryManager from "../../modules/GalleryManager";

const GalleryEditForm = props => {
  const [painting, setPainting] = useState({ name: "", artWork: "", description: "", size: ""});
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
      name: painting.name,
      artWork: painting.artWork,
      description: painting.description,
      size: painting.size
    };
    GalleryManager.update(editedPainting).then(() =>
      props.history.push("/gallery")
    );
  };

  useEffect(() => {
    GalleryManager.get(props.match.params.paintingId).then(painting => {
      GalleryManager.getAll().then(() => {
        setPainting(painting);
        setIsLoading(false);
      });
    });
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

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="artWork"
              value={painting.artWork}
            />
            <label htmlFor="Artwork">Artwork</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="description"
              value={painting.description}
            />
            <label htmlFor="Description">Description</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="size"
              value={painting.size}
            />
            <label htmlFor="Size">Size</label>
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
  );
};

export default GalleryEditForm;
