import realestate from "./assets/realestate.jpg";
import deal from "./assets/deal.jpg";
import deal2 from "./assets/deal2.jpg";
import outdoor from "./assets/outdoor.jpg";
import reviewVideoFile from "./assets/review-video.mp4";

import call1 from "./assets/call1.mp3";
import call2 from "./assets/call2.wav";
import call3 from "./assets/call3.wav";
import call4 from "./assets/call4.mp3";

import React, { useState, useRef, useEffect } from "react";


/** App.tsx — DFU-VA Landing (Red & White, Calendly + Reviews) */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] =
    useState<"home" | "features" | "pricing" | "contact">("home");

  // --- CINEMATIC CURTAIN PRELOADER STATE ---
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  useEffect(() => {
    // Small timeout buffer for stable initial asset mounts before opening the curtain
    const timer = setTimeout(() => {
      setIsCurtainOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  function goTo(section: "home" | "features" | "pricing" | "contact") {
    setActive(section);
    // Prefer section top if present (for Book a Call etc.)
    const idMap: Record<typeof section, string> = {
      home: "home-top",
      features: "features",
      pricing: "pricing",
      contact: "contact",
    };
    const target = document.getElementById(idMap[section]);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goToBookCall() {
    // Make sure the Home layout (with BookCall) is shown
    setActive("home");

    // Wait for React to render, then scroll
    setTimeout(() => {
      const el = document.getElementById("book-call");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col relative">
      
      {/* --- MATCHING THEME CINEMATIC CURTAIN REVEAL OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-[9999] bg-gradient-to-br from-red-950 via-red-900 to-zinc-950 flex items-center justify-center pointer-events-none transition-transform duration-[1100ms] cubic-bezier(0.85, 0, 0.15, 1) ${
          isCurtainOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Subtle radial ambient background light glow */}
        <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        
        <div className="text-center relative z-10">
          <span className="text-white font-black uppercase tracking-widest text-4xl block animate-curtain-text drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">
            DFU-VA
          </span>
          {/* Elegant active loading accent strip */}
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto overflow-hidden relative">
            <div className="w-full h-full bg-white absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      </div>

      {/* Header */}
<header
  className="sticky top-0 z-40 border-b border-red-900/30
             bg-red-950/90 bg-gradient-to-r from-red-950/20 via-red-800/40 to-red-950/20
             text-white backdrop-blur-md transition-all duration-300"
>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <img
                src="/logo1.png"
                alt="DFU-VA"
                className="h-14 w-auto"
              />
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <NavItem
                label="Home"
                isActive={active === "home"}
                onClick={() => goTo("home")}
              />
              <NavItem
                label="Features"
                isActive={active === "features"}
                onClick={() => goTo("features")}
              />
              <NavItem
                label="Sales"
                isActive={active === "pricing"}
                onClick={() => goTo("pricing")}
              />
              <button
                onClick={goToBookCall}
                className="rounded-xl bg-white/15 px-3 py-1.5 text-sm font-semibold hover:bg-white/20 transition ring-1 ring-white/20"
              >
                Book a Call
              </button>

              <NavItem
                label="Contact"
                isActive={active === "contact"}
                onClick={() => goTo("contact")}
              />
            </nav>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-white/5">
            <div className="px-4 py-2 space-y-1">
              <MobileLink
                label="Home"
                onClick={() => {
                  goTo("home");
                  setMenuOpen(false);
                }}
              />
              <MobileLink
                label="Features"
                onClick={() => {
                  goTo("features");
                  setMenuOpen(false);
                }}
              />
              <MobileLink
                label="Sales"
                onClick={() => {
                  goTo("pricing");
                  setMenuOpen(false);
                }}
              />
              <MobileLink
                label="Book a Call"
                onClick={() => {
                  goToBookCall();
                  setMenuOpen(false);
                }}
              />

              <MobileLink
                label="Contact"
                onClick={() => {
                  goTo("contact");
                  setMenuOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 relative bg-white">
        {active === "home" && (
          <>
            <div id="home-top" />
            <Hero onGetStarted={() => setActive("features")} />
            <ScrollReveal>
              <StatsStrip />
            </ScrollReveal>

            <ScrollReveal>
        <LogoTicker />
      </ScrollReveal>

            <ScrollReveal>
              <Features />
            </ScrollReveal>
            
            <ScrollReveal>
              <Steps />
            </ScrollReveal>
            
            <ScrollReveal>
              <Pricing />
            </ScrollReveal>
            
            <ScrollReveal>
              <Reviews />
            </ScrollReveal>
            
            <ScrollReveal>
              <BookCall />
            </ScrollReveal>
            
            <ScrollReveal>
              <FAQ />
            </ScrollReveal>
          </>
        )}

        {active === "features" && <Features />}

        {active === "pricing" && <Pricing />}

        {active === "contact" && <Contact />}
      </main>

      {/* Footer */}
     {/* Footer */}
<footer className="bg-gradient-to-r from-red-950 via-red-900 to-red-800 text-red-50 border-t border-white/10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
    <div className="grid gap-6 md:grid-cols-[2fr,1fr,1fr,1fr] items-start">
      {/* Brand */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-red-300/50 bg-white/10 flex items-center justify-center p-0.5">
            <img
              src="/logo1.png"
              alt="DFU-VA"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="text-base font-semibold tracking-wide">
            DFU-VA
          </span>
        </div>
        <p className="text-[13px] text-red-100/85 leading-snug max-w-sm">
          Real estate virtual assistants who qualify, follow up, and fill
          your pipeline with motivated sellers.
        </p>
      </div>

      {/* Product */}
      <div>
        <h4 className="text-sm font-semibold text-red-200 uppercase tracking-wide mb-1.5">
          Product
        </h4>
        <ul className="space-y-0.5 text-[13px]">
          <li>
            <button
              onClick={() => setActive("features")}
              className="hover:text-white transition"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive("pricing")}
              className="hover:text-white transition"
            >
              Sales
            </button>
          </li>
          
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-sm font-semibold text-red-200 uppercase tracking-wide mb-1.5">
          Company
        </h4>
        <ul className="space-y-0.5 text-[13px]">
          <li>
            <button
              onClick={() => setActive("home")}
              className="hover:text-white transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive("contact")}
              className="hover:text-white transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

     
      {/* Social */}
<div>
  <h4 className="text-sm font-semibold text-red-200 uppercase tracking-wide mb-1.5">
    Social
  </h4>

  <div className="flex items-center gap-3 mt-2">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/15sRSHukbR/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="h-9 w-9 flex items-center justify-center rounded-full
                 border border-white/20 bg-white/10
                 hover:bg-white/20 transition"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/dfu.va?igsh=MXU4M3htZTh3aWhwag=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="h-9 w-9 flex items-center justify-center rounded-full
                 border border-white/20 bg-white/10
                 hover:bg-white/20 transition"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.8-8.7a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/dfu-va/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="h-9 w-9 flex items-center justify-center rounded-full
                 border border-white/20 bg-white/10
                 hover:bg-white/20 transition"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3Zm7 0h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2.1c4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8H10Z" />
      </svg>
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@dfuva?_r=1&_t=ZS-92IZqnx6TFB"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="h-9 w-9 flex items-center justify-center rounded-full
                 border border-white/20 bg-white/10
                 hover:bg-white/20 transition"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M21 8.5a6.5 6.5 0 0 1-4.5-1.8v8.3a6.5 6.5 0 1 1-6.5-6.5c.3 0 .7 0 1 .1v3.4a3.1 3.1 0 1 0 2.1 3V2h3.1A6.5 6.5 0 0 0 21 6.1Z" />
      </svg>
    </a>
  </div>
</div>

    </div>

    {/* Bottom bar */}
    <div className="mt-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-red-200/70">
      <span>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">DFU-VA</span>. All
        rights reserved.
      </span>
      <span>Real Estate Virtual Assistant Solutions</span>
    </div>
  </div>
</footer>

    </div>
  );
}

/* -------------------- Sections -------------------- */

function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  const images = [realestate, deal, deal2, outdoor];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950 via-red-900 to-red-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <p className="text-xs font-semibold text-red-100 border border-red-400/40 bg-white/5 px-3 py-1 rounded-full inline-flex">
              For Wholesalers, Flippers & Deal Hunters
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Never Run Out of Qualified Seller Leads.
            </h1>
            <p className="mt-4 text-red-50/95 text-lg max-w-2xl">
              DFU-VA plugs trained real estate virtual assistants into your
              pipeline so you talk only to serious sellers ready to move.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Turn on My Lead-Flow Button (With Premium Shimmer Effect) */}
              <a
                href="#contact"
                className="relative overflow-hidden rounded-xl px-6 py-3 text-sm font-bold bg-white text-red-700 shadow-lg hover:bg-red-50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-red-600/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Turn on My Lead-Flow
              </a>

              <button
                onClick={onGetStarted}
                className="rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                See how it works →
              </button>

              {/* Book a Call Button (With Premium Shimmer Effect) */}
              <a
                href="#book-call"
                className="relative overflow-hidden rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Book a Call
              </a>
            </div>
          </div>

          {/* Visual Container (With Premium Zoom Effect) */}
          <div className="relative group">
            <div className="aspect-video w-full rounded-2xl border border-red-300/40 bg-white/5 shadow-xl p-4 backdrop-blur-sm">
              <div className="h-full w-full rounded-xl overflow-hidden border border-white/40 shadow-lg relative">
                <img
                  src={images[currentImage]}
                  alt="Real estate visual"
                  // Added cinematic subtle scaling transition classes here
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden lg:block">
              <Badge label="+200 clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function StatsStrip() {
  const stats = [
    { 
      k: "Qualified Leads", 
      value: 10, 
      prefix: "", 
      suffix: "k+" 
    },
    { 
      k: "Average ROI", 
      value: 5, 
      prefix: "", 
      suffix: "x" 
    },
    { 
      k: "Revenue Generated", 
      value: 3, 
      prefix: "$", 
      suffix: "M+" 
    },
    { 
      k: "Retention Rate", 
      value: 94, 
      prefix: "", 
      suffix: "%" 
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.k}>
            <div className="text-3xl font-extrabold text-red-700">
              {s.prefix}
              <AnimatedCounter target={s.value} />
              {s.suffix}
            </div>
            <div className="text-sm text-gray-600 mt-1">{s.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Features() {
  const features = [
    {
      title: "Lead Qualification",
      desc: "VAs pre-screen every seller lead to ensure motivation, property details, and deal readiness before passing them to you.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: "CRM & Follow-up Management",
      desc: "We handle your CRM, update statuses, schedule callbacks, and maintain consistent follow-ups.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Cold Calling & Outreach",
      desc: "Your dedicated VA uses proven scripts to engage leads via phone, SMS, and email for maximum conversion.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      title: "Data & Reporting",
      desc: "Daily performance reports and lead summaries so you always know what’s working.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-zinc-50/80 via-[#FFF5F5]/40 to-white border-t border-red-100/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Modernized Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 shadow-sm">
            Core Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Why DFU-VA Works
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our real estate virtual assistants handle the heavy lifting — from
            lead generation to follow-ups — so you can focus strictly on closing deals.
          </p>
        </div>

        {/* 3D Interactive Tilt & Glow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((f) => (
            <div key={f.title} className="h-full">
              <GlowTiltCard>
                <div className="flex flex-col justify-between h-full p-2 min-h-[240px]">
                  <div>
                    {/* Premium Animated Icon Container */}
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-50 via-white to-red-100/80 flex items-center justify-center text-red-600 border border-red-200/60 shadow-sm mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-red-500/20 group-hover:shadow-lg">
                      {f.icon}
                    </div>
                    
                    <h3 className="text-lg font-extrabold text-gray-900 mb-2.5 tracking-tight transition-colors duration-300 group-hover:text-red-700">
                      {f.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </GlowTiltCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    {
      label: "Phase One",
      title: "Discovery Call",
      desc: "We understand your market, buy box, systems, and deal volume targets.",
    },
    {
      label: "Phase Two",
      title: "Custom DFU-VA Setup",
      desc: "We build scripts, lead criteria, and workflows tailored to your acquisitions process.",
    },
    {
      label: "Phase Three",
      title: "Launch & Integration",
      desc: "Your VA plugs into your CRM, starts outreach, and routes only qualified opportunities.",
    },
    {
      label: "Phase Four",
      title: "Optimize & Scale",
      desc: "We monitor performance, refine targeting, and scale your VA team as your pipeline grows.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white via-red-50/30 to-white border-y border-red-100/40 relative overflow-hidden">
      {/* Background Ambient Glow Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[350px] bg-gradient-to-r from-red-500/[0.03] via-transparent to-red-500/[0.03] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modernized Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 shadow-sm">
            Onboarding Timeline
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            How DFU-VA Works
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A clear, done-for-you process that turns cold data into qualified, motivated seller leads.
          </p>
        </div>

        {/* Timeline Grid Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch">
          
          {/* Connecting Vector Progress Track (Desktop Viewports Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-red-200/60 via-red-300 to-red-200/20 z-0 pointer-events-none" />

          {steps.map((step, index) => (
            <div
              key={step.label}
              className="group relative flex flex-col justify-between h-full rounded-3xl bg-zinc-50/40 hover:bg-white border border-gray-200/60 hover:border-red-200/80 px-6 py-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10"
            >
              <div>
                {/* Visual Header Row */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-900 to-red-700 text-white text-sm font-mono font-black shadow-md shadow-red-900/10 group-hover:scale-110 transition-transform duration-300">
                    0{index + 1}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50/80 border border-red-100 px-2.5 py-1 rounded-md">
                    {step.label}
                  </span>
                </div>

                {/* Typography Block */}
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight mb-3 transition-colors duration-300 group-hover:text-red-700">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Card Footer Structural Accent Anchor */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
function Pricing() {
  // Your main Calendly event link
  const calendlyUrl = "https://calendly.com/dave-dfu-va/30min";

  const plans = [
    {
      name: "Customer Service",
      subtitle: "Delivering exceptional support, 24/7.",
      tag: "Operations",
      features: [
        "Dedicated 24/7 agents to assist your customers with care and efficiency",
        "Quality team ensuring every interaction meets service excellence standards",
        "Auditing team regularly reviewing performance for accuracy and consistency",
        "24/7 support via phone, chat, or email",
      ],
    },
    {
      name: "Cold Calling",
      subtitle: "Driving conversations that convert.",
      tag: "Acquisitions",
      features: [
        "Dedicated VA focused on lead generation and sales conversion",
        "Quality assurance to maintain call consistency and professionalism",
        "Auditing team to track metrics and optimize performance",
        "Bi-weekly client success meetings to align on goals and strategy",
      ],
    },
    {
      name: "Data Generation",
      subtitle: "Providing the data that powers your deals.",
      tag: "Intelligence",
      features: [
        "Customized data pulled based on your buy box, markets, and budget",
        "Up-to-date, verified leads ready for outreach",
        "Skip tracing to efficiently locate decision-makers",
      ],
    },
    {
      name: "Property Management",
      subtitle: "Full-service STR management for maximum ROI.",
      tag: "Hospitality",
      features: [
        "Marketing optimization across top booking platforms",
        "Sales follow-up to convert inquiries into confirmed bookings",
        "Dynamic pricing to maximize occupancy and profit",
        "Guest communication handled end-to-end",
        "Maintenance & cleaner dispatching with performance tracking",
      ],
    },
    {
      name: "SMS Marketing",
      subtitle: "Engage leads instantly. Drive measurable results.",
      tag: "Scale Outreach",
      features: [
        "Weekly KPI reports with detailed performance metrics and insights",
        "Full message coverage: every text is read and responded to promptly",
        "High delivery & response rates with continually optimized campaigns",
        "Targeted campaigns: right message, right audience, right time",
        "24/7 support for campaign updates, strategy adjustments, and new launches",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="pricing" className="py-24 bg-zinc-50 border-t border-red-100/40 relative overflow-hidden">
      {/* Structural Accent Geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Typography Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 shadow-sm">
            Service Tiers
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Book Your DFU-VA Strategy Call
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the specific service branch that matches your active deployment scale. Each configuration starts with a strategy session to map workflows precisely.
          </p>
        </div>

        {/* --- DUAL INTERACTIVE COMMAND ROW MODULE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          
          {/* LEFT COLUMN PANEL: Tab Trigger Engine */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2 mb-2">
              Select Operating Segment
            </p>
            {plans.map((plan, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? "bg-gradient-to-r from-red-950 to-red-900 text-white border-red-900 shadow-lg shadow-red-950/10 -translate-x-1"
                      : "bg-white text-gray-900 border-gray-200/60 hover:border-red-200 hover:bg-zinc-50/50"
                  }`}
                >
                  <div className="min-w-0 pr-4">
                    <h4 className={`text-base font-bold tracking-tight ${isSelected ? "text-white" : "text-gray-900"}`}>
                      {plan.name}
                    </h4>
                    <p className={`text-xs truncate mt-0.5 ${isSelected ? "text-red-200/70" : "text-gray-500"}`}>
                      {plan.subtitle}
                    </p>
                  </div>
                  <span className={`text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md flex-shrink-0 ${
                    isSelected ? "bg-white/10 text-red-200 border border-white/10" : "bg-zinc-100 text-gray-500"
                  }`}>
                    {plan.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN PANEL: Live Canvas Workspace Viewport */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden transition-all duration-300 min-h-[460px] flex flex-col justify-between group hover:border-red-200/60 hover:shadow-xl">
              
              {/* Inner Focus Details */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
                      Deployment Structure
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight mt-3">
                      {plans[activeTab].name}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-red-600 bg-red-50/50 px-3 py-1.5 rounded-xl border border-red-100/40">
                    {plans[activeTab].subtitle}
                  </p>
                </div>

                {/* Fully Expanded Un-Cropped Checklists */}
                <div className="mt-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Included Scope & Deliverables
                  </p>
                  <ul className="space-y-3.5">
                    {plans[activeTab].features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-600 animate-[fadeIn_0.4s_ease-out]">
                        <div className="h-5 w-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solitary High-Converting Executive Action Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => window.open(calendlyUrl, "_blank", "noopener,noreferrer")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-sm font-bold shadow-lg shadow-red-600/10 hover:shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Schedule Operational Strategy Session</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



/* -------------------- Reviews -------------------- */





/* ===== Calendly Inline (NEW) ===== */
function BookCall() {
  const calendlyUrl =
    "https://calendly.com/dave-dfu-va/30min?hide_event_type_details=1&hide_gdpr_banner=1";

  return (
    <section id="book-call" className="py-20 bg-white border-t border-red-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-red-700">
          Book Your Strategy Call
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Pick a time that works—no back-and-forth. This call helps us tailor DFU-VA to your
          markets, systems, and deal goals.
        </p>

        <div className="mt-10 rounded-2xl border border-red-100 overflow-hidden shadow-sm">
          {/* Responsive Calendly iframe */}
          <div className="relative" style={{ paddingTop: "0" }}>
            <iframe
              title="Calendly — DFU-VA"
              src={calendlyUrl}
              className="w-full"
              style={{ minHeight: 780, border: "0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What kind of leads will I actually get?",
      a: "We focus on motivated seller leads only. Your VA uses pre-set criteria and scripts to filter out unqualified time-wasters before they hit your pipeline.",
    },
    {
      q: "Do you work inside my existing CRM?",
      a: "Yes. We plug directly into your CRM or tech stack, keep records updated, tag opportunities, and ensure nothing slips through the cracks.",
    },
    {
      q: "How fast can we get started?",
      a: "Most clients are onboarded and live within 5–7 business days after the discovery call and setup approval.",
    },
    {
      q: "Can I scale up or down my VA team?",
      a: "Absolutely. You can upgrade, add more VAs, or adjust scope as your deal flow increases—without the hiring and training headaches.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-red-700">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Still thinking it through? Here are the answers investors and
          operators ask us before plugging into DFU-VA.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all bg-white ${
                  isOpen
                    ? "border-red-400 shadow-md"
                    : "border-red-100 hover:border-red-300 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 gap-3"
                >
                  <span
                    className={`text-sm font-semibold text-left transition-colors duration-300 ${
                      isOpen ? "text-red-700" : "text-gray-900"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-colors duration-300 ${
                      isOpen
                        ? "border-red-600 text-red-600"
                        : "border-red-200 text-red-500"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* THE UPGRADED GRID SLIDE ACCORDION CONTAINER */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Reviews() {
  const testimonials = [
    {
      name: "Alex Mercer",
      role: "Wholesaler & Acquisition Manager",
      location: "Dallas, TX",
      avatar: "AM",
      quote: "Before DFU-VA, I was spending 4 hours a day cold calling dead leads. Their cold calling VA lined up 3 highly motivated sellers in the first two weeks. One deal alone paid for the entire year of service.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "STR Property Investor",
      location: "Orlando, FL",
      avatar: "SJ",
      quote: "Managing guest inquiries and cleaner schedules for my 8 Airbnbs was burning me out. The Property Management team from DFU-VA stepped in seamlessly. Occupancy is up 12% and I finally got my weekends back.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Fix & Flip Operator",
      location: "Atlanta, GA",
      avatar: "MT",
      quote: "The skip tracing and SMS marketing campaigns they build are top-notch. They manage the entire pipeline directly inside our Podio CRM. Clean data, stellar compliance, and excellent daily reporting.",
      rating: 5
    }
  ];

  const audioCalls = [
    {
      title: "Outbound Wholesaling Lead",
      tag: "Cold Outreach",
      duration: "2:45",
      src: call1,
      desc: "VA uncovers a motivated seller with an inherited property looking for a cash offer."
    },
    {
      title: "Outbound Wholesaling Lead",
      tag: "Cold Outreach",
      duration: "3:12",
      src: call2,
      desc: "VA uncovers a motivated seller with an inherited property looking for a cash offer."
    },
    {
      title: "Outbound Wholesaling Lead",
      tag: "Cold Outreach",
      duration: "1:58",
      src: call3,
      desc: "VA uncovers a motivated seller with an inherited property looking for a cash offer."
    },
    {
      title: "Outbound Wholesaling Lead",
      tag: "Cold Outreach",
      duration: "2:15",
      src: call4,
      desc: "VA uncovers a motivated seller with an inherited property looking for a cash offer."
    }
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});

  const togglePlay = (index: number) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex]?.pause();
      }
      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section id="reviews" className="py-24 bg-zinc-50 border-t border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Proof of Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            The DFU-VA Proof Hub
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Explore live video case studies, unedited call recordings, and testimonials straight from scaling operations.
          </p>
        </div>

        {/* --- DYNAMIC BENTO GRID COMMAND CENTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 auto-rows-auto items-stretch">
          
          {/* BOX 1: Large Case Study Video Box */}
          <div className="lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-red-950 to-red-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-red-800 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-red-200 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Live Breakdown
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                How We Qualify & Route Your Real Estate Leads
              </h3>
              <p className="text-red-100/75 text-xs sm:text-sm leading-relaxed">
                Watch the exact operational workflow our trained virtual assistants run every single day to clean data and tee up motivated sellers.
              </p>
            </div>

            {/* Video Player Display */}
            <div className="relative w-full rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-1 pb-2 pl-1">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="overflow-hidden rounded-xl bg-gray-950 aspect-video relative">
                <video 
                  src={reviewVideoFile}
                  controls
                  playsInline
                  controlsList="nodownload"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* AUDIO CALL BOXES WITH GLOW-TILT INTELLIGENCE */}
          {audioCalls.map((call, i) => {
            const isCurrentPlaying = playingIndex === i;
            return (
              <div key={i} className="lg:col-span-2 h-full">
                <GlowTiltCard>
                  <div className="flex flex-col justify-between h-full min-h-[220px]">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`inline-flex items-center rounded-lg px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                          isCurrentPlaying ? "bg-red-600 text-white" : "bg-red-50 text-red-700"
                        }`}>
                          {call.tag}
                        </span>
                        <span className="text-xs font-mono text-gray-400">{call.duration}</span>
                      </div>
                      <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-red-700 transition-colors">
                        Call #{i + 1}: {call.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed mb-6">{call.desc}</p>
                    </div>

                    <audio 
                      ref={(el) => { audioRefs.current[i] = el; }} 
                      src={call.src}
                      onEnded={() => setPlayingIndex(null)}
                    />

                    {/* Custom Deck Controller */}
                    <div className="flex items-center gap-3 bg-zinc-50 rounded-2xl p-2.5 border border-zinc-100/80">
                      <button
                        type="button"
                        onClick={() => togglePlay(i)}
                        className={`h-9 w-9 flex-shrink-0 flex items-center justify-center rounded-full shadow transition-all ${
                          isCurrentPlaying 
                            ? "bg-red-600 text-white hover:bg-red-700 scale-95" 
                            : "bg-white text-gray-900 hover:text-red-600 border border-gray-100"
                        }`}
                      >
                        {isCurrentPlaying ? (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25zm7.5 0a.75.75 0 0 1 .75-.75H16.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 translate-x-0.5">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>

                      {/* Waveform graphic strips */}
                      <div className="flex-1 flex items-center gap-0.5 h-4 px-1">
                        {[...Array(16)].map((_, barIdx) => {
                          const randomHeight = Math.floor(Math.random() * 12) + 4;
                          return (
                            <div 
                              key={barIdx}
                              style={{ height: isCurrentPlaying ? `${randomHeight}px` : '3px' }}
                              className={`flex-1 rounded-full transition-all duration-300 ${
                                isCurrentPlaying ? "bg-red-500/80 odd:animate-pulse" : "bg-gray-300"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </GlowTiltCard>
              </div>
            );
          })}

          {/* BOX 6: Full Ribbon-Width Bottom Testimonials Slider Block */}
          <div className="lg:col-span-7 bg-white border border-gray-200/70 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              <h4 className="text-sm font-bold tracking-wider uppercase text-gray-400">Verified Partner Sentiment</h4>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="h-full">
                  <GlowTiltCard>
                    <div className="flex flex-col justify-between h-full min-h-[200px]">
                      <div>
                        <div className="flex items-center gap-0.5 text-amber-500 mb-3">
                          {[...Array(t.rating)].map((_, i) => (
                            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
                      </div>

                      <div className="flex items-center gap-2.5 pt-3 border-t border-gray-200/40">
                        <div className="h-8 w-8 rounded-full bg-red-600 text-white font-extrabold text-xs flex items-center justify-center shadow-sm flex-shrink-0">
                          {t.avatar}
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-xs font-bold text-gray-900 truncate">{t.name}</h5>
                          <p className="text-[10px] text-gray-400 truncate">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </GlowTiltCard>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
function Contact() {
  const whatsappUrl = "https://wa.me/12013655503?text=Hi%20Dave%2C%20I%27m%20interested%20in%20DFU-VA%20services%20for%20my%20real%20estate%20operation.%20Can%20we%20connect%3F";

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-red-600">
            Contact DFU-VA
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Ready to scale your pipeline? Connect with us directly via phone or WhatsApp Business to discuss your real estate operation.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* Option 1: Direct Phone Call */}
          <a
            href="tel:+12013655503"
            className="group flex flex-col items-center justify-center p-8 bg-white border border-red-100 rounded-3xl shadow-sm hover:border-red-400 hover:shadow-md transition-all duration-300 text-center"
          >
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.18 12 19.79 19.79 0 0 1 2 3.18 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">Call or Text Our Office</h3>
            <p className="mt-1 text-sm text-gray-500">Speak directly with our team</p>
            <span className="mt-4 text-base font-semibold text-red-600 group-hover:text-red-700 transition-colors">
              (201) 365-5503
            </span>
          </a>

          {/* Option 2: WhatsApp Business */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-white border border-red-100 rounded-3xl shadow-sm hover:border-green-400 hover:shadow-md transition-all duration-300 text-center"
          >
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.973 0c3.184.001 6.177 1.239 8.426 3.49 2.249 2.251 3.486 5.246 3.485 8.432-.003 6.616-5.34 11.962-11.918 11.962-2.006-.001-3.973-.509-5.717-1.478L0 24zm6.59-4.846c1.657.983 3.284 1.5 4.881 1.5 5.433 0 9.85-4.394 9.852-9.793.001-2.615-1.015-5.074-2.862-6.923C16.63 2.088 14.185 1.07 11.97 1.071c-5.435 0-9.85 4.393-9.853 9.793-.001 2.01.536 3.97 1.554 5.694l-1.02 3.723 3.816-1.001z"/>
                <path d="M15.982 12.912c-.29-.145-1.716-.848-1.982-.944-.266-.096-.46-.145-.654.145-.194.291-.75.944-.92 1.137-.169.194-.338.218-.628.073-.29-.145-1.224-.451-2.33-1.442-.862-.77-1.443-1.72-1.612-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.34.436-.51.145-.17.194-.291.29-.485.097-.194.049-.364-.025-.51-.073-.145-.654-1.576-.896-2.158-.236-.569-.475-.492-.654-.501-.169-.008-.363-.01-.557-.01-.194 0-.51.073-.776.364-.266.291-1.02 1.002-1.02 2.448 0 1.447 1.047 2.842 1.193 3.037.145.194 2.063 3.15 4.996 4.417.698.301 1.244.482 1.67.618.702.223 1.34.191 1.845.115.563-.085 1.717-.702 1.959-1.382.242-.68.242-1.262.17-1.382-.073-.12-.266-.218-.556-.363z"/>
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">WhatsApp Business</h3>
            <p className="mt-1 text-sm text-gray-500">Instant chat & deal discovery</p>
            <span className="mt-4 text-base font-semibold text-green-600 group-hover:text-green-700 transition-colors">
             Connect on WhatsApp
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

/* -------------------- UI bits -------------------- */

function NavItem({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition ${
        isActive
          ? "bg-white/15 text-white shadow ring-1 ring-white/20"
          : "text-white/80 hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
    </button>
  );
}

function MobileLink({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
    >
      {label}
    </button>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-1 shadow-sm">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-xs font-medium text-red-700">{label}</span>
    </div>
  );
}
function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it animates in, stop observing so it stays visible
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Triggers when 10% of the section is visible

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0 filter-none" 
          : "opacity-0 translate-y-12 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}


function AnimatedCounter({ target, duration = 3000 }: { target: number; duration?: number }) {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps calculation
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}
function GlowTiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate cursor position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation angles based on cursor offset from the center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 8; // Max 8 degrees tilt
    const rotateY = ((x - centerX) / centerX) * 8;

    setCoords({ x, y });
    
    // Apply styling parameters directly to the element variables
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    // Instantly or smoothly snap back to center state layout
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        }}
        className="w-full h-full relative rounded-2xl border border-red-100 bg-white p-6 transition-all duration-200 ease-out shadow-sm hover:shadow-xl preserve-3d overflow-hidden group"
      >
        {/* Dynamic Interactive Crimson Radial Border Light Layer */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(400px circle at var(--mx, 0px) var(--my, 0px), rgba(220, 38, 38, 0.08), transparent 80%)`,
          }}
        />

        {/* Bring actual nested content back to the forefront above background spotlights */}
        <div className="relative z-10 translate-z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function LogoTicker() {
  // A clean list of CRMs and real estate tech tools your VAs operate within
  const logos = [
    { name: "Podio", type: "CRM System" },
    { name: "Salesforce", type: "Enterprise Tech" },
    { name: "REI BlackBook", type: "Investor Tool" },
    { name: "Follow Up Boss", type: "Lead Routing" },
    { name: "HubSpot", type: "Automation" },
    { name: "Launch Control", type: "SMS Platform" },
  ];

  // We duplicate the array to ensure seamless, infinite loop bridging
  const tickerItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-8 bg-zinc-50 overflow-hidden relative border-b border-red-100/40">
      
      {/* Premium Glassmorphic Gradient Edge Masks */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3">
        <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
          Seamless Tech Stack Ecosystem Integration
        </p>
      </div>

      {/* The Flex Ticker track */}
      <div className="flex overflow-hidden width-full hover-pause select-none items-center py-2">
        <div className="flex gap-12 sm:gap-20 whitespace-nowrap animate-marquee items-center">
          {tickerItems.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 group transition-opacity duration-300"
            >
              {/* Sleek Abstract Placeholder Tech Icon */}
              <div className="h-7 w-7 rounded-lg bg-red-100 flex items-center justify-center text-red-700 font-black text-xs border border-red-200/50 group-hover:scale-105 transition-transform">
                {logo.name[0]}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-gray-800 tracking-tight group-hover:text-red-700 transition-colors">
                  {logo.name}
                </span>
                <span className="text-[9px] font-medium text-gray-400 -mt-0.5">
                  {logo.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}