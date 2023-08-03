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
import ProjectSquare from "../components/ProjectSquare/ProjectSquare";

function Home() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [groups, setGroups] = useState([
    {
      index: 0,
      status: "active",
      content: {
        description: "Clarity",
        image: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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
        imageSrc: [
          {
            src: Clarity,
            status: "active",
          },
          {
            src: testtwo,
            status: "after",
          },
        ],
      },
    },
    {
      index: 2,
      status: "after",
      content: {
        image: "3 Duis aute irure dolor in reprehenderit in voluptate velit...",
        description: "BrainFlix",
        imageSrc: [
          {
            src: Clarity,
            status: "active",
          },
          {
            src: testtwo,
            status: "after",
          },
        ],
      },
    },
    {
      index: 3,
      status: "after",
      content: {
        image: "Excepteur sint occaecat cupidatat non proident...",
        description: "Bandsite",
        imageSrc: [
          {
            src: Clarity,
            status: "active",
          },
          {
            src: testtwo,
            status: "after",
          },
        ],
      },
    },

    {
      index: 4,
      status: "after",
      content: {
        image: "Excepteur sint occaecat cupidatat non proident...",
        description: "Industry Project",
        imageSrc: [
          {
            src: Clarity,
            status: "active",
          },
          {
            src: testtwo,
            status: "after",
          },
        ],
      },
    },

    {
      index: 5,
      status: "after",
      content: {
        image: "Excepteur sint occaecat cupidatat non proident...",
        description: "Volunteer Finder",
        imageSrc: [
          {
            src: Clarity,
            status: "active",
          },
          {
            src: testtwo,
            status: "after",
          },
        ],
      },
    },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    const targetX = (window.innerWidth / 2 - clientX) * 0.1;
    const targetY = (window.innerHeight / 2 - clientY) * 0.05;
    setImagePosition({ x: targetX, y: targetY });
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

  return (
    <>
      <div className="site-container" onMouseMove={handleMouseMove}>
        <div className="test"></div>
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
            {/* <div class="grain"></div> */}

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
              {groups.map((group, index) => (
                <ProjectSquare projectData={group} key={`project-${index}`} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
