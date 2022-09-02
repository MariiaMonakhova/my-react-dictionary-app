import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <figure>
        <audio controls src={props.phonetic.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>

      {props.phonetic.text}
    </div>
  );
}
