import { Link } from "react-router-dom";
import { caseSpotlightPlaceholderImage, company } from "@/assets/data/company";

const LandingCase = () => {
  // Featured: largest project in the ledger
  const top = [...company.projects].sort(
    (a, b) => b.capacityKw - a.capacityKw,
  )[0];

  const highlights = [
    { label: "Capacity", value: `${top.capacityKw} kW` },
    { label: "Sector", value: top.sector },
    { label: "Region", value: "Rajasthan" },
    { label: "Delivery", value: "Turnkey EPC" },
  ];

  return (
    <section className="ld-section ld-case">
      <div className="ld-section__inner">
        <div className="ld-case__grid">
          <div className="ld-case__copy ld-reveal">
            <p className="eyebrow">Case spotlight</p>
            <h2 className="title">
              <em>{top.client}</em> — 1 MW industrial rooftop, end-to-end.
            </h2>
            <p className="desc">
              Our largest installation to date. From feasibility and load
              profiling to engineering, government approvals, supply,
              installation, commissioning, and ongoing O&amp;M — delivered as a
              single-point engagement with a measurable reduction in grid
              draw across the manufacturing cycle.
            </p>
            <ul className="ld-case__notes">
              <li>
                <i className="fa-solid fa-check" />
                <span>
                  <strong>Site-tuned design</strong>
                  Shadow mapping, load profiling, and roof-structure
                  validation before tilt and string sizing.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <span>
                  <strong>Approvals managed end-to-end</strong>
                  CEIG, DISCOM net-metering, MNRE compliance — handled in
                  parallel to keep the schedule predictable.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <span>
                  <strong>O&amp;M + monitoring</strong>
                  Quarterly cleaning, performance benchmarking, and remote
                  monitoring to protect long-term plant economics.
                </span>
              </li>
            </ul>
            <Link to="/projects" className="ld-btn ld-btn--ghost">
              See all {company.stats.totalProjects} projects{" "}
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          <aside
            className="ld-case__panel ld-reveal"
            style={{ transitionDelay: "120ms" }}
            aria-label="Project highlights"
          >
            <div className="ld-case__photo">
              <img
                src={caseSpotlightPlaceholderImage}
                alt="Industrial rooftop solar array (placeholder photo — replace with project imagery)"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ld-case__panel-inner">
              <div className="case-banner">
                <span className="cap-num">1</span>
                <span className="cap-unit">MW</span>
              </div>
              <div className="case-meta">
                <span className="ph-status">
                  <span className="dot" />
                  Operational
                </span>
                <span className="case-id">PRJ / RSPL / 1000kW</span>
              </div>
              <div className="case-rows">
                {highlights.map(({ label, value }) => (
                  <div key={label} className="case-row">
                    <span className="label">{label}</span>
                    <span className="value">{value}</span>
                  </div>
                ))}
              </div>
              <div className="case-bar">
                <div className="case-bar-label">Plant performance ratio</div>
                <div className="case-bar-track">
                  <div className="case-bar-fill" />
                </div>
                <div className="case-bar-meta">
                  <span>Target ≥ 80%</span>
                  <span>Within design envelope</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LandingCase;
