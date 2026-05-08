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
                <h1>Solar PV &amp; BESS — turnkey services from BEPL</h1>
                <p>
                  Bhuvanya Energy delivers end-to-end Solar PV and Battery Energy Storage System (BESS) services for residential, C&amp;I, utility-scale, and IPP clients.
                  Our seven service lines cover EPC, consultancy, investment opportunities, O&amp;M, factory setup, and management advisory.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Turnkey Solar &amp; BESS EPC under one roof
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> MNRE / CEA / DISCOM compliance and tender support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Bankability and lender support for financial closure
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Long-term O&amp;M and lifecycle performance optimisation
                  </li>
                </ul>
                <p>{company.vision}</p>
                <h4>Typical engagement steps</h4>
                <p>
                  Pre-bid feasibility, capacity optimisation, system and BESS design, BOQ validation, land &amp; grid due diligence, CEIG approvals, PPA/PSA review, lender
                  support, FAT, construction monitoring, grid synchronisation, and O&amp;M handover — all under a single-point advisory across the project lifecycle.
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
