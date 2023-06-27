// import { useEffect, useState } from "react";
import "./Home.scss";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";

function Home() {
  //   const [count, setCount] = useState(0)

  //   useEffect(() => {
  //     console.log('useEffect')
  //   }, [count])

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
    </>
  );
}

export default Home;
