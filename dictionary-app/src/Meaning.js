import React from "react";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="meaning">
      <h4>{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
