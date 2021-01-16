import React from "react";
import TourInfo from "./TourInfo";
import Paragraph from "./Paragraph";

const Footer = ({ name, price, info, removeTour, id }) => {
  return (
    <footer>
      <TourInfo name={name} price={price} />
      <Paragraph info={info} />

      <button onClick={() => removeTour(id)} className="delete-btn">
        Not interested
      </button>
    </footer>
  );
};

export default Footer;
