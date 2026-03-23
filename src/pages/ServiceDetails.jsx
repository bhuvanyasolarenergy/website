import SectionTop from "@/components/shared/SectionTop";

const ServiceDetails = () => {
  return (
    <>
      <SectionTop title="Service Details" />

      <section className="srex-single-project srex-section pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="single_ser_info">
                <h4>Services</h4>
                <a href="#">
                  Business Advice <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#">
                  Logo Marketing <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#">
                  Regular the product <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#">
                  Precious metal stant <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#">
                  Labratory big service <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="single_brochure">
                <h4>Brochure</h4>
                <div className="single_bro_doc">
                  <div className="sbd_icon">
                    <i className="fa-regular fa-folder"></i>
                  </div>
                  <h5>Document New business</h5>
                  <p>Business Consulation</p>
                  <div className="sbd_icon_two">
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                </div>
                <div className="single_bro_doc">
                  <div className="sbd_icon">
                    <i className="fa-regular fa-folder"></i>
                  </div>
                  <h5>Document New business</h5>
                  <p>Business Consulation</p>
                  <div className="sbd_icon_two">
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <div className="single_pro_details single_ser_details">
                <div className="srex-single-pro-img">
                  <img src="/images/single_pro_img.png" alt="" />
                </div>
                <h1>Benefit Of Solar Energy</h1>
                <p>Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Creating a Bananced And Nutritions
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> The importance Of staying Hydraed
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> The Link Between Mental Health
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> How to get Enough Sleep
                  </li>
                </ul>
                <p>
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus. Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit.
                  In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus.
                </p>
                <h4>Simple Four Steps</h4>
                <p>Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
