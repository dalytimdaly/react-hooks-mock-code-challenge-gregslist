import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [toDelete, setToDelete] = useState(11)
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => setListings(items));
  }, []);
  
  function deleteListing(event) {
    setToDelete(event.target.value)
    const newListingArray = listings.filter((listing) => listing.id !== toDelete);
    fetch(`http://localhost:6001/listings/${toDelete}`, {
      method: "DELETE", 
    })
    .then(r => r.json())
    .then(() => setListings(newListingArray));
  }

  console.log(query)  

  const searchedArray = listings.filter(listing => {
     return listing.description.toLowerCase().includes(query.toLowerCase())
    })
  

  console.log(searchedArray)


  return (
    <div className="app">
      <Header listings={listings} setQuery={setQuery} query={query} />
      <ListingsContainer listings={searchedArray} deleteListing={deleteListing}/>
    </div>
  );

}

export default App;
