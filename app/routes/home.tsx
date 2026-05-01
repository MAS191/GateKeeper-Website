import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper | Cross-platform security" },
    {
      name: "description",
      content:
        "GateKeeper secures Windows, Linux, and Android with AppGate, NetGate, and WebGate plus an AI assistant and unified dashboard.",
    },
  ];
}

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6 fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Operations-grade security
          </span>
          <h1 className="font-display text-5xl leading-tight text-white md:text-6xl">
            GateKeeper
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Unified endpoint, network, and DNS protection for Windows, Linux,
            and Android teams.
          </p>
          <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            {[
              "Per-app controls with audit-ready workflows",
              "Threat intelligence mapped to network rules",
              "DNS protection that spans every browser",
              "Live telemetry and incident visibility",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Book a demo
            </Link>
            <Link
              to="/features"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Explore features
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
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
            <p className="text-sm font-semibold text-white">Command Center</p>
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
          <div className="mt-5 grid gap-4 text-xs text-white/60 sm:grid-cols-3">
            {[
              { label: "Module uptime", value: "99.98%" },
              { label: "Policies synced", value: "2.4s" },
              { label: "Active endpoints", value: "18k" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-sm font-semibold text-white">
                  {stat.value}
                </p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Core modules
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Precision controls, delivered as independent modules.
          </h2>
          <p className="max-w-2xl text-sm text-white/70">
            Deploy AppGate, NetGate, and WebGate when you are ready. Each module
            ships with its own workflow and feeds a unified command center.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "AppGate",
              body: "Per-app and process enforcement with instant allow or deny actions.",
              iconSrc: "/app-gate.svg",
            },
            {
              title: "NetGate",
              body: "Readable network policy mapped to ports, IPs, and intel feeds.",
              iconSrc: "/net-gate.svg",
            },
            {
              title: "WebGate",
              body: "DNS-layer protection with policy staging and safe browsing.",
              iconSrc: "/web-gate.svg",
            },
          ].map((card) => (
            <div key={card.title} className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={card.iconSrc}
                    alt={`${card.title} icon`}
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Platform coverage
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Consistent protection across Windows, Linux, and Android.
          </h2>
          <p className="max-w-2xl text-sm text-white/70">
            Keep policies and telemetry aligned across every device while each
            platform retains controls tailored to its environment.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Windows",
              body: "AppGate, NetGate, and WebGate plus Windows-only Sandbox isolation.",
              icon: "/windows.png",
            },
            {
              title: "Linux",
              body: "NetGate controls with AI assistant and dashboard visibility.",
              icon: "/linux.png",
            },
            {
              title: "Android",
              body: "AppGate, WebGate, and hardware permission management.",
              icon: "/android.png",
            },
          ].map((card) => (
            <div key={card.title} className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={card.icon}
                    alt={`${card.title} logo`}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="glass-panel h-full rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-white">
            AI assistant for faster policy work.
          </h2>
          <p className="mt-3 text-sm text-white/70">
            The GateKeeper assistant on Windows and Linux lets teams adjust
            firewall rules, explain policy impact, and execute changes in
            seconds.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Chat-driven rule creation",
              "Human approvals with audit logs",
              "Suggested remediations",
              "Workflow automation cues",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel h-full rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-white">
            Dashboard + NetWatch reporting.
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Centralize telemetry, incident summaries, and compliance exports in
            a dedicated reporting service built for security teams.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            {[
              "Unified policy timeline",
              "Risk and usage analytics",
              "Export-ready audit packs",
              "Module health and uptime",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span>{item}</span>
                <span className="text-xs font-semibold text-emerald-200">
                  active
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Microservice by design
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Independent services that scale with your fleet.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/70">
              Deploy modules on your timeline. More specialized modules coming
              soon.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Request a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
