import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [result, setResult] = useState({});
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search your word here"
            onChange={handleWordChange}
            className="search-area"
          />
          <button type="submit" className="submit-area">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <Results data={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
