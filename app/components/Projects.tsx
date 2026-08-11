"use client";
const projects = [
  {
    name: "Affiliate Link Tracking Platform",
    description: "End-to-end full stack of an affiliate link tracking SaaS with a real-time analytics dashboard and fraud detection UI. Implemented with Next.js, Node.js, and DynamoDB, handling high-volume daily events with <200ms latency.",
    stack: ["Next.js", "Node.js", "DynamoDB", "GraphQL", "WebSocket", "Module Federation"],
    metrics: ["<200ms latency", "Lighthouse 85+", "Global GSI indexes"],
    color: "#58A6FF",
  },
  {
    name: "Asynchronous PDF Report Generator",
    description: "Asynchronous queue-based pipeline for heavy PDF generation. Decoupled CPU-intensive rendering workloads using AWS SQS queues and Puppeteer. Reduced server CPU spikes from 90% down to 30%.",
    stack: ["Node.js", "AWS SQS", "Puppeteer", "Express.js", "CloudWatch"],
    metrics: ["60% CPU reduction", "Asynchronous worker", "Automated email delivery"],
    color: "#3FB950",
  },
  {
    name: "Kanban Ticketing & Session Manager",
    description: "Kanban board application featuring secure Role-Based Access Control (RBAC) and Redis-backed session authentication validating JWT tokens on every request, supporting 500+ concurrent users.",
    stack: ["React", "Node.js", "Redis", "JWT Auth", "MySQL", "Redux Toolkit"],
    metrics: ["500+ concurrent users", "Redis session store", "RBAC secure"],
    color: "#F78166",
  },
  {
    name: "Real-time KPI Dashboard",
    description: "High-performance business intelligence dashboard displaying sales pipelines using Nivo Charts. Optimized using react-window virtualization to eliminate DOM lag on large datasets.",
    stack: ["React", "Redux Toolkit", "Nivo Charts", "react-window", "Sentry", "Intersection Observer"],
    metrics: ["50% faster MTTD", "Virtual scroll", "Zero-lag rendering"],
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
