import { company } from "@/assets/data/company";

const BeplOverview = () => {
  return (
    <section className="srex-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="srex-section__head">
              <h5 className="srex-section__head__badge">
                <img src="/images/badge-icon.svg" alt="" />
                {company.shortName} profile
              </h5>
              <h2 className="srex-section__head__title mt-2">Who we are</h2>
              <p className="srex-section__head__desc mt-3">{company.elevatorPitch}</p>
              <p className="srex-section__head__desc mt-3">{company.about}</p>
              <p className="mt-3 mb-0">
                <strong>We operate across:</strong> {company.serviceRegions}
              </p>
              <a href={company.profilePdfUrl} className="srex-btn srex-btn--primary mt-4" download>
                Download company profile (PDF) <i className="fa-solid fa-file-pdf"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="srex-section__head">
              <h2 className="srex-section__head__title">Leadership</h2>
              <ul className="list-unstyled mt-4">
                {company.leadership.map(({ name, role, bio }) => (
                  <li key={name} className="mb-4">
                    <h4 className="h5 mb-1">{name}</h4>
                    <p className="text-muted small mb-2">{role}</p>
                    <p className="mb-0">{bio}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-lg-4">
          <div className="col-lg-6 mb-5">
            <h3 className="h4 mb-3">Our vision</h3>
            <p className="mb-0">{company.vision}</p>
          </div>
          <div className="col-lg-6 mb-5">
            <h3 className="h4 mb-3">Our mission</h3>
            <p className="mb-2">{company.missionIntro}</p>
            <ul className="ps-3 mb-0">
              {company.missionPoints.map((line, idx) => (
                <li key={idx} className="mb-2">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row pb-4">
          <div className="col-12">
            <h3 className="h4 mb-4">Solar consultancy services</h3>
            <p className="mb-4">
              We provide end-to-end solar consultancy so you can make informed, technically sound, and financially viable decisions — for industrial, commercial, and institutional
              clients.
            </p>
            <div className="row g-4">
              {company.consultancyOfferings.map(({ title, text }) => (
                <div key={title} className="col-md-6 col-lg-4">
                  <div className="p-4 h-100 rounded-3 border bg-white">
                    <h4 className="h6 text-uppercase mb-3">{title}</h4>
                    <p className="small mb-0">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-12">
            <h3 className="h4 mb-4">Why choose solar?</h3>
            <div className="row g-4">
              {company.whySolar.map(({ title, text }) => (
                <div key={title} className="col-md-6 col-lg-4">
                  <h4 className="h6 mb-2">{title}</h4>
                  <p className="small text-muted mb-0">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeplOverview;
