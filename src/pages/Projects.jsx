import { Link } from "react-router-dom";
import { company, getProjectTilePlaceholder } from "@/assets/data/company";
import LandingCta from "@/components/landing/LandingCta";
import PageHero from "@/components/landing/PageHero";

const Projects = () => {
  const projects = [...company.projects].sort(
    (a, b) => b.capacityKw - a.capacityKw,
  );
  const totalKw = company.stats.totalProjectCapacityKw;
  const totalMw = company.stats.totalProjectCapacityMw;
  const largestKw = projects.length ? projects[0].capacityKw : 0;

  const spotlight = projects.slice(0, 6);
  const maxSpotlightKw = Math.max(...spotlight.map((p) => p.capacityKw), 1);

  return (
    <div className="page-projects">
      <PageHero
        eyebrow="Track record"
        title={
          <>
            Operational solar, <em>at scale</em>.
          </>
        }
        lede="End-to-end EPC across C&amp;I and industrial sites — from distributed rooftops to flagship megawatt-class plants. One ledger: every project commissioned, performance-ready."
        actions={
          <div className="ld-hero__cta">
            <Link to="/contact" className="ld-btn ld-btn--accent">
              Plan your project <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        }
        pillars={[
          {
            num: "A",
            body: (
              <>
                <strong>{projects.length}+ plants</strong>
                Commissioned solar PV across India.
              </>
            ),
          },
          {
            num: "B",
            body: (
              <>
                <strong>{totalMw} MW installed</strong>
                Cumulative on-site DC capacity.
              </>
            ),
          },
          {
            num: "C",
            body: (
              <>
                <strong>Turnkey delivery</strong>
                Design, supply, installation, commissioning &amp; O&amp;M.
              </>
            ),
          },
        ]}
      />

      <section className="ld-metrics ld-metrics--simple">
        <div className="ld-metrics__inner">
          <div className="ld-metrics__grid">
            <div className="ld-metrics__item">
              <div className="value">{projects.length}+</div>
              <div className="label">Plants delivered</div>
            </div>
            <div className="ld-metrics__item">
              <div className="value">{totalMw} MW</div>
              <div className="label">Cumulative capacity</div>
            </div>
            <div className="ld-metrics__item">
              <div className="value">{totalKw.toLocaleString()} kW</div>
              <div className="label">Total installed kW</div>
            </div>
            <div className="ld-metrics__item">
              <div className="value">{largestKw} kW</div>
              <div className="label">Largest single-site plant</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ld-section">
        <div className="ld-section__inner">
          <div className="ld-section__header">
            <p className="eyebrow">Highlights</p>
            <h2 className="title">Largest operational installations</h2>
            <p className="desc">
              A snapshot of peak capacities — each site live, metered, and
              underwritten by real EPC execution. The full portfolio table
              follows.
            </p>
          </div>

          <div className="projects-spotlight">
            <div className="projects-spotlight__grid">
              {spotlight.map((p, idx) => (
                <article
                  key={`${p.client}-${p.capacityKw}-spot-${idx}`}
                  className="projects-spotlight__card"
                >
                  <div className="projects-spotlight__thumb">
                    <img
                      src={getProjectTilePlaceholder(idx)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="projects-spotlight__cap">
                    {p.capacityKw}
                    <span>kW</span>
                  </p>
                  <p className="projects-spotlight__client">{p.client}</p>
                  <p className="projects-spotlight__segment">{p.sector}</p>
                  <div
                    className="projects-spotlight__bar"
                    style={{
                      width: `${Math.min(100, (p.capacityKw / maxSpotlightKw) * 100)}%`,
                    }}
                    aria-hidden
                  />
                </article>
              ))}
            </div>
          </div>

          <div className="ld-section__header ld-section__header--ledger-follows">
            <p className="eyebrow">Portfolio</p>
            <h2 className="title">Ranked by installed capacity</h2>
            <p className="desc">
              One continuous register — every client in order of on-site kW.
              Segment labels are for context only, not how we organise delivery.
            </p>
          </div>

          <div className="projects-index-wrap">
            <table className="projects-index">
              <thead>
                <tr>
                  <th scope="col" className="projects-index__th-rank">
                    Rank
                  </th>
                  <th scope="col">Installation</th>
                  <th scope="col" className="projects-index__th-cap">
                    Capacity
                  </th>
                  <th scope="col" className="projects-index__th-seg">
                    Segment
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr key={`${p.client}-${p.capacityKw}-${i}`}>
                    <td className="projects-index__rank">
                      {String(i + 1).padStart(2, "0")}
                    </td>
                    <td className="projects-index__name">{p.client}</td>
                    <td className="projects-index__cap">
                      <span className="projects-index__cap-num">
                        {p.capacityKw.toLocaleString()}
                      </span>
                      <span className="projects-index__cap-unit">kW</span>
                    </td>
                    <td className="projects-index__seg">
                      <span className="projects-index__pill">{p.sector}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <LandingCta variant="compact" />
    </div>
  );
};

export default Projects;
