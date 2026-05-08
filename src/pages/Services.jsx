import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";
import LandingCta from "@/components/landing/LandingCta";
import PageHero from "@/components/landing/PageHero";

const projectTypeIcons = [
  "fa-battery-three-quarters",
  "fa-landmark",
  "fa-industry",
  "fa-house-chimney",
];

/** Placeholder covers — replace with your photography */
const projectTypeCovers = [
  "https://images.unsplash.com/photo-1620714223084-8fcacc606dfd?auto=format&fit=crop&w=800&h=400&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=400&q=80",
  "https://images.unsplash.com/photo-1509391366361-2e59498469fa?auto=format&fit=crop&w=800&h=400&q=80",
  "https://images.unsplash.com/photo-1545259743-73ba6d93168e?auto=format&fit=crop&w=800&h=400&q=80",
];

const Services = () => {
  return (
    <div className="page-services">
      <PageHero
        eyebrow="Services"
        title={
          <>
            Solar PV, BESS &amp; <em>turnkey consultancy</em>.
          </>
        }
        lede="Seven service lines covering the full Solar and BESS lifecycle — from EPC and consultancy to factory setup and management advisory."
        actions={
          <div className="ld-hero__cta">
            <Link to="/contact" className="ld-btn ld-btn--accent">
              Request a proposal <i className="fa-solid fa-arrow-right" />
            </Link>
            <a
              href={company.profilePdfUrl}
              download
              className="ld-btn ld-btn--inverse"
            >
              Download capabilities
            </a>
          </div>
        }
        pillars={[
          {
            num: "A",
            body: (
              <>
                <strong>EPC</strong>
                Solar &amp; BESS turnkey execution.
              </>
            ),
          },
          {
            num: "B",
            body: (
              <>
                <strong>Consultancy</strong>
                Pre-bid to commissioning advisory.
              </>
            ),
          },
          {
            num: "C",
            body: (
              <>
                <strong>Factory &amp; investment</strong>
                Greenfield BESS plant + IPP opportunities.
              </>
            ),
          },
        ]}
      />

      <section className="ld-section ld-services ld-services--page">
        <div className="ld-section__inner">
          <div className="ld-section__header">
            <p className="eyebrow">How we work with you</p>
            <h2 className="title">Seven service lines, one accountable team</h2>
            <p className="desc">
              Whether you&apos;re a developer, IPP, manufacturer, or industrial
              client — we cover the full Solar and BESS value chain under one
              roof, with bankable documentation and vendor-neutral engineering.
            </p>
          </div>

          <div className="services-page-intro">
            <div className="services-page-intro__item">
              <span className="services-page-intro__icon" aria-hidden>
                <i className="fa-solid fa-file-signature" />
              </span>
              <div className="services-page-intro__body">
                <p className="services-page-intro__title">Tenders &amp; DISCOMs</p>
                <p className="services-page-intro__text">
                  SECI, NTPC, RVUNL, and state DISCOM alignment — specs to
                  commissioning.
                </p>
              </div>
            </div>
            <div className="services-page-intro__item">
              <span className="services-page-intro__icon" aria-hidden>
                <i className="fa-solid fa-building-shield" />
              </span>
              <div className="services-page-intro__body">
                <p className="services-page-intro__title">C&amp;I &amp; industrial</p>
                <p className="services-page-intro__text">
                  Rooftop through utility-scale solar, plus hybrid BESS where it
                  earns its place on the bill.
                </p>
              </div>
            </div>
            <div className="services-page-intro__item">
              <span className="services-page-intro__icon" aria-hidden>
                <i className="fa-solid fa-handshake" />
              </span>
              <div className="services-page-intro__body">
                <p className="services-page-intro__title">Single-point delivery</p>
                <p className="services-page-intro__text">
                  One team from feasibility and design review to EPC oversight
                  and O&amp;M handover.
                </p>
              </div>
            </div>
          </div>

          <div className="services-page-grid">
            {company.coreServices.map(
              ({ title, summary, icon, slug, coverImage }, i) => {
                const featured = i === 0;
                return (
                  <Link
                    to="/contact"
                    key={slug}
                    className={`services-page-card${featured ? " services-page-card--featured" : ""}`}
                  >
                    <div className="services-page-card__cover">
                      <img
                        src={coverImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="services-page-card__main">
                      <div className="services-page-card__figure">
                        <img src={icon} alt="" aria-hidden />
                      </div>
                      <div className="services-page-card__meta">
                        <span className="services-page-card__idx">
                          {String(i + 1).padStart(2, "0")} · Service line
                        </span>
                        <h3 className="services-page-card__title">{title}</h3>
                        <p className="services-page-card__summary">{summary}</p>
                        <span className="services-page-card__arrow">
                          Discuss your requirement{" "}
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </div>
                      {featured ? (
                        <div className="services-page-card__cta-side">
                          <span className="ld-btn ld-btn--ghost">Enquire</span>
                        </div>
                      ) : null}
                    </div>
                  </Link>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section className="ld-section ld-section--tinted">
        <div className="ld-section__inner">
          <div className="ld-section__header ld-section__header--center">
            <p className="eyebrow">Also on the home page</p>
            <h2 className="title">Engagement stages &amp; BESS spotlight</h2>
            <p className="desc">
              We keep long-form storytelling there — here, the focus is your
              service lines. Jump back when you want the full journey or factory
              investment narrative.
            </p>
            <div className="ld-inline-actions">
              <Link to="/#process" className="ld-btn ld-btn--ghost">
                Five-stage model <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link to="/#bess-factory" className="ld-btn ld-btn--ghost">
                BESS opportunity <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ld-section ld-section--ink">
        <div className="ld-section__inner">
          <div className="ld-section__header ld-section__header--row">
            <div>
              <p className="eyebrow">Project types covered</p>
              <h2 className="title">
                Standalone BESS, hybrid, utility &amp; rooftop
              </h2>
              <p className="desc">
                We support government tenders, private IPPs, and C&amp;I clients
                with technology-neutral, vendor-independent advisory.
              </p>
            </div>
            <Link to="/projects" className="ld-btn ld-btn--ghost">
              See project ledger <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="ld-types ld-types--cards">
            {company.projectTypes.map(({ title, text }, i) => (
              <article key={title} className="ld-types__item">
                <div className="ld-types__thumb">
                  <img
                    src={projectTypeCovers[i] ?? projectTypeCovers[0]}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="ld-types__content">
                  <div className="num" aria-hidden>
                    <i
                      className={`fa-solid ${projectTypeIcons[i] ?? "fa-solar-panel"}`}
                    />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LandingCta variant="compact" />
    </div>
  );
};

export default Services;
