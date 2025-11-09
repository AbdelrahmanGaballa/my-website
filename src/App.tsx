import realestate from "./assets/realestate.jpg";
import logo from "./assets/logo.svg";


import React, { useState } from "react";

/** App.tsx — Colorful landing page (React + Tailwind v4) */

export default function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<"home" | "features" | "pricing" | "contact">("home");

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
     <header className="sticky top-0 z-40 border-b border-red-100/40
  bg-gradient-to-r from-red-900 to-red-700
  text-white backdrop-blur">

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-3">
        {/* your logo + brand */}
        <img src={logo} alt="DFU-VA logo" className="h-12 w-auto" />

        <span className="font-bold text-xl tracking-tight text-white drop-shadow">DFU-VA</span>
      </div>

      {/* desktop nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <NavItem label="Home"     isActive={active === "home"}     onClick={() => setActive("home")} />
        <NavItem label="Features" isActive={active === "features"} onClick={() => setActive("features")} />
        <NavItem label="Pricing"  isActive={active === "pricing"}  onClick={() => setActive("pricing")} />
        <NavItem label="Contact"  isActive={active === "contact"}  onClick={() => setActive("contact")} />
      </nav>

      {/* mobile toggle */}
      <div className="md:hidden">
        <button
          className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* mobile panel */}
  {menuOpen && (
    <div className="md:hidden border-t border-white/10 bg-white/5">
      <div className="px-4 py-2 space-y-1">
        <MobileLink label="Home"     onClick={() => { setActive("home"); setMenuOpen(false); }} />
        <MobileLink label="Features" onClick={() => { setActive("features"); setMenuOpen(false); }} />
        <MobileLink label="Pricing"  onClick={() => { setActive("pricing"); setMenuOpen(false); }} />
        <MobileLink label="Contact"  onClick={() => { setActive("contact"); setMenuOpen(false); }} />
      </div>
    </div>
  )}
</header>


      {/* Main */}
      <main className="flex-1 relative bg-white">
  {active === "home" && (
    <>
      <div className="pointer-events-none select-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />
      <div className="pointer-events-none select-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-red-50/60 blur-3xl" />
    </>
  )}

  {active === "home" && (
    <>
      <Hero onGetStarted={() => setActive("features")} />
      <StatsStrip />
      <Features />
      <Steps />
      <Pricing onContact={() => setActive("contact")} />
      <FAQ />
    </>
  )}

  {active === "features" && <Features />}
  {active === "pricing" && <Pricing onContact={() => setActive("contact")} />}
  {active === "contact" && <Contact />}
</main>


      {/* Footer */}
      <footer className="mt-16 border-t border-red-100 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4 text-sm">
    {/* Brand */}
    <div>
      <div className="flex items-center gap-2">
        {/* If you use the SVG or PNG logo */}
        <img
          src={logo}
          alt="DFU-VA"
          className="h-8 w-8 rounded-lg bg-white border border-red-500 p-1"
        />
        <span className="font-semibold text-red-700 tracking-wide">
          DFU-VA
        </span>
      </div>
      <p className="mt-3 text-gray-600">
        Empowering real-estate investors with sharp, reliable virtual assistants
        and consistent lead generation.
      </p>
    </div>

    {/* Product */}
    <div>
      <h4 className="font-semibold text-red-700">Product</h4>
      <ul className="mt-3 space-y-2">
        <li><a href="#features" className="text-gray-600 hover:text-red-600">Features</a></li>
        <li><a href="#pricing" className="text-gray-600 hover:text-red-600">Pricing</a></li>
        <li><a href="#faq" className="text-gray-600 hover:text-red-600">FAQ</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold text-red-700">Company</h4>
      <ul className="mt-3 space-y-2">
        <li><a href="#home" className="text-gray-600 hover:text-red-600">About</a></li>
        <li><a href="#contact" className="text-gray-600 hover:text-red-600">Contact</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h4 className="font-semibold text-red-700">Legal</h4>
      <ul className="mt-3 space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-red-600">Privacy</a></li>
        <li><a href="#" className="text-gray-600 hover:text-red-600">Terms</a></li>
      </ul>
    </div>
  </div>

  <div className="border-t border-red-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex items-center justify-between">
      <span>© {new Date().getFullYear()} <span className="font-semibold text-red-700">DFU-VA</span>. All rights reserved.</span>
      <span className="text-gray-400">Real Estate Virtual Assistant Solutions</span>
    </div>
  </div>
</footer>


    </div>
  );
}

/* -------------------------- Sections -------------------------- */

function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative overflow-hidden">
      {/* Red backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-800 to-red-700" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-red-100 border border-red-400/40 bg-white/5 px-3 py-1 rounded-full inline-flex">
              For Wholesalers, Flippers & Deal Hunters
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Never Run Out of Qualified Seller Leads.
            </h1>

            <p className="mt-4 text-red-50/95 text-lg max-w-2xl">
              DFU-VA plugs trained real estate virtual assistants into your pipeline so you talk only to serious sellers ready to move.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-xl px-6 py-3 text-sm font-semibold
                           bg-white text-red-700 shadow-lg hover:bg-red-50 transition"
              >
                Turn on My Lead-Flow
              </a>

              <button
                onClick={onGetStarted}
                className="rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-medium
                           text-white hover:bg-white/10 transition"
              >
                See how it works →
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-red-100/90">
              <div className="flex items-center gap-2"><Check /> Multi-channel outreach</div>
              <div className="flex items-center gap-2"><Check /> Daily lead flow</div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl border border-red-300/40 bg-white/5 shadow-xl p-4 backdrop-blur-sm">
              <div className="h-full w-full rounded-xl overflow-hidden border border-white/40 shadow-lg">
                <img
                  src={realestate}
                  alt="Real estate lead dashboard"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
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
            <div className="text-3xl font-extrabold text-red-700">{s.v}</div>
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
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold">Why DFU-VA Works</h2>
        <p className="mt-3 text-red-100 max-w-2xl mx-auto">
          Our real estate virtual assistants handle the heavy lifting — from lead generation to follow-ups — so you can focus on closing deals.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white text-red-800 shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
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
    <section
      id="how-it-works"
      className="py-20 bg-red-50 border-y border-red-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-red-700">
          How DFU-VA Works
        </h2>
        <p className="mt-3 text-center text-gray-700 max-w-2xl mx-auto">
          A clear, done-for-you process that turns cold data into qualified, motivated seller leads.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className="relative flex flex-col h-full rounded-2xl bg-white border border-red-100 px-5 py-6
                         shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* step number */}
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
function Pricing({ onContact }: { onContact?: () => void }) {
  const plans = [
    {
      name: "Starter",
      price: "$499/mo",
      features: [
        "1 Dedicated VA",
        "Lead sourcing + qualification",
        "Daily progress reports",
        "Basic CRM updates",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$899/mo",
      features: [
        "2 Dedicated VAs",
        "Multi-channel outreach (SMS, email, calls)",
        "Pipeline management",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Scale",
      price: "$1,499/mo",
      features: [
        "Full VA team (up to 4 members)",
        "Custom lead targeting",
        "Advanced reporting dashboard",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-white text-gray-900 border-t border-red-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-red-700">
          Transparent Pricing for Real Results
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your workflow and scale up as your deals grow.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border ${
                plan.popular
                  ? "border-red-500 shadow-xl bg-red-50"
                  : "border-gray-200 bg-white"
              } p-8 text-left flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="text-sm font-semibold text-white bg-red-600 rounded-full px-3 py-1 inline-block mb-4">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-red-700">{plan.name}</h3>
                <p className="mt-2 text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-red-600 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onContact}
                className={`mt-8 w-full rounded-xl py-3 font-semibold transition
                  ${
                    plan.popular
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border border-red-600 text-red-600 hover:bg-red-50"
                  }`}
              >
                Talk to Our Team
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Plan({
  name,
  price,
  features,
  cta,
  onClick,
  accent,
}: {
  name: string;
  price: string;
  features: string[];
  cta: string;
  onClick: () => void;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 transition
        ${accent
          ? "bg-white/7.5 border border-amber-300/40 shadow-[0_0_30px_rgba(255,200,100,0.15)]"
          : "bg-white/5 border border-white/10 hover:border-amber-200/30"}`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <div className="text-3xl font-extrabold text-amber-300">{price}</div>
      </div>

      <ul className="mt-6 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-amber-100/80">
            <Check /> {f}
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className={`mt-8 w-full rounded-xl px-5 py-3 text-sm font-semibold transition
          ${accent
            ? "text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400 hover:opacity-95 shadow-lg"
            : "border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-slate-900"}`}
      >
        {cta}
      </button>
    </div>
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
    <section
      id="faq"
      className="py-20 bg-white"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-red-700">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Still thinking it through? Here are the answers investors and operators ask us before plugging into DFU-VA.
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
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs
                      ${
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
          Tell us about your operation and we’ll show you how DFU-VA can plug in.
        </p>

        {errors.submit && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 bg-white/90 backdrop-blur-sm rounded-3xl border border-red-100 px-6 sm:px-10 py-8 shadow-sm">
          <div>
            <label className="block text-sm font-semibold text-red-700">
              Full Name
            </label>
            <input
              className={`mt-1 w-full rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2
                ${
                  errors.name
                    ? "border-red-400 ring-red-100"
                    : "border-red-100 focus:border-red-400 focus:ring-red-100"
                }`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-red-700">
              Email
            </label>
            <input
              className={`mt-1 w-full rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2
                ${
                  errors.email
                    ? "border-red-400 ring-red-100"
                    : "border-red-100 focus:border-red-400 focus:ring-red-100"
                }`}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-red-700">
              Message
            </label>
            <textarea
              className={`mt-1 w-full rounded-xl border px-3 py-3 text-sm outline-none focus:ring-2 min-h-[140px]
                ${
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
            className="mt-4 w-full rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white
                       shadow-md hover:bg-red-700 transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}




/* -------------------------- UI bits -------------------------- */
function NavItem({ label, isActive, onClick }:{
  label: string; isActive?: boolean; onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition
        ${isActive
          ? "bg-white/15 text-white shadow ring-1 ring-white/20"
          : "text-white/80 hover:text-white hover:bg-white/10"}`}
    >
      {label}
    </button>
  );
}

function MobileLink({ label, onClick }:{ label:string; onClick?:()=>void }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
    >
      {label}
    </button>
  );
}


function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-amber-100/80 hover:text-amber-300 transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-3 py-1 shadow-sm">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span className="text-xs font-medium text-fuchsia-700">{label}</span>
    </div>
  );
}

/* -------------------------- Icons (inline SVG) -------------------------- */

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
function A11y() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M4 8h16M12 8v12M6 12l6 2 6-2" />
    </svg>
  );
}
function Clean() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
    </svg>
  );
}
function Types() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M9 6v12M15 6v12M4 18h16" />
    </svg>
  );
}
function Responsive() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="14" height="10" rx="2" />
      <rect x="18" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}
function Deploy() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 7-7 7-7-7 7-7z" />
      <path d="M5 19h14" />
    </svg>
  );
}
