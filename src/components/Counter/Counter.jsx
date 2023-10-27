import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Counter.scss";

const Counter = () => {
    useEffect(() => {
      const startLoader = () => {
        let counterElement = document.querySelector('.counter');
        let currentValue = 0;
  
        const updateCounter = () => {
          if (currentValue === 100) {
            return;
          }
  
          currentValue += Math.floor(Math.random() * 10) + 1;
  
          if (currentValue > 100) {
            currentValue = 100;
          }
  
          counterElement.textContent = currentValue;
  
          let delay = Math.floor(Math.random() * 200) + 50;
          setTimeout(updateCounter, delay);
        };
  
        updateCounter();
      };
  
      startLoader();
  
      gsap.to('.counter', 0.25, {
        delay: 3.5,
        opacity: 0,
      });
    }, []);
  
    return <h1 className="counter">0</h1>;
  };

 
export default Counter;
