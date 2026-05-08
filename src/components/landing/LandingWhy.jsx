import { company } from "@/assets/data/company";

const LandingWhy = () => {
  return (
    <section className="ld-section ld-section--tinted ld-why">
      <div className="ld-section__inner">
        <div className="ld-section__header ld-reveal">
          <p className="eyebrow">Why hire BEPL</p>
          <h2 className="title">
            Independent. <em>Engineering-led.</em> Lender-ready.
          </h2>
          <p className="desc">
            Our team comes from the EPC and tendering side of solar and
            storage — so we know what bankability, compliance, and execution
            discipline actually require.
          </p>
        </div>

        <div className="ld-why__grid ld-reveal">
          {company.whySolar.map(({ title, text }, i) => (
            <div key={title} className="ld-why__item">
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div className="body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingWhy;
