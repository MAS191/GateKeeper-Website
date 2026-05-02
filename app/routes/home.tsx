import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper // Cross-platform security" },
    {
      name: "description",
      content:
        "GateKeeper provides endpoint, network, and DNS protection for Windows, Linux, and Android with a unified command center.",
    },
    {
      property: "og:title",
      content: "GateKeeper // Cross-platform security",
    },
    {
      property: "og:description",
      content:
        "Endpoint, network, and DNS protection for Windows, Linux, and Android.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

const PLATFORMS = [
  { name: "Windows", src: "/windows.png" },
  { name: "Linux", src: "/linux.png" },
  { name: "Android", src: "/android.png" },
];

const MODULES = [
  {
    title: "AppGate",
    scope: "Windows, Linux, Android",
    body: "Per-app and per-process enforcement. Allow, deny, or stage every executable with a clear audit trail.",
    iconSrc: "/app-gate.svg",
  },
  {
    title: "NetGate",
    scope: "Windows, Linux",
    body: "Human-readable network policy backed by ports, IP ranges, and threat-intel feeds.",
    iconSrc: "/net-gate.svg",
  },
  {
    title: "WebGate",
    scope: "Windows, Linux, Android",
    body: "DNS-layer protection across browsers and apps, with policy staging for new block lists.",
    iconSrc: "/web-gate.svg",
  },
];

const COVERAGE = [
  {
    title: "Windows",
    body: "Full stack — AppGate, NetGate, WebGate — plus Windows-only Sandbox isolation.",
    icon: "/windows.png",
  },
  {
    title: "Linux",
    body: "NetGate controls with AI-assisted policy and dashboard visibility for SRE teams.",
    icon: "/linux.png",
  },
  {
    title: "Android",
    body: "AppGate, WebGate, and hardware permission management for mobile fleets.",
    icon: "/android.png",
  },
];

export default function Home() {
  return (
    <div className="space-y-28 md:space-y-36">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-8 relative z-10">
            <div className="gk-reveal flex items-center gap-3">
              <span className="gk-status">
                <span>Cross-platform</span>
              </span>
            </div>

            <h1 className="gk-reveal gk-reveal-1 gk-display gk-display-xl text-[var(--gk-fg)]">
              Unified security
              <br />
              <span className="text-[var(--gk-fg-muted)]">
                across your platforms.
              </span>
            </h1>

            <p className="gk-reveal gk-reveal-2 max-w-xl text-base md:text-lg text-[var(--gk-fg-muted)] leading-relaxed">
              GateKeeper provides endpoint, network, and DNS protection with
              a unified command center for Windows, Linux, and Android.
            </p>

            <div className="gk-reveal gk-reveal-3 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="gk-btn gk-btn--primary">
                Book a demo
                <span aria-hidden>→</span>
              </Link>
              <Link to="/features" className="gk-btn gk-btn--ghost">
                Explore modules
              </Link>
            </div>

            <div className="gk-reveal gk-reveal-4 pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
              <span className="gk-eyebrow">Ships on</span>
              {PLATFORMS.map((p) => (
                <span
                  key={p.name}
                  className="flex items-center gap-2 font-mono text-xs text-[var(--gk-fg-muted)]"
                >
                  <img
                    src={p.src}
                    alt=""
                    className="h-4 w-4 object-contain opacity-80"
                  />
                  {p.name}
                </span>
              ))}
            </div>
          </div>

          {/* Hero side panel — command center preview */}
          <div className="gk-reveal gk-reveal-2 gk-surface relative">
            <div className="flex items-center justify-between border-b border-[var(--gk-border)] px-4 py-2.5 font-mono text-[11px] text-[var(--gk-fg-muted)] uppercase tracking-[0.12em]">
              <span className="flex items-center gap-2">
                <span className="text-[var(--gk-highlight)]">●</span>
                Command center
              </span>
              <span>Preview</span>
            </div>
            <div className="relative overflow-hidden bg-[var(--gk-bg)]">
              <img
                src="/screenshots/Dashboard-Dark.png"
                alt="GateKeeper command center dashboard in dark mode"
                className="screenshot-image screenshot-dark"
                loading="eager"
                width={1200}
                height={800}
              />
              <img
                src="/screenshots/Dashboard-Light.png"
                alt="GateKeeper command center dashboard in light mode"
                className="screenshot-image screenshot-light"
                loading="eager"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE MODULES ──────────────────────────────────── */}
      <section>
        <SectionHeader
          eyebrow="Core modules"
          heading="Three modules. One dashboard."
          desc="Deploy AppGate, NetGate, and WebGate independently. Each module has its own workflow and feeds the unified command center."
        />
        <div className="grid gap-px bg-[var(--gk-border)] md:grid-cols-3 mt-12 border border-[var(--gk-border)]">
          {MODULES.map((m) => (
            <article key={m.title} className="gk-card p-6 md:p-8 group">
              <div className="mb-6 flex h-11 w-11 items-center justify-center border border-[var(--gk-border-strong)] bg-[var(--gk-bg)]">
                <img
                  src={m.iconSrc}
                  alt=""
                  className="gk-module-icon h-5 w-5"
                />
              </div>
              <h3 className="font-mono text-2xl font-bold tracking-tight text-[var(--gk-fg)]">
                {m.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.12em] text-[var(--gk-highlight)]">
                {m.scope}
              </p>
              <p className="mt-4 text-sm text-[var(--gk-fg-muted)] leading-relaxed">
                {m.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── PLATFORM COVERAGE ─────────────────────────────── */}
      <section>
        <SectionHeader
          eyebrow="Platform coverage"
          heading="Consistent on Windows, Linux, and Android."
          desc="Policies and telemetry stay aligned across devices, while each platform retains controls tailored to its environment."
        />
        <div className="grid gap-px bg-[var(--gk-border)] md:grid-cols-3 mt-12 border border-[var(--gk-border)]">
          {COVERAGE.map((p) => (
            <article key={p.title} className="gk-card p-6 md:p-8">
              <img
                src={p.icon}
                alt=""
                className="h-6 w-6 object-contain"
              />
              <h3 className="mt-6 font-mono text-2xl font-bold text-[var(--gk-fg)]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--gk-fg-muted)] leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── AI + TELEMETRY  ───────────────────────────────── */}
      <section>
        <SectionHeader
          eyebrow="Operations"
          heading="Policy and telemetry, in one workflow."
          desc="Adjust rules with the AI assistant on Windows and Linux, and track changes through the command center timeline."
        />
        <div className="grid gap-6 lg:grid-cols-2 mt-12">
          <article className="gk-card p-7 md:p-8">
            <p className="gk-eyebrow gk-eyebrow--accent">AI assistant</p>
            <h3 className="mt-3 font-mono text-2xl md:text-3xl font-bold text-[var(--gk-fg)] leading-tight">
              Policy via chat,
              <br />
              <span className="text-[var(--gk-fg-muted)]">
                with audit trails.
              </span>
            </h3>
            <p className="mt-4 text-sm text-[var(--gk-fg-muted)] leading-relaxed">
              Use the assistant to draft and explain firewall changes. Approvals
              and execution stay in your team's hands.
            </p>
            <ul className="gk-list mt-6">
              {[
                "Natural-language rule drafts",
                "Workflow automation hooks",
              ].map((item) => (
                <li key={item} className="gk-list__item">
                  <span className="gk-list__bullet">[+]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="gk-card p-7 md:p-8">
            <p className="gk-eyebrow gk-eyebrow--accent">
              Dashboard &amp; NetWatch
            </p>
            <h3 className="mt-3 font-mono text-2xl md:text-3xl font-bold text-[var(--gk-fg)] leading-tight">
              Telemetry, incidents,
              <br />
              <span className="text-[var(--gk-fg-muted)]">compliance.</span>
            </h3>
            <p className="mt-4 text-sm text-[var(--gk-fg-muted)] leading-relaxed">
              Visibility, incident summaries, and compliance exports in one
              service for security operations.
            </p>
            <ul className="gk-list mt-6">
              {[
                "Unified policy timeline",
                "Module health and uptime",
              ].map((label) => (
                <li key={label} className="gk-list__item">
                  <span className="gk-list__bullet">[+]</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="gk-card gk-card--accent p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="gk-eyebrow gk-eyebrow--accent">Architecture</p>
            <h2 className="mt-3 gk-display gk-display-md text-[var(--gk-fg)]">
              Microservice architecture.
            </h2>
            <p className="mt-4 text-sm text-[var(--gk-fg-muted)] max-w-lg">
              Each module runs as an independent microservice, so new modules
              can be added without touching the rest of the stack.
            </p>
          </div>
          <Link to="/contact" className="gk-btn gk-btn--primary self-start">
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  heading,
  desc,
}: {
  eyebrow: string;
  heading: string;
  desc: string;
}) {
  return (
    <div className="border-t border-[var(--gk-border)] pt-8 space-y-3 max-w-3xl">
      <p className="gk-eyebrow gk-eyebrow--accent">{eyebrow}</p>
      <h2 className="gk-display gk-display-md text-[var(--gk-fg)] leading-[1.1]">
        {heading}
      </h2>
      <p className="text-sm md:text-base text-[var(--gk-fg-muted)] leading-relaxed max-w-2xl">
        {desc}
      </p>
    </div>
  );
}
