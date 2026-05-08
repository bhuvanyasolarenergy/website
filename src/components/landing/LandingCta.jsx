import { Link } from "react-router-dom";
import { company } from "@/assets/data/company";

const LandingCta = ({ variant = "full" }) => {
  const compact = variant === "compact";

  return (
    <section className={`ld-cta${compact ? " ld-cta--compact" : ""}`}>
      <div className="ld-cta__inner">
        <p className="ld-cta__eyebrow">Plan your next project</p>
        <h2 className="ld-cta__title">
          {compact ? (
            <>
              Ready to talk <em>Solar PV or BESS</em>?
            </>
          ) : (
            <>
              Bankable Solar PV and BESS projects start with the{" "}
              <em>right consultant</em>.
            </>
          )}
        </h2>
        {!compact ? (
          <p className="ld-cta__desc">
            Whether you&apos;re bidding into a SECI / NTPC / RVUNL tender,
            planning a C&amp;I rooftop, or evaluating a BESS manufacturing
            investment — we can help you de-risk and deliver.
          </p>
        ) : null}
        <div className="ld-cta__buttons">
          <Link to="/contact" className="ld-btn ld-btn--accent">
            {compact ? (
              <>
                Get in touch <i className="fa-solid fa-arrow-right" />
              </>
            ) : (
              <>
                Schedule a consultation <i className="fa-solid fa-arrow-right" />
              </>
            )}
          </Link>
          <a
            href={company.profilePdfUrl}
            download
            className="ld-btn ld-btn--inverse"
          >
            Download company profile
          </a>
        </div>

        {!compact ? (
        <div className="ld-cta__contact">
          <div className="item">
            <div className="label">Phone</div>
            <div className="value">
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
            </div>
          </div>
          <div className="item">
            <div className="label">Email</div>
            <div className="value">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
          <div className="item">
            <div className="label">Office</div>
            <div className="value">
              {company.addressLines[0]}
              <br />
              {company.addressLines[1]}
            </div>
          </div>
        </div>
        ) : null}
      </div>
    </section>
  );
};

export default LandingCta;
