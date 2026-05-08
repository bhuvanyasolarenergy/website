/**
 * Standard inner-page hero — keeps layout and rhythm consistent site-wide.
 */
const PageHero = ({
  eyebrow,
  title,
  lede,
  actions = null,
  pillars = null,
  className = "",
}) => {
  return (
    <section className={`ld-hero ${className}`.trim()}>
      <div className="ld-hero__inner">
        <div className="ld-hero__grid">
          <div>
            {eyebrow ? (
              <p className="ld-hero__eyebrow">{eyebrow}</p>
            ) : null}
            <h1 className="ld-hero__title">{title}</h1>
            {lede ? <p className="ld-hero__lede">{lede}</p> : null}
            {actions}
          </div>
          {pillars?.length ? (
            <div className="ld-hero__pillars">
              {pillars.map((pillar, i) => (
                <div key={i} className="ld-hero__pillar">
                  <span className="num">{pillar.num}</span>
                  <div className="text">{pillar.body}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
