import { company } from "@/assets/data/company";

const LandingProcess = () => {
  const steps = company.consultancyOfferings;
  const last = steps.length - 1;

  return (
    <section
      id="process"
      className="ld-section ld-section--tinted ld-process"
    >
      <div className="ld-section__inner">
        <div className="ld-section__header ld-section__header--center ld-reveal">
          <p className="eyebrow">How we engage</p>
          <h2 className="title">
            From <em>pre-bid</em> to commissioning.
          </h2>
          <p className="desc">
            Single-point advisory across five stages — designed to keep your
            project technically compliant, commercially viable, and
            execution-ready.
          </p>
        </div>

        <div className="ld-process__board ld-reveal">
          <div className="ld-process__rail" aria-hidden="true">
            <ol className="ld-process__rail-nodes">
              {steps.map(({ stage }, idx) => (
                <li key={stage} className="ld-process__rail-node">
                  <span
                    className={`ld-process__rail-seg ld-process__rail-seg--before${
                      idx === 0 ? " is-empty" : ""
                    }`}
                  />
                  <span
                    className={`ld-process__rail-hub${idx === 0 ? " is-active" : ""}`}
                  >
                    <span className="ld-process__rail-ring" />
                    <span className="ld-process__rail-num">{stage}</span>
                  </span>
                  <span
                    className={`ld-process__rail-seg ld-process__rail-seg--after${
                      idx === last ? " is-empty" : ""
                    }`}
                  >
                    {idx < last && (
                      <i className="fa-solid fa-chevron-right" aria-hidden />
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="ld-process__grid">
            {steps.map(({ stage, title, text, icon }, idx) => (
              <article
                key={title}
                className={`ld-process__step${idx === 0 ? " ld-process__step--lead" : ""}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="ld-process__step-index" aria-hidden="true">
                  {stage}
                </span>
                <div className="ld-process__step-head">
                  <div className="ld-process__icon" aria-hidden="true">
                    <i className={icon} />
                  </div>
                  <div className="ld-process__step-kicker">
                    <span className="step-line" />
                    <span className="step-num">Stage {stage}</span>
                  </div>
                </div>
                <h3 className="step-title">{title}</h3>
                <p className="step-text">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingProcess;
