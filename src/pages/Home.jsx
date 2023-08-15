import { useState, useEffect } from "react";
import "./Home.scss";
import Clarity from "../assets/Clarity.png";
import Clarity2 from "../assets/Clarity2.png";
import Clarity3 from "../assets/Clarity3.png";
import Clarity4 from "../assets/Clarity4.png";
import testtwo from "../assets/testtwo.jpg";
import testthree from "../assets/testthree.jpg";
import testfour from "../assets/testfour.jpg";
import MovingImage from "../components/MovingImage/MovingImage";
import ProjectSquare from "../components/ProjectSquare/ProjectSquare";

const groups = [
  {
    index: 0,
    content: {
      description: "Clarity",
      image: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imageSrc: [
        {
          src: Clarity,
        },
        {
          src: Clarity2,
        },
        {
          src: Clarity4,
        },
      ],
    },
  },
  {
    index: 1,
    content: {
      image: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      description: "In Stock",
      imageSrc: [
        {
          src: testtwo,
        },
        {
          src: testthree,
        },
        {
          src: testfour,
        },
      ],
    },
  },
  {
    index: 2,
    content: {
      image: "3 Duis aute irure dolor in reprehenderit in voluptate velit...",
      description: "BrainFlix",
      imageSrc: [
        {
          src: testtwo,
        },
        {
          src: testthree,
        },
        {
          src: testfour,
        },
      ],
    },
  },
  {
    index: 3,
    content: {
      image: "Excepteur sint occaecat cupidatat non proident...",
      description: "Bandsite",
      imageSrc: [
        {
          src: testtwo,
        },
        {
          src: testthree,
        },
        {
          src: testfour,
        },
      ],
    },
  },

  {
    index: 4,
    content: {
      image: "Excepteur sint occaecat cupidatat non proident...",
      description: "Industry Project",
      imageSrc: [
        {
          src: testtwo,
        },
        {
          src: testthree,
        },
        {
          src: testfour,
        },
      ],
    },
  },

  {
    index: 5,
    content: {
      image: "Excepteur sint occaecat cupidatat non proident...",
      description: "Volunteer Finder",
      imageSrc: [
        {
          src: testtwo,
        },
        {
          src: testthree,
        },
        {
          src: testfour,
        },
      ],
    },
  },
];

function Home() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
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
      <div className="grain"></div>
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
            <section className="about">
              <div className="about__nav">
                <div className="about__logo">
                  <a className="about__link" href="#">T.</a>
                </div>
                <div className="about__menu">
                  <button className="about__menu-button"
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
                  Hello Stranger. I'm Tatiana, but friends call me Tanya. I am a
                  full-stack web developer with a passion for design and
                  aesthetic solutions. 
                </p>

                <p className="about__text">
                I am currently based in Vancouver, B.C.
                  but I've been wandering around the world almost as long as I
                  can remember myself ("ask me where I'm from, I'll say a
                  different land"). I am passionate about clean, minimalistic
                  design and avant-garde ideas. I thrive as a generalist,
                  focusing on solving the problems using a variety of tools and
                  technologies. 
                </p>

                <p className="about__text">
                I am interested in philosophy and art, I
                  enjoy good stories, and I’m usually traveling, reading or rewatching The Office in my free time.{" "}
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
