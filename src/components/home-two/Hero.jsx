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
            Solar PV, BESS &amp; turnkey consultancy
          </h2>
          <p data-aos="fade-up" data-aos-delay="400" className="">
            End-to-end Solar PV and Battery Energy Storage System (BESS) services — from feasibility
            and tender support to EPC, commissioning, O&amp;M, and BESS factory setup. Trusted by
            industrial clients and aligned with SECI, NTPC, and DISCOM tenders.
          </p>
          <div data-aos="fade-up" data-aos-delay="600" className="d-flex gap-4 ">
            <Link to="/services" className="srex-btn srex-btn--secondary">
              Our Services <i className="fa-solid fa-plus"></i>
            </Link>
            <Link to="/projects" className="srex-btn srex-btn--outline">
              Featured Projects <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
