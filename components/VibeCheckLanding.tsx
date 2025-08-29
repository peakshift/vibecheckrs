'use client';

import React from "react";
import { motion } from "framer-motion";

const purp = "#A78BFA";
const sailor = "#0D1329";
const bg = sailor;
const panel = "#121C4B";
const ink = "#FFFFFF";
const sub = "#A5B4FC";

export default function VibeCheckLanding({ brand = "VIBE/CHECK" }) {
  return (
    <div
        className="min-h-screen antialiased"
        style={{ backgroundColor: bg, color: ink, fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue"' }}
      >
        <header style={{ 
          background: `linear-gradient(to bottom, ${bg} 0%, ${bg} 70%, transparent 100%)`,
          paddingBottom: '20px'
        }} className="sticky top-0 z-40">
          <div className="mx-auto max-w-3xl px-5 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: purp }} />
              <span style={{ fontFamily: '"SF Compact Display", Inter, system-ui', fontWeight: 900, letterSpacing: "-0.015em" }}>{brand}</span>
            </div>
            <nav className="hidden md:flex items-center gap-5 text-sm" style={{ color: sub }}>
              <a href="#audit" className="hover:text-white">Audit</a>
              <a href="#hotline" className="hover:text-white">Hotline</a>
              <a href="#dev" className="hover:text-white">Dev/Maintenance</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-5">
          <section className="pt-14 pb-10">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-[42px] leading-[1.05] md:text-[60px] md:leading-[1.03] whitespace-pre-line"
              style={{ fontFamily: '"SF Compact Display", Inter, system-ui', fontWeight: 1000, letterSpacing: "-0.02em", color: ink }}
            >
              {`Ship fast.\nNot a time bomb.`}
            </motion.h1>
            <p className="mt-3 text-lg md:text-xl" style={{ color: sub }}>
              Senior engineers audit your vibe‑coded app for security, scalability and data risks — then stay on call as your second brain.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {["read‑only", "no forms", "RAG sheet"].map((w) => (
                <span key={w} className="text-lg md:text-xl" style={{ color: purp, fontFamily: 'var(--font-shadows)' }}>{w}</span>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3" id="book">
              <a href="#audit" className="rounded-full px-6 py-3 font-semibold" style={{ backgroundColor: purp, color: sailor }}>Start Quick Audit</a>
              <a href="#hotline" className="rounded-full px-6 py-3 font-semibold" style={{ backgroundColor: panel, color: ink }}>See Hotline</a>
            </div>
          </section>

          <section id="audit" className="py-10">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: '"SF Compact Display", Inter, system-ui', fontWeight: 1000, letterSpacing: "-0.01em" }}>Quick Vibe Audit</h2>
            <p className="mt-3" style={{ color: sub }}>Fast, opinionated review across architecture, dependencies, auth/API surface, and scalability.</p>
            <div className="mt-4 grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <ul className="mt-3 space-y-2">
                  {["Architecture & data model","Dependency & version risk","Secrets exposure scan","Auth & API surface","Perf & scaling wins"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: purp }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-4">
                  <div className="text-3xl font-bold">$750</div>
                  <div className="text-sm" style={{ color: sub }}>5 business days · 10‑slide report</div>
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="#intake" className="rounded-full px-5 py-3 font-semibold" style={{ backgroundColor: purp, color: sailor }}>Book audit</a>
                  <a href="#sample" className="rounded-full px-5 py-3 font-semibold" style={{ backgroundColor: panel, color: ink }}>Sample report</a>
                </div>
              </div>
            </div>
          </section>

          <section id="hotline" className="py-10">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: '"SF Compact Display", Inter, system-ui', fontWeight: 1000 }}>Hotline Plans</h2>
            <p className="mt-2" style={{ color: sub }}>A dedicated Slack line to senior engineers for mentorship and guidance. Peace of mind, on call.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                { name: "Light Hotline", price: "$1,000/mo", features: ["Slack hotline · 24h SLA","Mentorship included","Architecture & code review"], cta: "Start Light" },
                { name: "Pro Hotline", price: "$2,000/mo", features: ["Slack hotline · same‑day","Priority queue","Mentorship + pairing"], cta: "Start Pro" },
              ].map((p) => (
                <div key={p.name} className="p-6 rounded-2xl" style={{ backgroundColor: panel }}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold" style={{ fontFamily: '"SF Compact Display", Inter, system-ui' }}>{p.name}</h3>
                    <div className="text-2xl font-bold">{p.price}</div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: purp }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#intake" className="mt-5 inline-block rounded-full px-5 py-3 font-semibold" style={{ backgroundColor: purp, color: sailor }}>{p.cta}</a>
                </div>
              ))}
            </div>
          </section>

          <section id="dev" className="py-10">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: '"SF Compact Display", Inter, system-ui', fontWeight: 1000 }}>Development & Maintenance</h2>
            <p className="mt-2" style={{ color: sub }}>Credits for fixes/features with PR‑based delivery. 1 credit = 1 senior hour.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { name: "Starter", price: "$2,000/mo", credits: "20 credits", bullets: ["Bug fixes","Minor features","Code reviews"], cta: "Start Starter" },
                { name: "Growth", price: "$4,000/mo", credits: "50 credits", bullets: ["Bug fixes","Medium features","Maintenance"], cta: "Start Growth" },
                { name: "Scale", price: "$6,000/mo", credits: "80 credits", bullets: ["Bug fixes","Larger features","Ongoing improvements"], cta: "Start Scale" },
              ].map((p) => (
                <div key={p.name} className="p-6 rounded-2xl" style={{ backgroundColor: panel }}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold" style={{ fontFamily: '"SF Compact Display", Inter, system-ui' }}>{p.name}</h3>
                    <span className="text-sm" style={{ color: sub }}>{p.credits}</span>
                  </div>
                  <div className="mt-1 text-2xl font-bold">{p.price}</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: purp }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#intake" className="mt-5 inline-block rounded-full px-5 py-3 font-semibold" style={{ backgroundColor: purp, color: sailor }}>{p.cta}</a>
                </div>
              ))}
            </div>
          </section>

          <section className="py-12 flex flex-col items-center text-center">
            <div className="max-w-2xl">
              <blockquote className="text-2xl md:text-3xl italic uppercase" style={{ fontFamily: '"SF Compact Display", Inter, system-ui', fontWeight: 1000 }}>
                "I KNOW HOW TO BUILD, I JUST DON'T HAVE TIME TO BABYSIT EVERY COMMIT. TELL ME WHERE THE LANDMINES ARE SO I CAN KEEP MOVING FAST."
              </blockquote>
              <div className="mt-6 flex items-center gap-3 justify-center">
                <img src="https://i.pravatar.cc/64" alt="Founder" className="h-16 w-16 rounded-full border-4 border-white" />
                <div className="text-lg font-bold">Alex</div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-10">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: '"SF Compact Display", Inter, system-ui', fontWeight: 1000 }}>FAQ</h2>
            <div className="mt-6 space-y-6">
              {[
                {q: "How fast can you deliver an audit?", a: "Most audits are delivered within 5 business days with a clear 10‑slide report."},
                {q: "What happens after the audit?", a: "You can either implement the fixes yourself or engage us on a Hotline or Dev/Maintenance plan."},
                {q: "Do unused credits roll over?", a: "No, credits reset each month to keep the pace steady like a subscription service."},
                {q: "Can I cancel anytime?", a: "Yes, all subscriptions are month‑to‑month with no long‑term lock‑in."}
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-700 pb-4">
                  <div className="font-semibold">{item.q}</div>
                  <p className="mt-2 text-sm" style={{ color: sub }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="relative" style={{ backgroundColor: sailor, color: ink }}>
          <div className="mx-auto max-w-3xl px-6 pt-16 text-center">
            <h2
              className="text-2xl md:text-4xl font-semibold tracking-tight"
              style={{
                fontFamily: '"SF Compact Display", Inter, system-ui',
                fontWeight: 1000,
                color: ink,
              }}
            >
              Ship with confidence knowing senior engineers have your back — <span className="font-black" style={{ color: ink }}>keeping you fast without the crash.</span>
            </h2>
            <div className="mt-8 inline-flex items-center justify-center">
              <a
                href="#book"
                className="flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium"
                style={{ backgroundColor: purp, color: sailor }}
              >
                <img src="https://i.pravatar.cc/40" alt="Founder" className="h-8 w-8 rounded-full" />
                <div className="flex flex-col items-start">
                  <span>Book a Call →</span>
                  <span className="text-xs" style={{ color: sub }}>Let's talk about your project</span>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible text-center">
            <div
              className="font-black tracking-tight select-none mx-auto"
              style={{
                fontFamily: '"SF Compact Display", Inter, system-ui',
                width: '80vw',
                lineHeight: 0.88,
                fontSize: 'clamp(72px, 12vw, 220px)',
                paddingInline: '0.02em',
                backgroundImage: `linear-gradient(180deg, #363779 0%, ${sailor} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                overflow: 'visible',
              }}
            >
              {brand}
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 pt-8 pb-8 flex items-center justify-between text-xs uppercase" style={{ color: sub }}>
            <div className="mx-auto flex items-center justify-between w-full max-w-3xl">
              <div>© {new Date().getFullYear()} {brand}. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}