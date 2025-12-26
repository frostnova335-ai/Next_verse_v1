import { useState } from "react";
import "../styles/companyInfo.css";

const SERVICES = [
  {
    title: "Digital Engineering",
    items: ["Enterprise IT", "Cloud Solutions", "Platform Modernization"],
  },
  {
    title: "Data & AI",
    items: ["Data Platform & Intelligence", "AI Strategy & Consulting", "ML Engineering"],
  },
  {
    title: "Brand & Digital CX",
    items: ["Experience Design", "Product Development", "Design Systems"],
  },
];

export default function CompanyInfo() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="company-info">
      <div className="company-info-container">

        <p className="company-info-top">
          Delivering What’s <span>Next →</span> in Enterprise Solutions.
        </p>

        {SERVICES.map((service, index) => (
          <div
            key={index}
            className={`service-block ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="service-header"
              onClick={() => toggle(index)}
            >
              <h3>{service.title}</h3>
              <span className="arrow">↘</span>
            </button>

            <div className="service-content">
              {service.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
