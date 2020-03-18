import React from "react";

const PaintingCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-artname">{props.painting.name}</span>
        </h3>
        <button type="button" onClick={() => props.history.push(`/gallery/${props.painting.id}/edit`)}>
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
