import React from "react";
import SingleTour from "./SingleTour";

const TourList = ({ data, removeTour }) => {
  const list = data.map((item) => {
    return <SingleTour key={item.id} {...item} removeTour={removeTour} />;
  });

  return <div>{list}</div>;
};

export default TourList;
