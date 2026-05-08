import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company } from "@/assets/data/company";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blogs", label: "Insights" },
  { to: "/faq", label: "FAQ" },
];

const LandingHeader = ({ variant = "auto" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`ld-header ${variant === "dark" ? "ld-header--dark" : ""} ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="ld-header__inner">
          <Link to="/" className="ld-header__brand">
            <img src={company.logoUrl} alt={company.legalName} />
          </Link>

          <nav className="ld-header__nav" aria-label="Main">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `ld-header__link ${isActive ? "is-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ld-header__actions">
            <a
              href={`tel:${company.phoneTel}`}
              className="ld-header__phone"
              aria-label="Call us"
            >
              <i className="fa-solid fa-phone" />
              <span>{company.phoneDisplay}</span>
            </a>
            <Link to="/contact" className="ld-btn ld-btn--accent ld-header__cta">
              Get in touch <i className="fa-solid fa-arrow-right" />
            </Link>
            <button
              type="button"
              className={`ld-header__burger ${open ? "is-open" : ""}`}
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`ld-drawer ${open ? "is-open" : ""}`}>
        <div className="ld-drawer__overlay" onClick={() => setOpen(false)} />
        <div className="ld-drawer__panel">
          <div className="ld-drawer__head">
            <Link to="/" onClick={() => setOpen(false)} className="ld-drawer__brand">
              <img src={company.logoUrl} alt={company.legalName} />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="ld-drawer__close"
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <nav className="ld-drawer__nav">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `ld-drawer__link ${isActive ? "is-active" : ""}`
                }
              >
                <span className="num">→</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="ld-drawer__contact">
            <a href={`tel:${company.phoneTel}`}>
              <i className="fa-solid fa-phone" />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`}>
              <i className="fa-solid fa-envelope" />
              {company.email}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="ld-btn ld-btn--accent"
            >
              Get in touch <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
