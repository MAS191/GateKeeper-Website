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
    <div className="space-y-24 md:space-y-32">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7">
          <div className="reveal">
            <span className="status-badge">
              <span className="status-badge__dot" />
              Cross-platform
            </span>
          </div>

          <h1 className="reveal reveal-1 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Unified security
            <br />
            <span className="headline-gradient">across your platforms.</span>
          </h1>

          <p className="reveal reveal-2 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            GateKeeper provides endpoint, network, and DNS protection with a
            unified command center for Windows, Linux, and Android.
          </p>

          <div className="reveal reveal-3 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn btn-primary">
              Book a demo
              <span aria-hidden>→</span>
            </Link>
            <Link to="/features" className="btn btn-ghost">
              Explore modules
            </Link>
          </div>

          <div className="reveal reveal-4 pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
              Ships on
            </span>
            {PLATFORMS.map((p) => (
              <span key={p.name} className="flex items-center gap-2">
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
        <div className="reveal reveal-2 glass-panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
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
      </section>

      {/* ── CORE MODULES ─────────────────────────────────── */}
      <section>
        <SectionHeader
          eyebrow="Core modules"
          heading="Three modules. One dashboard."
          desc="Deploy AppGate, NetGate, and WebGate independently. Each module has its own workflow and feeds the unified command center."
        />
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {MODULES.map((m) => (
            <article key={m.title} className="glass-card p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <img
                  src={m.iconSrc}
                  alt=""
                  className="module-icon h-5 w-5"
                />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {m.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                {m.scope}
              </p>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
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
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {COVERAGE.map((p) => (
            <article key={p.title} className="glass-card p-7">
              <img
                src={p.icon}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── AI + TELEMETRY ────────────────────────────────── */}
      <section>
        <SectionHeader
          eyebrow="Operations"
          heading="Policy and telemetry, in one workflow."
          desc="Adjust rules with the AI assistant on Windows and Linux, and track changes through the command center timeline."
        />
        <div className="grid gap-6 lg:grid-cols-2 mt-12">
          <article className="glass-panel p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              AI assistant
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Policy via chat,
              <br />
              <span className="text-white/60">with audit trails.</span>
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Use the assistant to draft and explain firewall changes.
              Approvals and execution stay in your team's hands.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Natural-language rule drafts",
                "Workflow automation hooks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-panel p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">
              Dashboard &amp; NetWatch
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Telemetry, incidents,
              <br />
              <span className="text-white/60">compliance.</span>
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Visibility, incident summaries, and compliance exports in one
              service for security operations.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Unified policy timeline",
                "Module health and uptime",
              ].map((label) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary shadow-[0_0_6px_var(--color-secondary)]" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>
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
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Architecture
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Microservice architecture.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-lg">
              Each module runs as an independent microservice, so new modules
              can be added without touching the rest of the stack.
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
    <div className="border-t border-white/10 pt-10 space-y-3 max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
        {heading}
      </h2>
      <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
        {desc}
      </p>
    </div>
  );
}
