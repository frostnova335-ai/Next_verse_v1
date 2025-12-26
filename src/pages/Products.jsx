import PageHeader from "../components/PageHeader";
import "../styles/commonPage.css";

export default function Products() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Scalable digital products built for speed, intelligence, and growth."
      />

      <section className="page-content">
        <div className="card">AI Analytics Platform</div>
        <div className="card">Customer Insight Hub</div>
        <div className="card">Automation Engine</div>
      </section>
    </>
  );
}
