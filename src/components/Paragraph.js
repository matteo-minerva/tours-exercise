import React, { useState, useEffect } from "react";

const Paragraph = ({ info }) => {
  const [shownInfo, setShownInfo] = useState();
  const [btnText, setBtnText] = useState(" read more");

  useEffect(() => setShownInfo(info.slice(0, 200) + "..."), [info]);

  const handleClick = () => {
    if (shownInfo.length > 203) {
      setShownInfo(shownInfo.slice(0, 200) + "...");
      setBtnText(" read more");
    } else {
      setShownInfo(info);
      setBtnText(" show less");
    }
  };

  return (
    <p>
      {shownInfo}
      <button onClick={handleClick}> {btnText}</button>
    </p>
  );
};

export default Paragraph;
