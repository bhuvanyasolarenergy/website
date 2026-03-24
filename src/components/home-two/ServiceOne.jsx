import { company } from "@/assets/data/company";
import { Link } from "react-router-dom";

const icons = [
  "/images/home-two/service/service-1.svg",
  "/images/home-two/service/service-2.svg",
  "/images/home-two/service/service-3.svg",
];

const ServiceOne = () => {
  const featured = company.coreServices.slice(0, 3);

  return (
    <section className="srex-service-two srex-section">
      <img src="/images/frame.png" alt="" className="srex-service-two__frame " />
      <div className="container">
        <div className="srex-section__head text-center ">
          <h5 data-aos="fade-up" className="srex-section__head__badge">
            What we offer
          </h5>
          <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">
            Turnkey solar — consultancy through commissioning &amp; O&amp;M
          </h2>
        </div>
        <div className="srex-info-box">
          <div className="row">
            {featured.map(({ title, summary }, i) => (
              <div className="col-md-6 col-lg-4 col-12" key={title}>
                <div data-aos="fade-up" data-aos-delay={400 + i * 200} className="srex-info-box__item ">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="srex-info-box__item__img">
                      <img src={icons[i]} className="srex-info-box__item__logo" alt="" />
                    </div>
                  </div>
                  <h3 className="srex-info-box__item__text">{title}</h3>
                  <p className="srex-info-box__item__desc">{summary}</p>
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

        <div className="srex-stats srex-stats--two">
          <div className="container">
            <div className="srex-stats__items ">
              <div className="row">
                <div data-aos="fade-up" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/awards.svg" alt="" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">14</span>+
                      </h2>
                      <h3>Years in power &amp; solar</h3>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/projects.svg" alt="" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">9</span>+
                      </h2>
                      <h3>Years focused on solar</h3>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/members.svg" alt="" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">2</span>
                      </h2>
                      <h3>Leadership &amp; co-founder team</h3>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/clients.svg" alt="" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">6</span>
                      </h2>
                      <h3>States &amp; regions served</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
