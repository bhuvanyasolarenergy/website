import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const LandingFooter = () => {
  return (
    <footer className="ld-footer">
      <div className="ld-footer__inner">
        <div className="ld-footer__top">
          <div className="ld-footer__brand">
            <img src={company.logoUrl} alt={company.legalName} />
            <p className="blurb">
              Renewable energy consultancy and EPC for Solar PV and Battery
              Energy Storage Systems. Trusted by industrial groups and aligned
              with SECI, NTPC, RVUNL, and DISCOM tenders.
            </p>
            <div className="social">
              <a
                href={company.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="ld-footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About BEPL</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blogs">Insights</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="ld-footer__col">
            <h4>Capabilities</h4>
            <ul>
              {company.coreServices.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link to="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ld-footer__col">
            <h4>Reach us</h4>
            <ul className="ld-footer__contact-list">
              <li>
                <div className="contact-line">
                  <span className="contact-line__icon" aria-hidden="true">
                    <i className="fa-solid fa-phone" />
                  </span>
                  <div className="contact-line__body">
                    <span className="label">Phone</span>
                    <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-line">
                  <span className="contact-line__icon" aria-hidden="true">
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <div className="contact-line__body">
                    <span className="label">Email</span>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-line">
                  <span className="contact-line__icon" aria-hidden="true">
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <div className="contact-line__body">
                    <span className="label">Office</span>
                    <span className="contact-line__addr">
                      {company.addressLines[0]}
                      <br />
                      {company.addressLines[1]}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="ld-footer__bottom">
          <p className="legal">
            © {new Date().getFullYear()} {company.legalName} · CIN pending
          </p>
          <ul className="links">
            <li><Link to="/contact">Privacy</Link></li>
            <li><Link to="/contact">Terms</Link></li>
            <li><a href={company.profilePdfUrl} download>Profile (PDF)</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
