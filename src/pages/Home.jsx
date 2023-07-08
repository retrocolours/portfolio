import { useState, useEffect } from "react";
import "./Home.scss";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { PiArrowBendUpLeftDuotone } from "react-icons/pi";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";
import test from "../assets/test.jpg";
import testtwo from "../assets/testtwo.jpg";
import testthree from "../assets/testthree.jpg";
import testfour from "../assets/testfour.jpg";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [groups, setGroups] = useState([
    {
      index: 0,
      status: "active",
      content: {
        image:
          "1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        description: "hello",
        imageSrc: test,
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
    <div className="background">
      <nav className="nav">
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
      </nav>

      <main className="main">
        {groups.map((group) => (
          <article
            className="article"
            key={group.index}
            data-index={group.index}
            data-status={group.status}
          >
            <div className="article__section article__section--image">
              {group.content.image}
            </div>
            <div className="article__section article__section--description">
              {group.content.description}
            </div>
            <div className="article__section article__section--title">
              <img className="article__image" src={group.content.imageSrc} />
            </div>
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
          </article>
        ))}
      </main>
      </div>
    </>
  );
}

export default Home;
