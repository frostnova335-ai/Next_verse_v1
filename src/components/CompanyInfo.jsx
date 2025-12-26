import "../styles/companyInfo.css";

export default function CompanyInfo() {
  return (
    <section className="company-info">
      <div className="company-info-inner">
        <div className="info-card">
          <h3>18+</h3>
          <p>Years of Experience</p>
        </div>

        <div className="info-card">
          <h3>250+</h3>
          <p>Successful Projects</p>
        </div>

        <div className="info-card">
          <h3>40+</h3>
          <p>Enterprise Clients</p>
        </div>

        <div className="info-card">
          <h3>10+</h3>
          <p>Industries Served</p>
        </div>
      </div>
    </section>
  );
}
