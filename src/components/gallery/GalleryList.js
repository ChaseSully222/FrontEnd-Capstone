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
        <h1>SPRAY PAINTINGS</h1>
        <hr></hr>
      </section>
      <section className="section-content">
        {props.userIsAdmin === true ? (
          <button
            type="button"
            className="btn"
            onClick={() => {
              props.history.push("/gallery/new");
            }}
          >
            Add Painting
          </button>
        ) : null}
      </section>
      <br></br>
      <div className="container-cards">
        {paintings.map(painting => (
          <GalleryCard
            favoriteId={0}
            key={painting.id}
            painting={painting}
            deletePainting={deletePainting}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryList;
