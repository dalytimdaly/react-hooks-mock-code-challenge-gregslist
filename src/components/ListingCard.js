import React, { useState } from "react";

function ListingCard({ listing, description, image, location, deleteListing }) {

  const [favorite, setFavorite] = useState(false)
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={() => setFavorite(!favorite)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setFavorite(!favorite)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteListing} value={listing.id}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
