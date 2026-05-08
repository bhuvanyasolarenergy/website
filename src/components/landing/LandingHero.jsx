import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const pillars = [
  {
    title: "End-to-end lifecycle",
    text: "Pre-bid feasibility through commissioning and long-term O&M.",
  },
  {
    title: "Bankable & compliant",
    text: "MNRE / CEA / DISCOM compliance and lender-ready documentation.",
  },
  {
    title: "Vendor-neutral",
    text: "Technology-independent, aligned to your project outcomes.",
  },
];

const LandingHero = () => {
  // Build marquee items from the real project ledger
  const marqueeItems = [...company.projects]
    .sort((a, b) => b.capacityKw - a.capacityKw)
    .slice(0, 12);

  // duplicate for seamless loop
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <section className="ld-hero">
      <div className="ld-hero__bg" aria-hidden="true" />
      <div className="ld-hero__inner">
        <div className="ld-hero__nav">
          <span className="badge">Active across SECI · NTPC · RVUNL · DISCOM tenders</span>
          <span className="d-none d-md-inline">Solar PV · BESS · Consultancy · EPC</span>
        </div>

        <div className="ld-hero__grid">
          <div>
            <h1 className="ld-hero__title">
              Solar PV &amp; <em>BESS</em>, executed with engineering precision.
            </h1>
            <p className="ld-hero__lede">
              End-to-end consultancy and EPC for utility-scale, C&amp;I, and
              rooftop projects — from feasibility and tender support to
              commissioning, O&amp;M, and BESS factory setup. Built by
              engineers, aligned to outcomes.
            </p>
            <div className="ld-hero__cta">
              <Link to="/services" className="ld-btn ld-btn--accent">
                Explore services <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link to="/contact" className="ld-btn ld-btn--inverse">
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="ld-hero__pillars">
            {pillars.map(({ title, text }, i) => (
              <div key={title} className="ld-hero__pillar">
                <span className="num">{String(i + 1).padStart(2, "0")} /</span>
                <div className="text">
                  <strong>{title}</strong>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ld-hero__marquee" aria-label="Featured client portfolio">
          <p className="marquee-label">Featured installations across India</p>
          <div className="marquee-track">
            {track.map((p, i) => (
              <span
                className="marquee-item"
                key={`${p.client}-${p.capacityKw}-${i}`}
              >
                <span className="cap">{p.capacityKw} kW</span>
                <span>{p.client}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
