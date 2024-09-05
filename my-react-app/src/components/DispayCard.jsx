import React, {useState}  from "react";

const DisplayCard = ({image,alttext,imgtext}) => {
  return (
    <>
      <img width="75" height="75" src={image} alt = {alttext} />
      <span className ="text_change">{imgtext}</span>
    </>
  );
};

export default DisplayCard;
