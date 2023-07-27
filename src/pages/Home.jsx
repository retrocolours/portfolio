import { useState, useEffect } from "react";
import "./Home.scss";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { PiArrowBendUpLeftDuotone } from "react-icons/pi";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";
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
        // imageSrc: Clarity,
      },
    },
    {
      index: 1,
      status: "after",
      content: {
        image: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        description: "world",
        imageSrc: testtwo,
      },
    },
    {
      index: 2,
      status: "after",
      content: {
        image: "3 Duis aute irure dolor in reprehenderit in voluptate velit...",
        description: "foo",
        imageSrc: testthree,
      },
    },
    {
      index: 3,
      status: "after",
      content: {
        image: "Excepteur sint occaecat cupidatat non proident...",
        description: "bar",
        imageSrc: testfour,
      },
    },
  ]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    const targetX = (window.innerWidth / 2 - clientX) * 0.1;
    const targetY = (window.innerHeight / 2 - clientY) * 0.05;
    setImagePosition({ x: targetX, y: targetY });
  };

  const handleLeftClick = () => {
    const prevIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
    setActiveIndex(prevIndex);
    setGroups(
      groups.map((group, index) => {
        if (index === prevIndex) {
          return { ...group, status: "becoming-active-from-before" };
        } else if (index === activeIndex) {
          return { ...group, status: "after" };
        }
        return group;
      })
    );
  };

  const handleRightClick = () => {
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);
    setGroups(
      groups.map((group, index) => {
        if (index === nextIndex) {
          return { ...group, status: "becoming-active-from-after" };
        } else if (index === activeIndex) {
          return { ...group, status: "before" };
        }
        return group;
      })
    );
  };

  useEffect(() => {
    setGroups((prevGroups) =>
      prevGroups.map((group) => {
        if (
          group.status === "becoming-active-from-after" ||
          group.status === "becoming-active-from-before"
        ) {
          return { ...group, status: "active" };
        }
        return group;
      })
    );
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
                  <a href="#">Menu</a>
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
                  data-status={group.status}
                >
                  {/* <div className="article__section article__section--image">
                    {group.content.image}
                  </div> */}
                  {/* <p className="article__section article__section--description">
                    {group.content.description}
                  </p> */}
                  <div className="article__section article__section_bottom">
                    <h3 className="article__section article__section--title">
                      Title Here
                    </h3>
                    <div className="article__section article__section--nav">
                      <button
                        className="article__button"
                        type="button"
                        onClick={handleLeftClick}
                      >
                        <PiArrowBendUpLeftDuotone size={24} />
                      </button>
                      <button
                        className="article__button"
                        type="button"
                        onClick={handleRightClick}
                      >
                        <PiArrowBendUpRightDuotone size={24} />
                      </button>
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
