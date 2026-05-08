import { useEffect, useRef } from "react";
import { company } from "@/assets/data/company";
import { animateCount } from "@/hooks/useReveal";

const LandingMetrics = () => {
  const sectionRef = useRef(null);

  const items = [
    {
      label: "Solar Projects",
      value: company.stats.totalProjects,
      suffix: "+",
      desc: "Industrial & C&I rooftops delivered.",
    },
    {
      label: "Installed Capacity",
      value: parseFloat(company.stats.totalProjectCapacityMw),
      unit: " MW",
      desc: "Cumulative on-site solar generation.",
    },
    {
      label: "Combined Leadership",
      value: 35,
      suffix: "+",
      unit: " yrs",
      desc: "Across solar, BESS, EPC, and consulting.",
    },
    {
      label: "ESS Tenders",
      value: 153,
      unit: " GWh",
      desc: "India ESS pipeline 2018–2025.",
    },
  ];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    const valueEls = node.querySelectorAll("[data-count]");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-count]").forEach((el) => {
              animateCount(el, parseFloat(el.dataset.count));
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(node);
    valueEls.forEach((el) => (el.textContent = "0"));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ld-metrics" ref={sectionRef}>
      <div className="ld-metrics__inner">
        <div className="ld-metrics__head">
          <div>
            <p className="eyebrow">By the numbers</p>
            <h2 className="title">Track record across industrial India.</h2>
          </div>
          <p className="subtitle">
            From granite-belt rooftops in Rajasthan to utility-scale BESS
            pipelines under VGF — bankable demand, technically-compliant
            execution, lifecycle accountability.
          </p>
        </div>
        <div className="ld-metrics__grid">
          {items.map(({ label, value, suffix, unit, desc }) => (
            <div
              key={label}
              className="ld-metrics__item"
              style={{ "--ldlabel": `'${label}'` }}
            >
              <div className="value">
                <span data-count={value}>{value}</span>
                {suffix ? <span>{suffix}</span> : null}
                {unit ? <span className="unit">{unit}</span> : null}
              </div>
              <div className="label">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingMetrics;
