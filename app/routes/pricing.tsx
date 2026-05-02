import type { Route } from "./+types/pricing";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper | Pricing" },
    {
      name: "description",
      content:
        "Flexible GateKeeper pricing for cross-platform security teams.",
    },
    { property: "og:title", content: "GateKeeper | Pricing" },
    { property: "og:description", content: "Flexible GateKeeper pricing for cross-platform security teams." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

const plans = [
  {
    name: "Launch",
    price: "$29",
    note: "per endpoint / month",
    description: "For teams rolling out AppGate, NetGate, and WebGate.",
    highlights: [
      "Up to 200 endpoints",
      "Core modules + dashboard",
      "Email + async onboarding",
    ],
  },
  {
    name: "Scale",
    price: "$59",
    note: "per endpoint / month",
    description: "Best for growing fleets with AI-assisted workflows.",
    highlights: [
      "Up to 2,000 endpoints",
      "AI assistant for policy changes",
      "Priority support + NetWatch",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "annual agreement",
    description: "For regulated teams with custom compliance needs.",
    highlights: [
      "Unlimited endpoints",
      "Dedicated success team",
      "Advanced modules roadmap alignment",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <section className="space-y-6 fade-up">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 mb-2">
            Pricing
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white">
            Simple, Predictable
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Security Pricing
            </span>
          </h1>
        </div>
        <p className="max-w-2xl text-base text-white/70">
          Choose a plan that matches the size of your fleet. Upgrade anytime as your coverage grows across Windows, Linux, and Android.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`fade-up delay-${index + 1} group relative overflow-hidden rounded-3xl ${
              index === 1
                ? "lg:scale-105 ring-2 ring-emerald-300/50 shadow-2xl shadow-emerald-400/20"
                : ""
            }`}
          >
            {/* Gradient background for featured plan */}
            {index === 1 && (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent pointer-events-none" />
            )}
            
            <div className={`glass-card rounded-3xl p-8 h-full flex flex-col ${index === 1 ? "ring-0" : ""}`}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold text-white">
                  {plan.name}
                </h2>
                {index === 1 && (
                  <span className="rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-lg">
                    ⭐ Popular
                  </span>
                )}
              </div>
              
              <p className="text-sm text-white/60 mb-6">{plan.description}</p>
              
              {/* Price */}
              <div className="mb-8">
                <div className="text-4xl font-bold text-white">
                  {plan.price}
                  <span className="text-lg font-medium text-white/60 ml-2 block mt-1">
                    {plan.note}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3.5 mb-8 flex-grow">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 group/item">
                    <span className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 group-hover/item:scale-150 transition" />
                    <span className="text-sm text-white/75">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/contact"
                className={`inline-flex w-full items-center justify-center rounded-full font-semibold transition py-3.5 text-sm ${
                  index === 1
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 shadow-lg hover:shadow-emerald-400/50 hover:shadow-2xl hover:-translate-y-1"
                    : "border border-white/20 text-white hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
                }`}
              >
                Get started with {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="glass-panel rounded-3xl p-8 fade-up delay-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Need something custom?
            </h2>
            <p className="text-sm text-white/70 mb-6">
              We can align pricing with existing Microsoft and security tooling. Our team will work with you to create a plan that fits your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400/20"
            >
              Talk to our sales team →
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-white/20 hover:bg-white/10 transition">
              <h3 className="font-semibold text-white mb-1">Volume discounts?</h3>
              <p className="text-sm text-white/60">Yes, available for deployments over 10,000 endpoints.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-white/20 hover:bg-white/10 transition">
              <h3 className="font-semibold text-white mb-1">Annual billing?</h3>
              <p className="text-sm text-white/60">Get 15% off when you pay annually on any plan.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
