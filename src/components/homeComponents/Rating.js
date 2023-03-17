import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Rating = ({value, text}) => {
  return (
    <div className="rating">
      {value >= 1 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : value >= 0.5 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      )}

      {value >= 2 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : value >= 1.5 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      )}

      {value >= 3 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : value >= 2.5 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      )}

      {value >= 4 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : value >= 3.5 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      )}

      {value >= 5 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : value >= 4.5 ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      )}

      <span>{value && text}</span>
    </div>
  );
};

export default Rating;
