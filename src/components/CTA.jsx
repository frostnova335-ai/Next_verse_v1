import "../styles/CTA.css";

export default function CTA() {
  return (
    <footer className="footer">

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h3>Newsletter</h3>

        <div className="newsletter-input">
          <input type="email" placeholder="Email" />
          <span className="arrow">↗</span>
        </div>

        <p className="newsletter-text">
          Subscribe to stay up-to-date on the technologies defining today
          and shaping tomorrow.
        </p>

        <div className="quick-links">
          <a href="#">Consulting ↗</a>
          <a href="#">Collaborate ↗</a>
          <a href="#">Career ↗</a>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="footer-links">

        <div>
          <h4>Solutions</h4>
          <ul>
            <li>Custom Software Development</li>
            <li>Mobile App Development</li>
            <li>Digital Commerce Solutions</li>
            <li>AI Powered Automation & API</li>
            <li>Data Strategy & Consulting</li>
            <li>Advanced Analytics</li>
          </ul>
        </div>

        <div>
          <h4>Industries</h4>
          <ul>
            <li>Insurance & Warranty</li>
            <li>Healthcare & HealthTech</li>
            <li>Education & EduTech</li>
            <li>Retail & Lifestyle</li>
            <li>Manufacturing</li>
            <li>Media & Entertainment</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>Who We Are</li>
            <li>The Leadership</li>
            <li>Our Commitments</li>
            <li>Thoughts & Insights</li>
            <li>Life at Company</li>
            <li>Careers</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 Your Company. All rights reserved.</p>

        <div className="legal">
          <a href="#">Legal</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
}
