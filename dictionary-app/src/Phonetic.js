import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="phonetic">
        <p>{props.phonetic.text}</p>
        <figure className="mt-2">
          <audio controls src={props.phonetic.audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
    );
  } else {
    return <p>{props.phonetic.text}</p>;
  }
}
