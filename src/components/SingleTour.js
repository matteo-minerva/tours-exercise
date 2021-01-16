import React from "react";
import Footer from "./Footer";

const SingleTour = ({ name, image, price, info, removeTour, id }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <Footer
        name={name}
        price={price}
        info={info}
        id={id}
        removeTour={removeTour}
      />
    </article>
  );
};

export default SingleTour;
