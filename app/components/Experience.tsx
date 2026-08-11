"use client";
const experience = [
  {
    role: "Senior Software Engineer",
    company: "AppVentory",
    period: "Sep 2023 — Present",
    location: "Ahmedabad, India",
    current: true,
    highlights: [
      "Architected and owned the end-to-end frontend of an affiliate link tracking platform, building a real-time analytics dashboard and fraud detection UI processing high-volume daily events with <200ms latency.",
      "Built Node.js backend APIs to aggregate and serve real-time analytics data for leads and deal conversion dashboards; applied parallel data processing and database indexing to reduce server load and improve query response times.",
      "Modeled and queried DynamoDB tables for analytics data using partition-key queries, key condition and filter expressions, and Global Secondary Indexes (GSIs) for efficient lookups beyond the primary access pattern.",
      "Implemented centralized structured JSON logging using Pino across backend services, capturing request-level audit logs and module-level event/error logging to improve traceability and debugging efficiency.",
      "Automated PDF report generation using Puppeteer to render and export data directly from live frontend dashboard pages, with reports delivered automatically via email.",
      "Identified synchronous PDF generation as a CPU-heavy operation blocking the API response cycle and introduced an asynchronous AWS SQS architecture. CloudWatch metrics showed CPU utilization dropping from approximately 90% to 30% during peak report generation, improving resilience and scalability.",
      "Built and optimized Next.js applications using SSR, SSG, and ISR rendering strategies, achieving Lighthouse scores of 85+ and strong Core Web Vitals through code splitting, lazy loading, and image optimization.",
      "Built server-side WebSocket services and integrated GraphQL subscriptions to power real-time notifications and live dashboard updates, reducing over-fetching by 30%.",
      "Achieved 90%+ unit and integration test coverage on critical business logic using Jest and React Testing Library with TDD, contributing to a 40% reduction in production bugs.",
      "Set up and maintained GitHub Actions CI/CD pipelines for automated testing, linting, and deployment across multiple product verticals.",
      "Mentored 2 junior engineers through structured code reviews, pair programming, and architectural guidance.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "DynamoDB",
      "AWS SQS",
      "Puppeteer",
      "WebSocket",
      "GraphQL",
      "Jest",
      "GitHub Actions",
      "Module Federation",
    ],
  },
  {
    role: "Software Engineer",
    company: "Magenta Connect Pvt Ltd",
    period: "Jul 2021 — Sep 2023",
    location: "Ahmedabad, India",
    current: false,
    highlights: [
      "Modernized a legacy jQuery/JavaScript codebase to React 16+ with Hooks, Redux Toolkit, and TypeScript, improving overall frontend performance by 40% and significantly reducing bundle size.",
      "Built a Kanban-based ticketing system, Role-Based Access Control (RBAC) module, and User Session Management supporting 500+ concurrent users without degradation.",
      "Implemented Redis-backed session authentication by storing and validating JWT tokens on every request, enabling fast and reliable session management at scale.",
      "Diagnosed a production performance issue where a data-heavy screen became unresponsive for users with large record sets. Traced the root cause to thousands of DOM elements being rendered simultaneously and implemented react-window virtualization, reducing DOM load and improving scroll and initial rendering performance.",
      "Developed interactive KPI dashboards using Nivo Charts and optimized API calls using Intersection Observer-based lazy fetching, eliminating unnecessary network requests during page load.",
      "Wrote MySQL JOIN and aggregation queries to compute sales statistics and enrich sales records with product information, powering dashboard APIs.",
      "Integrated Sentry error monitoring with custom alerting workflows, reducing Mean Time to Detection (MTTD) for critical frontend bugs by 50%.",
      "Championed Test-Driven Development using Jest, reducing regression issues by 35%.",
      "Served as a core code reviewer and frontend subject matter expert, improving code quality and architectural consistency.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Redux Toolkit",
      "MySQL",
      "Redis",
      "JWT",
      "Nivo Charts",
      "Sentry",
      "Jest",
      "react-window",
      "Figma",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Lucent Innovation",
    period: "Aug 2020 — Jun 2021",
    location: "Ahmedabad, India (Remote)",
    current: false,
    highlights: [
      "Optimized e-commerce frontend performance, improving Lighthouse scores from 55 to 80+ and improving Core Web Vitals through code splitting, lazy loading, and asset optimization.",
      "Implemented advanced UX patterns including debounced search, infinite scroll with throttling, and skeleton loading states to improve perceived performance and user experience.",
      "Developed fully responsive, mobile-first websites using CSS Media Queries, ensuring consistent UI adaptation across mobile, tablet, and desktop breakpoints.",
      "Reduced redundant network calls by introducing memoization and client-side caching strategies for API responses.",
      "Improved cross-browser compatibility across Chrome, Firefox, Safari, and Edge, ensuring consistent UI rendering and performance.",
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
