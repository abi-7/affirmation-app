import React, { useState, useEffect } from "react";
import { getAll } from "@divyanshu013/inspirational-quotes";

export default function QuoteWidget() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch all quotes and set them in the state
    const quotesData = getAll();
    setQuotes(quotesData);
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const currentQuote = quotes.length > 0 ? quotes[currentIndex] : null;

  return (
    <div className="widget">
      <h2>🌸 Daily Affirmation 🌸</h2>
      {currentQuote && (
        <blockquote>
          <p>"{currentQuote.quote}"</p>
        </blockquote>
      )}
      {currentQuote && <h3>{currentQuote.author}</h3>}
      <div className="button-container">
        <button onClick={handlePreviousClick} className="prev-btn">
          &#8249;
        </button>
        <button onClick={handleNextClick} className="next-btn">
          &#8250;
        </button>
      </div>
    </div>
  );
}
