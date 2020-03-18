import React from "react";


const GalleryCard = props => {
    return (
        <div className="card">
            <div className="card-content">
               <h3>
                   Name: <span className="card-artname">{props.painting.name}</span>
                   </h3> 
            </div>
        </div>
    )
}

export default GalleryCard;