import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Counter.scss";

const Counter = ({ container }) => {
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    if (currentValue >= 100) {
      setCurrentValue(100); // fade counter out
      gsap.to(".counter", {
        opacity: 0,
        duration: 2,
      });

      gsap.to(container.current, {
        duration: 2, // Adjust duration
        opacity: 1,
        // delay: 0.5, 
        ease: "power3.inOut", // Adjust the easing function for smoother animation
        onComplete: () => {
          gsap.set(".counter", { display: "none" });
        },
      });
      return;
    }
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(() => {
      setCurrentValue((prev) => prev + Math.floor(Math.random() * 10) + 1);
    }, delay);
  }, [currentValue, container]);
  return <h1 className="counter">{currentValue}%</h1>;
};

export default Counter;
