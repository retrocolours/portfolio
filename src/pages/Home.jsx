import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { gsap } from "gsap";

import {
  Clarity2,
  Clarity4,
  Claritytest,
  Bandsitetest,
  Bandsite4,
  Bandsite6,
  Bandsite8,
  Bandsite9,
  Bandsite10,
  BrainFlix3,
  BrainFlix4,
  BrainFlix5,
  Brainflixtest,
  Instock,
  Instock2,
  Instock3,
  Instock4,
  Instock6,
  Instock7,
  Instock8,
  Volunteer,
  Volunteer2,
  Volunteer3,
  Volunteer4,
  Volunteer5,
  Volunteer6,
  Volunteer7,
  Volunteer8,
  Volunteer9,
} from "../assets/index";
// import Instock_clear from "../assets/images/alternative images/Instock_clear.png";
import MovingImage from "../components/MovingImage/MovingImage";
import ProjectSquare from "../components/ProjectSquare/ProjectSquare";
import Counter from "../components/Counter/Counter";

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
        // {
        //   src: Instock_clear,
        // },
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
                  <div className="about__link">
                    T.
                  </div>
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
                  I am currently based in Vancouver, B.C. but I've been
                  wandering around the world almost as long as I can remember
                  myself ("ask me where I'm from, I'll say a different land"). I
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
