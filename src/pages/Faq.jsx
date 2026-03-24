import { Link } from "react-router-dom";
import { faqItems } from "@/assets/data/faq";
import { company } from "@/assets/data/company";

const Faq = () => {
  return (
    <>
      <section className="faq-hero">
        <div className="faq-hero__bg" aria-hidden="true" />
        <div className="container">
          <div className="faq-hero__inner">
            <nav className="faq-hero__breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="faq-hero__separator" aria-hidden="true">/</span>
              <span>FAQ</span>
            </nav>
            <h1 className="faq-hero__title">Frequently asked questions</h1>
            <p className="faq-hero__desc">
              Answers to common questions about our solar solutions, services, and process — based on the BEPL company profile.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-accordion" data-aos="fade-up">
              <div className="accordion" id="faqAccordion">
                {faqItems.map(({ question, answer }, idx) => (
                  <div key={idx} className="faq-accordion__item">
                    <div className="faq-accordion__header">
                      <button
                        type="button"
                        className={`faq-accordion__btn ${idx === 0 ? "" : "collapsed"}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqCollapse${idx}`}
                        aria-expanded={idx === 0}
                        aria-controls={`faqCollapse${idx}`}
                        id={`faqHeading${idx}`}
                      >
                        <span className="faq-accordion__question">{question}</span>
                        <i className="fa-solid fa-plus faq-accordion__icon" aria-hidden="true" />
                      </button>
                    </div>
                    <div
                      id={`faqCollapse${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      aria-labelledby={`faqHeading${idx}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="faq-accordion__body">
                        {answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="faq-sidebar" data-aos="fade-up" data-aos-delay="150">
              <div className="faq-sidebar__card">
                <img
                  src="/images/home-two/question/question-img.png"
                  alt="Solar solutions"
                  className="faq-sidebar__img"
                />
                <div className="faq-sidebar__badge">
                  <span className="faq-sidebar__number">15+</span>
                  <span className="faq-sidebar__label">Years combined experience</span>
                </div>
              </div>
              <div className="faq-sidebar__contact">
                <h3>Still have questions?</h3>
                <p>Reach out for a consultation or feasibility study.</p>
                <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="faq-sidebar__cta">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Chat on WhatsApp
                </a>
                <a href={`mailto:${company.email}`} className="faq-sidebar__cta faq-sidebar__cta--outline">
                  <i className="fa-solid fa-envelope" aria-hidden="true" /> {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
