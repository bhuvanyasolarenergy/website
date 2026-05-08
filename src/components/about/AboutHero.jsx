import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__bg" aria-hidden="true" />
      <div className="container">
        <div className="about-hero__inner">
          <nav className="about-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="about-hero__separator" aria-hidden="true">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="about-hero__title">
            Solar PV, BESS &amp; <em>turnkey consultancy</em>
          </h1>
          <p className="about-hero__tagline">{company.tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
