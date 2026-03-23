import Slider from "react-slick";
const Sponsor = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="srex-sponsor srex-sponsor-two srex-section ">
      <div className="container">
        <Slider {...settings} className="srex-sponsor__items ">
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-two/sponsor/sponsor-1.png" alt="Sponsor" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-two/sponsor/sponsor-2.png" alt="Sponsor" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-two/sponsor/sponsor-3.png" alt="Sponsor" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-two/sponsor/sponsor-4.png" alt="Sponsor" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-two/sponsor/sponsor-5.png" alt="Sponsor" />
          </a>
        </Slider>
      </div>
    </div>
  );
};

export default Sponsor;
