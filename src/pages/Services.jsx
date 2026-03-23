import { company } from "@/assets/data/company";
import Contact from "@/components/home-one/Contact";
import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const serviceIcons = [
  "/images/home-one/service/service-1.svg",
  "/images/home-one/service/service-2.svg",
  "/images/home-one/service/service-3.svg",
  "/images/home-one/service/service-4.svg",
  "/images/home-one/service/service-5.svg",
  "/images/home-one/service/service-6.svg",
];

const Services = () => {
  return (
    <>
      <SectionTop title="Services" />

      <section className="srex-service">
        <div className="container">
          <div className="srex-info-box">
            <div className="row">
              {company.coreServices.map(({ title, summary }, i) => (
                <div key={title} className="col-md-6 col-lg-4 col-12">
                  <div className="srex-info-box__item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img
                          src={serviceIcons[i % serviceIcons.length]}
                          className="srex-info-box__item__logo"
                          alt=""
                        />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">{title}</h3>
                    <p className="srex-service-text">{summary}</p>
                    <div className="srex-info-box__more">
                      <Link to="/contact">
                        Enquire now
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

      <Contact />
    </>
  );
};

export default Services;
