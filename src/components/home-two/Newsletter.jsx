const Newsletter = () => {
  return (
    <div className="srex-news-letter srex-section ">
      <div className="container">
        <div className="srex-news-letter__box srex-news-letter__box--two">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="srex-news-letter__box__left">
                <img src="/images/frame.png" alt="Frame" className="srex-section__frame" />
                <h2 data-aos="fade-up">Subscribe to Our Newsletter</h2>
                <p data-aos="fade-up" data-aos-delay="300">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="srex-news-letter__box__right">
                <form className="text-center">
                  <input placeholder="Enter your email" type="text" />
                  <button type="button" className="srex-btn srex-btn--white">
                    Subscribe Now <i className="fa-solid fa-plus"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
