import { Link } from "react-router-dom";
import { faqItems } from "@/assets/data/faq";

const Question = () => {
  return (
    <section className="srex-question-two srex-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="srex-section__head">
              <h2 data-aos="fade-up" className="srex-section__head__title">
                Frequently asked questions
              </h2>
              <p data-aos="fade-up" data-aos-delay="300" className="mb-5 mt-3">
                Common questions about our solar solutions, services, and process — based on the BEPL company profile.
              </p>
            </div>
            <div className="srex-question-two__left">
              <div className="srex-accordion accordion" id="faqHome">
                {faqItems.slice(0, 4).map(({ question, answer }, idx) => (
                  <div key={idx} className="accordion-item">
                    <div className="accordion-header">
                      <div
                        className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqHomeCollapse${idx}`}
                        aria-expanded={idx === 0}
                        aria-controls={`faqHomeCollapse${idx}`}
                        role="button"
                      >
                        <div className="accordion-header__left">
                          <h3>{question}</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open" aria-hidden="true" />
                        <i className="fa-solid fa-angle-up close" aria-hidden="true" />
                      </div>
                    </div>
                    <div
                      id={`faqHomeCollapse${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#faqHome"
                    >
                      <div className="accordion-body">{answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/faq" className="srex-btn srex-btn--primary mt-3">
                View all FAQs <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="srex-question-two__right">
              <img src="/images/home-two/question/question-img.png" alt="Solar solutions" />
              <div className="srex-question-two__right__box d-flex gap-3">
                <h2>15+</h2>
                <h4>
                  years of <br /> experience
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
