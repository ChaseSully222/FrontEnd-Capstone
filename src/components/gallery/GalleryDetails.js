import React, { useState, useEffect } from "react";
import GalleryManager from "../../modules/GalleryManager";

const PaintingDetail = props => {
  const [painting, setPainting] = useState({ name: "", artWork: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    GalleryManager.delete(props.paintingId).then(() =>
      props.history.push("/gallery")
    );
  };

  useEffect(() => {
      GalleryManager.get(props.paintingId).then(painting => {
          setPainting({
              name: painting.name,
              artWork: painting.artWork,
              description: painting.description,
              size: painting.size
          });
          setIsLoading(false);
      });
  }, [props.paintingId]);

  return (
      <div className="card">
          <div className="card-content">
              <h1>
                  <span className="card-artworkname">{painting.name}</span>
              </h1>
              <h3>{painting.artWork}</h3>
              <p>{painting.description}</p>
            <h5><em>{painting.size}</em></h5>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
          </div>
      </div>
  )
};

export default PaintingDetail;
