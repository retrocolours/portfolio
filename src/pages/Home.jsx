import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { gsap } from "gsap";

import {
  Clarity1,
  Clarity2,
  Clarity3,
  Clarityclear,
  Bandsite1,
  Bandsite2,
  Bandsite3,
  Bandsite4,
  Bandsite5,
  Bandsite6,
  Bandsiteclear,
  BrainFlix1,
  BrainFlix2,
  BrainFlix3,
  BrainFlix4,
  BrainFlix5,
  BrainFlix6,
  BrainFlixclear,
  Instock1,
  Instock2,
  Instock3,
  Instock4,
  Instock5,
  Instock6,
  Instock7,
  Instockclear,
  Volunteer1,
  Volunteer2,
  Volunteer3,
  Volunteerclear,
} from "../assets/index";
// import Instock_clear from "../assets/images/alternative images/Instock_clear.png";
import MovingImage from "../components/MovingImage/MovingImage";
import ProjectSquare from "../components/ProjectSquare/ProjectSquare";
import Counter from "../components/Counter/Counter";
import DownloadResume from "../components/DownloadResume/DownloadResume";

const groups = [
  {
    index: 0,
    content: {
      description: "Clarity",
      technologies: "React, Express, Chart.js., SCSS, BEM, JSON, Postman",
      image: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imageSrc: [
        {
          src: Clarityclear,
        },
        {
          src: Clarity1,
        },
        {
          src: Clarity2,
        },
        {
          src: Clarity3,
        },
      ],
    },
  },
  {
    index: 1,
    content: {
      image: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      description: "In Stock",
      technologies: "React, Express, MySQL, Knex, BEM, SCSS, Postman, npm packages",
      imageSrc: [
        {
          src: Instockclear,
        },
        {
          src: Instock1,
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
          src: Instock5,
        },
        {
          src: Instock6,
        },
        {
          src: Instock7,
        },
      ],
    },
  },
  {
    index: 2,
    content: {
      image: "3 Duis aute irure dolor in reprehenderit in voluptate velit...",
      description: "BrainFlix",
      technologies: "React, Node, Express, BEM, Rest API, Postman, SCSS, npm packages",
      imageSrc: [
        {
          src: BrainFlixclear,
        },
        {
          src: BrainFlix1,
        },
        {
          src: BrainFlix2,
        },
        {
          src: BrainFlix3,
        },
        {
          src: BrainFlix4,
        },
        {
          src: BrainFlix5,
        },
        {
          src: BrainFlix6,
        },
      ],
    },
  },
  {
    index: 3,
    content: {
      image: "Excepteur sint occaecat cupidatat non proident...",
      description: "Bandsite",
      technologies: "JavaScript, SCSS, REST API, CSS, Postman",
      imageSrc: [
        {
          src: Bandsiteclear,
        },
        {
          src: Bandsite1,
        },
        {
          src: Bandsite2,
        },
        {
          src: Bandsite3,
        },
        {
          src: Bandsite4,
        },
        {
          src: Bandsite5,
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
      technologies: "Figma, UX/UI design, Adobe Photoshop",
      imageSrc: [
        {
          src: Volunteerclear,
        },
        {
          src: Volunteer1,
        },
        {
          src: Volunteer2,
        },
        {
          src: Volunteer3,
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

  const containerRef = useRef(null);

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
    const container = containerRef.current;

    if (container) {
      gsap.set(container, { opacity: 0 });
    }
  }, []);

  return (
    <>
      <div className="grain"></div>
      <Counter container={containerRef} />
      <div className="site-container" onMouseMove={handleMouseMove}>
        <div className="test"></div>
        <div className="site-inner-container" ref={containerRef}>
          <main className="main">
            <section className="about">
              <div className="about__nav">
                <div className="about__logo">
                  <Link to="/" title="home">
                    <div className="about__link">T.</div>
                  </Link>
                </div>

                <div className="about__menu">
                  <button
                    className="about__menu-button"
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
                      <div className="about__menu-item">
                      <DownloadResume />
                        </div>
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
                  I am currently based in Vancouver, B.C. but I've been
                  wandering around the world almost as long as I can remember
                  myself and I quite often find myself in very different parts of the world. I
                  am passionate about clean, minimalistic design and avant-garde
                  ideas. I thrive as a generalist, focusing on solving the
                  problems using a variety of tools and technologies.
                </p>

                <p className="about__text">
                  I am interested in philosophy and art, I enjoy good stories,
                  and I’m usually traveling, reading or rewatching The Office in
                  my free time.{" "}
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
