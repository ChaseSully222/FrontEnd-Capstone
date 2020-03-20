import React, { useState, useEffect } from "react";
import GalleryCard from "./PaintingCard";
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

      {props.userIsAdmin === true ? (
        <button type="button" className="btn" onClick={() => {
          props.history.push("/gallery/new");
        }}>
          Add Painting
        </button>
      ) : (
        null
      )}

      </section>
      <div className="container-cards">
        {paintings.map(painting => (
          <GalleryCard key={painting.id} painting={painting} deletePainting={deletePainting} {...props}/>
        ))}
      </div>
    </>
  );
};

export default GalleryList;
