import React, { useEffect, useRef } from "react";
import "./CodeRain.css";

const CodeRain = () => {
  const rainRef = useRef(null);
  const chars = ["🌸", "🍃", "🌻"];

  useEffect(() => {
    const rainContainer = rainRef.current;

    for (let i = 0; i < 100; i++) {
      const span = document.createElement("span");
      span.style.left = `${Math.random() * 100}vw`;
      span.style.animationDuration = `${2 + Math.random() * 4}s`;
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.className = "rain-char";
      rainContainer.appendChild(span);
    }

    //cleanup function to remove the rain characters
    return () => {
      rainContainer.innerHTML = "";
    };
  }, []);

  return <div className="code-rain" ref={rainRef}></div>;
};

export default CodeRain;
