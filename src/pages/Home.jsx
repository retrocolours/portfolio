// import { useEffect, useState } from "react";
import "./Home.scss";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import { PiArrowBendUpLeftDuotone } from "react-icons/pi";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";

function Home() {
  const handleLeftClick = () => {
    console.log("left button clicked");
  };
  const handleRightClick = () => {
    console.log("right button clicked");
  };

  return (
    <>
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
        <article className="article" data-index="0" data-status="active">
          <div className="article__section article__section--image">Hello</div>
          <div className="article__section article__section--description">
            hello
          </div>
          <div className="article__section article__section--title">hello</div>
          <div className="article__section article__section--nav">
            <button
              className="article__button"
              type="button"
              onClick={() => handleLeftClick()}
            >
              <PiArrowBendUpLeftDuotone size={24} />
            </button>
            <button
              className="article__button"
              type="button"
              onClick={() => handleRightClick()}
            >
              <PiArrowBendUpRightDuotone size={24} />
            </button>
          </div>
        </article>
        <article className="article" data-index="1" data-status="inactive">
          <div className="article__section article__section--image">Hello</div>
          <div className="article__section article__section--description">
            hello
          </div>
          <div className="article__section article__section--title">hello</div>
          <div className="article__section article__section--nav">
            <button
              className="article__button"
              type="button"
              onClick={() => handleLeftClick()}
            >
              <PiArrowBendUpLeftDuotone size={24} />
            </button>
            <button
              className="article__button"
              type="button"
              onClick={() => handleRightClick()}
            >
              <PiArrowBendUpRightDuotone size={24} />
            </button>
          </div>
        </article>
        <article className="article" data-index="2" data-status="inactive">
          <div className="article__section article__section--image">Hello</div>
          <div className="article__section article__section--description">
            hello
          </div>
          <div className="article__section article__section--title">hello</div>
          <div className="article__section article__section--nav">
            <button
              className="article__button"
              type="button"
              onClick={() => handleLeftClick()}
            >
              <PiArrowBendUpLeftDuotone size={24} />
            </button>
            <button
              className="article__button"
              type="button"
              onClick={() => handleRightClick()}
            >
              <PiArrowBendUpRightDuotone size={24} />
            </button>
          </div>
        </article>
        <article className="article" data-index="3" data-status="inactive">
          <div className="article__section article__section--image">Hello</div>
          <div className="article__section article__section--description">
            hello
          </div>
          <div className="article__section article__section--title">hello</div>
          <div className="article__section article__section--nav">
            <button
              className="article__button"
              type="button"
              onClick={() => handleLeftClick()}
            >
              <PiArrowBendUpLeftDuotone size={24} />
            </button>
            <button
              className="article__button"
              type="button"
              onClick={() => handleRightClick()}
            >
              <PiArrowBendUpRightDuotone size={24} />
            </button>
          </div>
        </article>
      </main>
    </>
  );
}

export default Home;
