"use client";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "60176218234";
const WHATSAPP_MSG = encodeURIComponent("Hi Fat Calico! I would like to build my own website!");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

// ─── Global CSS ───────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: #fafaf8;
    color: #1a1a1a;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  @keyframes glistenPulse {
    0%, 100% { box-shadow: 0 0 16px 3px rgba(255,120,0,0.4), 0 4px 24px rgba(255,120,0,0.25); }
    50%       { box-shadow: 0 0 32px 8px rgba(255,160,0,0.65), 0 8px 40px rgba(255,120,0,0.35); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-7px); }
  }

  .mirror-btn {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 13px 26px; border-radius: 999px;
    border: 1.5px solid rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(14px);
    color: #fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700; font-size: 15px;
    cursor: pointer; text-decoration: none;
    transition: all 0.22s ease;
    white-space: nowrap;
  }
  .mirror-btn:hover {
    background: rgba(255,255,255,0.28);
    border-color: rgba(255,255,255,0.7);
    transform: translateY(-2px);
  }
  .mirror-btn-orange {
    border-color: rgba(255,120,0,0.7);
    background: rgba(255,100,0,0.15);
    animation: glistenPulse 2s ease-in-out infinite;
  }
  .mirror-btn-orange:hover {
    background: rgba(255,100,0,0.3);
    border-color: #ff7800;
  }

  .light-btn {
    display: inline-flex; align-items: center; gap: 9px;
    padding: 13px 26px; border-radius: 999px;
    border: 1.5px solid rgba(0,0,0,0.15);
    background: rgba(0,0,0,0.04);
    color: #1a1a1a;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700; font-size: 15px;
    cursor: pointer; text-decoration: none;
    transition: all 0.22s ease;
    white-space: nowrap;
  }
  .light-btn:hover {
    background: rgba(0,0,0,0.09);
    border-color: rgba(0,0,0,0.3);
    transform: translateY(-2px);
  }
  .light-btn-orange {
    border-color: rgba(255,120,0,0.6);
    background: rgba(255,100,0,0.07);
    color: #cc5500;
    animation: glistenPulse 2s ease-in-out infinite;
  }
  .light-btn-orange:hover {
    background: rgba(255,100,0,0.15);
  }

  .faq-item { border-bottom: 1px solid rgba(0,0,0,0.08); }
  .faq-q {
    width: 100%; background: none; border: none; color: #1a1a1a;
    font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px;
    text-align: left; padding: 20px 0; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
  }
  .faq-a {
    overflow: hidden; transition: max-height 0.4s ease, padding 0.3s ease;
    font-size: 14px; line-height: 1.75; color: rgba(26,26,26,0.65);
    padding-bottom: 0;
  }
  .faq-a.open { padding-bottom: 18px; }

  /* Touch-scrollable carousel */
  .carousel-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 4px;
    cursor: grab;
    touch-action: pan-x;
  }
  .carousel-scroll:active { cursor: grabbing; }
  .carousel-scroll::-webkit-scrollbar { display: none; }

  .portfolio-card {
    flex: 0 0 220px;
    aspect-ratio: 4/6;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    scroll-snap-align: start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
  }
  .portfolio-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(0,0,0,0.18);
  }

  .step-box {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 20px;
    padding: 32px 28px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
    flex: 1; min-width: 220px; max-width: 300px;
    transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }
  .step-box:hover {
    border-color: rgba(255,120,0,0.4);
    transform: translateY(-5px);
    box-shadow: 0 12px 36px rgba(255,120,0,0.12);
  }

  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #f0f0f0; }
  ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #ff7800; }
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Icon({ d, size = 22, color = "currentColor", fill = "none" }: {
  d: string; size?: number; color?: string; fill?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function WhatsAppIcon({ size = 22, color = "#25D366" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L0 24l6.278-1.519A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.387l-.361-.214-3.727.977.994-3.638-.235-.374A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
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
        background: scrolled ? "rgba(250,250,248,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/fatoo.webp"
            alt="Fat Calico & Co"
            style={{ height: 38, width: "auto", borderRadius: 8, objectFit: "cover" }}
          />
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800, fontSize: 17,
            color: scrolled ? "#1a1a1a" : "#fff",
            transition: "color 0.3s",
          }}>
            Fat Calico <span style={{ color: "#ff7800" }}>&</span> Co
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a
            href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", padding: 8, borderRadius: 10,
              background: "rgba(37,211,102,0.12)", transition: "background 0.2s",
            }}
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((n) => (
              <span key={n} style={{
                display: "block", width: 22, height: 2,
                background: scrolled ? "#1a1a1a" : "#fff",
                borderRadius: 2, transition: "transform 0.3s, opacity 0.3s",
                transform: open
                  ? n === 0 ? "rotate(45deg) translate(5px,5px)"
                  : n === 2 ? "rotate(-45deg) translate(5px,-5px)"
                  : "none"
                  : "none",
                opacity: open && n === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        position: "fixed", top: 64, right: 0, width: 230, zIndex: 99,
        background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
        borderLeft: "1px solid rgba(0,0,0,0.08)",
        padding: "24px 0",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        borderBottomLeftRadius: 18,
        boxShadow: "-8px 8px 32px rgba(0,0,0,0.1)",
      }}>
        {navLinks.map((l) => (
          <a
            key={l.label} href={l.href} onClick={() => setOpen(false)}
            style={{
              display: "block", padding: "14px 28px",
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15,
              color: "#1a1a1a", textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              transition: "color 0.2s, padding-left 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ff7800"; (e.currentTarget as HTMLElement).style.paddingLeft = "36px"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#1a1a1a"; (e.currentTarget as HTMLElement).style.paddingLeft = "28px"; }}
          >
            {l.label}
          </a>
        ))}
        <div style={{ padding: "20px 28px 0" }}>
          <a
            href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="light-btn light-btn-orange"
            style={{ fontSize: 13, padding: "11px 20px", width: "100%", justifyContent: "center" }}
          >
            <WhatsAppIcon size={16} color="#25D366" /> Chat Now
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
      <img src="/hero.webp" alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(10,5,0,0.65) 50%, rgba(0,0,0,0.78) 100%)",
      }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "80px 24px 60px", maxWidth: 700 }}>
        <div style={{ animation: "fadeUp 0.8s ease both" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
            padding: "7px 16px", borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
            fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "rgba(255,235,200,0.95)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#ff7800",
              display: "inline-block", animation: "glistenPulse 1.5s ease-in-out infinite",
            }} />
            Website for just RM100
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(40px, 7vw, 70px)",
          lineHeight: 1.1,
          color: "#fff",
          animation: "fadeUp 0.8s 0.12s ease both",
          marginBottom: 22,
          letterSpacing: "-0.02em",
        }}>
          Look{" "}
          <span style={{ color: "#ff9030" }}>Professional.</span>
          <br />
          Build{" "}
          <span style={{ color: "#ff9030" }}>Trust Instantly.</span>
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2.2vw, 19px)",
          color: "rgba(255,255,255,0.78)",
          lineHeight: 1.68,
          maxWidth: 520, margin: "0 auto 40px",
          animation: "fadeUp 0.8s 0.24s ease both",
        }}>
          A complete, mobile-friendly website to showcase your products and services.
          Fast setup, no hidden fees. Just{" "}
          <strong style={{ color: "#fff" }}>RM100.</strong>
        </p>

        <div style={{
          display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
          animation: "fadeUp 0.8s 0.36s ease both",
        }}>
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

        <div style={{ marginTop: 60, animation: "float 2.5s ease-in-out infinite", opacity: 0.5 }}>
          <Icon d="M12 5v14M5 12l7 7 7-7" size={20} color="rgba(255,255,255,0.7)" />
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
  { title: "Emma Damia", sub: "Fashion & Beauty Content Creator", link: "https://emmadamia.vercel.app", img: "/emmadamia.webp" },
];

function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const CARD_W = 220 + 16;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / CARD_W);
      setActive(Math.max(0, Math.min(idx, PORTFOLIO.length - 1)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * CARD_W, behavior: "smooth" });
    setActive(i);
  };

  return (
    // 1. Top padding halved (96 → 48), bottom padding halved (80 → 40)
    <section id="portfolio" style={{ padding: "48px 0 40px", background: "#fafaf8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11,
            letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff7800", fontWeight: 700,
          }}>Our Work</span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15,
            color: "#1a1a1a", marginTop: 10,
          }}>
            What Your Website<br />Could Look Like
          </h2>
        </div>
      </div>

      <div style={{ paddingLeft: 24, paddingRight: 24 }}>
        <div ref={scrollRef} className="carousel-scroll">
          {PORTFOLIO.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
              <img
                src={p.img} alt={p.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "60px 16px 18px",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700, fontSize: 15, color: "#fff",
                }}>{p.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 3 }}>{p.sub}</div>
              </div>
              {/* 2. "View Live" badge shown on ALL cards */}
              <div style={{
                position: "absolute", top: 12, right: 12,
                background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                borderRadius: 8, padding: "5px 10px",
                fontSize: 11, color: "#fff", fontWeight: 600,
                display: "flex", alignItems: "center", gap: 4,
              }}>
                <Icon d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" size={11} />
                View Live
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20, padding: "0 24px" }}>
        {PORTFOLIO.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: i === active ? 24 : 8, height: 8, borderRadius: 99,
              background: i === active ? "#ff7800" : "rgba(0,0,0,0.18)",
              border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0,
            }}
          />
        ))}
      </div>

      {/* 3. Orange "View All Portfolio Examples" button */}
      <div style={{ textAlign: "center", marginTop: 36, padding: "0 24px" }}>
        <a href="#" className="light-btn light-btn-orange" style={{ fontSize: 14 }}>
          <Icon d="M4 6h16M4 10h16M4 14h8" size={16} color="#cc5500" />
          View All Portfolio Examples
        </a>
      </div>
    </section>
  );
}

// ─── Fear Reduction ────────────────────────────────────────────────────────────
function FearReduction() {
  return (
    // 5. Solid colour lines, solid colour fonts, underline on EVERYTHING in second sentence
    <section style={{ background: "#fff7f0" }}>
      <div style={{ height: 3, background: "#ff7800" }} />
      <div style={{ padding: "56px 24px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "clamp(18px, 3vw, 28px)", color: "#1a1a1a", lineHeight: 1.45,
        }}>
          Customers prefer to know{" "}
          <span style={{ color: "#ff7800" }}>EVERYTHING</span>{" "}
          about a service or product before they buy.
        </p>
      </div>
      <div style={{ height: 3, background: "#ff7800" }} />
      <div style={{ padding: "56px 24px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "clamp(18px, 3vw, 28px)", lineHeight: 1.45,
        }}>
          <span style={{ color: "#ff7800" }}>A website saves you from missing more clients</span>{" "}
          <span style={{ color: "#1a1a1a" }}>by showing{" "}
            <span style={{ textDecoration: "underline", textDecorationColor: "#ff7800", textUnderlineOffset: "4px" }}>
              EVERYTHING
            </span>.
          </span>
        </p>
      </div>
      <div style={{ height: 3, background: "#ff7800" }} />
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
    // 6. Top padding reduced by 60% (96 → ~38), bottom padding reduced by 50% (96 → 48)
    <section style={{ padding: "38px 24px 48px", background: "#fafaf8" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11,
          letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff7800", fontWeight: 700,
        }}>Results</span>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "clamp(28px, 4vw, 44px)", color: "#1a1a1a", marginTop: 10, marginBottom: 12,
        }}>
          Your Business, Enhanced
        </h2>
        <p style={{ color: "rgba(26,26,26,0.5)", marginBottom: 56, fontSize: 15 }}>Our past clients reported:</p>

        <div style={{
          display: "flex", justifyContent: "center", alignItems: "stretch",
          flexWrap: "wrap",
          background: "#fff", borderRadius: 24,
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "stretch", flex: 1, minWidth: 180 }}>
              <div style={{ padding: "40px 36px", textAlign: "center", width: "100%" }}>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                  fontSize: "clamp(52px, 7vw, 80px)", lineHeight: 1,
                  background: "linear-gradient(135deg, #ff7800, #ffb800)",
                  backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  {s.num}
                </div>
                <div style={{ color: "rgba(26,26,26,0.6)", fontSize: 14, marginTop: 10, fontWeight: 500 }}>{s.label}</div>
              </div>
              {i < STATS.length - 1 && (
                <div style={{ width: 1, background: "rgba(0,0,0,0.07)", alignSelf: "stretch", flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>

        <p style={{ color: "rgba(26,26,26,0.35)", fontSize: 12, marginTop: 28, fontStyle: "italic" }}>
          ...after their website went live.
        </p>
      </div>
    </section>
  );
}

// ─── Eager to Show ─────────────────────────────────────────────────────────────
function EagerToShow() {
  return (
    <section style={{ padding: "96px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "rgba(255,120,0,0.1)",
            border: "1.5px solid rgba(255,120,0,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "float 3s ease-in-out infinite",
          }}>
            <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              size={22} color="#ff7800" fill="rgba(255,120,0,0.25)" />
          </div>
        </div>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "clamp(26px, 4vw, 42px)", color: "#1a1a1a",
          lineHeight: 1.2, marginBottom: 24,
        }}>
          Make it Easy for Clients<br />to Choose You.
        </h2>
        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "rgba(26,26,26,0.65)", lineHeight: 1.78,
          maxWidth: 580, margin: "0 auto",
        }}>
          Clients are eager to get to know you and your services. You should be equally eager to show them.
          Don&apos;t hide your hard work behind a crowded social media feed —{" "}
          <strong style={{ color: "#1a1a1a" }}>give your business a home.</strong>
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
    iconBg: "#fff7f0", accent: "#ff7800",
  },
  {
    num: "02",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1",
    title: "We Build & Refine",
    desc: "We design your site and work with you on changes. You get 3 revisions included.",
    iconBg: "#f0f7ff", accent: "#1a7aff",
  },
  {
    num: "03",
    icon: "M5 3l14 9-14 9V3z",
    title: "Go Live",
    desc: "Pay your RM100 and we launch your site officially. Fast, simple, done.",
    iconBg: "#f0fff4", accent: "#18a34a",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "96px 24px", background: "#fafaf8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11,
            letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff7800", fontWeight: 700,
          }}>Process</span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)", color: "#1a1a1a", marginTop: 10,
          }}>
            Get Your Site in 3 Simple Steps.
          </h2>
        </div>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
          {STEPS.map((s, i) => (
            <div key={i} className="step-box">
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: s.iconBg,
                border: `1.5px solid ${s.accent}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon d={s.icon} size={22} color={s.accent} />
              </div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                fontSize: 38, lineHeight: 1, color: `${s.accent}20`,
                marginBottom: 12,
              }}>
                {s.num}
              </div>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700,
                fontSize: 19, color: "#1a1a1a", marginBottom: 10,
              }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(26,26,26,0.6)", lineHeight: 1.7 }}>{s.desc}</p>
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
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ padding: "96px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11,
            letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff7800", fontWeight: 700,
          }}>FAQ</span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 44px)", color: "#1a1a1a", marginTop: 10,
          }}>Frequently Asked Questions.</h2>
        </div>
        {FAQS.map((f, i) => (
          <div key={i} className="faq-item">
            <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{
                  width: 24, height: 24, borderRadius: 7,
                  background: openIdx === i ? "rgba(255,120,0,0.12)" : "rgba(0,0,0,0.05)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "background 0.2s",
                }}>
                  <Icon
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    size={14} color={openIdx === i ? "#ff7800" : "rgba(26,26,26,0.4)"} />
                </span>
                {f.q}
              </span>
              <span style={{
                transform: openIdx === i ? "rotate(45deg)" : "none",
                transition: "transform 0.3s",
                color: openIdx === i ? "#ff7800" : "rgba(26,26,26,0.35)",
                flexShrink: 0,
              }}>
                <Icon d="M12 5v14M5 12h14" size={18} color="currentColor" />
              </span>
            </button>
            <div
              className={`faq-a${openIdx === i ? " open" : ""}`}
              style={{ maxHeight: openIdx === i ? 220 : 0 }}
            >
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
      padding: "100px 24px",
      background: "linear-gradient(135deg, #fff7f0 0%, #ffeedd 50%, #fff7f0 100%)",
      textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(255,120,0,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%",
            background: "rgba(255,120,0,0.12)",
            border: "2px solid rgba(255,120,0,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "float 3s ease-in-out infinite",
          }}>
            <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              size={28} color="#ff7800" fill="rgba(255,120,0,0.2)" />
          </div>
        </div>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "clamp(32px, 5vw, 60px)", color: "#1a1a1a",
          lineHeight: 1.1, marginBottom: 16,
        }}>
          Ready to Look{" "}
          <span style={{ color: "#ff7800" }}>Professional?</span>
        </h2>
        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(26,26,26,0.65)",
          maxWidth: 440, margin: "0 auto 40px", lineHeight: 1.7,
        }}>
          Get your website live for just <strong style={{ color: "#1a1a1a" }}>RM100.</strong>
          <br />No contracts, no hidden fees.
        </p>
        <a
          href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="light-btn light-btn-orange"
          style={{ fontSize: 17, padding: "17px 38px" }}
        >
          <WhatsAppIcon size={22} color="#25D366" /> Chat on WhatsApp to Start
        </a>
        <p style={{ marginTop: 22, fontSize: 12, color: "rgba(26,26,26,0.38)", letterSpacing: "0.05em" }}>
          We typically reply within minutes ⚡
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: "28px 24px",
      borderTop: "1px solid rgba(0,0,0,0.07)",
      textAlign: "center",
      background: "#fafaf8",
    }}>
      <p style={{ fontSize: 13, color: "rgba(26,26,26,0.38)" }}>
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
