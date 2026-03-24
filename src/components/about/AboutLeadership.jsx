import { company } from "@/assets/data/company";

const AboutLeadership = () => {
  return (
    <section className="about-leadership">
      <div className="container">
        <div className="about-leadership__head" data-aos="fade-up">
          <span className="about-leadership__badge">Our Team</span>
          <h2 className="about-leadership__title">Leadership</h2>
        </div>
        <div className="about-leadership__grid">
          {company.leadership.map(({ name, role, bio }, idx) => (
            <article
              key={name}
              className="about-leadership__card"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="about-leadership__avatar">
                {name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="about-leadership__name">{name}</h3>
              <p className="about-leadership__role">{role}</p>
              <p className="about-leadership__bio">{bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
