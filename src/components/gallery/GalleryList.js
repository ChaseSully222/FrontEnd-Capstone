import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

const GalleryList = props => {
  return (
    <>
<section className="section-content">
  <button
  type="button"
  className="btn"
  >
    Add Painting
  </button>
</section>
<div className="container-cards">
  {paintings.map(painting => (
    <GalleryCard
    key={painting.id}
    painting={painting}
    />
  ))}
</div>
    </>
  );
};

export default GalleryList;