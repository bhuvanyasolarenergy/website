import { company } from "@/assets/data/company";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="srex-footer-two">
      <div className="container">
        <div className="srex-footer-two__top__content">
          <ul className="srex-footer-two__top__content__contact d-flex justify-content-between">
            <li>
              <div className="srex-footer-two__top__content__contact __icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="srex-footer-two__top__content__contact __text">
                <p>Phone:</p>
                <p>
                  <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                </p>
              </div>
            </li>
            <li>
              <div className="srex-footer-two__top__content__contact __icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="srex-footer-two__top__content__contact __text">
                <p>Email:</p>
                <h3>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </h3>
              </div>
            </li>
            <li>
              <div className="srex-footer-two__top__content__contact __icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="srex-footer-two__top__content__contact __text">
                <p>Address:</p>
                <h3>
                  {company.addressLines[0]}, {company.addressLines[1]}
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="srex-footer-two__links footer-two">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-6">
              <div className="srex-footer-two__links__logo">
                <img src={company.logoUrl} alt={company.legalName} />
                <p className="srex-footer-two__links__logo__text">
                  {company.legalName} — Solar PV, BESS, turnkey EPC, and end-to-end consultancy. Serving SECI, NTPC, RVUNL, DISCOMs, IPPs, and C&amp;I clients pan-India.
                </p>
                <ul className="srex-footer-two__links__social_links">
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
            <div className="col-6 col-lg-2 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Useful Links</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/services">Our Service</Link>
                    </li>
                    <li>
                      <Link to="/services">What We Do</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>What we offer</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <Link to="/services">Turnkey Solar EPC</Link>
                    </li>
                    <li>
                      <Link to="/services">Turnkey BESS EPC</Link>
                    </li>
                    <li>
                      <Link to="/services">Solar &amp; BESS Consultancy</Link>
                    </li>
                    <li>
                      <Link to="/services">Factory Setup Consultancy</Link>
                    </li>
                    <li>
                      <Link to="/services">O&amp;M support</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-line"></div>

        <div className="srex-footer__bottom">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>&copy; {new Date().getFullYear()} {company.legalName} All rights reserved.</p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="srex-footer__bottom__links">
                <li>
                  <Link to="/contact">Terms &amp; conditions</Link>
                </li>
                <li>
                  <Link to="/contact">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
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
