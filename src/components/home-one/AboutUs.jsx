import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="srex-about-us-one srex-section">
      <div className="srex-about-us-one__container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="srex-about-us-one__left text-left">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  About us
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title ">
                  Bhuvanya Energy — solar and power you can rely on
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="srex-section__head__desc ">
                  We are an energy company focused on solar—backed by experienced engineers and installers serving customers across residential, commercial, and industrial segments.
                </p>

                <div className="srex-icon-list ">
                  <ul data-aos="fade-up" data-aos-delay="600">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Redefining Energy with Solar Technology</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Unleash the Power of the Sun</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Solar Solutions for a Brighter Tomorrow</p>
                    </li>
                  </ul>
                </div>

                <Link data-aos="fade-up" data-aos-delay="700" to="/about" className="srex-btn srex-btn--outline ">
                  Read More <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 px-0">
            <div data-aos="fade-up" data-aos-delay="800" className="srex-about-us-one__right">
              <img src="/images/about-us/about-us.png" alt="About Us" className="srex-about-us-one__right__img " />
              <div>
                <div className="srex-about-us-one__right__box d-flex gap-3 ">
                  <img src="/images/about-us/medal.png" alt="Medal" />
                  <div className="srex-about-us-one__right__box__text">
                    <h2>15+</h2>
                    <p>Years of experience</p>
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

export default AboutUs;
