import { company } from "@/assets/data/company";
import { Link } from "react-router-dom";

const AboutServices = () => {
  return (
    <section className="about-services">
      <div className="container">
        <div className="about-services__head" data-aos="fade-up">
          <span className="about-services__badge">What We Offer</span>
          <h2 className="about-services__title">Solar consultancy services</h2>
          <p className="about-services__desc">
            We provide end-to-end solar consultancy so you can make informed, technically sound,
            and financially viable decisions for industrial, commercial, and institutional clients.
          </p>
        </div>
        <div className="about-services__grid">
          {company.consultancyOfferings.map(({ title, text }, idx) => (
            <article
              key={title}
              className="about-services__card"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              <h4 className="about-services__card-title">{title}</h4>
              <p className="about-services__card-text">{text}</p>
            </article>
          ))}
        </div>

        <div className="about-services__why" data-aos="fade-up">
          <h3 className="about-services__why-title">Why choose solar?</h3>
          <div className="about-services__why-grid">
            {company.whySolar.map(({ title, text }, idx) => (
              <div
                key={title}
                className="about-services__why-item"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <i className="fa-solid fa-sun about-services__why-icon" aria-hidden="true" />
                <div>
                  <h4 className="about-services__why-item-title">{title}</h4>
                  <p className="about-services__why-item-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-services__cta" data-aos="fade-up">
          <Link to="/services" className="about-services__cta-btn">
            Explore our services <i className="fa-solid fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
