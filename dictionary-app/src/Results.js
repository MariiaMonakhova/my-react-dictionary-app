import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <h2>{props.data.word}</h2>
        {props.data.meanings?.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
