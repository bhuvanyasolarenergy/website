import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const LandingBess = () => {
  const f = company.bessFactory;
  return (
    <section id="bess-factory" className="ld-bess">
      <div className="ld-bess__bg" aria-hidden="true" />
      <div className="ld-bess__inner">
        <div className="ld-bess__grid">
          <div className="ld-bess__copy ld-reveal">
            <p className="eyebrow">Featured opportunity</p>
            <h2 className="title">{f.headline}</h2>
            <p className="desc">{f.summary}</p>
            <ul className="list">
              {f.productMix.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/services" className="ld-btn ld-btn--accent">
              See investment scope <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          <aside
            className="ld-bess__panel ld-reveal"
            aria-label="Project metrics"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="panel-head">
              <span className="ph-label">Project at a glance</span>
              <span className="ph-status">Bankable · VGF-backed</span>
            </div>
            <div className="panel-rows">
              <div className="panel-row">
                <span className="label">Capacity</span>
                <span className="value">{f.capacity}</span>
              </div>
              <div className="panel-row">
                <span className="label">Total CAPEX</span>
                <span className="value">{f.capex}</span>
              </div>
              <div className="panel-row">
                <span className="label">Returns</span>
                <span className="value">{f.irr}</span>
              </div>
              <div className="panel-row">
                <span className="label">Chemistry</span>
                <span className="value">LFP · grid-scale</span>
              </div>
              <div className="panel-row">
                <span className="label">Site</span>
                <span className="value">Rajasthan · RIPS 2024</span>
              </div>
              <div className="panel-row">
                <span className="label">Demand backing</span>
                <span className="value">SECI · NTPC · RVUNL</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LandingBess;
