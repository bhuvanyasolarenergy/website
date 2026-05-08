import { company } from "@/assets/data/company";

const stats = [
  { value: `${company.stats.totalProjects}+`, label: "Solar projects delivered" },
  { value: `${company.stats.totalProjectCapacityMw} MW`, label: "Installed capacity" },
  { value: "35+", label: "Years combined leadership" },
];

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="about-stats__grid">
          {stats.map(({ value, label }, idx) => (
            <div
              key={label}
              className="about-stats__item"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <span className="about-stats__value">{value}</span>
              <span className="about-stats__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
