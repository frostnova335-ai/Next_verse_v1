import "../styles/About.css";

const FACILITIES = [
  "Product Engineering",
  "Cloud & DevOps",
  "AI & Machine Learning",
  "Data Platforms",
  "Enterprise Modernization",
  "UI/UX & Design Systems",
  "Cybersecurity",
  "API & Integrations",
];

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* ABOUT CONTENT */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a technology-driven organization focused on building
            enterprise-grade digital products, platforms, and intelligent
            systems. Our teams combine deep engineering expertise, design
            thinking, and AI-led innovation to help businesses scale,
            modernize, and stay competitive in an ever-evolving digital
            landscape.
          </p>
        </div>

        {/* ROLLER / MARQUEE */}
        <div className="about-roller">
          <div className="roller-track">
            {[...FACILITIES, ...FACILITIES].map((item, index) => (
              <span key={index} className="roller-item">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
