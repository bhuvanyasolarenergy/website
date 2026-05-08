import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const Portfolio = () => {
  const featured = [...company.projects]
    .sort((a, b) => b.capacityKw - a.capacityKw)
    .slice(0, 6);

  return (
    <section className="home-portfolio">
      <div className="container">
        <div className="home-portfolio__head" data-aos="fade-up">
          <span className="home-portfolio__badge">Featured Projects</span>
          <div className="home-portfolio__row">
            <h2 className="home-portfolio__title">
              Real installations, real capacity
            </h2>
            <Link to="/projects" className="home-portfolio__more">
              View all projects <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </div>
          <p className="home-portfolio__desc">
            From 1 MW industrial rooftops to mid-size C&amp;I systems — BEPL has delivered solar
            EPC across granite, marble, textile, and industrial clients in India.
          </p>
        </div>

        <div className="home-portfolio__grid">
          {featured.map(({ client, capacityKw, sector }, idx) => (
            <article
              key={`${client}-${capacityKw}-${idx}`}
              className="home-portfolio__card"
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 60}
            >
              <div className="home-portfolio__capacity">
                <span className="home-portfolio__capacity-num">{capacityKw}</span>
                <span className="home-portfolio__capacity-unit">kW</span>
              </div>
              <div className="home-portfolio__card-body">
                <h3 className="home-portfolio__client">{client}</h3>
                <p className="home-portfolio__sector">{sector}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
