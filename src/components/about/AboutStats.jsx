const stats = [
  { value: "15+", label: "Years experience" },
  { value: "6", label: "Service regions" },
  { value: "100%", label: "Turnkey solutions" },
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
