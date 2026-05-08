const supportItems = [
  {
    icon: "/images/home-two/support/support-1.svg",
    title: "Solar EPC",
    subtitle: "End-to-end execution",
  },
  {
    icon: "/images/home-two/support/support-2.svg",
    title: "BESS EPC",
    subtitle: "Standalone & hybrid",
  },
  {
    icon: "/images/home-two/support/support-3.svg",
    title: "Tender support",
    subtitle: "MNRE · CEA · DISCOM",
  },
  {
    icon: "/images/home-two/support/support-4.svg",
    title: "O&M",
    subtitle: "Lifecycle performance",
  },
];

const Support = () => {
  return (
    <section className="srex-support">
      <div className="container">
        <div className="row">
          {supportItems.map(({ icon, title, subtitle }) => (
            <div key={title} className="col-md-6 col-lg-3 col-12">
              <div className="srex-support__item d-flex align-items-center gap-4 ">
                <img src={icon} alt={title} />
                <h4>
                  {title}
                  <br />
                  <span style={{ fontSize: "0.75rem", fontWeight: 500, opacity: 0.8 }}>
                    {subtitle}
                  </span>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
