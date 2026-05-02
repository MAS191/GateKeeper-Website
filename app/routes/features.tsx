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
    <div className="space-y-24 md:space-y-32">
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6 reveal">
          <span className="status-badge">
            <span className="status-badge__dot" />
            Features
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Six modules.
            <br />
            <span className="headline-gradient">One dashboard.</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            Each module has its own focused workflow and feeds telemetry into
            the command center.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {PLATFORM_CHIPS.map((p) => (
              <span
                key={p.name}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
              >
                <img src={p.src} alt="" className="h-4 w-4 object-contain" />
                {p.name}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal reveal-1 glass-panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(180_100%_50%)] shadow-[0_0_8px_hsl(180_100%_50%)]" />
              Command center
            </span>
            <span className="text-white/40">Preview</span>
          </div>
          <div className="bg-black/20">
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
        <div className="border-t border-white/10 pt-10 space-y-3 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(180_100%_50%)]">
            Modules
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            The six modules in detail.
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
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
                className="glass-panel p-7 md:p-8"
              >
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className={`space-y-5 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(180_100%_50%)]">
                        {module.kicker}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/60">
                        {module.scope}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                      {module.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                      {module.description}
                    </p>
                    <ul className="space-y-3 pt-1">
                      {module.points.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-white/70"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[hsl(180_100%_50%)] shadow-[0_0_6px_hsl(180_100%_50%)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`overflow-hidden rounded-xl border border-white/10 bg-black/20 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="border-b border-white/10 px-3 py-2 flex items-center justify-between text-[11px] text-white/50">
                      <span>{module.title}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(180_100%_50%)] shadow-[0_0_6px_hsl(180_100%_50%)]" />
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
        <div className="border-t border-white/10 pt-10 space-y-3 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(180_100%_50%)]">
            Platforms
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Coverage per platform.
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
            Each platform adapts policy for its environment while keeping a
            unified control surface.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          {platformColumns.map((p) => (
            <article key={p.title} className="glass-card p-7">
              <img
                src={`/${p.title.toLowerCase()}.png`}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {p.summary}
              </p>
              <ul className="mt-5 space-y-3">
                {p.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[hsl(180_100%_50%)] shadow-[0_0_6px_hsl(180_100%_50%)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="glass-panel p-8 md:p-12 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(0, 243, 255, 0.12), transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.10), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(180_100%_50%)]">
              Walkthrough
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Want a walkthrough?
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-md">
              Tell us about your environment and we can tailor the demo.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary self-start">
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
