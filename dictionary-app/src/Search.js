import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Search">
      <form className="search-form" onSubmit={search}>
        <input
          type="search"
          placeholder="Search your word here"
          autoFocus={true}
          onChange={handleWordChange}
        />
        <input type="submit" value="🔍" />
      </form>
    </div>
  );
}
