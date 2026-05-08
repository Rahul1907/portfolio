"use client";
const experience = [
  {
    role: "Senior Software Engineer",
    company: "AppVentory",
    period: "Sep 2023 — Present",
    location: "Ahmedabad, India",
    current: true,
    highlights: [
      "Architected affiliate link tracking platform with real-time analytics at <200ms latency",
      "Micro-frontend Module Federation strategy — cut release dependencies by 50%",
      "Engineered automated lead management workflows with React-Flow visual pipelines",
      "Next.js SSR/SSG/ISR apps achieving Lighthouse 85+ and strong Core Web Vitals",
      "WebSocket & GraphQL subscriptions — reduced over-fetching by 30%",
      "Established Storybook component library, cutting UI dev time by 35%",
      "Drove WCAG 2.1 AA accessibility compliance across core user flows",
      "90%+ test coverage with Jest/RTL — 40% fewer production bugs",
      "Set up GitHub Actions CI/CD pipelines for automated deployments",
      "Built Chrome Extension for per-domain time-on-site tracking",
      "Integrated Claude & OpenAI Codex into engineering workflows",
      "Mentored 2 junior engineers via code reviews & pair programming",
    ],
    stack: ["TypeScript", "Next.js", "React-Flow", "GraphQL", "WebSocket", "Jest", "GitHub Actions", "Module Federation", "Claude AI", "OpenAI Codex"],
  },
  {
    role: "Software Engineer",
    company: "Magenta Connect Pvt Ltd",
    period: "Jul 2021 — Sep 2023",
    location: "Ahmedabad, India",
    current: false,
    highlights: [
      "Modernised legacy jQuery codebase to React 16+ — 40% performance improvement",
      "Kanban ticketing system & RBAC module supporting 500+ concurrent users",
      "Design system with atomic components — 35% faster UI development",
      "Virtual list rendering (react-window) for data-heavy platform",
      "Intersection Observer lazy fetching for KPI dashboards",
      "Sentry integration — reduced MTTD for frontend bugs by 50%",
      "Championed TDD with Jest across the team, reducing regression issues by 35%",
      "Served as core code reviewer and frontend subject matter expert",
    ],
    stack: ["TypeScript", "React", "Redux Toolkit", "NivoCharts", "Sentry", "Jest", "react-window", "react-intersection-observer", "Figma"],
  },
  {
    role: "Frontend Engineer",
    company: "Lucent Innovation",
    period: "Aug 2020 — Jun 2021",
    location: "Ahmedabad, India (Remote)",
    current: false,
    highlights: [
      "Improved Lighthouse scores from 55 → 80+ via code splitting & lazy loading",
      "Debounced search, infinite scroll, skeleton loading UX patterns",
      "Responsive, mobile-first websites using CSS Media Queries",
      "Memoization & caching to reduce redundant API calls",
      "Improved cross-browser compatibility across all major browsers",
    ],
    stack: ["JavaScript", "React", "jQuery", "SCSS", "Material-UI", "CSS Media Queries"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0", borderTop: "1px solid #21262D" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ marginBottom: 60 }}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#58A6FF", marginBottom: 12 }}>
            // experience
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", color: "#E6EDF3", lineHeight: 1.15 }}>
            Where I've worked
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #58A6FF, #21262D)", opacity: 0.4 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {experience.map((job, i) => (
              <div key={i} style={{ paddingLeft: 36, position: "relative" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: -5, top: 6, width: 11, height: 11, borderRadius: "50%",
                  background: job.current ? "#58A6FF" : "#21262D",
                  border: `2px solid ${job.current ? "#58A6FF" : "#484F58"}`,
                  boxShadow: job.current ? "0 0 12px rgba(88,166,255,0.5)" : "none",
                }} />

                <div style={{ background: "#0D1117", border: "1px solid #21262D", borderRadius: 8, padding: "24px 28px", transition: "border-color 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(88,166,255,0.25)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "#21262D")}>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18, color: "#E6EDF3" }}>{job.role}</h3>
                        {job.current && (
                          <span style={{ fontFamily: "DM Mono, monospace", fontSize: 10, padding: "2px 8px", borderRadius: 3, background: "rgba(63,185,80,0.1)", color: "#3FB950", border: "1px solid rgba(63,185,80,0.3)" }}>
                            current
                          </span>
                        )}
                      </div>
                      <div style={{ fontFamily: "DM Mono, monospace", fontSize: 13, color: "#58A6FF", marginTop: 2 }}>{job.company}</div>
                      <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#484F58", marginTop: 2 }}>{job.location}</div>
                    </div>
                    <div style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#484F58", textAlign: "right" }}>{job.period}</div>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                    {job.highlights.map((h, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, fontSize: 13, color: "#8B949E", lineHeight: 1.6 }}>
                        <span style={{ color: "#3FB950", flexShrink: 0, marginTop: 1 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {job.stack.map(t => (
                      <span key={t} style={{ fontFamily: "DM Mono, monospace", fontSize: 11, padding: "3px 10px", borderRadius: 3, border: "1px solid rgba(88,166,255,0.2)", color: "#58A6FF", background: "rgba(88,166,255,0.06)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
