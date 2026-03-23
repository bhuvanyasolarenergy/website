import Isotope from "isotope-layout";
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");
  const containerRef = useRef(null);
  const imagesLoaded = useRef(0);
  const totalImages = useRef(0);

  const portfolioItems = [
    { id: 1, category: "solar-pro", title: "Equality and solidarity", image: "/images/home-two/portfolio/portfolio-1.png" },
    { id: 2, category: "power", title: "Windward Renewables", image: "/images/home-two/portfolio/portfolio-2.png" },
  ];

  totalImages.current = portfolioItems.length;

  const handleImageLoad = () => {
    imagesLoaded.current += 1;
    if (imagesLoaded.current === totalImages.current) {
      initIsotope();
    }
  };

  const initIsotope = () => {
    if (containerRef.current) {
      const iso = new Isotope(containerRef.current, {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
      setIsotope(iso);
    }
  };

  useLayoutEffect(() => {
    return () => isotope && isotope.destroy();
  }, [isotope]);

  useLayoutEffect(() => {
    if (isotope) {
      const filter = filterKey === "*" ? "*" : `.${filterKey}`;
      isotope.arrange({ filter });
    }
  }, [isotope, filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  return (
    <section className="srex-portfolio-two srex-section">
      <img src="/images/frame.png" alt="Frame" className="srex-portfolio-two__frame " />
      <div className="container">
        <div className="srex-section__head">
          <h5 data-aos="fade-up" className="srex-section__head__badge ">
            Latest Portfolio
          </h5>
          <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row ">
            <h2 data-aos="fade-up" className="srex-section__head__title">
              Exploring the Benefits of Solar Energy
            </h2>
            <div data-aos="fade-up" data-aos-delay="400">
              <Link to="/about" className="srex-btn srex-btn--primary mt-4">
                Read More <i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-12">
            <div className="controls">
              <ul id="filters">
                {["*", "power", "eco-solar", "solar-pro", "energy"].map((key) => (
                  <li key={key} className={`filter ${filterKey === key ? "active" : ""}`} onClick={handleFilterKeyChange(key)}>
                    {key === "*" ? "All" : key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <div className="row" id="srex-ho-filter" ref={containerRef}>
              {portfolioItems.map(({ id, category, image, title }) => (
                <div key={id} className={`col-lg-6 col-12 filter-item ${category}`}>
                  <div className="srex-portfolio-two__item">
                    <img src={image} alt={`portfolio-${id}`} onLoad={handleImageLoad} onError={handleImageLoad} />
                    <div className="srex-portfolio-two__item__box">
                      <h3>{title}</h3>
                      <p>The generated is therefore al free from repetition, injected humour, or words etc solar solution</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
