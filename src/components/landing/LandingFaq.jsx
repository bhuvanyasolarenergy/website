import { useState } from "react";
import { Link } from "react-router-dom";
import { faqItems } from "@/assets/data/faq";

const LandingFaq = () => {
  const items = faqItems.slice(0, 5);
  const [open, setOpen] = useState(0);

  return (
    <section className="ld-section ld-faq">
      <div className="ld-section__inner">
        <div className="ld-faq__grid">
          <div className="ld-faq__intro ld-reveal">
            <p className="eyebrow">FAQ</p>
            <h2 className="title">
              Common questions about <em>Solar &amp; BESS</em> projects.
            </h2>
            <p className="desc">
              Quick answers grounded in our company profile — bankability,
              tenders, commercial structure, and BESS factory setup.
            </p>
            <Link to="/faq" className="ld-btn ld-btn--ghost">
              Read all FAQs <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="ld-faq__list ld-reveal">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`ld-faq__item ${open === idx ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="ld-faq__btn"
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                  aria-expanded={open === idx}
                >
                  <span>{item.question}</span>
                  <i className="fa-solid fa-plus ld-faq__icon" />
                </button>
                <div className="ld-faq__answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFaq;
