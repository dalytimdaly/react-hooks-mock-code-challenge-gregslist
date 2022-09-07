import React from "react";
import ListingCard from "./ListingCard"


function ListingsContainer({ listings, deleteListing }) {

  const displayListings = listings.map((listing) => {
    return (
    <ListingCard 
    key={listing.id}
    description={listing.description}
    listing={listing}
    location={listing.location}
    deleteListing={deleteListing}
    />
    )
  })

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
