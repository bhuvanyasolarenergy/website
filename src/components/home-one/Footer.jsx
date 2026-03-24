import { company } from "@/assets/data/company";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="srex-footer-one">
      <div className="container">
        <div className="row justify-content-between align-items-center srex-footer-one__top">
          <div className="col-6 col-lg-6 col-md-6">
            <img src={company.logoUrl} alt={company.legalName} />
          </div>
          <div className="col-lg-6 col-6 col-md-6">
            <ul className="srex-footer__social_links">
              <li>
                <a href={company.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href={company.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href={company.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="srex-footer__links">
          <div className="row">
            <div data-aos="fade" className="col-12 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Contact us</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__contact">
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          <a href={`mailto:${company.email}`}>{company.email}</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-paper-plane"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          {company.addressLines[0]}
                          <br />
                          {company.addressLines[1]}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="200" className="col-6 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Useful links</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/services">Our services</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="400" className="col-6 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>What we offer</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <Link to="/services">Rooftop solar</Link>
                    </li>
                    <li>
                      <Link to="/services">Commercial &amp; industrial solar</Link>
                    </li>
                    <li>
                      <Link to="/services">EPC &amp; project execution</Link>
                    </li>
                    <li>
                      <Link to="/services">Operations &amp; maintenance</Link>
                    </li>
                    <li>
                      <Link to="/services">Energy consulting</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="srex-footer__bottom">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>&copy; {new Date().getFullYear()} {company.legalName} All rights reserved.</p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="srex-footer__bottom__links">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
