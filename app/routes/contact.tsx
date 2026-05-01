import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper | Contact" },
    {
      name: "description",
      content:
        "Get in touch with the GateKeeper team to plan your cross-platform security rollout.",
    },
  ];
}

export default function Contact() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
          Contact
        </p>
        <h1 className="font-display text-3xl text-white md:text-4xl">
          Let us plan your GateKeeper rollout.
        </h1>
        <p className="max-w-xl text-base text-white/70">
          Share your Windows, Linux, and Android environment. We will respond
          with a tailored demo plan for AppGate, NetGate, and WebGate.
        </p>
        <div className="glass-card rounded-3xl p-6 text-sm text-white/70">
          <p className="font-semibold text-white">Office hours</p>
          <p className="mt-2">Monday - Friday</p>
          <p className="text-white">09:00 - 18:00 (GMT+5)</p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-emerald-300">
            Secure response within 24 hours
          </p>
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-8">
        <h2 className="text-lg font-semibold text-white">
          Tell us about your fleet
        </h2>
        <form className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-white/70">
              Full name
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                className="glass-input mt-2 w-full"
              />
            </label>
            <label className="text-sm text-white/70">
              Work email
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                className="glass-input mt-2 w-full"
              />
            </label>
          </div>
          <label className="text-sm text-white/70">
            Company
            <input
              type="text"
              name="company"
              placeholder="Contoso"
              className="glass-input mt-2 w-full"
            />
          </label>
          <label className="text-sm text-white/70">
            Endpoint count
            <select
              name="endpoint-count"
              className="glass-input mt-2 w-full"
            >
              <option>Below 250</option>
              <option>250 - 1,000</option>
              <option>1,000 - 5,000</option>
              <option>5,000+</option>
            </select>
          </label>
          <label className="text-sm text-white/70">
            Security priorities
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your Windows security goals."
              className="glass-input mt-2 w-full"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Send request
          </button>
          <p className="text-xs text-white/60">
            By submitting, you agree to be contacted about GateKeeper updates.
          </p>
        </form>
      </section>
    </div>
  );
}
