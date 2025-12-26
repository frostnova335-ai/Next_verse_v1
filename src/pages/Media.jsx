import PageHeader from "../components/PageHeader";
import "../styles/commonPage.css";

export default function Media() {
  return (
    <>
      <PageHeader
        title="Media Center"
        subtitle="News, insights, announcements, and thought leadership."
      />

      <section className="page-content">
        <div className="card">Press Releases</div>
        <div className="card">Blogs & Insights</div>
        <div className="card">Case Studies</div>
      </section>
    </>
  );
}
