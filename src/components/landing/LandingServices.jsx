import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const LandingServices = () => {
  return (
    <section className="ld-section ld-services">
      <div className="ld-section__inner">
        <div className="ld-section__header ld-section__header--row ld-reveal">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="title">
              Seven service lines, <em>one accountable team</em>.
            </h2>
          </div>
          <p className="desc">
            Turnkey EPC, lifecycle consultancy, factory setup, and management
            advisory — covering the full Solar PV and BESS value chain.
          </p>
        </div>

        <div className="ld-services__grid">
          {company.coreServices.map(
            ({ title, summary, coverImage }, i) => (
              <Link
                to="/services"
                key={title}
                className="ld-services__card ld-reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
                aria-label={`Learn more about ${title}`}
              >
                <div className="ld-services__media">
                  <img
                    src={coverImage}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="ld-services__body">
                  <div className="ld-services__num">
                    <span className="num-stroke">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="num-label">Service</span>
                  </div>
                  <h3 className="ld-services__title">{title}</h3>
                  <p className="ld-services__text">{summary}</p>
                  <span className="ld-services__arrow">
                    Learn more{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
