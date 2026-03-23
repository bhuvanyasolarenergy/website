import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <section className="srex-service-two srex-section">
      <img src="/images/frame.png" alt="Frame" className="srex-service-two__frame " />
      <div className="container">
        <div className="srex-section__head text-center ">
          <h5 data-aos="fade-up" className="srex-section__head__badge">
            Premium Services
          </h5>
          <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">
            Unlock the potential of the sun with solar energy!
          </h2>
        </div>
        <div className="srex-info-box">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12">
              <div data-aos="fade-up" data-aos-delay="400" className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-two/service/service-1.svg" className="srex-info-box__item__logo" alt="PowerSun Assistance" />
                  </div>
                </div>
                <h3 className="srex-info-box__item__text">GreenSun Support</h3>
                <p className="srex-info-box__item__desc">Nullam vel nibh facilisis lectus fermentum u ltrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="srex-info-box__more">
                  <Link to="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div data-aos="fade-up" data-aos-delay="600" className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-two/service/service-2.svg" className="srex-info-box__item__logo" alt="PowerSun Assistance" />
                  </div>
                </div>
                <h3 className="srex-info-box__item__text">SolarPro Solutions</h3>
                <p className="srex-info-box__item__desc">Nullam vel nibh facilisis lectus fermentum u ltrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="srex-info-box__more">
                  <Link to="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div data-aos="fade-up" data-aos-delay="800" className="srex-info-box__item ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="srex-info-box__item__img">
                    <img src="/images/home-two/service/service-3.svg" className="srex-info-box__item__logo" alt="BrightSun Support" />
                  </div>
                </div>
                <h3 className="srex-info-box__item__text">EcoSolar Services</h3>
                <p className="srex-info-box__item__desc">Nullam vel nibh facilisis lectus fermentum u ltrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="srex-info-box__more">
                  <Link to="/service-details">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Stats Section Start --> */}
        <div className="srex-stats srex-stats--two">
          <div className="container">
            <div className="srex-stats__items ">
              <div className="row">
                <div data-aos="fade-up" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/awards.svg" alt="Winning Awards" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">20</span>+
                      </h2>
                      <h3>Winning Awards</h3>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/projects.svg" alt="Completed Projects" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">10</span>K+
                      </h2>
                      <h3>Completed Projects</h3>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/members.svg" alt="Team members" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">300</span>+
                      </h2>
                      <h3>Team Members</h3>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="col-md-6 col-lg-3 col-12">
                  <div className="srex-stats__item">
                    <div className="srex-stats__item__icon">
                      <img src="/images/home-one/stats/clients.svg" alt="Clients Review" />
                    </div>
                    <div className="srex-stats__item__text">
                      <h2>
                        <span className="counter">900</span>+
                      </h2>
                      <h3>Clients Review</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Stats Section End --> */}
      </div>
    </section>
  );
};

export default ServiceOne;
