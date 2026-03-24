import { company } from "@/assets/data/company";
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
                <img src="/images/srex-single-proect.png" alt="Solar installation project" />
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <div className="single_pro_details">
                <h1>Commercial rooftop solar installation</h1>
                <p>
                  Bhuvanya Energy delivers turnkey solar solutions for commercial and industrial clients. From initial feasibility study and site assessment through design, approvals, installation, and commissioning, we handle every aspect of your solar project. Our team of electrical engineers brings deep expertise in solar plant design and long-term performance optimization.
                </p>
                <p>
                  We focus on engineering precision and quality execution — from shadow mapping and load analysis to technology selection, financial modelling, and O&M support. Unlike companies that focus only on sales, we ensure your solar plant runs efficiently over its full lifespan.
                </p>
                <h4>What we deliver</h4>
                <p>
                  Our turnkey service includes feasibility study, system design, government approvals, supply of quality components, installation, commissioning, and after-sales O&M. We offer both CAPEX and OPEX models, with detailed ROI analysis and payback calculations tailored to your site and energy needs.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" /> Feasibility study and site assessment
                  </li>
                  <li>
                    <i className="fa-solid fa-check" /> System design and technology selection
                  </li>
                  <li>
                    <i className="fa-solid fa-check" /> Government approvals and regulatory support
                  </li>
                  <li>
                    <i className="fa-solid fa-check" /> Supply, installation, and commissioning
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" /> O&M and long-term performance monitoring
                  </li>
                  <li>
                    <i className="fa-solid fa-check" /> Financial modelling and investment structuring
                  </li>
                  <li>
                    <i className="fa-solid fa-check" /> Customized solutions for C&I and residential
                  </li>
                  <li>
                    <i className="fa-solid fa-check" /> Transparent pricing and quality components
                  </li>
                </ul>
                <p>
                  Operating across Jaipur, Kishangarh, Neemrana, Udaipur, Haryana, and Gujarat, we support clients with rooftop and ground-mounted solar systems. Contact us for a free consultation or feasibility study.
                </p>
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
                    <p>Commercial, Industrial</p>
                  </div>
                  <div className="spdi_info_details">
                    <span>Company:</span>
                    <p>Bhuvanya Energy Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="spdi_info">
                  <div className="spdi_info_details">
                    <span>Service regions:</span>
                    <p>Jaipur · Kishangarh · Neemrana · Udaipur · Haryana · Gujarat</p>
                  </div>
                </div>
                <div className="spdi_info">
                  <div className="spdi_social_rat">
                    <h4>
                      Rating:
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </h4>
                  </div>
                  <div className="spdi_social">
                    <ul>
                      <li>
                        <a href={company.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                          <i className="fa-brands fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href={company.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href={company.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                          <i className="fa-brands fa-linkedin" />
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
