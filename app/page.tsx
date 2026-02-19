"use client";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "60176218234";
const WHATSAPP_MSG = encodeURIComponent("Hi Fat Calico! I would like to build my own website!");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

// ─── Keyframe injection ────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0a0a0a; color: #f0ede8; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes glistenPulse {
    0%, 100% { box-shadow: 0 0 18px 2px rgba(255,130,0,0.45), 0 0 40px 8px rgba(255,130,0,0.18); }
    50%       { box-shadow: 0 0 36px 8px rgba(255,170,0,0.75), 0 0 80px 20px rgba(255,130,0,0.3); }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(30px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes slideIn {
    from { opacity:0; transform:translateX(-20px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes rotateLine {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-8px); }
  }
  @keyframes arrowBounce {
    0%,100% { transform: translateX(0); }
    50%     { transform: translateX(6px); }
  }
  .fade-up { animation: fadeUp 0.7s ease both; }
  .mirror-btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 14px 28px; border-radius: 999px;
    border: 1.5px solid rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
    color: #fff; font-family: 'Syne', sans-serif;
    font-weight: 700; font-size: 15px;
    cursor: pointer; text-decoration: none;
    transition: all 0.25s ease;
    letter-spacing: 0.03em;
  }
  .mirror-btn:hover {
    background: rgba(255,255,255,0.18);
    border-color: rgba(255,255,255,0.6);
    transform: translateY(-2px);
  }
  .mirror-btn-orange {
    border-color: rgba(255,130,0,0.7);
    background: rgba(255,110,0,0.12);
    animation: glistenPulse 2.2s ease-in-out infinite;
  }
  .mirror-btn-orange:hover {
    background: rgba(255,110,0,0.28);
    border-color: #ff8200;
  }
  .faq-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
  .faq-q {
    width: 100%; background: none; border: none; color: #f0ede8;
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px;
    text-align: left; padding: 20px 0; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center;
    gap: 12px;
  }
  .faq-a {
    overflow: hidden; transition: max-height 0.4s ease, padding 0.3s ease;
    font-size: 14px; line-height: 1.7; color: rgba(240,237,232,0.75);
    padding-bottom: 0;
  }
  .faq-a.open { padding-bottom: 18px; }
  .carousel-track {
    display: flex; gap: 16px; transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
    will-change: transform;
  }
  .portfolio-card {
    flex: 0 0 240px; border-radius: 18px; overflow: hidden;
    aspect-ratio: 4/5; position: relative; cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .portfolio-card:hover { transform: scale(1.03); box-shadow: 0 16px 48px rgba(255,130,0,0.2); }
  .step-box {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px; padding: 32px 28px;
    backdrop-filter: blur(8px);
    flex: 1; min-width: 200px;
    transition: border-color 0.3s, transform 0.3s;
  }
  .step-box:hover { border-color: rgba(255,130,0,0.5); transform: translateY(-4px); }
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #111; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #ff8200; }
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Icon({ d, size = 22, color = "currentColor", fill = "none" }: { d: string; size?: number; color?: string; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L0 24l6.278-1.519A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.387l-.361-.214-3.727.977.994-3.638-.235-.374A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/>
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: 64,
        background: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.3s ease",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/fatoo.webp" alt="Fat Calico & Co" style={{ height: 38, width: 38, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em", color: "#fff" }}>
            Fat Calico <span style={{ color: "#ff8200" }}>&</span> Co
          </span>
        </div>

        {/* Right: WA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", padding: 8, borderRadius: "50%", background: "rgba(37,211,102,0.12)", transition: "background 0.2s" }}
            title="Chat on WhatsApp">
            <WhatsAppIcon size={22} />
          </a>
          <button onClick={() => setOpen(!open)} style={{
            background: "none", border: "none", cursor: "pointer", padding: 8,
            display: "flex", flexDirection: "column", gap: 5, color: "#fff",
          }} aria-label="Menu">
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "transform 0.3s, opacity 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, opacity: open ? 0 : 1, transition: "opacity 0.3s" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "transform 0.3s, opacity 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 64, right: 0, width: 220, zIndex: 99,
        background: "rgba(14,14,14,0.97)", backdropFilter: "blur(20px)",
        borderLeft: "1px solid rgba(255,255,255,0.08)",
        padding: "24px 0",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        borderBottomLeftRadius: 18,
      }}>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
            display: "block", padding: "14px 28px",
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15,
            color: "#f0ede8", textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            transition: "color 0.2s, padding-left 0.2s",
          }}
          onMouseEnter={e => { (e.target as HTMLElement).style.color = "#ff8200"; (e.target as HTMLElement).style.paddingLeft = "36px"; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.color = "#f0ede8"; (e.target as HTMLElement).style.paddingLeft = "28px"; }}>
            {l.label}
          </a>
        ))}
        <div style={{ padding: "20px 28px 0" }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mirror-btn mirror-btn-orange" style={{ fontSize: 13, padding: "11px 20px", width: "100%", justifyContent: "center" }}>
            <WhatsAppIcon size={16} /> Chat Now
          </a>
        </div>
      </div>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh", position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      {/* BG */}
      <img src="/hero.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(10,5,0,0.72) 50%, rgba(0,0,0,0.88) 100%)" }} />
      {/* Grain */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.5 }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 680 }}>
        <div style={{ animation: "fadeUp 0.8s ease both" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
            padding: "7px 16px", borderRadius: 999,
            border: "1px solid rgba(255,130,0,0.4)",
            background: "rgba(255,100,0,0.1)", backdropFilter: "blur(8px)",
            fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,200,100,0.9)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff8200", display: "inline-block", animation: "glistenPulse 1.5s ease-in-out infinite" }} />
            Starting from RM100
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(38px, 7vw, 68px)", lineHeight: 1.08,
          letterSpacing: "-0.02em", color: "#fff",
          animation: "fadeUp 0.8s 0.15s ease both",
          marginBottom: 20,
        }}>
          Look <span style={{ color: "#ff8200" }}>Professional.</span>
          <br />Build <span style={{ color: "#ff8200" }}>Trust Instantly.</span>
        </h1>

        <p style={{
          fontSize: "clamp(15px, 2.2vw, 18px)", color: "rgba(240,237,232,0.78)",
          lineHeight: 1.65, maxWidth: 520, margin: "0 auto 36px",
          animation: "fadeUp 0.8s 0.28s ease both",
        }}>
          A complete, mobile-friendly website to showcase your products and services.
          Fast setup, no hidden fees. Just <strong style={{ color: "#fff" }}>RM100.</strong>
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.8s 0.4s ease both" }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="mirror-btn mirror-btn-orange"
            style={{ fontSize: 16, padding: "16px 32px" }}>
            <WhatsAppIcon size={20} /> Chat on WhatsApp
          </a>
          <a href="#portfolio" className="mirror-btn" style={{ fontSize: 16, padding: "16px 32px" }}>
            <Icon d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            View Examples
          </a>
        </div>

        {/* scroll hint */}
        <div style={{ marginTop: 60, animation: "float 2.5s ease-in-out infinite", opacity: 0.45 }}>
          <Icon d="M12 5v14M5 12l7 7 7-7" size={20} color="rgba(255,255,255,0.6)" />
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ─────────────────────────────────────────────────────────────────
const PORTFOLIO = [
  { title: "Uncle Roll", sub: "F&B Business Landing Page", link: "https://uncleroll.vercel.app", img: "/uncleroll.webp" },
  { title: "Yasmin Nadia", sub: "Professional Personal Trainer", link: "https://yasminnadia.vercel.app", img: "/yasminnadia.webp" },
  { title: "Aina Athirah", sub: "Private Tutor", link: "https://ainaathirah.vercel.app", img: "/ainaathirah.webp" },
  { title: "Amirul Khoo", sub: "Professional Fitness Trainer", link: "https://amirulkhoo.vercel.app", img: "/amirulkhoo.webp" },
  { title: "Emma Damia", sub: "Fashion & Beauty Content Creator", link: undefined, img: "/emmadamia.webp" },
];

function Portfolio() {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const CARD_W = 240;
  const GAP = 16;

  const goTo = (i: number) => {
    const max = PORTFOLIO.length - 1;
    const idx = Math.max(0, Math.min(i, max));
    setActive(idx);
    setOffset(-(idx * (CARD_W + GAP)));
  };

  return (
    <section id="portfolio" style={{ padding: "96px 0 80px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff8200", fontWeight: 700 }}>Our Work</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, color: "#fff", marginTop: 10 }}>
            What Your Website<br />Could Look Like
          </h2>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          <div style={{ overflow: "hidden", borderRadius: 18 }}>
            <div ref={trackRef} className="carousel-track" style={{ transform: `translateX(calc(50% - 120px + ${offset}px))` }}>
              {PORTFOLIO.map((p, i) => (
                <div key={i} className="portfolio-card" onClick={() => { goTo(i); if (p.link) window.open(p.link, "_blank"); }}
                  style={{ opacity: i === active ? 1 : 0.55, transform: i === active ? "scale(1.04)" : "scale(0.95)", transition: "all 0.4s ease" }}>
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "40px 18px 18px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                  }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 3 }}>{p.sub}</div>
                  </div>
                  {p.link && (
                    <div style={{
                      position: "absolute", top: 12, right: 12,
                      background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                      borderRadius: 8, padding: "5px 10px",
                      fontSize: 11, color: "#fff", fontWeight: 600, display: "flex", alignItems: "center", gap: 4,
                    }}>
                      <Icon d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" size={12} />
                      View Live
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button onClick={() => goTo(active - 1)} disabled={active === 0} style={{
            position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%",
            width: 44, height: 44, cursor: active === 0 ? "default" : "pointer",
            color: "#fff", opacity: active === 0 ? 0.3 : 1, transition: "opacity 0.2s",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon d="M15 18l-6-6 6-6" size={18} />
          </button>
          <button onClick={() => goTo(active + 1)} disabled={active === PORTFOLIO.length - 1} style={{
            position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%",
            width: 44, height: 44, cursor: active === PORTFOLIO.length - 1 ? "default" : "pointer",
            color: "#fff", opacity: active === PORTFOLIO.length - 1 ? 0.3 : 1, transition: "opacity 0.2s",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon d="M9 18l6-6-6-6" size={18} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
          {PORTFOLIO.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === active ? 24 : 8, height: 8, borderRadius: 99,
              background: i === active ? "#ff8200" : "rgba(255,255,255,0.25)",
              border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#" className="mirror-btn" style={{ fontSize: 14 }}>
            <Icon d="M4 6h16M4 10h16M4 14h8" size={16} /> View All Portfolio Examples
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Fear Reduction ────────────────────────────────────────────────────────────
function FearReduction() {
  return (
    <section style={{ padding: "0", margin: "20px 0" }}>
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent, rgba(255,130,0,0.7), rgba(255,200,0,0.7), rgba(255,130,0,0.7), transparent)" }} />
      <div style={{ padding: "52px 24px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(18px, 3vw, 28px)", color: "#fff", lineHeight: 1.4 }}>
          Customers prefer to know{" "}
          <span style={{
            background: "linear-gradient(90deg, #ff8200, #ffd000)",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>EVERYTHING</span>{" "}
          about a service or product before they buy.
        </p>
      </div>
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent, rgba(255,130,0,0.7), rgba(255,200,0,0.7), rgba(255,130,0,0.7), transparent)" }} />
      <div style={{ padding: "52px 24px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(18px, 3vw, 28px)", lineHeight: 1.4 }}>
          <span style={{ color: "#ff8200" }}>A website saves you from missing more clients</span>{" "}
          <span style={{ color: "rgba(240,237,232,0.85)" }}>by showing EVERYTHING.</span>
        </p>
      </div>
      <div style={{ height: 3, background: "linear-gradient(90deg, transparent, rgba(255,130,0,0.7), rgba(255,200,0,0.7), rgba(255,130,0,0.7), transparent)" }} />
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { num: "60%", label: "Increase in Reach" },
  { num: "50%", label: "Increase in Inquiries" },
  { num: "40%", label: "Increase in Conversion" },
];

function Stats() {
  return (
    <section style={{ padding: "96px 24px", background: "linear-gradient(180deg, #0a0a0a 0%, #0f0800 50%, #0a0a0a 100%)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff8200", fontWeight: 700 }}>Results</span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", color: "#fff", marginTop: 10, marginBottom: 12 }}>
          Your Business, Enhanced
        </h2>
        <p style={{ color: "rgba(240,237,232,0.6)", marginBottom: 56, fontSize: 15 }}>Our past clients reported:</p>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", flexWrap: "wrap", gap: 0 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "stretch" }}>
              <div style={{ padding: "32px 48px", textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1,
                  background: "linear-gradient(135deg, #ff8200, #ffd000)",
                  backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  {s.num}
                </div>
                <div style={{ color: "rgba(240,237,232,0.7)", fontSize: 14, marginTop: 8, fontWeight: 500, letterSpacing: "0.03em" }}>{s.label}</div>
              </div>
              {i < STATS.length - 1 && (
                <div style={{ width: 1, background: "linear-gradient(180deg, transparent, rgba(255,130,0,0.5), transparent)", alignSelf: "stretch" }} />
              )}
            </div>
          ))}
        </div>

        <p style={{ color: "rgba(240,237,232,0.45)", fontSize: 12, marginTop: 36, fontStyle: "italic" }}>...after their website went live.</p>
      </div>
    </section>
  );
}

// ─── Eager to Show ─────────────────────────────────────────────────────────────
function EagerToShow() {
  return (
    <section style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,130,0,0.12)", border: "1px solid rgba(255,130,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" size={22} color="#ff8200" fill="rgba(255,130,0,0.3)" />
          </div>
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
          Make it Easy for Clients<br />to Choose You.
        </h2>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(240,237,232,0.7)", lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
          Clients are eager to get to know you and your services. You should be equally eager to show them.
          Don&apos;t hide your hard work behind a crowded social media feed—<strong style={{ color: "#fff" }}>give your business a home.</strong>
        </p>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    title: "WhatsApp Us",
    desc: "Send your details, logo, and photos. We'll get the ball rolling right away.",
  },
  {
    num: "02",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1",
    title: "We Build & Refine",
    desc: "We design your site and work with you on changes. You get 3 revisions included.",
  },
  {
    num: "03",
    icon: "M5 3l14 9-14 9V3z",
    title: "Go Live",
    desc: "Pay your RM100 and we launch your site officially. Fast, simple, done.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "96px 24px", background: "rgba(255,130,0,0.03)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff8200", fontWeight: 700 }}>Process</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", color: "#fff", marginTop: 10 }}>
            Get Your Site in 3 Simple Steps.
          </h2>
        </div>

        <div style={{ display: "flex", gap: 0, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flex: "1 1 260px", minWidth: 220, maxWidth: 320 }}>
              <div className="step-box" style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "linear-gradient(135deg, rgba(255,130,0,0.2), rgba(255,200,0,0.1))",
                    border: "1px solid rgba(255,130,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon d={s.icon} size={20} color="#ff8200" />
                  </div>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: "rgba(255,130,0,0.18)", lineHeight: 1 }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(240,237,232,0.65)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div style={{ padding: "0 8px", animation: "arrowBounce 1.5s ease-in-out infinite", flexShrink: 0 }}>
                  <Icon d="M9 18l6-6-6-6" size={24} color="rgba(255,130,0,0.5)" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "What will I get with the RM100 package?", a: "A single page website, mobile optimized, hosting, domain, and three revisions of the website." },
  { q: "Do I need to pay again for the hosting?", a: "No. The RM100 price includes hosting forever. No recurring charges." },
  { q: "Will I get a free domain?", a: "Yes. Free domain is included in the RM100 package. However the customization of the domain is subject to availability." },
  { q: "Can I use my own domain name (e.g., www.yourname.com)?", a: "Yes. We can link your existing domain to the new site for free. If you don't have one, we can help you get one (custom domain cost is separate)." },
  { q: "Can I edit the website later myself?", a: "Yes, but you would need to be able to code." },
  { q: "Can you help me edit the website later and how much will it cost?", a: "Yes, the cost will be ranging from RM10–RM50 only." },
  { q: "How fast can I get my site?", a: "We aim to have your site drafted within 48 hours after receiving your information." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff8200", fontWeight: 700 }}>FAQ</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", color: "#fff", marginTop: 10 }}>Frequently Asked Questions.</h2>
        </div>
        {FAQS.map((f, i) => (
          <div key={i} className="faq-item">
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 22, height: 22, borderRadius: 6, background: open === i ? "rgba(255,130,0,0.2)" : "rgba(255,255,255,0.06)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
                  <Icon d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" size={14} color={open === i ? "#ff8200" : "rgba(240,237,232,0.5)"} />
                </span>
                {f.q}
              </span>
              <span style={{ transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s", color: open === i ? "#ff8200" : "rgba(240,237,232,0.5)", flexShrink: 0 }}>
                <Icon d="M12 5v14M5 12h14" size={18} color="currentColor" />
              </span>
            </button>
            <div className={`faq-a${open === i ? " open" : ""}`} style={{ maxHeight: open === i ? 200 : 0 }}>
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{
      padding: "96px 24px",
      background: "linear-gradient(135deg, #0f0800 0%, #1a0d00 50%, #0f0800 100%)",
      textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      {/* bg glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(255,130,0,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,130,0,0.12)", border: "2px solid rgba(255,130,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", animation: "float 3s ease-in-out infinite" }}>
            <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" size={26} color="#ff8200" fill="rgba(255,130,0,0.2)" />
          </div>
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 60px)", color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
          Ready to Look <span style={{ color: "#ff8200" }}>Professional?</span>
        </h2>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(240,237,232,0.7)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
          Get your website live for just <strong style={{ color: "#fff" }}>RM100.</strong><br />No contracts, no hidden fees.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="mirror-btn mirror-btn-orange"
          style={{ fontSize: 18, padding: "18px 40px" }}>
          <WhatsAppIcon size={22} /> Chat on WhatsApp to Start
        </a>
        <p style={{ marginTop: 24, fontSize: 12, color: "rgba(240,237,232,0.35)", letterSpacing: "0.05em" }}>
          We typically reply within minutes ⚡
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding: "28px 24px", borderTop: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
      <p style={{ fontSize: 13, color: "rgba(240,237,232,0.35)" }}>
        © {new Date().getFullYear()} Fat Calico & Co. All rights reserved.
      </p>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <FearReduction />
        <Stats />
        <EagerToShow />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
