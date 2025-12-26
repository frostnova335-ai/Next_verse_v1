import Hero from "../components/Hero";
import CompanyDescription from "../components/CompanyDescription";
import CompanyInfo from "../components/CompanyInfo";
import About from "../components/About";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyDescription />
      <CompanyInfo />
      <About />
      <Stats />
      <CTA />
    </>
  );
}
