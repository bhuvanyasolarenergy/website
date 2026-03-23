import SectionTop from "@/components/shared/SectionTop";

const ProjectDetails = () => {
  return (
    <>
      <SectionTop title="Project Details" />

      <section className="srex-single-project srex-section pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="srex-single-pro-img">
                <img src="/images/srex-single-proect.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <div className="single_pro_details">
                <h1>Exploring The Benefit Of Solar Energy</h1>
                <p>
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacusNullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In
                  hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus.
                </p>
                <p>Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus</p>
                <h4>Be safe and Healthy</h4>
                <p>Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus</p>
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
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Staying Hydrated
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Meditation And Mindfunlness
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Creating a Balanced Diet
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Positive Thinking And Health
                  </li>
                </ul>
                <p>Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore ipsum dolor sit amet, consectetur adipiscing elit. In hac habit asse pla dictumst. Duis porta, quam ut finibus ultrices, lorem lacus</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="single_pro_details_info">
                <div className="spdi">
                  <h3>Project Information</h3>
                </div>
                <div className="spdi_info">
                  <div className="spdi_info_details">
                    <span>Category:</span>
                    <p>Corporate, Business</p>
                  </div>
                  <div className="spdi_info_details">
                    <span>Company:</span>
                    <p>Kauya kader</p>
                  </div>
                </div>
                <div className="spdi_info">
                  <div className="spdi_info_details">
                    <span>Start date:</span>
                    <p>04 June 2024</p>
                  </div>
                  <div className="spdi_info_details">
                    <span>End Date:</span>
                    <p>29 December 2025</p>
                  </div>
                </div>
                <div className="spdi_info">
                  <div className="spdi_social_rat">
                    <h4>
                      Rating:
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </h4>
                  </div>
                  <div className="spdi_social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
