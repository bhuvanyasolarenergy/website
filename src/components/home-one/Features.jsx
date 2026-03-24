import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const featureIcons = [
  "/images/home-one/features/features-1.svg",
  "/images/home-one/features/features-2.svg",
  "/images/home-one/features/features-3.svg",
  "/images/home-one/features/features-4.svg",
];

const Features = () => {
  const features = company.coreServices.slice(0, 4).map((item, idx) => ({
    ...item,
    icon: featureIcons[idx],
  }));

  return (
    <section className="srex-features srex-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-features__left text-left">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Our Services
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title">
                  End-to-end solar solutions under one roof
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="mb-5">
                  {company.elevatorPitch}
                </p>
                <Link data-aos="fade-up" data-aos-delay="500" to="/services" className="srex-btn srex-btn--outline">
                  View all services <i className="fa-solid fa-plus" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-info-box srex-info-box--feature-box">
              <div className="row">
                {features.map(({ title, summary, icon }, idx) => (
                  <div key={title} data-aos="fade-up" data-aos-delay={600 + idx * 80} className="col-md-6 col-12">
                    <div className="srex-info-box__item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="srex-info-box__item__img">
                          <img src={icon} className="srex-info-box__item__logo" alt={title} />
                        </div>
                      </div>
                      <h3 className="srex-info-box__item__text">{title}</h3>
                      <p className="mb-3">{summary}</p>
                      <div className="srex-info-box__more">
                        <Link to="/service-details">
                          Read More
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
