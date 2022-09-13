import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetic mt-3">
      <a href={props.phonetic.audio} target="_blank" className="mt-2">
        PLAY
      </a>
      <span>{props.phonetic.text}</span>
    </div>
  );
}
