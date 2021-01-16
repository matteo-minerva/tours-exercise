import React from "react";

const TourInfo = ({ name, price }) => {
  return (
    <div className="tour-info">
      <h4>{name}</h4>
      <h4 className="tour-price">${price}</h4>
    </div>
  );
};

export default TourInfo;
