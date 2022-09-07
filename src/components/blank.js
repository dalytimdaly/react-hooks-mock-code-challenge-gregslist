fetch("http://localhost:6001/listings", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListingArray),   
    })
    .then(r => r.json())
    .then(promisedListingArray => setListings(promisedListingArray));

  }