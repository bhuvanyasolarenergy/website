import { company } from "@/assets/data/company";
import { Link } from "react-router-dom";

const icons = [
  "/images/home-two/service-two/service-1.svg",
  "/images/home-two/service-two/service-2.svg",
  "/images/home-two/service-two/service-3.svg",
  "/images/home-two/service-two/service-4.svg",
];

const Services = () => {
  const items = company.coreServices.slice(3, 7);

  return (
    <section className="srex-service-three srex-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-service-three__left ">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  Investment, factory setup &amp; advisory
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Beyond EPC — manufacturing, investment &amp; consultancy
                </h2>
                <p data-aos="fade-up" data-aos-delay="600" className="mb-5 ">
                  We support investors and developers with greenfield BESS factory setup,
                  bankable IPP opportunities, long-term O&amp;M, and management advisory for
                  renewable energy ventures.
                </p>
                <Link to="/services" className="srex-btn srex-btn--primary">
                  View all services <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-info-box">
              <div className="row">
                {items.map(({ title, summary }, i) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={i === 0 ? undefined : String(i * 200)}
                    key={title}
                    className="col-md-6 col-12"
                  >
                    <div className="srex-info-box__item ">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="srex-info-box__item__img">
                          <img src={icons[i]} className="srex-info-box__item__logo" alt="" />
                        </div>
                      </div>
                      <h3 className="srex-info-box__item__text">{title}</h3>
                      <p className="mb-3">{summary}</p>
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
        </div>
      </div>
    </section>
  );
};

export default Services;
