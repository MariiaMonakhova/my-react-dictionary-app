import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.tiny} key={index} className="img-fluid" alt={photo.alt} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
