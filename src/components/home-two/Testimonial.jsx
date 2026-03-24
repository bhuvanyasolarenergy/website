import { clientTestimonials } from "@/assets/data/testimonials";
import { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <section className="srex-testimonial-two srex-section container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-testimonial-two__title">
              <img src="/images/frame.png" alt="" className="srex-section__frame " />
              <div className="srex-section__head ">
                <h5 data-aos="fade-up" className="srex-section__head__badge">
                  Testimonials
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">
                  What our clients say?
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="mb-5 mt-3">
                  Industrial and commercial teams — including stone and marble processors — choose Bhuvanya Energy for clear engineering, transparent execution, and
                  long-term support on solar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 col-md-12">
            <Slider ref={sliderRef} {...settings} className="srex-testimonial-two__slider ">
              {clientTestimonials.map(({ quote, name, role }) => (
                <div key={name} className="srex-testimonial-two__slider__item">
                  <div className="srex-testimonial-two__slider__item__ratings">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="d-flex justify-content-between align-content-center">
                    <div className="srex-testimonial-two__slider__item__author">
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                    <img src="/images/quote-2.svg" alt="" className="srex-testimonial-two__slider__item__quote" />
                  </div>
                  <p className="srex-testimonial-two__slider__item__text">&quot;{quote}&quot;</p>
                </div>
              ))}
            </Slider>
            <div className="srex-testimonial-two__slider__nav">
              <div onClick={previous} className="srex-testimonial-two__slider__nav__prev" role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && previous()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="currentColor">
                  <path
                    d="M6.03633 23.7642L18.6926 36.4205C18.9564 36.6843 19.3143 36.8326 19.6875 36.8326C20.0607 36.8326 20.4186 36.6843 20.6824 36.4205C20.9463 36.1566 21.0945 35.7987 21.0945 35.4256C21.0945 35.0524 20.9463 34.6945 20.6824 34.4306L10.4256 24.1756H37.9688C38.3417 24.1756 38.6994 24.0274 38.9631 23.7637C39.2268 23.5 39.375 23.1423 39.375 22.7693C39.375 22.3963 39.2268 22.0387 38.9631 21.7749C38.6994 21.5112 38.3417 21.3631 37.9688 21.3631H10.4256L20.6824 11.108C20.9463 10.8441 21.0945 10.4862 21.0945 10.1131C21.0945 9.73989 20.9463 9.382 20.6824 9.11813C20.4186 8.85426 20.0607 8.70602 19.6875 8.70602C19.3143 8.70602 18.9564 8.85426 18.6926 9.11813L6.03633 21.7744C5.90558 21.905 5.80186 22.0601 5.73109 22.2308C5.66032 22.4015 5.6239 22.5845 5.6239 22.7693C5.6239 22.9541 5.66032 23.1371 5.73109 23.3078C5.80186 23.4785 5.90558 23.6336 6.03633 23.7642Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div onClick={next} className="srex-testimonial-two__slider__nav__next" role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && next()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                  <path
                    d="M38.9637 23.7642L26.3074 36.4205C26.0436 36.6843 25.6857 36.8326 25.3125 36.8326C24.9393 36.8326 24.5814 36.6843 24.3176 36.4205C24.0537 36.1566 23.9055 35.7987 23.9055 35.4256C23.9055 35.0524 24.0537 34.6945 24.3176 34.4306L34.5744 24.1756H7.03125C6.65829 24.1756 6.3006 24.0274 6.03688 23.7637C5.77316 23.5 5.625 23.1423 5.625 22.7693C5.625 22.3963 5.77316 22.0387 6.03688 21.7749C6.3006 21.5112 6.65829 21.3631 7.03125 21.3631H34.5744L24.3176 11.108C24.0537 10.8441 23.9055 10.4862 23.9055 10.1131C23.9055 9.73989 24.0537 9.382 24.3176 9.11813C24.5814 8.85426 24.9393 8.70602 25.3125 8.70602C25.6857 8.70602 26.0436 8.85426 26.3074 9.11813L38.9637 21.7744C39.0944 21.905 39.1981 22.0601 39.2689 22.2308C39.3397 22.4015 39.3761 22.5845 39.3761 22.7693C39.3761 22.9541 39.3397 23.1371 39.2689 23.3078C39.1981 23.4785 39.0944 23.6336 38.9637 23.7642Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-12">
            <div className="srex-testimonial-two__right ">
              <img src="/images/home-two/testimonial-r-shape.png" alt="" />
              <img className="srex-testimonial-two__right__img " src="/images/about-us/about-us-bottom.png" alt="" />
              <div className="srex-testimonial-two__right__badge">
                <img src="/images/flag.png" alt="" />
                <h3>
                  Top Quality <br /> Solar Service
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
