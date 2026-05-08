import { company } from "@/assets/data/company";
import PageHero from "@/components/landing/PageHero";

const Contact = () => {
  return (
    <div className="page-contact">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s plan your <em>next project</em>.
          </>
        }
        lede="Reach out for a Solar PV / BESS feasibility study, tender strategy, factory setup advisory, or O&amp;M discussion. We respond within one business day."
        actions={
          <div className="ld-hero__cta">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="ld-btn ld-btn--accent"
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp us
            </a>
            <a
              href={company.profilePdfUrl}
              download
              className="ld-btn ld-btn--inverse"
            >
              Download profile
            </a>
          </div>
        }
        pillars={[
          {
            num: "→",
            body: (
              <>
                <strong>Phone</strong>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="ld-hero__pillar-link"
                >
                  {company.phoneDisplay}
                </a>
              </>
            ),
          },
          {
            num: "→",
            body: (
              <>
                <strong>Email</strong>
                <a
                  href={`mailto:${company.email}`}
                  className="ld-hero__pillar-link"
                >
                  {company.email}
                </a>
              </>
            ),
          },
          {
            num: "→",
            body: (
              <>
                <strong>Office</strong>
                {company.addressLines[0]}
                <br />
                {company.addressLines[1]}
              </>
            ),
          },
        ]}
      />

      {/* Contact form */}
      <section className="ld-section">
        <div className="ld-section__inner">
          <div className="contact-grid">
            <div className="contact-grid__form-wrap">
              <p className="eyebrow">Send a message</p>
              <h2 className="title">Tell us about your project</h2>
              <p className="desc">
                The more details you share — site location, capacity, tender
                ID, timeline — the faster we can come back with a meaningful
                proposal.
              </p>
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="contact-form__row">
                  <label>
                    <span>Full name</span>
                    <input type="text" placeholder="Your full name" required />
                  </label>
                  <label>
                    <span>Company</span>
                    <input type="text" placeholder="Your company / role" />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label>
                    <span>Email</span>
                    <input type="email" placeholder="you@company.com" required />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input type="tel" placeholder="+91" />
                  </label>
                </div>
                <label>
                  <span>Project type</span>
                  <select>
                    <option>Solar PV — Rooftop / C&amp;I</option>
                    <option>Solar PV — Utility scale / IPP</option>
                    <option>BESS — Standalone</option>
                    <option>BESS — Hybrid (Solar + BESS)</option>
                    <option>Tender / consultancy support</option>
                    <option>BESS factory setup</option>
                    <option>O&amp;M only</option>
                  </select>
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    rows="5"
                    placeholder="Site, capacity, timeline, any tender references…"
                  />
                </label>
                <button type="submit" className="ld-btn ld-btn--primary">
                  Send message <i className="fa-solid fa-arrow-right" />
                </button>
              </form>
            </div>

            <aside className="contact-grid__side">
              <div className="contact-card">
                <p className="contact-card__label">Direct contact</p>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="contact-card__line"
                >
                  <i className="fa-solid fa-phone" />
                  {company.phoneDisplay}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="contact-card__line"
                >
                  <i className="fa-solid fa-envelope" />
                  {company.email}
                </a>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card__line"
                >
                  <i className="fa-brands fa-whatsapp" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-card">
                <p className="contact-card__label">Office</p>
                <p className="contact-card__address">
                  <i className="fa-solid fa-location-dot" />
                  {company.addressLines[0]}
                  <br />
                  {company.addressLines[1]}
                </p>
                <p className="contact-card__hours">
                  Mon – Sat &nbsp;·&nbsp; 9:00 am – 6:00 pm
                </p>
              </div>

              <div className="contact-card contact-card--social">
                <p className="contact-card__label">Connect</p>
                <div className="contact-card__social">
                  <a
                    href={company.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin" />
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
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <iframe
          title="Bhuvanya Energy — Durgapura, Jaipur"
          src="https://www.google.com/maps?q=Balaji+Tower+VI,+Durgapura,+Jaipur&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
