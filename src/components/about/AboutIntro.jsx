import { company } from "@/assets/data/company";

const AboutIntro = () => {
  return (
    <section className="about-intro">
      <div className="container">
        <div className="about-intro__grid">
          <div className="about-intro__content" data-aos="fade-up">
            <span className="about-intro__badge">{company.shortName} Profile</span>
            <h2 className="about-intro__title">Who we are</h2>
            <p className="about-intro__lead">{company.elevatorPitch}</p>
            <p className="about-intro__text">{company.about}</p>
            <div className="about-intro__regions">
              <strong>We operate across:</strong> {company.serviceRegions}
            </div>
            <a
              href={company.profilePdfUrl}
              className="about-intro__cta"
              download
            >
              Download company profile (PDF)
              <i className="fa-solid fa-arrow-down ms-2" aria-hidden="true" />
            </a>
          </div>
          <div className="about-intro__visual" data-aos="fade-up" data-aos-delay="150">
            <div className="about-intro__card">
              <img
                src={company.logoUrl}
                alt={company.legalName}
                className="about-intro__logo"
              />
              <div className="about-intro__card-badge">
                <img src="/images/about-us/medal.png" alt="" />
                <span>15+ years of combined experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
