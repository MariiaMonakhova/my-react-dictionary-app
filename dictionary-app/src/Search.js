import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [result, setResult] = useState({});
  let [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "FZ4QrHmLbY1lEMJYgdKU5XVN1b0uvZENwtsZUfL6ppPd4tZBSzsKfcV0";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
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
        <div className="row">
          <div className="col-md-7">
            <Results data={result} />
          </div>
          <div className="col-md-5">
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
