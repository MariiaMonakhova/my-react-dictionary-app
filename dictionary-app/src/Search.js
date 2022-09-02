import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState({});

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Search">
      <section>
        <form className="search-form" onSubmit={search}>
          <input
            type="search"
            placeholder="Search your word here"
            onChange={handleWordChange}
            className="search-area"
          />
          <button type="submit" className="submit-area">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </section>
      <Results data={result} />
    </div>
  );
}
