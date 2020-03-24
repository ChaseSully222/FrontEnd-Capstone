import React from "react";
import { Link } from "react-router-dom";
import "./PaintingCard.css";
import FavoritesManager from "../../modules/FavoritesManager";
import HeartCheckbox from "react-heart-checkbox";

const PaintingCard = props => {
  const addUserFavorite = evt => {
    const activeUserId = sessionStorage.getItem("credentials");

    evt.preventDefault();
    const newFavorite = {
      userId: parseInt(activeUserId),
      paintingId: props.painting.id
    };
    FavoritesManager.post(newFavorite).then(() =>
      props.history.push("/gallery")
    );
  };

  const deleteUserFav = id => {
    FavoritesManager.delete(id).then(() => props.getFavorites());
  };

  // fetch call to check the paintingID and the activeUserId is in the favorties table. favorites?userId=activeId&paintingId=props.painting.id
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-artname">{props.painting.name}</span>
        </h3>
        <Link to={`/gallery/${props.painting.id}`}>
          <img src={props.painting.artWork} alt="Spray Painting" />
        </Link>
        <div>
          {props.favoriteId !== 0 && (
            <button
              type="button"
              onClick={() => deleteUserFav(props.favoriteId)}
            >
              Remove Fav
            </button>
          )}
          {props.hasUser === true && props.userIsAdmin === false ? (
            <HeartCheckbox onClick={addUserFavorite} />
          ) : null}
        </div>
        {props.userIsAdmin === true ? (
          <div>
            <button
              type="button"
              onClick={() =>
                props.history.push(`/gallery/${props.painting.id}/edit`)
              }
            >
              Edit
            </button>

            {props.deletePainting && (
              <button
                type="button"
                onClick={() => props.deletePainting(props.painting.id)}
              >
                Delete
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PaintingCard;
