"use client";
import { useEffect, useState } from "react";

const roles = ["Senior Frontend Engineer", "React & Next.js Specialist", "TypeScript Expert", "Performance Obsessive"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(#21262D 1px, transparent 1px), linear-gradient(90deg, #21262D 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.3,
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
      }} />

      {/* Glow blob */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(88,166,255,0.06) 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, paddingTop: 80 }}>

        <div style={{ fontFamily: "DM Mono, monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#58A6FF", marginBottom: 20, opacity: 0.8 }}>
          available for new opportunities
        </div>

        <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16, color: "#E6EDF3" }}>
          Rahul<br />
          <span style={{ color: "#58A6FF" }}>Khanchandani</span>
        </h1>

        <div style={{ fontFamily: "DM Mono, monospace", fontSize: "clamp(14px, 2vw, 18px)", color: "#8B949E", marginBottom: 32, minHeight: 30 }}>
          <span style={{ color: "#3FB950" }}>$ </span>
          <span style={{ color: "#E6EDF3" }}>{displayed}</span>
          <span style={{ color: "#58A6FF", animation: "blink 1s step-end infinite" }}>▌</span>
        </div>

        <p style={{ fontSize: 15, color: "#8B949E", maxWidth: 520, lineHeight: 1.8, marginBottom: 40 }}>
          6+ years building high-performance web applications that ship to millions. Specialising in React, Next.js, and micro-frontend architecture. Based in Ahmedabad, India.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#experience" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 14, background: "#58A6FF", color: "#080C10", padding: "12px 28px", borderRadius: 6, textDecoration: "none", transition: "all 0.2s", display: "inline-block" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#79B8FF")}
            onMouseLeave={e => (e.currentTarget.style.background = "#58A6FF")}>
            View my work
          </a>
          <a href="#contact" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 14, background: "transparent", color: "#E6EDF3", padding: "12px 28px", borderRadius: 6, textDecoration: "none", border: "1px solid #21262D", transition: "all 0.2s", display: "inline-block" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#58A6FF")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#21262D")}>
            Get in touch
          </a>
        </div>

        <div style={{ display: "flex", gap: 40, marginTop: 80, paddingTop: 40, borderTop: "1px solid #21262D", flexWrap: "wrap" }}>
          {[["6+", "Years experience"], ["40%", "Bug reduction"], ["85+", "Lighthouse score"], ["50M+", "Users reached"]].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 28, color: "#E6EDF3", lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#484F58", marginTop: 4, letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
