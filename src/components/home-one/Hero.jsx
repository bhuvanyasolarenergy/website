import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="srex-hero-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="srex-hero-one__box ">
              <h1 data-aos="fade-up" className="srex-hero-one__box__text">
                <span className="srex-hero-one__box__text__top d-flex align-items-center gap-3 justify-content-between">
                  Bhuvanya Energy
                  <span className="srex-hero-one__box__text__top__line"></span>
                </span>
                Solar &amp; power solutions <br />
                for a <span>cleaner tomorrow</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="srex-hero-one__box__desc">
                Bhuvanya Energy Pvt. Ltd. designs and delivers solar projects for homes, businesses, and industry—helping you save costs and switch to reliable renewable energy.
              </p>

              <Link data-aos="fade-up" data-aos-delay="500" to="/services" className="srex-btn srex-btn--outline">
                Discover More <i className="fa-solid fa-plus"></i>
              </Link>
            </div>
            <div className="d-flex gap-2 align-items-center justify-content-between ">
              <div className="srex-hero-one__left__enery__efficient">
                <h2>70%</h2>
                <p>Energy Efficient</p>
              </div>
              <div className="srex-hero-one__left__img">
                <img src="/images/home-one/hero-img-1.png" alt="Solar Panel" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="srex-hero-one__right ">
              <img src="/images/home-one/hero-img-2.png" alt="Women with Solar Panel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
