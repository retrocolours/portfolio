import React, { useState } from "react";
import "./MovingImage.scss";
import statue from "../assets/statue.png";

const MovingImage = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const targetX = (window.innerWidth / 2 - clientX) * 0.2;
    const targetY = (window.innerHeight / 2 - clientY) * 0.1;
    setImagePosition({ x: targetX, y: targetY });
  };

  return (
    <div className="moving-image-container" onMouseMove={handleMouseMove}>
      <img
        src={statue}
        alt="Moving Statue"
        style={{
          transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
        }}
      />
    </div>
  );
};

export default MovingImage;
