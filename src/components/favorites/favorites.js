import React, { useState, useEffect } from "react";
import FavoritesManager from "../../modules/FavoritesManager";
import PaintingCard from "../gallery/PaintingCard";

const UserWithFavorites = props => {
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    FavoritesManager.getWithUsers(props.match.params.userId).then(APIResult => {
      setUser(APIResult);
      setFavorites(APIResult.favorites);
    });
  }, []);

  return (
    <>
      <div className="card">
        <p>User: {user.name}</p>
        {favorites.map(favorite => (
          <PaintingCard key={favorite.id} favorite={favorite} {...props} />
        ))}
      </div>
    </>
  );
};

export default UserWithFavorites;
