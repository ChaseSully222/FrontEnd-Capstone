import React, { useState, useEffect } from "react";
import FavoritesManager from "../../modules/FavoritesManager";
import GalleryCard from "../gallery/PaintingCard";

const FavoritesList = props => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    const userId = sessionStorage.getItem("credentials");
    return FavoritesManager.getWithUsers(userId).then(favoritesFromApi => {
      setFavorites(favoritesFromApi);
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
    {props.hasUser === true ? (
      <div className="card">
        <div className="container-cards">
          {favorites.map(favorite => (
            <GalleryCard
              getFavorites={getFavorites}
              favoriteId={favorite.id}
              key={favorite.painting.id}
              painting={favorite.painting}
              {...props}
            />
          ))}
        </div>
      </div> 
       ) : "Please create an account to add favorites!" }
    </>
  );
};

export default FavoritesList;
