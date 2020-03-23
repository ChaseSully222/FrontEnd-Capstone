import React from "react";
import { Link } from "react-router-dom";
import "./PaintingCard.css";
import FavoritesManager from "../../modules/FavoritesManager";

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
    console.log(newFavorite);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-artname">{props.painting.name}</span>
        </h3>
        <Link to={`/gallery/${props.painting.id}`}>
          <img src={props.painting.artWork} alt="Spray Painting"/>
        </Link>
        {props.hasUser === true && props.userIsAdmin === false ? (
          <div>
            <button type="button" onClick={addUserFavorite}>
              Favorite
            </button>
          </div>
        ) : null}
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
