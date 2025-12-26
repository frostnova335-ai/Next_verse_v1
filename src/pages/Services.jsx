import { services } from "../data/servicesData";
import "../styles/services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Digital Engineering</h2>
        <p className="subtitle">
          Delivering What’s Next Verse in Enterprise Solutions
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
