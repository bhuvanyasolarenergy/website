import { company } from "@/assets/data/company";

const AboutVisionMission = () => {
  return (
    <section className="about-vm">
      <div className="container container--narrow">
        <h2 className="about-vm__section-title">Vision & Mission</h2>
        <div className="about-vm__grid">
          <article className="about-vm__block" data-aos="fade-up">
            <div className="about-vm__header">
              <span className="about-vm__icon"><i className="fa-solid fa-eye" aria-hidden="true" /></span>
              <h3 className="about-vm__heading">Vision</h3>
            </div>
            <p className="about-vm__text">{company.vision}</p>
          </article>
          <article className="about-vm__block" data-aos="fade-up" data-aos-delay="100">
            <div className="about-vm__header">
              <span className="about-vm__icon"><i className="fa-solid fa-bullseye" aria-hidden="true" /></span>
              <h3 className="about-vm__heading">Mission</h3>
            </div>
            <p className="about-vm__intro">{company.missionIntro}</p>
            <ul className="about-vm__list">
              {company.missionPoints.map((line, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-check" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
