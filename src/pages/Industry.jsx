import PageHeader from "../components/PageHeader";
import "../styles/commonPage.css";

export default function Industry() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Industry-focused solutions that deliver measurable impact."
      />

      <section className="page-content">
        <div className="card">Banking & Finance</div>
        <div className="card">Healthcare</div>
        <div className="card">Retail & E-commerce</div>
        <div className="card">Telecom</div>
      </section>
    </>
  );
}
