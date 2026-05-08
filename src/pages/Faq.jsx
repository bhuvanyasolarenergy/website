import { useState } from "react";
import { Link } from "react-router-dom";
import { faqItems } from "@/assets/data/faq";
import { company } from "@/assets/data/company";
import LandingCta from "@/components/landing/LandingCta";
import PageHero from "@/components/landing/PageHero";

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="page-faq">
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Frequently asked <em>questions</em>.
          </>
        }
        lede="Answers grounded in our company profile — bankability, tenders, BESS sizing, factory setup, and commercial structure."
        actions={
          <div className="ld-hero__cta">
            <Link to="/contact" className="ld-btn ld-btn--accent">
              Have a different question?{" "}
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        }
        pillars={[
          {
            num: "→",
            body: (
              <>
                <strong>{faqItems.length} answers</strong>
                Covering services, lifecycle, tenders, BESS &amp; factory.
              </>
            ),
          },
          {
            num: "→",
            body: (
              <>
                <strong>Direct contact</strong>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="ld-hero__pillar-link"
                >
                  {company.phoneDisplay}
                </a>
              </>
            ),
          },
        ]}
      />

      <section className="ld-section">
        <div className="ld-section__inner">
          <div className="faq-page">
            <div className="ld-faq__list">
              {faqItems.map((item, idx) => (
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

      <LandingCta variant="compact" />
    </div>
  );
};

export default Faq;
