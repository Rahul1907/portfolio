"use client";
const skills = [
  {
    category: "Languages",
    icon: "{ }",
    items: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "SCSS"],
  },
  {
    category: "Frameworks",
    icon: "⚛",
    items: ["React.js", "Next.js", "Redux Toolkit", "React Query", "React-Flow", "react-window"],
  },
  {
    category: "Architecture",
    icon: "◈",
    items: ["Module Federation", "Micro-frontend", "Monorepo", "SSR / SSG / ISR", "GraphQL", "REST APIs"],
  },
  {
    category: "Performance",
    icon: "⚡",
    items: ["Core Web Vitals", "LCP / CLS / INP", "Code Splitting", "Lazy Loading", "Virtual Lists", "Intersection Observer"],
  },
  {
    category: "Testing",
    icon: "✓",
    items: ["Jest", "React Testing Library", "TDD", "Integration Testing"],
  },
  {
    category: "Tooling",
    icon: "⚙",
    items: ["GitHub Actions", "CI/CD", "Webpack", "Vite", "Storybook", "Sentry", "Figma"],
  },
  {
    category: "UI & A11y",
    icon: "◎",
    items: ["Material-UI", "Tailwind CSS", "WebSockets", "WCAG 2.1 AA", "RBAC"],
  },
  {
    category: "AI Tools",
    icon: "✦",
    items: ["Claude (Anthropic)", "OpenAI Codex", "AI-assisted dev"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0", borderTop: "1px solid #21262D" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ marginBottom: 60 }}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#58A6FF", marginBottom: 12 }}>
            // skills
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", color: "#E6EDF3", lineHeight: 1.15 }}>
            What I work with
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {skills.map((skill) => (
            <div key={skill.category} style={{
              background: "#0D1117",
              border: "1px solid #21262D",
              borderRadius: 8,
              padding: "24px",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(88,166,255,0.3)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 24px rgba(88,166,255,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#21262D";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontFamily: "DM Mono, monospace", fontSize: 16, color: "#58A6FF" }}>{skill.icon}</span>
                <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 14, color: "#E6EDF3" }}>{skill.category}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {skill.items.map(item => (
                  <span key={item} style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: 11,
                    padding: "3px 10px",
                    borderRadius: 3,
                    border: "1px solid #21262D",
                    color: "#8B949E",
                    background: "#161B22",
                    letterSpacing: "0.02em",
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
