import realestate from "./assets/realestate.jpg";
import logo from "./assets/logo.png";

import React, { useState } from "react";


/** App.tsx — Colorful landing page (React + Tailwind v4) */

export default function App() {
  const brandName = "DFU-VA";
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<"home" | "features" | "pricing" | "contact">("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-fuchsia-50 to-amber-50 text-gray-900 flex flex-col">
     <header className="sticky top-0 z-40 border-b border-white/10
  bg-gradient-to-r from-slate-900 via-indigo-900 to-amber-700
  text-white backdrop-blur">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-3">
        {/* your logo + brand */}
        <img src={logo} alt="DFU-VA logo"
             className="h-14 w-16 rounded-lg object-contain bg-white/90 p-1 shadow-md" />
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
      <main className="flex-1 relative">
        {/* decorative blobs */}
        <div className="pointer-events-none select-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="pointer-events-none select-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

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
        {active === "pricing"  && <Pricing onContact={() => setActive("contact")} />}
        {active === "contact"  && <Contact />}
      </main>

      {/* Footer */}
      <footer className="mt-0 border-t border-white/10 bg-gradient-to-r from-slate-900 via-indigo-900 to-amber-800 text-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4 text-sm">
    {/* Logo + tagline */}
    <div>
      <div className="flex items-center gap-2">
        <img src={logo} alt="DFU-VA" className="h-8 w-8 rounded-lg bg-white/90 p-1 shadow-md" />
        <span className="font-semibold text-white">DFU-VA</span>
      </div>
      <p className="mt-3 text-amber-200/80">
        Empowering real-estate pros with reliable virtual assistance and lead generation.
      </p>
    </div>

    {/* Columns */}
    <FooterCol title="Product" links={["Features", "Pricing", "Changelog", "Roadmap"]} />
    <FooterCol title="Company" links={["About", "Blog", "Careers", "Contact"]} />
    <FooterCol title="Legal" links={["Privacy", "Terms", "Cookie Policy"]} />
  </div>

  <div className="text-center text-xs text-amber-100/70 py-6 border-t border-white/10">
    © {new Date().getFullYear()} <span className="text-white font-semibold">DFU-VA</span>. All rights reserved.
  </div>
</footer>

    </div>
  );
}

/* -------------------------- Sections -------------------------- */

function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative overflow-hidden">
      {/* Elegant navy-gold backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900 to-amber-700" />

      {/* soft golden glows */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy block */}
          <div>
            <p className="text-xs font-medium text-amber-900/90 bg-amber-100/90 inline-flex px-2.5 py-1 rounded-full">
              For Wholesalers, Flippers & Deal-Hunters
            </p>

            <h1
              className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-amber-300 via-yellow-100 to-white drop-shadow"
            >
              Never Run Out of Quality Seller Leads Again.
            </h1>

            <p className="mt-4 text-amber-50/95 text-lg max-w-2xl">
              Our trained real estate virtual assistants generate and qualify high-intent leads —
              so you close more deals with less effort.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Primary CTA with gold shimmer */}
              <a
                href="#contact"
                className="relative overflow-hidden rounded-xl px-5 py-3 text-sm font-medium text-slate-900
                           bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400 shadow-lg hover:opacity-95 transition"
              >
                <span className="relative z-10">Turn on My Lead-Flow</span>
                <span
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2
                             bg-white/30 blur-sm skew-x-12
                             animate-[sheen_1.8s_linear_infinite]"
                />
              </a>

              {/* Secondary CTA */}
              <button
                onClick={onGetStarted}
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium
                           text-white/90 hover:text-white hover:bg-white/20 transition"
              >
                See how it works →
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-amber-50/90">
              <div className="flex items-center gap-2"><Check /> Multi-channel outreach</div>
              <div className="flex items-center gap-2"><Check /> Daily lead flow</div>
            </div>
          </div>

          {/* Image block */}
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl border border-amber-300/40 bg-white/5 shadow-xl p-4 backdrop-blur-sm">
              <div className="h-full w-full rounded-xl overflow-hidden border border-white/40 shadow-lg">
                <img
                  src={realestate}
                  alt="Real estate marketing dashboard"
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
    <section className="relative overflow-hidden">
      {/* Thin gold gradient line on top */}
      <div className="absolute inset-x-0 top-0 h-2 bg-amber-400/20 blur-lg" />

      {/* Dark navy background */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-amber-200/20 bg-white/5 p-8 hover:border-amber-300/40 hover:shadow-[0_0_24px_rgba(255,200,100,0.15)] transition"
            >
              <div className="text-4xl font-extrabold text-white drop-shadow-sm">{s.v}</div>
              <div className="mt-2 text-amber-100/80 text-sm">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { title: "Top Talent Only", desc: "Rigorous screening, fluent callers, in-house academy, daily QC reviews.", icon: Spark },
    { title: "Cold Call + Text + Lead Mgmt", desc: "Dialing, follow-up, and CRM workflow to push deals across the line.", icon: A11y },
    { title: "Managed Data", desc: "Pulling, skip-tracing, scrubbing, split-testing — list health monitored hourly.", icon: Clean },
    { title: "Built-In QA", desc: "Every lead is reviewed, scored, and checked before it hits your CRM.", icon: Types },
    { title: "Culture of Excellence", desc: "Well-paid, trained agents = better calls and better leads.", icon: Responsive },
    { title: "Deploy-ready", desc: "Easy to host on Vercel/Netlify. Zero babysitting.", icon: Deploy },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Why DFU-VA Stands Out
          </h2>
          <p className="mt-3 text-amber-100/80">
            Our systems, training, and people are built for consistent performance and long-term growth.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-amber-200/20 bg-white/5 p-6 hover:shadow-[0_0_20px_rgba(255,200,100,0.15)] transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 grid place-items-center text-slate-900 shadow-inner">
                <it.icon />
              </div>
              <h3 className="mt-4 font-semibold text-white">{it.title}</h3>
              <p className="mt-1 text-sm text-amber-100/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: "STEP 1", t: "30-Min Pipeline Acceleration Call", d: "We review your market, buy box, and diagnose your current lead-flow." },
    { n: "STEP 2", t: "Custom Game Plan", d: "Scripts, lead criteria, multi-channel outreach tailored to you." },
    { n: "STEP 3", t: "Launch", d: "Callers, texters, and lead managers push qualified leads into your CRM." },
    { n: "STEP 4", t: "Daily Results + Optimization", d: "Weekly KPIs and continuous improvements compound performance." },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-900 text-white relative overflow-hidden">
      {/* subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,200,100,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-amber-300">How it works</h2>
        <p className="mt-2 text-center text-amber-100/80">Simple. Fast. No babysitting required.</p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-white/5 border border-white/10 p-8
                         hover:border-amber-300/40 hover:shadow-[0_0_24px_rgba(255,200,100,0.15)]
                         transition backdrop-blur-sm"
            >
              <div className="text-xs font-semibold text-amber-400 tracking-wider">{s.n}</div>
              <div className="mt-2 text-xl font-bold text-white">{s.t}</div>
              <p className="mt-2 text-sm text-amber-100/80 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Pricing({ onContact }: { onContact: () => void }) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Simple pricing</h2>
          <p className="mt-3 text-amber-100/80">Start free, upgrade when you grow.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Plan
            name="Starter"
            price="$0"
            features={["Basic pages", "Contact form", "Email support"]}
            cta="Get started"
            onClick={onContact}
          />
          <Plan
            accent
            name="Pro"
            price="$19"
            features={["All Starter", "Blog ready", "Custom domains", "Priority support"]}
            cta="Go Pro"
            onClick={onContact}
          />
          <Plan
            name="Business"
            price="$49"
            features={["All Pro", "Team accounts", "Analytics", "SLA support"]}
            cta="Talk to sales"
            onClick={onContact}
          />
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
    { q: "What kind of leads will I actually get?", a: "Motivated sellers. Real conversations. Every lead reviewed before your CRM." },
    { q: "Will you work inside my CRM?", a: "Yes — comping, negotiating, appointments, keeping your pipeline tight and active." },
    { q: "Can you customize scripts and criteria?", a: "Absolutely. We tailor scripts and qualification standards to your strategy." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-900">
      {/* subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,200,100,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-amber-300">FAQs</h2>

        <div className="mt-8 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border p-2 transition backdrop-blur-sm
                            ${isOpen
                              ? "border-amber-300/40 bg-white/10 shadow-[0_0_24px_rgba(255,200,100,0.15)]"
                              : "border-white/10 bg-white/5 hover:border-amber-300/30"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between rounded-xl px-4 py-4 text-left"
                >
                  <span className="font-semibold text-white">{f.q}</span>
                  <span
                    className={`ml-4 grid h-7 w-7 place-items-center rounded-full text-sm font-bold transition
                               ${isOpen ? "bg-amber-400/20 text-amber-300" : "bg-white/10 text-amber-200"}`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-amber-100/85 leading-relaxed">
                    {f.a}
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  function validate() {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (form.message.trim().length < 10) e.message = "Please write at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-900 text-white" id="contact">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-300/20 text-amber-300 ring-1 ring-amber-300/30">
            <Check />
          </div>
          <h2 className="mt-4 text-2xl font-bold">Thanks! We'll be in touch.</h2>
          <p className="mt-2 text-amber-100/80">Your message has been received.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-900 text-white" id="contact">
      {/* soft gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,200,100,0.12),transparent_60%)]"></div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-amber-300">Contact us</h2>
        <p className="mt-2 text-amber-100/80">Have questions? Send a message and we'll reply soon.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-amber-100/90">Name</label>
            <input
              className={
                `mt-1 w-full rounded-xl px-3 py-2 outline-none transition
                 bg-white/5 text-white placeholder:text-amber-100/50
                 ${errors.name
                   ? "border border-red-400/60 focus:ring-2 focus:ring-red-300/30"
                   : "border border-white/10 focus:ring-2 focus:ring-amber-300/30 focus:border-amber-300/50"}`
              }
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-amber-100/90">Email</label>
            <input
              className={
                `mt-1 w-full rounded-xl px-3 py-2 outline-none transition
                 bg-white/5 text-white placeholder:text-amber-100/50
                 ${errors.email
                   ? "border border-red-400/60 focus:ring-2 focus:ring-red-300/30"
                   : "border border-white/10 focus:ring-2 focus:ring-amber-300/30 focus:border-amber-300/50"}`
              }
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-amber-100/90">Message</label>
            <textarea
              className={
                `mt-1 w-full rounded-xl px-3 py-2 outline-none transition
                 bg-white/5 text-white placeholder:text-amber-100/50
                 ${errors.message
                   ? "border border-red-400/60 focus:ring-2 focus:ring-red-300/30"
                   : "border border-white/10 focus:ring-2 focus:ring-amber-300/30 focus:border-amber-300/50"}`
              }
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can we help?"
              rows={5}
            />
            {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message}</p>}
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="relative overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold
                       text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400
                       shadow-lg hover:opacity-95 transition-all duration-300"
          >
            <span className="relative z-10">Send message</span>
            <span
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2
                         bg-white/30 blur-sm skew-x-12
                         animate-[sheen_1.8s_linear_infinite]"
            />
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
