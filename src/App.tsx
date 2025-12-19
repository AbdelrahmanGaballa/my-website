import realestate from "./assets/realestate.jpg";
import deal from "./assets/deal.jpg";
import deal2 from "./assets/deal2.jpg";
import outdoor from "./assets/outdoor.jpg";

import React, { useState } from "react";

/** App.tsx — DFU-VA Landing (Red & White, Calendly + Reviews) */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] =
    useState<"home" | "features" | "pricing" | "contact">("home");

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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header
        className="sticky top-0 z-40 border-b border-red-100/40
                   bg-gradient-to-r from-red-900 to-red-700
                   text-white backdrop-blur"
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
      <StatsStrip />
      <Features />
      <Steps />
      <Pricing />
     
      <BookCall />
      <FAQ />
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
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-800 to-red-700" />

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
              <a
                href="#contact"
                className="rounded-xl px-6 py-3 text-sm font-semibold bg-white text-red-700 shadow-lg hover:bg-red-50 transition"
              >
                Turn on My Lead-Flow
              </a>
              <button
                onClick={onGetStarted}
                className="rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                See how it works →
              </button>
              <a
                href="#book-call"
                className="rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl border border-red-300/40 bg-white/5 shadow-xl p-4 backdrop-blur-sm">
              <div className="h-full w-full rounded-xl overflow-hidden border border-white/40 shadow-lg">
                <img
                  src={images[currentImage]}
                  alt="Real estate visual"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
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
    { k: "Qualified Leads", v: "10k+" },
    { k: "Average ROI", v: "5x" },
    { k: "Revenue Generated", v: "$3M+" },
    { k: "Retention Rate", v: "94%" },
  ];

  return (
    <section className="py-10 bg-white border-y border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.k}>
            <div className="text-3xl font-extrabold text-red-700">
              {s.v}
            </div>
            <div className="text-sm text-gray-600">{s.k}</div>
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
      icon: "🎯",
    },
    {
      title: "CRM & Follow-up Management",
      desc: "We handle your CRM, update statuses, schedule callbacks, and maintain consistent follow-ups.",
      icon: "📋",
    },
    {
      title: "Cold Calling & Outreach",
      desc: "Your dedicated VA uses proven scripts to engage leads via phone, SMS, and email for maximum conversion.",
      icon: "📞",
    },
    {
      title: "Data & Reporting",
      desc: "Daily performance reports and lead summaries so you always know what’s working.",
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#FFF5F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-red-700">
          Why DFU-VA Works
        </h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          Our real estate virtual assistants handle the heavy lifting — from
          lead generation to follow-ups — so you can focus on closing deals.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white border border-red-50
                         shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                         px-6 py-8 text-left flex flex-col items-start
                         hover:border-red-200 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]
                         hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-red-600">{f.icon}</div>
              <h3 className="text-lg font-bold text-red-700">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {f.desc}
              </p>
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
      label: "Step 1",
      title: "Discovery Call",
      desc: "We understand your market, buy box, systems, and deal volume targets.",
    },
    {
      label: "Step 2",
      title: "Custom DFU-VA Setup",
      desc: "We build scripts, lead criteria, and workflows tailored to your acquisitions process.",
    },
    {
      label: "Step 3",
      title: "Launch & Integration",
      desc: "Your VA plugs into your CRM, starts outreach, and routes only qualified opportunities.",
    },
    {
      label: "Step 4",
      title: "Optimize & Scale",
      desc: "We monitor performance, refine targeting, and scale your VA team as your pipeline grows.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-red-50 border-y border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-red-700">
          How DFU-VA Works
        </h2>
        <p className="mt-3 text-center text-gray-700 max-w-2xl mx-auto">
          A clear, done-for-you process that turns cold data into qualified,
          motivated seller leads.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className="relative flex flex-col h-full rounded-2xl bg-white border border-red-100 px-5 py-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-red-600 uppercase tracking-wide">
                <span className="h-7 w-7 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                  {index + 1}
                </span>
                {step.label}
              </div>

              <h3 className="mt-3 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
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
      features: [
        "Customized data pulled based on your buy box, markets, and budget",
        "Up-to-date, verified leads ready for outreach",
        "Skip tracing to efficiently locate decision-makers",
      ],
    },
    {
      name: "Property Management",
      subtitle: "Full-service STR management for maximum ROI.",
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
      features: [
        "Weekly KPI reports with detailed performance metrics and insights",
        "Full message coverage: every text is read and responded to promptly",
        "High delivery & response rates with continually optimized campaigns",
        "Targeted campaigns: right message, right audience, right time",
        "24/7 support for campaign updates, strategy adjustments, and new launches",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 bg-white text-gray-900 border-t border-red-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-red-700">
            Book Your DFU-VA Strategy Call
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Choose the service that matches your operation. Each engagement
            starts with a strategy call to tailor DFU-VA support to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-red-100 bg-white shadow-sm p-5 
                         flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Top text block (fixed height for alignment) */}
              <div className="min-h-[110px]">
                <h3 className="text-lg font-bold text-red-700">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {plan.subtitle}
                </p>
              </div>

              {/* Scrollable features (shorter, hidden scrollbar) */}
              <ul
                className="mt-4 space-y-2 text-[13px] text-gray-700 overflow-y-auto pr-1 custom-scroll"
                style={{ height: "150px" }}
              >
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 mt-0.5 text-red-600 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button fixed to bottom, aligned across cards */}
              <div className="mt-5 pt-1 border-t border-red-50 flex-none">
                <button
                  onClick={() =>
                    window.open(calendlyUrl, "_blank", "noopener,noreferrer")
                  }
                  className="w-full rounded-xl bg-red-600 py-3 text-sm font-semibold
                             text-white hover:bg-red-700 transition-colors"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>
          ))}
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
                    className={`text-sm font-semibold text-left ${
                      isOpen ? "text-red-700" : "text-gray-900"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                      isOpen
                        ? "border-red-600 text-red-600"
                        : "border-red-200 text-red-500"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  function validate() {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (form.message.trim().length < 10)
      e.message = "Please write at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        source: "DFU-VA Website",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || `Submit failed with status ${res.status}`);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrors({
        submit:
          err?.message ||
          "Failed to submit. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="py-24" id="contact">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-700">
            <Check />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-red-600">
            Thanks! We’ll be in touch.
          </h2>
          <p className="mt-2 text-gray-600">
            Your message has been received.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="contact">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center text-red-600">
          Contact DFU-VA
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Tell us about your operation and we’ll show you how DFU-VA can plug
          in.
        </p>

        {errors.submit && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errors.submit}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 bg-white/90 backdrop-blur-sm rounded-3xl border border-red-100 px-6 sm:px-10 py-8 shadow-sm"
        >
          <div>
            <label className="block text-sm font-semibold text-red-700">
              Full Name
            </label>
            <input
              className={`mt-1 w-full rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-400 ring-red-100"
                  : "border-red-100 focus:border-red-400 focus:ring-red-100"
              }`}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-red-700">
              Email
            </label>
            <input
              className={`mt-1 w-full rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 ring-red-100"
                  : "border-red-100 focus:border-red-400 focus:ring-red-100"
              }`}
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-red-700">
              Message
            </label>
            <textarea
              className={`mt-1 w-full rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 min-h-[140px] ${
                errors.message
                  ? "border-red-400 ring-red-100"
                  : "border-red-100 focus:border-red-400 focus:ring-red-100"
              }`}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Briefly describe your markets, deal volume & what you need help with"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
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

function Check() {
  return (
    <svg
      viewBox="0 0 25 25"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
