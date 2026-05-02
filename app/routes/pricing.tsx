// NOTE: route disabled in app/routes.ts. To re-enable, uncomment the route entry
// there and replace this Route shim with: import type { Route } from "./+types/pricing";
import { Link } from "react-router";

namespace Route {
  export type MetaArgs = Record<string, never>;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper // Pricing" },
    {
      name: "description",
      content:
        "Flexible GateKeeper pricing for cross-platform security teams.",
    },
    { property: "og:title", content: "GateKeeper // Pricing" },
    {
      property: "og:description",
      content: "Flexible GateKeeper pricing for cross-platform security teams.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

const plans = [
  {
    code: "01",
    name: "Launch",
    price: "$29",
    priceUnit: "/ ENDPOINT / MO",
    description: "For teams rolling out AppGate, NetGate, and WebGate.",
    highlights: [
      "Up to 200 endpoints",
      "Core modules + dashboard",
      "Email + async onboarding",
    ],
    featured: false,
  },
  {
    code: "02",
    name: "Scale",
    price: "$59",
    priceUnit: "/ ENDPOINT / MO",
    description: "For growing fleets running AI-assisted workflows.",
    highlights: [
      "Up to 2,000 endpoints",
      "AI assistant for policy changes",
      "Priority support + NetWatch",
    ],
    featured: true,
  },
  {
    code: "03",
    name: "Enterprise",
    price: "Custom",
    priceUnit: "ANNUAL AGREEMENT",
    description: "For regulated teams with custom compliance needs.",
    highlights: [
      "Unlimited endpoints",
      "Dedicated success team",
      "Roadmap alignment",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="space-y-28 md:space-y-32">
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="gk-reveal grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div className="space-y-6">
          <span className="gk-status">
            <span>PRICING</span>
          </span>
          <h1 className="gk-display gk-display-lg text-[var(--gk-fg)]">
            PREDICTABLE
            <br />
            <span className="text-[var(--gk-fg-muted)]">PER-ENDPOINT</span>
            <br />
            <span className="text-[var(--gk-accent)]">SECURITY.</span>
          </h1>
        </div>
        <p className="text-base text-[var(--gk-fg-muted)] leading-relaxed max-w-md md:pb-3">
          Pick the plan that matches your fleet size today. Upgrade as your
          coverage grows across Windows, Linux, and Android — no migration,
          no penalty.
        </p>
      </section>

      {/* ── PLANS ────────────────────────────────────────── */}
      <section className="grid gap-px bg-[var(--gk-border)] md:grid-cols-3 border border-[var(--gk-border)]">
        {plans.map((plan, idx) => {
          const featured = plan.featured;
          return (
            <article
              key={plan.name}
              className={`gk-reveal gk-reveal-${idx + 1} relative flex flex-col p-7 md:p-8 ${
                featured
                  ? "bg-[var(--gk-bg-elev)] border-y-2 md:border-x-2 md:border-y-0 border-[var(--gk-accent)] -my-px md:-mx-px"
                  : "bg-[var(--gk-bg)]"
              }`}
            >
              {featured && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 bg-[var(--gk-accent)] px-2 py-1 font-mono text-[10px] font-bold tracking-[0.12em] text-[var(--gk-accent-fg)]">
                  RECOMMENDED
                </span>
              )}

              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--gk-accent)]">
                  /PLAN_{plan.code}
                </span>
              </div>

              <h2 className="mt-4 gk-display gk-display-md text-[var(--gk-fg)]">
                {plan.name}
              </h2>

              <p className="mt-2 text-sm text-[var(--gk-fg-muted)]">
                {plan.description}
              </p>

              <hr className="gk-rule my-7" />

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-5xl font-bold tracking-tight text-[var(--gk-fg)]">
                    {plan.price}
                  </span>
                </div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--gk-fg-dim)]">
                  {plan.priceUnit}
                </p>
              </div>

              <ul className="gk-list mt-7 flex-1">
                {plan.highlights.map((item) => (
                  <li key={item} className="gk-list__item">
                    <span className="gk-list__bullet">[+]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`gk-btn ${
                  featured ? "gk-btn--primary" : "gk-btn--ghost"
                } mt-8 w-full`}
              >
                <span className="gk-bracket">{"[>]"}</span>
                Choose {plan.name}
              </Link>
            </article>
          );
        })}
      </section>

      {/* ── FAQ / CUSTOM ─────────────────────────────────── */}
      <section className="grid gap-10 lg:grid-cols-[1fr_1fr] border-t border-[var(--gk-border)] pt-12">
        <div className="space-y-5">
          <p className="gk-eyebrow gk-eyebrow--accent">{"// custom"}</p>
          <h2 className="gk-display gk-display-md text-[var(--gk-fg)]">
            Need something
            <br />
            <span className="text-[var(--gk-fg-muted)]">specific?</span>
          </h2>
          <p className="text-sm text-[var(--gk-fg-muted)] leading-relaxed max-w-md">
            We can align pricing with existing Microsoft and security tooling.
            Our team will tailor a plan to your environment and compliance
            posture.
          </p>
          <Link to="/contact" className="gk-btn gk-btn--ghost">
            <span className="gk-bracket">{"[>]"}</span>
            Talk to sales
          </Link>
        </div>

        <dl className="space-y-px bg-[var(--gk-border)] border border-[var(--gk-border)]">
          {[
            {
              q: "Volume discounts?",
              a: "Yes, available for deployments over 10,000 endpoints.",
            },
            {
              q: "Annual billing?",
              a: "15% off when you pay annually on any plan.",
            },
            {
              q: "Free pilot?",
              a: "30-day pilot on Launch and Scale plans, no card required.",
            },
            {
              q: "Migration support?",
              a: "Included on Scale and Enterprise. Engineering-led, not ticket-based.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="bg-[var(--gk-bg-elev)] px-5 py-4 transition-colors hover:bg-[var(--gk-surface)]"
            >
              <dt className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[var(--gk-accent)]">
                  Q.
                </span>
                <span className="font-semibold text-[var(--gk-fg)]">
                  {faq.q}
                </span>
              </dt>
              <dd className="mt-1.5 pl-6 text-sm text-[var(--gk-fg-muted)]">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
