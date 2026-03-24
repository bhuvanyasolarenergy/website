import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const AboutUsTwo = () => {
  return (
    <section className="srex-section-bottom srex-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-section-bottom__left">
              <img src="/images/about-us/Shape.png" alt="Shape" />
              <img
                className="srex-section-bottom__left__img"
                src="/images/about-us/about-us-bottom.png"
                alt="Bhuvanya Energy solar solutions"
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-section-bottom__right">
              <div className="mb-5">
                <h3 data-aos="fade-up" className="srex-section-bottom__right__title">
                  Turnkey solar solutions for commercial and industrial clients
                </h3>
                <p data-aos="fade-up" data-aos-delay="200" className="srex-section-bottom__right__desc">
                  {company.elevatorPitch}
                </p>
              </div>
              <div className="srex-icon-list srex-icon-list--multi-text">
                <ul>
                  <li data-aos="fade-up" data-aos-delay="350ms">
                    <i className="fa-solid fa-chevron-right" />
                    <div>
                      <h3>Engineering precision</h3>
                      <p>
                        Deep technical expertise in solar plant design, installation, commissioning, and long-term O&M — not just sales.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500ms">
                    <i className="fa-solid fa-chevron-right" />
                    <div>
                      <h3>End-to-end support</h3>
                      <p>
                        From consultancy, system design, approvals, supply, installation, and commissioning to after-sales support — all under one roof.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Link to="/about" className="srex-btn srex-btn--primary mt-4">
                Learn more about us <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
