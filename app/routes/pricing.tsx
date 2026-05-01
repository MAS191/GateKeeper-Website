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
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
          Pricing
        </p>
        <h1 className="font-display text-3xl text-white md:text-4xl">
          Predictable pricing for modern security teams.
        </h1>
        <p className="max-w-2xl text-base text-white/70">
          Choose a plan that matches the size of your fleet. Upgrade anytime as
          your coverage grows across Windows, Linux, and Android.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`glass-card rounded-3xl p-7 ${
              index === 1
                ? "ring-1 ring-emerald-300/50"
                : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                {plan.name}
              </h2>
              {index === 1 && (
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-950">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">
              {plan.price}
              <span className="ml-2 text-sm font-medium text-white/60">
                {plan.note}
              </span>
            </p>
            <p className="mt-3 text-sm text-white/70">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {plan.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                index === 1
                  ? "bg-emerald-400 text-slate-950"
                  : "border border-white/20 text-white hover:border-white/40"
              }`}
            >
              Start with {plan.name}
            </Link>
          </div>
        ))}
      </section>

      <section className="glass-panel rounded-3xl p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Need a custom rollout plan?
            </h2>
            <p className="mt-2 text-sm text-white/70">
              We can align pricing with existing Microsoft and security tooling.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Talk to sales
          </Link>
        </div>
      </section>
    </div>
  );
}
