import { company } from "@/assets/data/company";
import SectionTop from "@/components/shared/SectionTop";

const Contact = () => {
  return (
    <>
      <SectionTop title="Contact Us" />

      <section className="srex-contact--three srex-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="srex_contact_address">
                <div className="srex_contact_content">
                  <h4>- Information</h4>
                  <h1>Get in touch</h1>
                  <p>
                    Contact {company.legalName} for solar rooftop systems, commercial and industrial projects, and energy consulting. We are happy to answer questions and schedule
                    a site visit.
                  </p>
                  <p className="mt-3">
                    <a href={company.profilePdfUrl} className="srex-btn srex-btn--primary" download>
                      Company profile (PDF)
                    </a>
                  </p>
                </div>
                <div className="srex-single-address">
                  <div className="address_icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <h4>Address</h4>
                  <p>
                    {company.addressLines[0]}
                    <br />
                    {company.addressLines[1]}
                  </p>
                </div>
                <div className="srex-single-address">
                  <div className="address_icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <h4>Phone</h4>
                  <p>
                    <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                  </p>
                  <p>Monday to Saturday, 9:00 am – 6:00 pm</p>
                </div>
                <div className="srex-single-address">
                  <div className="address_icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </p>
                </div>
                <div className="srex-single-address">
                  <div className="address_icon">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <h4>Website</h4>
                  <p>
                    <a href={company.website} target="_blank" rel="noreferrer">
                      {company.websiteDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="srex-contact__left srex_contact_address ">
                <div className="srex_contact_content">
                  <h4>- Message us</h4>
                  <h1>Send us a message</h1>
                </div>
                <form action="#">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-12">
                      <input name="full-name" placeholder="Your Name" type="text" required />
                    </div>
                    <div className="col-md-12 col-12">
                      <input name="email" placeholder="Email Address" type="text" required />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-12">
                      <input placeholder="Your Phone" type="text" name="phone" required />
                    </div>
                  </div>
                  <div>
                    <textarea placeholder="Your Message" id="message" rows="5" name="message" required></textarea>
                  </div>
                  <div>
                    <button type="button" className="srex-btn srex-btn--secondary">
                      Send a message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map">
                <iframe
                  title="Bhuvanya Energy — Jagatpura, Jaipur"
                  src="https://www.google.com/maps?q=Capital+Highstreet+Mall,+Jagatpura,+Jaipur+302017&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
