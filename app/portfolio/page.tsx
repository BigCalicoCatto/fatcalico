"use client";
import { useState, useEffect } from "react";

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
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-7px); }
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

  .portfolio-card {
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeUp 0.6s ease both;
  }
  .portfolio-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(0,0,0,0.12);
  }

  .feature-tag {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 12px; border-radius: 999px;
    background: rgba(255,120,0,0.08);
    border: 1px solid rgba(255,120,0,0.2);
    color: #cc5500;
    font-size: 12px; font-weight: 600;
    font-family: 'Plus Jakarta Sans', sans-serif;
    white-space: nowrap;
  }

  .img-overlay-link {
    display: block;
    position: relative;
    width: 100%;
    aspect-ratio: 4/5;
    overflow: hidden;
    text-decoration: none;
  }
  .img-overlay-link img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: top;
    display: block;
    transition: transform 0.45s ease;
  }
  .img-overlay-link:hover img {
    transform: scale(1.04);
  }
  .img-overlay-link .overlay-gradient {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 80px 20px 22px;
    background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%);
  }
  .img-overlay-link .live-badge {
    position: absolute; top: 14px; right: 14px;
    background: rgba(255,255,255,0.15); backdrop-filter: blur(8px);
    border-radius: 8px; padding: 5px 11px;
    font-size: 11px; color: #fff; font-weight: 600;
    display: flex; align-items: center; gap: 4px;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .card-body { padding: 22px 24px 28px; }

  .features-wrap {
    display: flex; flex-wrap: wrap; gap: 7px; margin-top: 14px;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #f0f0f0; }
  ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #ff7800; }
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Icon({ d, size = 18, color = "currentColor", fill = "none" }: {
  d: string; size?: number; color?: string; fill?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function WhatsAppIcon({ size = 20, color = "#25D366" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.875L0 24l6.278-1.519A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.387l-.361-.214-3.727.977.994-3.638-.235-.374A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
    </svg>
  );
}

// ─── Navbar (retained from main page) ─────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: 64,
        background: scrolled ? "rgba(250,250,248,0.94)" : "rgba(250,250,248,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img
            src="/fatoo.webp"
            alt="Fat Calico & Co logo"
            style={{ height: 38, width: "auto", borderRadius: 8, objectFit: "cover" }}
          />
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800, fontSize: 17, color: "#1a1a1a",
          }}>
            Fat Calico <span style={{ color: "#ff7800" }}>&</span> Co
          </span>
        </a>

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
                background: "#1a1a1a",
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

// ─── Portfolio Data ────────────────────────────────────────────────────────────
const ICON_EXTERNAL = "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3";

const PROJECTS = [
  {
    title: "Uncle Roll",
    sub: "F&B Business Landing Page",
    link: "https://uncleroll.vercel.app",
    img: "/uncleroll.webp",
    imgAlt: "Uncle Roll F&B business website built by Fat Calico & Co Malaysia for RM100",
    description: "A complete digital storefront for a local F&B brand — everything a hungry customer needs to find, order, and show up.",
    featureGroups: [
      {
        label: "Location & Discovery",
        color: "#1a7aff",
        features: ["Location", "Waze", "Google Maps", "Opening Hours"],
      },
      {
        label: "Menu & Ordering",
        color: "#18a34a",
        features: ["Full Menu", "GrabFood", "FoodPanda", "ShopeeFood", "WhatsApp Order"],
      },
    ],
  },
  {
    title: "Yasmin Nadia",
    sub: "Professional Personal Trainer",
    link: "https://yasminnadia.vercel.app",
    img: "/yasminnadia.webp",
    imgAlt: "Yasmin Nadia personal trainer website built by Fat Calico & Co Malaysia for RM100",
    description: "A polished personal brand page that converts visitors into paying clients — showcasing expertise, results, and everything in between.",
    featureGroups: [
      {
        label: "Services & Pricing",
        color: "#cc5500",
        features: ["All Packages", "All Services"],
      },
      {
        label: "Credibility",
        color: "#7c3aed",
        features: ["Achievements", "Successful Clients"],
      },
      {
        label: "Revenue",
        color: "#18a34a",
        features: ["Affiliate Links"],
      },
    ],
  },
  {
    title: "Aina Athirah",
    sub: "Private Tutor",
    link: "https://ainaathirah.vercel.app",
    img: "/ainaathirah.webp",
    imgAlt: "Aina Athirah private tutor website built by Fat Calico & Co Malaysia for RM100",
    description: "A trustworthy, parent-friendly site that shows qualifications, services, and real student success — so parents book with confidence.",
    featureGroups: [
      {
        label: "Services & Pricing",
        color: "#cc5500",
        features: ["All Packages", "All Services"],
      },
      {
        label: "Trust & Credibility",
        color: "#1a7aff",
        features: ["Qualifications", "Successful Clients"],
      },
    ],
  },
  {
    title: "Amirul Khoo",
    sub: "Professional Fitness Trainer",
    link: "https://amirulkhoo.vercel.app",
    img: "/amirulkhoo.webp",
    imgAlt: "Amirul Khoo fitness trainer website built by Fat Calico & Co Malaysia for RM100",
    description: "A high-energy personal brand that commands authority in the fitness space — clients see the results, feel the expertise, and commit.",
    featureGroups: [
      {
        label: "Services & Pricing",
        color: "#cc5500",
        features: ["All Packages", "All Services"],
      },
      {
        label: "Credibility",
        color: "#7c3aed",
        features: ["Achievements", "Successful Clients"],
      },
      {
        label: "Revenue",
        color: "#18a34a",
        features: ["Affiliate Links"],
      },
    ],
  },
  {
    title: "Emma Damia",
    sub: "Fashion & Beauty Content Creator",
    link: "https://emmadamia.vercel.app",
    img: "/emmadamia.webp",
    imgAlt: "Emma Damia fashion and beauty content creator website built by Fat Calico & Co Malaysia for RM100",
    description: "A media-ready creator profile that speaks directly to brands — with everything they need to pitch, book, and collab in one place.",
    featureGroups: [
      {
        label: "Brand Deals",
        color: "#cc5500",
        features: ["Affiliate Links", "Rates", "Experiences"],
      },
      {
        label: "Content & Niche",
        color: "#7c3aed",
        features: ["Niches", "Best Works"],
      },
      {
        label: "Media Kit",
        color: "#1a7aff",
        features: ["Media Kit", "Compcard"],
      },
      {
        label: "Analytics",
        color: "#18a34a",
        features: ["Engagement Rate", "Analytics Metrics"],
      },
    ],
  },
];

// ─── Feature Tag ──────────────────────────────────────────────────────────────
function FeatureTag({ label, color }: { label: string; color: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "4px 11px", borderRadius: 999,
      background: `${color}12`,
      border: `1px solid ${color}30`,
      color: color,
      fontSize: 11.5, fontWeight: 600,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  );
}

// ─── Portfolio Card ───────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  return (
    <div className="portfolio-card" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Image with overlay */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="img-overlay-link"
      >
        <img src={project.img} alt={project.imgAlt} />
        <div className="overlay-gradient">
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700, fontSize: 16, color: "#fff",
          }}>{project.title}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", marginTop: 3 }}>{project.sub}</div>
        </div>
        <div className="live-badge">
          <Icon d={ICON_EXTERNAL} size={10} color="#fff" />
          View Live
        </div>
      </a>

      {/* Card body */}
      <div className="card-body">
        <p style={{
          fontSize: 13.5, color: "rgba(26,26,26,0.62)",
          lineHeight: 1.72, marginBottom: 18,
        }}>
          {project.description}
        </p>

        {/* Feature groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {project.featureGroups.map((group, gi) => (
            <div key={gi}>
              <div style={{
                fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(26,26,26,0.35)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: 6,
              }}>
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {group.features.map((f, fi) => (
                  <FeatureTag key={fi} label={f} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            marginTop: 20, padding: "10px 18px", borderRadius: 999,
            border: "1.5px solid rgba(255,120,0,0.4)",
            background: "rgba(255,100,0,0.06)",
            color: "#cc5500",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700, fontSize: 13,
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,100,0,0.14)";
            (e.currentTarget as HTMLElement).style.borderColor = "#ff7800";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,100,0,0.06)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,120,0,0.4)";
          }}
        >
          <Icon d={ICON_EXTERNAL} size={13} color="#cc5500" />
          Visit Website
        </a>
      </div>
    </div>
  );
}

// ─── Page Header ──────────────────────────────────────────────────────────────
function PageHeader() {
  return (
    <div style={{
      textAlign: "center",
      padding: "108px 24px 52px",
      maxWidth: 680, margin: "0 auto",
    }}>
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11,
        letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff7800", fontWeight: 700,
      }}>Our Work</span>
      <h1 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
        fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.12,
        color: "#1a1a1a", marginTop: 12, marginBottom: 16,
        letterSpacing: "-0.02em",
      }}>
        Real Websites.<br />Real Businesses.
      </h1>
      <p style={{
        fontSize: "clamp(15px, 2vw, 17px)",
        color: "rgba(26,26,26,0.55)", lineHeight: 1.75,
        maxWidth: 480, margin: "0 auto 32px",
      }}>
        Every website here was built for just{" "}
        <strong style={{ color: "#1a1a1a" }}>RM100</strong>. See what your business could look like.
      </p>
      <a
        href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        className="light-btn light-btn-orange"
        style={{ fontSize: 15, padding: "14px 30px" }}
      >
        <WhatsAppIcon size={18} color="#25D366" /> Build Mine for RM100
      </a>
    </div>
  );
}

// ─── Grid ────────────────────────────────────────────────────────────────────
function PortfolioGrid() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 28,
      }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────
function BottomCTA() {
  return (
    <section style={{
      padding: "72px 24px",
      background: "linear-gradient(135deg, #fff7f0 0%, #ffeedd 50%, #fff7f0 100%)",
      textAlign: "center",
    }}>
      <h2 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
        fontSize: "clamp(26px, 4vw, 42px)", color: "#1a1a1a",
        lineHeight: 1.15, marginBottom: 14,
      }}>
        Want One Just Like This?
      </h2>
      <p style={{
        fontSize: "clamp(14px, 2vw, 16px)", color: "rgba(26,26,26,0.6)",
        maxWidth: 380, margin: "0 auto 32px", lineHeight: 1.7,
      }}>
        Get your own professional website for just <strong style={{ color: "#1a1a1a" }}>RM100.</strong>
        {" "}No contracts, no hidden fees.
      </p>
      <a
        href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
        className="light-btn light-btn-orange"
        style={{ fontSize: 16, padding: "15px 34px" }}
      >
        <WhatsAppIcon size={20} color="#25D366" /> Chat on WhatsApp to Start
      </a>
      <p style={{ marginTop: 18, fontSize: 12, color: "rgba(26,26,26,0.35)", letterSpacing: "0.05em" }}>
        We typically reply within minutes ⚡
      </p>
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
export default function PortfolioPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Navbar />
      <main style={{ background: "#fafaf8", minHeight: "100vh" }}>
        <PageHeader />
        <PortfolioGrid />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
