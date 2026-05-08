import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="srex-about-us-two srex-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-8">
            <div className="srex-section__head ">
              <h5 data-aos="fade-up" className="srex-section__head__badge">
                About Us
              </h5>
              <div data-aos="fade-up" data-aos-delay="200" className="d-flex align-content-center gap-5">
                <h2 className="srex-section__head__title">Bhuvanya Energy — Solar PV, BESS &amp; turnkey consultancy</h2>
                <img src="/images/frame.png" alt="About_Us_Frame" className="srex-about-us-two__img " />
              </div>
            </div>
            <div className="srex-about-us-two__left-content ">
              <div data-aos="fade-up" data-aos-delay="400" className="srex-about-us-two__left-content__img">
                <img src="/images/home-two/about-us/about-us-left.png" alt="About_Us_Left" />
              </div>
              <div data-aos="fade-up" data-aos-delay="600" className="srex-about-us-two__left-content__right ">
                <p>
                  Bhuvanya Energy Private Limited delivers end-to-end Solar PV and BESS solutions —
                  from rooftop and C&amp;I systems to utility-scale installations and BESS factory
                  setup. Engineering precision, regulatory compliance, and long-term performance
                  optimisation, led from Jaipur.
                </p>
                <div className="srex-icon-list mt-3">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Turnkey Solar &amp; BESS EPC under one roof</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Tender, MNRE / CEA / DISCOM compliance &amp; lender support</p>
                    </li>
                  </ul>
                </div>
                <Link to="/about" className="srex-btn srex-btn--primary mt-4">
                  Read More <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <img src="/images/home-two/about-us/about-us-right.png" alt="About_Us_Right" className="srex-about-us-two__right-content__img " />
            <div data-aos="fade-up" data-aos-delay="800" className="srex-about-us-two__box d-flex gap-3 ">
              <img src="/images/about-us/medal.png" alt="Medal" />
              <div className="srex-about-us-two__box__text">
                <h2>35+ Years</h2>
                <p>combined leadership in Solar &amp; BESS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
