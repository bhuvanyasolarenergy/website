import { clientTestimonials } from "@/assets/data/testimonials";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <section className="srex-testimonial-one srex-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="srex-testimonial-one__left text-left">
              <div className="srex-section__head">
                <h2 className="srex-section__head__title ">What our clients say?</h2>
              </div>

              <Slider {...settings} className="srex-testimonial-one__slider ">
                {clientTestimonials.map(({ quote, name, role }) => (
                  <div key={name} className="srex-testimonial-one__slider__item">
                    <img src="/images/quote.svg" alt="" className="srex-testimonial-one__slider__item__quote" />
                    <p className="srex-testimonial-one__slider__item__text">&quot;{quote}&quot;</p>
                    <div className="srex-testimonial-one__slider__item__author">
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="srex-testimonial-one__right">
              <img src="/images/home-one/testimonial/testimonial-right.png" alt="" className="srex-testimonial-one__right__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
