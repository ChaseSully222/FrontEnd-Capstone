import React, { useState, useEffect } from "react";
import FavoritesManager from "../../modules/FavoritesManager";
import GalleryCard from "../gallery/PaintingCard";

const FavoritesList = props => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    return FavoritesManager.getAll().then(favoritesFromApi => {
      setFavorites(favoritesFromApi);
      console.log(favoritesFromApi);
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <div className="card">
        <div className="container-cards">
          {favorites.map(favorites => (
            <GalleryCard key={favorites.id} painting={favorites} {...props} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoritesList;
