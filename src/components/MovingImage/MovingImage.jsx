import React, { useState } from "react";
import "./MovingImage.scss";
import statue from "../../assets/statue.png";

const MovingImage = ({ xCords, yCords }) => {
  return (
    <div className="moving-image-container">
      <img
        src={statue}
        alt="Moving Statue"
        style={{
          transform: `translate(${xCords}px, ${yCords}px)`,
        }}
      />
    </div>
  );
};

export default MovingImage;
