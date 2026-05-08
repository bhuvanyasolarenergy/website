import { Link } from "react-router-dom";
import { company, getProjectTilePlaceholder } from "@/assets/data/company";

const LandingProjects = () => {
  const featured = [...company.projects]
    .sort((a, b) => b.capacityKw - a.capacityKw)
    .slice(0, 6);

  return (
    <section className="ld-section ld-projects">
      <div className="ld-section__inner">
        <div className="ld-section__header ld-section__header--row ld-reveal">
          <div>
            <p className="eyebrow">Featured projects</p>
            <h2 className="title">
              Real installations, <em>real capacity</em>.
            </h2>
          </div>
          <Link to="/projects" className="ld-btn ld-btn--ghost">
            View all {company.stats.totalProjects} projects{" "}
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>

        <div className="ld-projects__grid">
          {featured.map(({ client, capacityKw, sector }, idx) => (
            <Link
              to="/projects"
              key={`${client}-${capacityKw}-${idx}`}
              className="ld-projects__card ld-reveal"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="ld-projects__media">
                <img
                  src={getProjectTilePlaceholder(idx)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="ld-projects__row">
                <div className="cap">
                  <div className="num">{capacityKw}</div>
                  <div className="unit">kW</div>
                </div>
                <div className="body">
                  <div className="name">{client}</div>
                  <div className="sector">{sector}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingProjects;
