import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import GalleryManager from "../../modules/GalleryManager";

const GalleryList = props => {
  const [paintings, setPaintings] = useState([]);

  const getPaintings = () => {
    return GalleryManager.getAll().then(paintingsFromAPI => {
      setPaintings(paintingsFromAPI);
    });
  };

  const deletePainting = id => {
    GalleryManager.delete(id).then(() =>
      GalleryManager.getAll().then(setPaintings)
    );
  };

  useEffect(() => {
    getPaintings();
  }, []);

  return (
    <>
      <section className="section-content">
        <button type="button" className="btn" onClick={() => {
          props.history.push("/paintings/new");
        }}>
          Add Painting
        </button>
      </section>
      <div className="container-cards">
        {paintings.map(painting => (
          <GalleryCard key={painting.id} painting={painting} />
        ))}
      </div>
    </>
  );
};

export default GalleryList;
