import { company } from "@/assets/data/company";
import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <>
      <SectionTop title="Service Details" />

      <section className="srex-single-project srex-section pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="single_ser_info">
                <h4>Our services</h4>
                {company.coreServices.map(({ title }) => (
                  <Link key={title} to="/services">
                    {title} <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                ))}
              </div>
              <div className="single_brochure">
                <h4>Company profile</h4>
                <a href={company.profilePdfUrl} download target="_blank" rel="noreferrer" className="single_bro_doc text-decoration-none text-reset d-block">
                  <div className="sbd_icon">
                    <i className="fa-regular fa-folder"></i>
                  </div>
                  <h5>BEPL company profile (PDF)</h5>
                  <p>Overview of capabilities and offerings</p>
                  <div className="sbd_icon_two">
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <div className="single_pro_details single_ser_details">
                <div className="srex-single-pro-img">
                  <img src="/images/single_pro_img.png" alt="" />
                </div>
                <h1>Benefits of going solar with Bhuvanya Energy</h1>
                <p>
                  Rooftop and ground-mounted solar help you reduce electricity costs, improve predictability against tariff hikes, and lower carbon emissions. We support
                  residential, commercial, and industrial clients with consultancy, engineering, approvals, installation, commissioning, and O&amp;M — aligned with how we
                  describe our work in the company profile.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Lower operating costs through on-site generation
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Turnkey execution from design through commissioning
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Transparent guidance on subsidies, policy, and ROI
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Long-term performance focus with O&amp;M support
                  </li>
                </ul>
                <p>{company.vision}</p>
                <h4>Typical engagement steps</h4>
                <p>
                  Feasibility and site assessment, financial modelling, technology and vendor selection, detailed engineering, regulatory filings, construction and
                  commissioning, then handover with monitoring and maintenance options — all centred on solar; we do not offer wind or unrelated energy products.
                </p>
                <p className="mt-3">
                  <Link to="/contact" className="srex-btn srex-btn--primary">
                    Talk to our team <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
