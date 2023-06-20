// import { useEffect, useState } from "react";
import "./Home.scss";

function Home() {
  //   const [count, setCount] = useState(0)

  //   useEffect(() => {
  //     console.log('useEffect')
  //   }, [count])

  return (
    <>
      <nav className="nav">
        <div id="logo" className="nav__section">
          <a href="#"></a>
        </div>

        <div id="link" className="nav__section">
          <a href="#">About</a>
          <a href="#">Work</a>
        </div>

        <div id="social" className="nav__section">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
        <div id="contact" className="nav__section">
          <a href="#">Get in Touch</a>
        </div>
      </nav>
    </>
  );
}

export default Home;
