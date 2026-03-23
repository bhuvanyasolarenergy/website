import { company } from "@/assets/data/company";
import { menu } from "@/assets/data/menu";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openedSubmenu, setOpenedSubmenu] = useState("");
  const handleOpenSubmenu = (id) => {
    if (id == openedSubmenu) {
      setOpenedSubmenu("");
    } else {
      setOpenedSubmenu(id);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div className={`overlay ${menuOpen && "overlay--active"}`}></div>

      {/* <!-- Top Header Start --> */}
      <div className={`srex-top-header d-none d-md-block`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-8">
              <p>Bhuvanya Energy Pvt. Ltd. — solar and reliable energy solutions for homes and businesses.</p>
            </div>
            <div className="col-6 col-md-4">
              <ul>
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top Header End --> */}

      {/* <!-- Header Start --> */}
      <header className={`srex-header srex-header--home-two ${scrolled && "sticky-top"}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav className="ud-main-menu ud-main-menu--home-one d-flex align-items-center justify-content-between" aria-label="Main Navigation">
                <div className="ud-main-menu__logo">
                  <Link to="/">
                    <img src={company.logoUrl} alt={company.legalName} />
                  </Link>
                </div>
                <ul className="ud-main-menu__links d-none d-lg-flex">
                  {menu.map(({ id, title, submenus, url }) => (
                    <li key={id}>
                      {url ? (
                        <Link to={url}>{title}</Link>
                      ) : (
                        <>
                          <a href="#">
                            {title} <i className="fa-solid fa-angle-down"></i>
                          </a>
                          <ul className="ud-main-menu__sub-menu">
                            {submenus.map(({ id, title, url }) => (
                              <li key={id}>
                                <Link to={url}>{title}</Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                <div onClick={() => setMenuOpen(!menuOpen)} className="ud-hamburger-menu d-block d-lg-none">
                  <div className={`ud-hamburger-menu__btn ${menuOpen && "ud-hamburger-menu__btn--active"}`}>
                    <span></span>
                  </div>
                </div>

                <div className="srex-header__call srex-header--home-two__call-two d-flex align-items-center gap-2 m-0 d-none d-xl-flex">
                  <img src="/images/chat-2.svg" alt="Chat" />
                  <div>
                    <span>Need help?</span>
                    <h4>
                      <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                    </h4>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* <!-- Side Popup --> */}
        <div className={`ud-side-popup ud-side-popup--home-one ${menuOpen && "ud-side-popup--open"}`}>
          <div className="ud-side-popup__header">
            <div className="ud-side-popup__header-logo">
              <img src={company.logoUrl} alt={company.legalName} />
            </div>
            <button onClick={() => setMenuOpen(false)} className="side-popup-close">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="ud-side-popup__body">
            <ul className="metismenu" id="side-menu">
              {menu.map(({ id, title, submenus, url }) => (
                <li key={id}>
                  {url ? (
                    <Link to={url}>{title}</Link>
                  ) : (
                    <>
                      <a href="#" onClick={() => handleOpenSubmenu(id)}>
                        {title} <i className="fa-solid fa-plus"></i>
                      </a>
                      <AnimateHeight height={openedSubmenu == id ? "auto" : 0}>
                        <ul className="sub-menu" aria-expanded="false">
                          {submenus.map(({ id, title, url }) => (
                            <li key={id}>
                              <Link to={url}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="ud-side-popup__bottom">
            <div className="ud-side-popup__bottom-info">
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-phone"></i>
                <div className="ud-header-info-box__details">
                  <span>Need Help?</span>
                  <h4>
                    <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                  </h4>
                </div>
              </div>
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-paper-plane"></i>
                <div className="ud-header-info-box__details">
                  <span>Office address</span>
                  <h4>
                    {company.addressLines[0]}
                    <br />
                    {company.addressLines[1]}
                  </h4>
                </div>
              </div>
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-envelope"></i>
                <div className="ud-header-info-box__details">
                  <span>Email</span>
                  <h4>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </h4>
                </div>
              </div>
            </div>
            <ul className="ud-side-popup__bottom-socials">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
