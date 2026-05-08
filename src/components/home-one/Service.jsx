import { company } from "@/assets/data/company";
import { Link } from "react-router-dom";

const serviceIcons = [
  "/images/home-one/service/service-1.svg",
  "/images/home-one/service/service-2.svg",
  "/images/home-one/service/service-3.svg",
  "/images/home-one/service/service-4.svg",
  "/images/home-one/service/service-5.svg",
  "/images/home-one/service/service-6.svg",
];

const Service = () => {
  return (
    <section className="srex-service srex-section">
      <div className="container">
        <div className="srex-section__head text-center">
          <h5 data-aos="fade-up" className="srex-section__head__badge ">
            <img src="/images/badge-icon.svg" alt="" />
            Our Services
          </h5>
          <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
            Solar PV, BESS &amp; consultancy aligned with your project goals
          </h2>
        </div>
        <div className="srex-info-box">
          <div className="row">
            {company.coreServices.map(({ title, summary }, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index === 0 ? undefined : String(Math.min(200 + index * 150, 800))}
                key={title}
                className="col-md-6 col-lg-4 col-12"
              >
                <div className="srex-info-box__item ">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="srex-info-box__item__img">
                      <img
                        src={serviceIcons[index % serviceIcons.length]}
                        className="srex-info-box__item__logo"
                        alt=""
                      />
                    </div>
                    <h2 className="srex-info-box__item__number">{String(index + 1).padStart(2, "0")}</h2>
                  </div>
                  <h3 className="srex-info-box__item__text">{title}</h3>
                  <p className="srex-service-text mb-3">{summary}</p>
                  <div className="srex-info-box__more">
                    <Link to="/services">
                      Read More
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
