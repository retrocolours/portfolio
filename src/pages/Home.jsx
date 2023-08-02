import { useState, useEffect } from "react";
import "./Home.scss";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { PiArrowBendUpLeftDuotone } from "react-icons/pi";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";
import { GiSparrow } from "react-icons/gi";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import Clarity from "../assets/Clarity.png";
import testtwo from "../assets/testtwo.jpg";
import testthree from "../assets/testthree.jpg";
import testfour from "../assets/testfour.jpg";
import statue from "../assets/statue.png";
import MovingImage from "../components/MovingImage";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [groups, setGroups] = useState([
    {
      index: 0,
      status: "active",
      content: {
        description: "Clarity",
        image: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        // imageSrc: [Clarity, testtwo, testthree, testfour, Clarity, testfour],
        imageSrc: [
          {
            src: Clarity,
            status: "active",
          },
          {
            src: testtwo,
            status: "after",
          },
          {
            src: testthree,
            status: "after",
          },
          {
            src: testfour,
            status: "after",
          },
        ],
      },
    },
    {
      index: 1,
      status: "after",
      content: {
        image: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        description: "In Stock",
        imageSrc: [testtwo],
      },
    },
    {
      index: 2,
      status: "after",
      content: {
        image: "3 Duis aute irure dolor in reprehenderit in voluptate velit...",
        description: "BrainFlix",
        imageSrc: [testthree],
      },
    },
    {
      index: 3,
      status: "after",
      content: {
        image: "Excepteur sint occaecat cupidatat non proident...",
        description: "Bandsite",
        imageSrc: [testfour],
      },
    },

    {
      index: 4,
      status: "after",
      content: {
        image: "Excepteur sint occaecat cupidatat non proident...",
        description: "Industry Project",
        imageSrc: [testfour],
      },
    },

    {
      index: 5,
      status: "after",
      content: {
        image: "Excepteur sint occaecat cupidatat non proident...",
        description: "Volunteer Finder",
        imageSrc: [testfour],
      },
    },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This needs to be in its own component

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    const targetX = (window.innerWidth / 2 - clientX) * 0.1;
    const targetY = (window.innerHeight / 2 - clientY) * 0.05;
    setImagePosition({ x: targetX, y: targetY });
  };

  const handleLeftClick = () => {
    console.log("handleLeftClick");
    // instead of using groups

    // we are going to use groups[0].content.imageSrc[]
    const imageGroups = groups[0].content.imageSrc;

    const prevIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : imageGroups.length - 1;
    setActiveIndex(prevIndex);
    setGroups(
      imageGroups.map((image, index) => {
        if (index === prevIndex) {
          return { ...image, status: "becoming-active-from-before" };
        } else if (index === activeIndex) {
          return { ...image, status: "after" };
        }
        return image;
      })
    );
    setGroups(
      groups.map((group, index) => {
        if (index === 0) {
          return {
            ...group,
            content: {
              ...group.content,
              imageSrc: imageGroups.map((image, index) => {
                if (index === prevIndex) {
                  return { ...image, status: "becoming-active-from-before" };
                } else if (index === activeIndex) {
                  return { ...image, status: "after" };
                }
                return image;
              }),
            },
            status: "becoming-active-from-after",
          };
        }
        return group;
      })
    );
  };

  const handleRightClick = () => {
    console.log("handleRightClick");
    const imageGroups = groups[0].content.imageSrc;
    console.log("imageGroups: ", imageGroups);

    const nextIndex =
      activeIndex + 1 <= imageGroups.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);

    setGroups(
      groups.map((group, index) => {
        if (index === 0) {
          return {
            ...group,
            content: {
              ...group.content,
              imageSrc: imageGroups.map((image, index) => {
                if (index === nextIndex) {
                  return { ...image, status: "becoming-active-from-after" };
                } else if (index === activeIndex) {
                  return { ...image, status: "before" };
                }
                return image;
              }),
            },
            status: "becoming-active-from-after",
          };
        }
        return group;
      })
    );
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // setGroups((prevGroups) =>
    //   prevGroups.map((group) => {
    //     if (
    //       group.status === "becoming-active-from-after" ||
    //       group.status === "becoming-active-from-before"
    //     ) {
    //       return { ...group, status: "active" };
    //     }
    //     return group;
    //   })
    // );
    const imageGroups = groups[0].content.imageSrc;

    setGroups((prevGroups) => {
      console.log("prevGroups: ", prevGroups);
      return prevGroups.map((group, index) => {
        if (index === 0) {
          console.log("group.content.imageSrc!!: ", group.content.imageSrc);
          return {
            ...group,
            content: {
              ...group.content,
              imageSrc: group.content.imageSrc.map((image, index) => {
                console.log("image ????: ", image);
                if (
                  image?.status === "becoming-active-from-after" ||
                  image?.status === "becoming-active-from-before"
                ) {
                  return { ...image, status: "active" };
                }

                return image;
              }),
            },
          };
        }

        return group;
      });
    });
  }, [activeIndex]);

  return (
    <>
      <div className="site-container" onMouseMove={handleMouseMove}>
        <div className="site-inner-container">
          {/* <nav className="nav">
            <div id="logo" className="nav__section">
              <a href="#">T.</a>
            </div>

            <div id="link" className="nav__section">
              <a href="#">About</a>
              <a href="#">Work</a>
              <a href="#">CV</a>
            </div>

            <div id="social" className="nav__section">
              <a href="#">
                <VscGithub size={21} />
              </a>
              <a href="#">
                <PiLinkedinLogo size={24} />
              </a>
            </div>
            <div id="contact" className="nav__section">
              <a href="#">Get in Touch</a>
            </div>
            <div id="menu" className="nav__section">
              <a href="#">Menu</a>
            </div>
          </nav> */}

          <main className="main">
            <section className="about">
              <div className="about__nav">
                <div className="about__logo">
                  <a href="#">T.</a>
                </div>
                <div className="about__menu">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen((prev) => !prev);
                    }}
                    href="#"
                  >
                    Menu
                  </button>
                  {isMenuOpen && (
                    <div className="about__menu-container">
                      Menu Placeholder
                    </div>
                  )}
                </div>
              </div>
              <div className="about__content">
                <h1 className="about__title">
                  Ta<span className="about__fun">t</span>iana Pri
                  <span className="about__fun">v</span>ezen
                  <span className="about__fun">t</span>seva
                </h1>
                <h2 className="about__subtitle">Full-Stack Web Developer</h2>
                <p className="about__text">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
              </div>

              <MovingImage xCords={imagePosition.x} yCords={imagePosition.y} />
              <div className="about__social">
                <button className="about__about" type="button">
                  About
                </button>
                <button className="about__contact" type="button">
                  Contact
                </button>
              </div>
            </section>
            <section className="projects">
              {groups.map((group) => (
                <article
                  className="article"
                  key={group.index}
                  data-index={group.index}
                  // data-status={group.status}
                >
                  {/* <div className="article__section article__section--image">
                    {group.content.image}
                  </div> */}
                  {/* <p className="article__section article__section--description">
                    {group.content.description}
                  </p> */}
                  <div className="article__section--container">
                    <div className="article__section-image-container">
                      {group.content.imageSrc.map((image, index) => {
                        // console.log("image1111: ", image);
                        return (
                          <img
                            key={`project-image-${index}`}
                            className="article__section-image"
                            src={image?.src}
                            data-status={image?.status}
                          />
                        );
                      })}
                      {/* <img
                        className="article__section-image"
                        src={group.content.imageSrc[activeIndex]}
                      /> */}
                    </div>
                    <div className="article__section article__section_bottom">
                      <h3 className="article__section article__section--title">
                        {group.content.description}
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
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
