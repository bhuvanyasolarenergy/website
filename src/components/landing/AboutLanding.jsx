import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const AboutLanding = () => {
  return (
    <>
      {/* Hero */}
      <section className="ld-hero">
        <div className="ld-hero__inner">
          <div className="ld-hero__grid">
            <div>
              <p className="ld-hero__eyebrow">About BEPL</p>
              <h1 className="ld-hero__title">
                A renewable energy consultancy built by <em>EPC engineers</em>.
              </h1>
              <p className="ld-hero__lede">
                {company.elevatorPitch}
              </p>
              <div className="ld-hero__cta">
                <Link to="/services" className="ld-btn ld-btn--accent">
                  Our services <i className="fa-solid fa-arrow-right" />
                </Link>
                <a
                  href={company.profilePdfUrl}
                  download
                  className="ld-btn ld-btn--inverse"
                >
                  Download profile (PDF)
                </a>
              </div>
            </div>
            <div className="ld-hero__pillars">
              <div className="ld-hero__pillar">
                <span className="num">01</span>
                <div className="text">
                  <strong>Engineering-led</strong>
                  Founded by electrical engineers with deep solar &amp; BESS
                  domain expertise.
                </div>
              </div>
              <div className="ld-hero__pillar">
                <span className="num">02</span>
                <div className="text">
                  <strong>Vendor-neutral</strong>
                  Independent advisory, technology-agnostic, aligned to client
                  outcomes.
                </div>
              </div>
              <div className="ld-hero__pillar">
                <span className="num">03</span>
                <div className="text">
                  <strong>Lifecycle accountability</strong>
                  Pre-bid through commissioning and long-term O&amp;M.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats trust strip */}
      <section className="ld-metrics ld-metrics--simple">
        <div className="ld-metrics__inner">
          <div className="ld-metrics__grid">
            <div className="ld-metrics__item">
              <div className="value">{company.stats.totalProjects}+</div>
              <div className="label">Solar projects delivered</div>
            </div>
            <div className="ld-metrics__item">
              <div className="value">{company.stats.totalProjectCapacityMw} MW</div>
              <div className="label">Cumulative installed capacity</div>
            </div>
            <div className="ld-metrics__item">
              <div className="value">35+</div>
              <div className="label">Years combined leadership</div>
            </div>
            <div className="ld-metrics__item">
              <div className="value">3</div>
              <div className="label">Directors driving execution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are — long-form */}
      <section className="ld-section">
        <div className="ld-section__inner">
          <div className="about-narrative">
            <div className="about-narrative__head">
              <p className="eyebrow">Who we are</p>
              <h2 className="title">
                Engineering precision, regulatory rigour, long-term performance.
              </h2>
            </div>
            <div className="about-narrative__body">
              <p className="lede">{company.about}</p>
              <p>
                We operate across <strong>{company.serviceRegions}</strong>.
                From granite-belt rooftops in Rajasthan to utility-scale BESS
                pipelines, we work with industrial groups, IPPs, and government
                tenders alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="ld-section ld-section--tinted">
        <div className="ld-section__inner">
          <div className="about-vm-grid">
            <article className="about-vm-card">
              <div className="about-vm-card__head">
                <span className="about-vm-card__icon">
                  <i className="fa-solid fa-eye" aria-hidden />
                </span>
                <h3>Our vision</h3>
              </div>
              <p>{company.vision}</p>
            </article>

            <article className="about-vm-card">
              <div className="about-vm-card__head">
                <span className="about-vm-card__icon">
                  <i className="fa-solid fa-bullseye" aria-hidden />
                </span>
                <h3>Our mission</h3>
              </div>
              <p className="about-vm-card__intro">{company.missionIntro}</p>
              <ul>
                {company.missionPoints.map((line, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-arrow-right" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="ld-section">
        <div className="ld-section__inner">
          <div className="ld-section__header ld-section__header--center">
            <p className="eyebrow">Leadership</p>
            <h2 className="title">Meet our directors</h2>
            <p className="desc">
              35+ years of combined experience in Solar, BESS, EPC, vendor
              management, regulatory compliance, and renewable energy
              consultancy.
            </p>
          </div>
          <div className="about-leaders">
            {company.leadership.map(({ name, role, bio, experience, focus }) => (
              <article key={name} className="about-leaders__card">
                <div className="about-leaders__avatar">
                  {name
                    .replace(/^Mr\.?\s+/, "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="about-leaders__head">
                  <h3>{name}</h3>
                  <p className="role">{role}</p>
                </div>
                <div className="about-leaders__meta">
                  <span>{experience} yrs</span>
                  <span className="dot" />
                  <span>{focus}</span>
                </div>
                <p className="bio">{bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services — link to dedicated page (avoids duplicating full catalog) */}
      <section className="ld-section ld-section--tinted">
        <div className="ld-section__inner">
          <div className="ld-section__header ld-section__header--row">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="title">Seven service lines under one roof</h2>
              <p className="desc">
                Solar PV and BESS EPC, consultancy, tenders, approvals, factory
                setup, and lifecycle performance — one accountable team from
                feasibility through O&amp;M.
              </p>
            </div>
            <Link to="/services" className="ld-btn ld-btn--accent">
              Explore services <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutLanding;
