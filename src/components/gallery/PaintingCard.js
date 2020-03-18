import React from "react";
import { Link } from "react-router-dom";

const PaintingCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-artname">{props.painting.name}</span>
        </h3>
        <Link to={`/gallery/${props.painting.id}`}>
          <h4>
            <em>{props.painting.artWork}</em>
          </h4>
        </Link>
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
    </div>
  );
};

export default PaintingCard;
