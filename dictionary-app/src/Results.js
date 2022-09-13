import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="col-7">
        <div className="results">
          <h2>{props.data.word}</h2>
          {props.data.phonetics?.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}

          {props.data.meanings?.map(function (meanings, index) {
            return (
              <section key={index}>
                <Meaning meanings={meanings} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
