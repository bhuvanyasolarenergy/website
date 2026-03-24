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
    { id: 1, category: "solar-pro", title: "Commercial rooftop — Jaipur", image: "/images/portfolio/portfolio-1.png" },
    { id: 2, category: "power", title: "Industrial plant — Kishangarh", image: "/images/portfolio/portfolio-2.png" },
    { id: 3, category: "eco-solar", title: "Residential rooftop — Neemrana", image: "/images/portfolio/portfolio-3.png" },
    { id: 4, category: "energy", title: "C&I solar — Udaipur region", image: "/images/portfolio/portfolio-4.png" },
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
    <section className="srex-portfolio srex-section">
      <div className="container-fluid">
        <div className="srex-portfolio__title">
          <div className="srex-section__head ">
            <h5 data-aos="fade-up" className="srex-section__head__badge">
              <img src="/images/badge-icon.svg" alt="Badge Icon" />
              latest portfolio
            </h5>
            <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title">
              Embrace the power of the sun with solar energy!
            </h2>
          </div>
        </div>
        <div className="controls ">
          <ul id="filters">
            {["*", "power", "eco-solar", "solar-pro", "energy"].map((key) => (
              <li key={key} className={`filter ${filterKey === key ? "active" : ""}`} onClick={handleFilterKeyChange(key)}>
                {key === "*" ? "All" : key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ")}
              </li>
            ))}
          </ul>
        </div>
        <div className="row" id="srex-ho-filter" ref={containerRef}>
          {portfolioItems.map((item) => (
            <div key={item.id} className={`col-md-6 col-lg-4 col-xl-3 col-12 filter-item ${item.category}`}>
              <Link to="/project-details">
                <div className="srex-portfolio__item ">
                  <img
                    src={item.image}
                    alt={`portfolio-${item.id}`}
                    onLoad={handleImageLoad}
                    onError={handleImageLoad} // Handle error to avoid getting stuck if an image fails to load
                  />
                  <div className="srex-portfolio__item__title">
                    <h2>{item.id.toString().padStart(2, "0")}</h2>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
