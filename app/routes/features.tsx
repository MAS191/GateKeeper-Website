import type { Route } from "./+types/features";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper // Features" },
    {
      name: "description",
      content:
        "Explore GateKeeper modules for AppGate, NetGate, WebGate, AI assistance, and cross-platform controls.",
    },
    { property: "og:title", content: "GateKeeper // Features" },
    {
      property: "og:description",
      content:
        "Explore GateKeeper modules for AppGate, NetGate, WebGate, AI assistance, and cross-platform controls.",
    },
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
      "The command center unifies visibility across AppGate, NetGate, and WebGate with telemetry, alerts, and module health.",
    points: [
      "Module health and incident status",
      "Unified policy timeline with export-ready views",
      "Operational metrics across regions",
    ],
  },
  {
    title: "AppGate",
    kicker: "Application control",
    scope: "Windows, Linux, Android",
    screenshotDark: "/screenshots/AppGate-Dark.png",
    screenshotLight: "/screenshots/AppGate-Light.png",
    description:
      "Per-application enforcement so every executable receives a clear allow, deny, or review path — with the audit trail to back it.",
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
      "Network policy that's readable by humans yet strict on ports, IP ranges, and protocol intent.",
    points: [
      "Threat-intel feeds mapped to policy rules",
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
      "Block risky domains at the DNS layer — every browser, every app, aligned with your safe-browsing policy.",
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
      "Draft and explain firewall changes in plain language; keep reviews aligned with compliance.",
    points: [
      "Natural-language rule drafts",
      "Impact previews before deployment",
      "Change summaries for audit review",
    ],
  },
  {
    title: "Sandbox",
    kicker: "Windows isolation",
    scope: "Windows only",
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
      "WebGate safe-browsing enforcement",
      "App-level access controls",
      "Hardware permission management",
    ],
  },
];

const PLATFORM_CHIPS = [
  { name: "Windows", src: "/windows.png" },
  { name: "Linux", src: "/linux.png" },
  { name: "Android", src: "/android.png" },
];

export default function Features() {
  return (
    <div className="space-y-28 md:space-y-36">
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-7 gk-reveal">
          <span className="gk-status">
            <span>Features</span>
          </span>
          <h1 className="gk-display gk-display-lg text-[var(--gk-fg)]">
            Six modules.
            <br />
            <span className="text-[var(--gk-fg-muted)]">
              One dashboard.
            </span>
          </h1>
          <p className="max-w-xl text-base text-[var(--gk-fg-muted)] leading-relaxed">
            Each module has its own focused workflow and feeds telemetry into
            the command center.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {PLATFORM_CHIPS.map((p) => (
              <span
                key={p.name}
                className="flex items-center gap-2 border border-[var(--gk-border)] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--gk-fg-muted)]"
              >
                <img src={p.src} alt="" className="h-4 w-4 object-contain" />
                {p.name}
              </span>
            ))}
          </div>
        </div>

        <div className="gk-surface gk-reveal gk-reveal-1">
          <div className="flex items-center justify-between border-b border-[var(--gk-border)] px-4 py-2.5 font-mono text-[11px] text-[var(--gk-fg-muted)] uppercase tracking-[0.12em]">
            <span className="flex items-center gap-2">
              <span className="text-[var(--gk-highlight)]">●</span>
              Command center
            </span>
            <span>Preview</span>
          </div>
          <div className="bg-[var(--gk-bg)]">
            <img
              src="/screenshots/Dashboard-Dark.png"
              alt="GateKeeper command center dashboard in dark mode"
              className="screenshot-image screenshot-dark"
              loading="eager"
            />
            <img
              src="/screenshots/Dashboard-Light.png"
              alt="GateKeeper command center dashboard in light mode"
              className="screenshot-image screenshot-light"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── MODULES IN DEPTH ──────────────────────────────── */}
      <section className="space-y-10">
        <div className="border-t border-[var(--gk-border)] pt-8 space-y-3 max-w-3xl">
          <p className="gk-eyebrow gk-eyebrow--accent">Modules</p>
          <h2 className="gk-display gk-display-md text-[var(--gk-fg)] leading-[1.1]">
            The six modules in detail.
          </h2>
          <p className="text-sm md:text-base text-[var(--gk-fg-muted)] leading-relaxed max-w-2xl">
            Each module has a focused UI; the dashboard keeps telemetry and
            policy state aligned.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {moduleShowcase.map((module, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={module.title}
                className="border-t border-[var(--gk-border)] pt-10"
              >
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div
                    className={`space-y-5 ${isReversed ? "lg:order-2" : ""}`}
                  >
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                      <span className="text-[var(--gk-highlight)]">
                        {module.kicker}
                      </span>
                      <span className="ml-auto text-[var(--gk-fg-muted)] border border-[var(--gk-border)] px-2 py-0.5 normal-case tracking-normal">
                        {module.scope}
                      </span>
                    </div>
                    <h3 className="gk-display gk-display-md text-[var(--gk-fg)]">
                      {module.title}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--gk-fg-muted)] leading-relaxed max-w-xl">
                      {module.description}
                    </p>
                    <ul className="gk-list pt-1">
                      {module.points.map((item) => (
                        <li key={item} className="gk-list__item">
                          <span className="gk-list__bullet">[+]</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`gk-surface ${isReversed ? "lg:order-1" : ""}`}
                  >
                    <div className="border-b border-[var(--gk-border)] px-3 py-2 font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--gk-fg-dim)] flex items-center justify-between">
                      <span>{module.title}</span>
                      <span className="text-[var(--gk-highlight)]">●</span>
                    </div>
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
              </article>
            );
          })}
        </div>
      </section>

      {/* ── PLATFORM ROLLOUTS ─────────────────────────────── */}
      <section>
        <div className="border-t border-[var(--gk-border)] pt-8 space-y-3 max-w-3xl">
          <p className="gk-eyebrow gk-eyebrow--accent">Platforms</p>
          <h2 className="gk-display gk-display-md text-[var(--gk-fg)] leading-[1.1]">
            Coverage per platform.
          </h2>
          <p className="text-sm md:text-base text-[var(--gk-fg-muted)] leading-relaxed max-w-2xl">
            Each platform adapts policy for its environment while keeping a
            unified control surface.
          </p>
        </div>

        <div className="grid gap-px bg-[var(--gk-border)] md:grid-cols-3 mt-10 border border-[var(--gk-border)]">
          {platformColumns.map((p) => (
            <article key={p.title} className="gk-card p-6 md:p-8">
              <img
                src={`/${p.title.toLowerCase()}.png`}
                alt=""
                className="h-6 w-6 object-contain"
              />
              <h3 className="mt-6 font-mono text-2xl font-bold text-[var(--gk-fg)]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--gk-fg-muted)] leading-relaxed">
                {p.summary}
              </p>
              <ul className="gk-list mt-5">
                {p.highlights.map((item) => (
                  <li key={item} className="gk-list__item">
                    <span className="gk-list__bullet">[+]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="gk-card gk-card--accent p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="gk-eyebrow gk-eyebrow--accent">
              {"// walkthrough"}
            </p>
            <h2 className="mt-3 gk-display gk-display-md text-[var(--gk-fg)]">
              Want a walkthrough?
            </h2>
            <p className="mt-3 text-sm text-[var(--gk-fg-muted)] max-w-md">
              Tell us about your environment and we can tailor the demo.
            </p>
          </div>
          <Link to="/contact" className="gk-btn gk-btn--primary self-start">
            <span className="gk-bracket">{"[>]"}</span>
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
