import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Counter = ({ onCounterComplete }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const counter = counterRef.current;

    if (counter) {
      gsap.fromTo(
        counter,
        {
          count: 0,
        },
        {
          duration: 3,
          count: 100,
          roundProps: "count",
          onUpdate: () => {
            counter.querySelector("h1").textContent = counter.count; // Update the counter value
          },
          onComplete: () => {
            onCounterComplete(); // Callback to notify the completion of the counter animation
          },
        }
      );
    }
  }, [onCounterComplete]);

  return (
    <div className="counter" ref={counterRef}>
      <h1 ref={counterRef}>0</h1>
    </div>
  );
};

export default Counter;
