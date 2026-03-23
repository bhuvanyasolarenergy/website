import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="srex-hero-two srex-section">
      <div className="container">
        <div className="srex-hero-two__box d-flex flex-column">
          <h1 data-aos="fade-up" className="">
            BHUVANYA <span>ENERGY</span>
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="200" className="">
            Solar for a better future
          </h2>
          <p data-aos="fade-up" data-aos-delay="400" className="">
            Bhuvanya Energy Pvt. Ltd. helps you generate clean electricity with rooftop and commercial solar—expert design, quality components, and support from Jaipur.
          </p>
          <div data-aos="fade-up" data-aos-delay="600" className="d-flex gap-4 ">
            <a href="#" className="srex-btn srex-btn--secondary">
              Discover More <i className="fa-solid fa-plus"></i>
            </a>
            <Link to="/services" className="srex-btn srex-btn--outline">
              All Services <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
