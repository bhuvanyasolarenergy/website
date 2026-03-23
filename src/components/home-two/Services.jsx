import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="srex-service-three srex-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-service-three__left ">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  Our Services
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Embrace the power the sun with solar energy!
                </h2>
                <p data-aos="fade-up" data-aos-delay="600" className="mb-5 ">
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit. In hac habit
                </p>
                <Link to="/service" className="srex-btn srex-btn--primary">
                  View More <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-info-box">
              <div className="row">
                <div data-aos="fade-up" className="col-md-6 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-two/service-two/service-1.svg" className="srex-info-box__item__logo" alt="GreenSun Support" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">Quasi sed rerum</h3>
                    <p className="mb-3">Nullam vel nibh facilisis lectus fermentum u ltrices quis non risus. Lore m ipsum dolor</p>
                    <div className="srex-info-box__more">
                      <Link to="/service-detail">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="col-md-6 col-12 ">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-two/service-two/service-2.svg" className="srex-info-box__item__logo" alt="BrightSun Support" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">Sed quibusdam quia</h3>
                    <p className="mb-3">Nullam vel nibh facilisis lectus fermentum u ltrices quis non risus. Lore m ipsum dolor</p>
                    <div className="srex-info-box__more">
                      <Link to="/service-detail">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="col-md-6 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-two/service-two/service-3.svg" className="srex-info-box__item__logo" alt="SolarPro Solutions" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">Reiciendis aut eveniet</h3>
                    <p className="mb-3">Nullam vel nibh facilisis lectus fermentum u ltrices quis non risus. Lore m ipsum dolor</p>
                    <div className="srex-info-box__more">
                      <Link to="/service-detail">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="900" className="col-md-6 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src="/images/home-two/service-two/service-4.svg" className="srex-info-box__item__logo" alt="EcoSolar Services" />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">EcoSolar Services</h3>
                    <p className="mb-3">Nullam vel nibh facilisis lectus fermentum u ltrices quis non risus. Lore m ipsum dolor</p>
                    <div className="srex-info-box__more">
                      <Link to="/service-detail">
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
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

export default Services;
