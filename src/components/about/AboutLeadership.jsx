import { company } from "@/assets/data/company";

const AboutLeadership = () => {
  return (
    <section className="about-leadership">
      <div className="container">
        <div className="about-leadership__head" data-aos="fade-up">
          <span className="about-leadership__badge">Meet our directors</span>
          <h2 className="about-leadership__title">Leadership</h2>
          <p className="about-leadership__subtitle">
            Our team brings 35+ years of combined experience across Solar, BESS, EPC, and renewable
            energy consultancy.
          </p>
        </div>
        <div className="about-leadership__grid about-leadership__grid--three">
          {company.leadership.map(({ name, role, bio, experience, focus }, idx) => (
            <article
              key={name}
              className="about-leadership__card"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="about-leadership__avatar">
                {name
                  .replace(/^Mr\.?\s+/, "")
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="about-leadership__name">{name}</h3>
              <p className="about-leadership__role">{role}</p>
              {(experience || focus) && (
                <p className="about-leadership__meta">
                  {experience && <span>{experience} yrs</span>}
                  {experience && focus && <span className="about-leadership__sep">·</span>}
                  {focus && <span>{focus}</span>}
                </p>
              )}
              <p className="about-leadership__bio">{bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
