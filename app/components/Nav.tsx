"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: scrolled ? "1px solid #21262D" : "1px solid transparent",
      background: scrolled ? "rgba(8,12,16,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <a href="#" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18, color: "#E6EDF3", textDecoration: "none", letterSpacing: "-0.02em" }}>
          rk<span style={{ color: "#58A6FF" }}>.</span>
        </a>

        {/* Desktop */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#8B949E", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#58A6FF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8B949E")}>
              {l.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1S6vXHShTRIu-4RiNAUr8RjW6Rh7vOfLw/view?usp=sharing" target="_blank" style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#58A6FF", textDecoration: "none", border: "1px solid rgba(88,166,255,0.4)", padding: "6px 16px", borderRadius: 4, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(88,166,255,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
            resume ↗
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "#8B949E", cursor: "pointer", fontSize: 22 }} className="burger">☰</button>
      </div>

      {open && (
        <div style={{ background: "#0D1117", borderTop: "1px solid #21262D", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: "DM Mono, monospace", fontSize: 13, color: "#8B949E", textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width: 640px) {
          .desktop-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
