import type { Route } from "./+types/features";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper | Features" },
    {
      name: "description",
      content:
        "Explore GateKeeper modules for AppGate, NetGate, WebGate, AI assistance, and cross-platform controls.",
    },
    { property: "og:title", content: "GateKeeper | Features" },
    { property: "og:description", content: "Explore GateKeeper modules for AppGate, NetGate, WebGate, AI assistance, and cross-platform controls." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

const moduleShowcase = [
  {
    title: "Dashboard",
    kicker: "Command Center",
    scope: "All platforms",
    screenshotDark: "/screenshots/Dashboard-Dark.png",
    screenshotLight: "/screenshots/Dashboard-Light.png",
    description:
      "The command center unifies visibility across AppGate, NetGate, and WebGate with live telemetry, alerts, and health checks.",
    points: [
      "Real-time module health and incident status",
      "Unified policy timeline with export-ready views",
      "Live operational metrics across regions",
    ],
  },
  {
    title: "AppGate",
    kicker: "Application control",
    scope: "Windows, Linux, Android",
    screenshotDark: "/screenshots/AppGate-Dark.png",
    screenshotLight: "/screenshots/AppGate-Light.png",
    description:
      "AppGate gives security teams per-application enforcement so every executable receives a clear allow, deny, or review path.",
    points: [
      "Granular process controls with audit trails",
      "Signed-binary verification for trusted apps",
      "Immediate rollback for emergency access",
    ],
  },
  {
    title: "NetGate",
    kicker: "Network policy",
    scope: "Windows, Linux",
    screenshotDark: "/screenshots/NetGate-Dark.png",
    screenshotLight: "/screenshots/NetGate-Light.png",
    description:
      "NetGate makes network policy readable by humans while staying strict on ports, IP ranges, and protocol intent.",
    points: [
      "Threat intel feeds mapped to policy rules",
      "Inbound and outbound controls with tagging",
      "Prebuilt templates for regulated traffic",
    ],
  },
  {
    title: "WebGate",
    kicker: "DNS security",
    scope: "Windows, Linux, Android",
    screenshotDark: "/screenshots/WebGate-Dark.png",
    screenshotLight: "/screenshots/WebGate-Light.png",
    description:
      "WebGate blocks risky domains at the DNS layer, keeping every browser and app aligned with safe browsing policy.",
    points: [
      "DNS sinkhole and threat category filters",
      "Policy staging for new block lists",
      "Centralized exceptions with approvals",
    ],
  },
  {
    title: "AI Assistant",
    kicker: "Policy automation",
    scope: "Windows, Linux",
    screenshotDark: "/screenshots/AI Assistant-Dark.png",
    screenshotLight: "/screenshots/AI Assistant-Light.png",
    description:
      "The assistant translates requests into policy actions, explains impact, and keeps reviews aligned with compliance teams.",
    points: [
      "Natural language rule creation",
      "Impact previews before deployment",
      "Change summaries for audit review",
    ],
  },
  {
    title: "Sandbox",
    kicker: "Windows only",
    scope: "Windows",
    screenshotDark: "/screenshots/Sandbox-Dark.png",
    screenshotLight: "/screenshots/Sandbox-Light.png",
    description:
      "Run untrusted workloads inside Windows Sandbox with guardrails tied to your broader GateKeeper policy stack.",
    points: [
      "Isolated testing spaces for risky files",
      "Staged rollouts for high-impact changes",
      "Guarded access to sensitive resources",
    ],
  },
];

const platformColumns = [
  {
    title: "Windows",
    summary:
      "Endpoint hardening with the full GateKeeper stack and Windows-only Sandbox workflows.",
    highlights: [
      "AppGate, NetGate, and WebGate coverage",
      "Sandbox isolation for high-risk testing",
      "Dashboard visibility with AI assistance",
    ],
  },
  {
    title: "Linux",
    summary:
      "Built for server estates with fast policy rollout and AI-assisted changes.",
    highlights: [
      "NetGate controls for server clusters",
      "Assistant-driven policy changes",
      "Dashboard visibility for SRE teams",
    ],
  },
  {
    title: "Android",
    summary:
      "Mobile protection that keeps core modules and permissions aligned on the go.",
    highlights: [
      "WebGate safe browsing enforcement",
      "App-level access controls",
      "Hardware permission management",
    ],
  },
];

export default function Features() {
  return (
    <div className="space-y-20">
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6 fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Feature map
          </p>
          <h1 className="font-display text-3xl text-white md:text-4xl">
            Command Center clarity, backed by purpose-built modules.
          </h1>
          <p className="max-w-2xl text-base text-white/70">
            GateKeeper delivers precise controls for apps, networks, and DNS,
            then unifies them inside a single operations dashboard.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            {[
              { name: "Windows", src: "/windows.png" },
              { name: "Linux", src: "/linux.png" },
              { name: "Android", src: "/android.png" },
            ].map((platform) => (
              <span
                key={platform.name}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
              >
                <img
                  src={platform.src}
                  alt={`${platform.name} logo`}
                  className="h-4 w-4 object-contain"
                />
                {platform.name}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6 fade-up delay-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">
              Command Center preview
            </p>
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
              Live
            </span>
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <img
              src="/screenshots/Dashboard-Dark.png"
              alt="GateKeeper command center dashboard in dark mode"
              className="screenshot-image screenshot-dark"
            />
            <img
              src="/screenshots/Dashboard-Light.png"
              alt="GateKeeper command center dashboard in light mode"
              className="screenshot-image screenshot-light"
            />
          </div>
          <p className="mt-4 text-xs text-white/60">
            Real-time security operations with module health and telemetry.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Modules in depth
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Purpose-built modules, each with a dedicated workflow.
          </h2>
          <p className="max-w-2xl text-sm text-white/70">
            Every module ships with a focused UI, and the dashboard keeps
            telemetry and policy status aligned across the stack.
          </p>
        </div>
        <div className="space-y-6">
          {moduleShowcase.map((module, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div key={module.title} className="glass-panel rounded-3xl p-8">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div className={`space-y-4 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                        {module.kicker}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                        {module.scope}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {module.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {module.description}
                    </p>
                    <ul className="space-y-3 text-sm text-white/70">
                      {module.points.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`overflow-hidden rounded-2xl border border-white/10 bg-black/40 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <img
                      src={module.screenshotDark}
                      alt={`${module.title} screenshot in dark mode`}
                      className="screenshot-image screenshot-dark"
                      loading="lazy"
                      width={1200}
                      height={800}
                    />
                    <img
                      src={module.screenshotLight}
                      alt={`${module.title} screenshot in light mode`}
                      className="screenshot-image screenshot-light"
                      loading="lazy"
                      width={1200}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-6 py-12 md:py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Platform coverage
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Platform-specific rollout plans, built from the same core modules.
          </h2>
          <p className="max-w-2xl text-sm text-white/70">
            Each platform column highlights how GateKeeper adapts policies for
            its environment while keeping a unified control surface.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            More modules coming soon
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {platformColumns.map((platform) => (
            <div key={platform.title} className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={`/${platform.title.toLowerCase()}.png`}
                    alt={`${platform.title} logo`}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {platform.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-white/70">
                {platform.summary}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {platform.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel flex flex-col items-start justify-between gap-4 rounded-3xl p-8 text-white md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">See GateKeeper in action.</h2>
          <p className="mt-2 text-sm text-white/70">
            Share your environment and we will tailor a rollout plan.
          </p>
        </div>
        <Link
          to="/contact"
          className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
        >
          Book a walkthrough
        </Link>
      </section>
    </div>
  );
}
