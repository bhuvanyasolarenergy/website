/**
 * BESS market intelligence — horizontal bar charts
 * Sourced from BESS Factory Consultancy proposal
 */
const items = [
  {
    label: "Total ESS tenders issued (2018–2025)",
    value: 153,
    unit: "GWh",
    pct: 100,
    note: "Multi-year bankable demand",
  },
  {
    label: "Under active construction",
    value: 33,
    unit: "GWh",
    pct: 22,
    suffix: "+",
    note: "Pipeline already committed",
  },
  {
    label: "BESS awarded to date",
    value: 23,
    unit: "GWh",
    pct: 15,
    note: "Standalone & hybrid contracts",
  },
  {
    label: "Rajasthan pipeline (VGF-backed)",
    value: 5,
    unit: "GWh",
    pct: 3.3,
    suffix: " (4–5)",
    note: "Priority state · RIPS 2024",
  },
];

const LandingMarket = () => (
  <section className="ld-section ld-section--ink ld-market">
    <div className="ld-section__inner">
      <div className="ld-section__header ld-section__header--row ld-reveal">
        <div>
          <p className="eyebrow">Market intelligence</p>
          <h2 className="title">
            India BESS market is <em>contracted, not projected</em>.
          </h2>
        </div>
        <p className="desc">
          Demand visibility is no longer theoretical. Central and state
          tenders, VGF-backed schemes, and IPP commitments have created a
          multi-year, bankable storage pipeline.
        </p>
      </div>

      <div className="ld-market__chart ld-reveal">
        {items.map(({ label, value, unit, pct, suffix, note }, i) => (
          <div key={label} className="ld-market__row">
            <div className="row-meta">
              <span className="row-label">{label}</span>
              <span className="row-note">{note}</span>
            </div>
            <div className="row-bar">
              <div
                className="row-bar-fill"
                style={{
                  width: `${pct}%`,
                  animationDelay: `${i * 120}ms`,
                }}
              />
              <span className="row-marker" style={{ left: `${pct}%` }} />
            </div>
            <div className="row-value">
              <span className="num">{value}</span>
              <span className="unit">
                {unit}
                {suffix || ""}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="ld-market__caption">
        Source: SECI / NTPC / RVUNL tender data, MNRE ESS dashboard, RIPS 2024
        notification — totals as referenced in the BEPL company profile.
      </p>
    </div>
  </section>
);

export default LandingMarket;
