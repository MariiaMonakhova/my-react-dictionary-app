import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [result, setResult] = useState({});
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001dda8472879e44fb6bb2897e624627398";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
