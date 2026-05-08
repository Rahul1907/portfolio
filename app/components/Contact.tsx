"use client";
export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 0", borderTop: "1px solid #21262D" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        <div style={{ maxWidth: 600 }}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#58A6FF", marginBottom: 12 }}>
            // contact
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", color: "#E6EDF3", lineHeight: 1.15, marginBottom: 20 }}>
            Let's work together
          </h2>
          <p style={{ fontFamily: "DM Mono, monospace", fontSize: 13, color: "#8B949E", lineHeight: 1.9, marginBottom: 40 }}>
            I'm currently open to full-time senior/lead frontend roles and freelance contracts. If you have a project that needs a senior frontend engineer who cares about craft, performance, and delivery — let's talk.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
            <a href="mailto:rahul.19797@gmail.com" style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "#0D1117", border: "1px solid #21262D", borderRadius: 8,
              padding: "20px 24px", textDecoration: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(88,166,255,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(88,166,255,0.06)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#21262D";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}>
              <span style={{ fontFamily: "DM Mono, monospace", fontSize: 20, color: "#58A6FF" }}>@</span>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 14, color: "#E6EDF3" }}>Email</div>
                <div style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#8B949E" }}>rahul.19797@gmail.com</div>
              </div>
              <span style={{ marginLeft: "auto", color: "#484F58" }}>↗</span>
            </a>

            <a href="https://linkedin.com/in/rahul1907" target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "#0D1117", border: "1px solid #21262D", borderRadius: 8,
              padding: "20px 24px", textDecoration: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(88,166,255,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(88,166,255,0.06)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#21262D";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}>
              <span style={{ fontFamily: "DM Mono, monospace", fontSize: 20, color: "#58A6FF" }}>in</span>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 14, color: "#E6EDF3" }}>LinkedIn</div>
                <div style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#8B949E" }}>linkedin.com/in/rahul1907</div>
              </div>
              <span style={{ marginLeft: "auto", color: "#484F58" }}>↗</span>
            </a>

            <a href="https://github.com/Rahul1907" target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "#0D1117", border: "1px solid #21262D", borderRadius: 8,
              padding: "20px 24px", textDecoration: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(88,166,255,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(88,166,255,0.06)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#21262D";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}>
              <span style={{ fontFamily: "DM Mono, monospace", fontSize: 20, color: "#58A6FF" }}>gh</span>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 14, color: "#E6EDF3" }}>GitHub</div>
                <div style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#8B949E" }}>github.com/Rahul1907</div>
              </div>
              <span style={{ marginLeft: "auto", color: "#484F58" }}>↗</span>
            </a>
          </div>

          <div style={{ padding: "20px 0", borderTop: "1px solid #21262D", fontFamily: "DM Mono, monospace", fontSize: 11, color: "#484F58", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span>© 2025 Rahul Khanchandani</span>
            <span>Built with Next.js · Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
