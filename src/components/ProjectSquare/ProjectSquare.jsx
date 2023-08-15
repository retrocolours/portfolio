import { useState } from "react";
import "./ProjectSquare.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const ProjectSquare = ({ projectData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Add this state variable

  const imageArr = projectData.content.imageSrc;

  const handleLeftClick = () => {
    setDirection("left");
    setActiveIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : imageArr.length - 1
    );
  };

  const handleRightClick = () => {
    setDirection("right");
    setActiveIndex((nextIndex) =>
      nextIndex + 1 <= imageArr.length - 1 ? nextIndex + 1 : 0
    );
  };

  if (!imageArr.length) return "empty imageArr state";

  return (
    <article
      className="article"
      key={projectData.index}
      data-index={projectData.index}
    >
      
      <div className="article__section--container">
        <div className="article__section-image-container">
          {imageArr.map((image, index) => {
            let style =
              direction === "right" // Use direction to determine default style
                ? { transform: "translate(-100%, -50%)" }
                : { transform: "translate(100%, -50%)" };

            if (index === activeIndex) {
              style = { transform: "translate(0%, -50%)" }; // Shift to Active
            } else if (
              index === activeIndex - 1 ||
              (activeIndex === 0 && index === imageArr.length - 1)
            ) {
              style = {
                transform: "translate(-100%, -50%)",
                ...(direction === "left" && { transition: "none" }),
              }; // Shift Left
            } else if (
              index === activeIndex + 1 ||
              (activeIndex === imageArr.length - 1 && index === 0)
            ) {
              // if current index is the index AFTER activeIndex OR
              // if current index is the first index (0) AND active index is the last index
              // THEN translateX to the right
              // Additionally if this happened from a SHIFT left button - have a transition
              // if it happened from SHIFT RIGHT button - no transition (teleport)
              style = {
                transform: "translate(100%, -50%)",
                ...(direction === "right" && { transition: "none" }),
              }; // Shift Right
            }
            return (
              <img
                key={`project-image-${index}`}
                className="article__section-image"
                src={image.src}
                style={style}
              />
            );
          })}
        </div>
        <div className="article__section article__section_bottom">
          <h3 className="article__section article__section--title">
            {projectData.content.description}
          </h3>
          <div className="article__section article__section--nav">
            <button
              className="article__button article__button--left"
              type="button"
              onClick={handleLeftClick}
            >
              <BiLeftArrow size={21} />
            </button>
            <button
              className="article__button article__button--right"
              type="button"
              onClick={handleRightClick}
            >
              <BiRightArrow size={21} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectSquare;
