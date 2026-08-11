"use client";
export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0", borderTop: "1px solid #21262D" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#58A6FF", marginBottom: 12 }}>
              // about
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.15, marginBottom: 24, color: "#E6EDF3" }}>
              I build things for the web — carefully.
            </h2>
            <p style={{ color: "#8B949E", lineHeight: 1.9, marginBottom: 20, fontSize: 14 }}>
              I'm a Senior Full Stack Engineer based in Ahmedabad, India with 6+ years of experience building scalable, high-performance web applications across frontend and backend technologies.
            </p>
            <p style={{ color: "#8B949E", lineHeight: 1.9, marginBottom: 20, fontSize: 14 }}>
              I care about the details that make systems robust and fast — from frontend performance optimization (Lighthouse 85+, Core Web Vitals) and WCAG accessibility to backend API design, database indexing, structured logging, and automated testing (90%+ coverage).
            </p>
            <p style={{ color: "#8B949E", lineHeight: 1.9, fontSize: 14 }}>
              Currently at <span style={{ color: "#E6EDF3" }}>AppVentory</span>, where I own end-to-end full-stack features, build real-time analytics dashboards, design queue-based architectures, and mentor junior engineers. I also integrate AI-assisted development tools like Claude and Codex to accelerate delivery.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Location", value: "Ahmedabad, India" },
              { label: "Experience", value: "6+ years" },
              { label: "Current role", value: "Senior Full Stack Engineer @ AppVentory" },
              { label: "Education", value: "MSc (IT) DAIICT & BCA Gujarat University" },
              { label: "Open to", value: "Full-time & Contract roles" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #21262D" }}>
                <span style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#484F58" }}>{label}</span>
                <span style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#E6EDF3", textAlign: "right", maxWidth: 240 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:640px){#about .grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
