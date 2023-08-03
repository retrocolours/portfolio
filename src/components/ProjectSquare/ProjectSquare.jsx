import { useState, useEffect } from "react";
import "./ProjectSquare.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const ProjectSquare = ({ projectData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageArr, setImageArr] = useState(projectData.content.imageSrc);

  useEffect(() => {
    setImageArr(
      imageArr.map((image) => {
        if (
          image?.status === "becoming-active-from-after" ||
          image?.status === "becoming-active-from-before"
        ) {
          return { ...image, status: "active" };
        }
        return image;
      })
    );
  }, [activeIndex]);

  const handleLeftClick = () => {
    const imageGroups = projectData.content.imageSrc;
    const prevIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : imageGroups.length - 1;
    setActiveIndex(prevIndex);
    setImageArr(
      imageArr.map((image, index) => {
        if (index === prevIndex) {
          return { ...image, status: "becoming-active-from-before" };
        } else if (index === activeIndex) {
          return { ...image, status: "after" };
        }
        return image;
      })
    );
  };

  const handleRightClick = () => {
    const imageGroups = projectData.content.imageSrc;
    const nextIndex =
      activeIndex + 1 <= imageGroups.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);
    setImageArr(
      imageArr.map((image, index) => {
        if (index === nextIndex) {
          return { ...image, status: "becoming-active-from-after" };
        } else if (index === activeIndex) {
          return { ...image, status: "before" };
        }
        return image;
      })
    );
  };

  if (!imageArr.length) return "WEEEE";

  return (
    <article
      className="article"
      key={projectData.index}
      data-index={projectData.index}
    >
      <div className="article__section--container">
        <div className="article__section-image-container">
          {imageArr.map((image, index) => {
            return (
              <img
                key={`project-image-${index}`}
                className="article__section-image"
                src={image?.src}
                data-status={image?.status}
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
