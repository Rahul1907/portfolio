"use client";
const projects = [
  {
    name: "Affiliate Link Tracking Platform",
    description: "End-to-end frontend of a SaaS affiliate tracking system with real-time analytics dashboard, fraud detection UI, and micro-frontend architecture. Processes high-volume events at <200ms latency.",
    stack: ["Next.js", "TypeScript", "GraphQL", "WebSocket", "Module Federation"],
    metrics: ["<200ms latency", "Lighthouse 85+", "Core Web Vitals ✓"],
    color: "#58A6FF",
  },
  {
    name: "User Productivity Chrome Extension",
    description: "Browser extension tracking per-domain time-on-site with granular activity analytics. Built with Chrome's background service worker and storage APIs, surfacing insights in a React popup UI.",
    stack: ["TypeScript", "React", "Chrome Extension API", "Service Workers"],
    metrics: ["Chrome Extension of Record", "Background tracking", "Persistent analytics"],
    color: "#3FB950",
  },
  {
    name: "Enterprise Design System",
    description: "Scalable atomic component library with full Storybook documentation and Figma design token integration. Adopted across 3 product teams — reduced UI development time by 35%.",
    stack: ["React", "TypeScript", "Storybook", "Figma", "Design Tokens"],
    metrics: ["3 teams adopted", "35% faster UI dev", "100% documented"],
    color: "#F78166",
  },
  {
    name: "Real-time KPI Dashboard",
    description: "Interactive data dashboards with Nivo Charts for live sales pipelines and KPI trends. Optimised with Intersection Observer lazy fetching and virtual list rendering for data-heavy views.",
    stack: ["React", "NivoCharts", "Intersection Observer", "react-window", "Redux"],
    metrics: ["500+ concurrent users", "50% faster MTTD", "Virtual scroll"],
    color: "#D2A8FF",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0", borderTop: "1px solid #21262D" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ marginBottom: 60 }}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#58A6FF", marginBottom: 12 }}>
            // projects
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", color: "#E6EDF3", lineHeight: 1.15 }}>
            Things I've built
          </h2>
          <p style={{ fontFamily: "DM Mono, monospace", fontSize: 13, color: "#484F58", marginTop: 12 }}>
            All work experience — no toy projects. Real problems, real scale.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 20 }}>
          {projects.map((p) => (
            <div key={p.name} style={{
              background: "#0D1117",
              border: "1px solid #21262D",
              borderRadius: 8,
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              transition: "border-color 0.2s, transform 0.2s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${p.color}40`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#21262D";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "DM Mono, monospace", fontSize: 20, color: p.color }}>◈</span>
              </div>

              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 17, color: "#E6EDF3", lineHeight: 1.3 }}>{p.name}</h3>

              <p style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#8B949E", lineHeight: 1.8 }}>{p.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.metrics.map(m => (
                  <span key={m} style={{ fontFamily: "DM Mono, monospace", fontSize: 10, padding: "2px 8px", borderRadius: 3, background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}30` }}>{m}</span>
                ))}
              </div>

              <div style={{ height: 1, background: "#21262D" }} />

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.stack.map(t => (
                  <span key={t} style={{ fontFamily: "DM Mono, monospace", fontSize: 10, padding: "2px 8px", borderRadius: 3, border: "1px solid #21262D", color: "#484F58", background: "#161B22" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
