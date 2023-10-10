import { useState, useEffect } from "react";
import "./Home.scss";
import Clarity from "../assets/Clarity.png";
import Clarity2 from "../assets/Clarity2.png";
import Clarity4 from "../assets/Clarity4.png";
import Claritytest from "../assets/Claritytest.png";
import Bandsitetest from "../assets/Bandsitetest.png";
import Bandsite2 from "../assets/Bandsite2.png";
import Bandsite3 from "../assets/Bandsite3.png";
import Bandsite4 from "../assets/Bandsite4.png";
import Bandsite5 from "../assets/Bandsite5.png";
import Bandsite6 from "../assets/Bandsite6.png";
import Bandsite8 from "../assets/Bandsite8.png";
import Bandsite9 from "../assets/Bandsite9.png";
import Bandsite10 from "../assets/Bandsite10.png";
import BrainFlix3 from "../assets/BrainFlix3.png";
import BrainFlix4 from "../assets/BrainFlix4.png";
import BrainFlix5 from "../assets/BrainFlix5.png";
import Brainflixtest from "../assets/Brainflixtest.png";
import Instock from "../assets/Instock.png";
import Instock2 from "../assets/Instock2.png";
import Instock3 from "../assets/Instock3.png";
import Instock4 from "../assets/Instock4.png";
import Instock8 from "../assets/Instock8.png";
import Instock6 from "../assets/Instock6.png";
import Instock7 from "../assets/Instock7.png";
import Volunteer from "../assets/Volunteer.png";
import Volunteer2 from "../assets/Volunteer2.png";
import Volunteer3 from "../assets/Volunteer3.png";
import Volunteer4 from "../assets/Volunteer4.png";
import Volunteer5 from "../assets/Volunteer5.png";
import Volunteer6 from "../assets/Volunteer6.png";
import Volunteer7 from "../assets/Volunteer7.png";
import Volunteer8 from "../assets/Volunteer8.png";
import Volunteer9 from "../assets/Volunteer9.png";
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
          src: Clarity2,
        },
        {
          src: Claritytest,
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
          src: Instock,
        },
        {
          src: Instock2,
        },
        {
          src: Instock3,
        },
        {
          src: Instock4,
        },
        {
          src: Instock8,
        },
        {
          src: Instock6,
        },
        {
          src: Instock7,
        }
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
          src: Brainflixtest,
        },
        {
          src: BrainFlix4,
        },
        {
          src: BrainFlix3,
        },
        {
          src: BrainFlix5,
        }
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
          src: Bandsite10,
        },
        {
          src: Bandsitetest,
        },
        {
          src: Bandsite8,
        },
        {
          src: Bandsite9,
        },
        {
          src: Bandsite4,
        },
        {
          src: Bandsite6,
        },
      ],
    },
  },

  {
    index: 4,
    content: {
      image: "Excepteur sint occaecat cupidatat non proident...",
      description: "Volunteer Connect",
      imageSrc: [
        {
          src: Volunteer,
        },
        {
          src: Volunteer2,
        },
        {
          src: Volunteer3,
        },
        {
          src: Volunteer4,
        },
        {
          src: Volunteer5,
        },
        {
          src: Volunteer6,
        },
        {
          src: Volunteer7,
        },
        {
          src: Volunteer8,
        },
        {
          src: Volunteer9,
        },
      ],
    },
  },

  // {
  //   index: 5,
  //   content: {
  //     image: "Excepteur sint occaecat cupidatat non proident...",
  //     description: "Volunteer Connect",
  //     imageSrc: [
  //       {
  //         src: testtwo,
  //       },
  //       {
  //         src: testthree,
  //       },
  //       {
  //         src: testfour,
  //       },
  //     ],
  //   },
  // },
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
