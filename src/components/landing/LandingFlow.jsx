/**
 * Energy flow: Sun → PV → Inverter → BESS → Grid
 * Layout uses a shared baseline; captions are dark for contrast on the light card.
 */
const CX = [108, 318, 528, 738, 948];
const RAIL_Y = 158;

const seg = (i) => {
  const gap = [
    [CX[0] + 52, CX[1] - 80],
    [CX[1] + 80, CX[2] - 50],
    [CX[2] + 50, CX[3] - 60],
    [CX[3] + 60, CX[4] - 32],
  ][i];
  return { x1: gap[0], x2: gap[1] };
};

const LandingFlow = () => {
  return (
    <section className="ld-flow">
      <div className="ld-flow__inner">
        <div className="ld-flow__head ld-reveal">
          <p className="eyebrow">How the system works</p>
          <h2 className="title">
            Generation, storage, dispatch — <em>orchestrated</em>.
          </h2>
          <p className="desc">
            We integrate solar PV with grid-scale BESS to firm renewable
            generation, shave demand peaks, and unlock new revenue streams
            from arbitrage and ancillary services.
          </p>
        </div>

        <div
          className="ld-flow__diagram ld-reveal"
          aria-label="Energy flow diagram"
        >
          <svg
            viewBox="0 0 1060 300"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#f59e0b" stopOpacity="1" />
                <stop offset="60%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="flow-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="panel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="55%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0c1222" />
              </linearGradient>
              <linearGradient id="bess-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#030712" />
              </linearGradient>
              <radialGradient id="sun-glow">
                <stop offset="0%" stopColor="#fde047" stopOpacity="1" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="72%" stopColor="#f59e0b" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
              </radialGradient>
              <filter id="flow-soft-blur" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="flow-particle" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="1.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Rail baseline (subtle) */}
            <line
              x1="56"
              y1={RAIL_Y}
              x2="1004"
              y2={RAIL_Y}
              stroke="rgba(30, 64, 175, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            {/* Energy glow under connectors */}
            {[0, 1, 2, 3].map((i) => {
              const { x1, x2 } = seg(i);
              return (
                <line
                  key={`glow-${i}`}
                  className="flow-lines flow-lines--under"
                  x1={x1}
                  y1={RAIL_Y}
                  x2={x2}
                  y2={RAIL_Y}
                  stroke="url(#flow-glow)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  opacity="0.5"
                  fill="none"
                />
              );
            })}

            {[0, 1, 2, 3].map((i) => {
              const { x1, x2 } = seg(i);
              return (
                <line
                  key={`dash-${i}`}
                  className="flow-lines"
                  x1={x1}
                  y1={RAIL_Y}
                  x2={x2}
                  y2={RAIL_Y}
                  stroke="url(#flow-line)"
                  strokeWidth="2.25"
                  strokeDasharray="6 10"
                  strokeLinecap="round"
                  fill="none"
                />
              );
            })}

            <g className="flow-particles">
              {[0, 0.35, 0.7, 1.05, 1.4].map((begin, i) => (
                <circle
                  key={i}
                  r={i === 0 ? 4 : 3.2 - i * 0.35}
                  fill={i === 0 ? "#fef9c3" : "#fbbf24"}
                  opacity={1 - i * 0.12}
                  filter="url(#flow-particle)"
                >
                  <animateMotion
                    dur="2.9s"
                    begin={`${begin}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#flow-path" />
                  </animateMotion>
                </circle>
              ))}
            </g>

            <path
              id="flow-path"
              d={`M 56 ${RAIL_Y} L 1004 ${RAIL_Y}`}
              fill="none"
              stroke="none"
            />

            {/* 1 Sun */}
            <g className="flow-node flow-node--sun" transform={`translate(${CX[0]},${RAIL_Y})`}>
              <circle r="50" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.45">
                <animate
                  attributeName="r"
                  values="48;54;48"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="42" fill="url(#sun-glow)" opacity="0.95">
                <animate
                  attributeName="r"
                  values="40;44;40"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="18" fill="#fcd34d" filter="url(#flow-soft-blur)" />
              <text y="86" textAnchor="middle" className="flow-svg-step">
                01 · SUN
              </text>
              <text y="104" textAnchor="middle" className="flow-svg-title">
                Solar irradiance
              </text>
            </g>

            {/* 2 PV */}
            <g className="flow-node" transform={`translate(${CX[1]},${RAIL_Y})`}>
              <g transform="translate(-80, -52)">
                <rect
                  width="160"
                  height="104"
                  rx="6"
                  fill="url(#panel-grad)"
                  stroke="rgba(251,191,36,0.45)"
                  strokeWidth="1"
                />
                {[0, 1, 2, 3].map((row) =>
                  [0, 1, 2, 3, 4, 5, 6].map((col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={6 + col * 22}
                      y={6 + row * 24}
                      width="20"
                      height="20"
                      fill="rgba(96, 165, 250, 0.35)"
                      stroke="rgba(251,191,36,0.18)"
                      strokeWidth="0.5"
                    />
                  )),
                )}
              </g>
              <text y="86" textAnchor="middle" className="flow-svg-step">
                02 · PV ARRAY
              </text>
              <text y="104" textAnchor="middle" className="flow-svg-title">
                Solar PV modules
              </text>
            </g>

            {/* 3 Inverter */}
            <g className="flow-node" transform={`translate(${CX[2]},${RAIL_Y})`}>
              <g transform="translate(-48, -48)">
                <rect
                  width="96"
                  height="96"
                  rx="8"
                  fill="#0f172a"
                  stroke="rgba(251,191,36,0.5)"
                  strokeWidth="1.5"
                />
                <rect x="5" y="5" width="86" height="20" fill="rgba(251,191,36,0.12)" rx="2" />
                <text
                  x="48"
                  y="19"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="8"
                  fill="#fbbf24"
                  letterSpacing="0.12em"
                >
                  INVERTER
                </text>
                <line x1="12" y1="38" x2="84" y2="38" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
                <text
                  x="48"
                  y="54"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fontWeight="700"
                  fill="#fff"
                >
                  DC ↔ AC
                </text>
                <line x1="12" y1="62" x2="84" y2="62" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
                <circle cx="22" cy="78" r="2.8" fill="#84cc16">
                  <animate
                    attributeName="opacity"
                    values="1;0.35;1"
                    dur="1.3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="34" cy="78" r="2.8" fill="#fbbf24" opacity="0.75" />
                <circle cx="46" cy="78" r="2.8" fill="rgba(255,255,255,0.25)" />
              </g>
              <text y="86" textAnchor="middle" className="flow-svg-step">
                03 · INVERSION
              </text>
              <text y="104" textAnchor="middle" className="flow-svg-title">
                Power conversion
              </text>
            </g>

            {/* 4 BESS */}
            <g className="flow-node" transform={`translate(${CX[3]},${RAIL_Y})`}>
              <g transform="translate(-58, -52)">
                <rect
                  width="116"
                  height="104"
                  rx="6"
                  fill="url(#bess-grad)"
                  stroke="rgba(251,191,36,0.4)"
                  strokeWidth="1"
                />
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <rect
                      x={8}
                      y={9 + i * 18}
                      width="100"
                      height="13"
                      rx="2"
                      fill="rgba(15, 23, 42, 0.65)"
                      stroke="rgba(251,191,36,0.2)"
                      strokeWidth="0.5"
                    />
                    <rect
                      x={9}
                      y={10 + i * 18}
                      width={82 - i * 4}
                      height="11"
                      fill="#fbbf24"
                      opacity={0.76 - i * 0.08}
                    >
                      <animate
                        attributeName="width"
                        values={`${82 - i * 4};${68 - i * 3};${82 - i * 4}`}
                        dur={`${3.6 + i * 0.4}s`}
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                ))}
              </g>
              <text y="86" textAnchor="middle" className="flow-svg-step">
                04 · STORAGE
              </text>
              <text y="104" textAnchor="middle" className="flow-svg-title">
                BESS · LFP cells
              </text>
            </g>

            {/* 5 Grid */}
            <g className="flow-node" transform={`translate(${CX[4]},${RAIL_Y})`}>
              <g transform="translate(0, -2)">
                <line x1="0" y1="-52" x2="0" y2="52" stroke="#c2410c" strokeWidth="2.2" />
                <line x1="-26" y1="-28" x2="26" y2="-28" stroke="#c2410c" strokeWidth="2" />
                <line x1="-20" y1="-10" x2="20" y2="-10" stroke="#c2410c" strokeWidth="2" />
                <line x1="-14" y1="10" x2="14" y2="10" stroke="#c2410c" strokeWidth="2" />
                <line x1="-16" y1="52" x2="16" y2="52" stroke="#c2410c" strokeWidth="2" />
                <line x1="-12" y1="52" x2="0" y2="-52" stroke="rgba(194,65,12,0.35)" strokeWidth="1.2" />
                <line x1="12" y1="52" x2="0" y2="-52" stroke="rgba(194,65,12,0.35)" strokeWidth="1.2" />
                <circle cx="-26" cy="-28" r="2.2" fill="#fbbf24" />
                <circle cx="26" cy="-28" r="2.2" fill="#fbbf24" />
              </g>
              <text y="86" textAnchor="middle" className="flow-svg-step">
                05 · DISPATCH
              </text>
              <text y="104" textAnchor="middle" className="flow-svg-title">
                Grid &amp; offtake
              </text>
            </g>
          </svg>

          <div className="ld-flow__stats" role="list">
            <div className="stat" role="listitem">
              <span className="stat__icon" aria-hidden="true">
                <i className="fa-solid fa-bolt" />
              </span>
              <span className="stat__value">98%+</span>
              <span className="stat__label">Round-trip efficiency target</span>
            </div>
            <div className="stat" role="listitem">
              <span className="stat__icon" aria-hidden="true">
                <i className="fa-solid fa-flask" />
              </span>
              <span className="stat__value">LFP</span>
              <span className="stat__label">Lithium iron phosphate chemistry</span>
            </div>
            <div className="stat" role="listitem">
              <span className="stat__icon" aria-hidden="true">
                <i className="fa-solid fa-box-archive" />
              </span>
              <span className="stat__value">2.5–5 MWh</span>
              <span className="stat__label">Containerised modules</span>
            </div>
            <div className="stat" role="listitem">
              <span className="stat__icon" aria-hidden="true">
                <i className="fa-solid fa-leaf" />
              </span>
              <span className="stat__value">15+ years</span>
              <span className="stat__label">Designed plant lifecycle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFlow;
