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
      <section className="section-content">
        <h1>YOUR FAVORITES</h1>
        <hr></hr>
      </section>
      {props.hasUser === true ? (
        <div className="cards">
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
      ) : (
        <div>
          <h3>Please create an account to add favorites!</h3>
        </div>
      )}
    </>
  );
};

export default FavoritesList;
