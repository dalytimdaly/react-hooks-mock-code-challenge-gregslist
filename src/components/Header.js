import React from "react";
import Search from "./Search";

function Header({ query, setQuery }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search query={query} setQuery={setQuery} />
    </header>
  );
}

export default Header;
