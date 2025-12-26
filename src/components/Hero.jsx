import { useState, useEffect } from "react";
import "../styles/hero.css";

// Import your images (make sure these files exist)
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

export default function Hero() {
  const slides = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000); // change every 8 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      {slides.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content-box">
        <h1>18 yrs of being Digital first. Digital fast.</h1>
        <p>
          At Next Verse, transformation begins with clarity, people,
          and purpose. We enable enterprises to modernize and scale.
        </p>
      </div>
    </section>
  );
}
