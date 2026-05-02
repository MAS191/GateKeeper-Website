import type { Route } from "./+types/contact";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper // Contact" },
    {
      name: "description",
      content:
        "Get in touch with the GateKeeper team to plan your cross-platform security rollout.",
    },
    { property: "og:title", content: "GateKeeper // Contact" },
    {
      property: "og:description",
      content:
        "Get in touch with the GateKeeper team to plan your cross-platform security rollout.",
    },
  ];
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setResult(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const company = formData.get("company") as string;
      const endpointCount = formData.get("endpoint-count") as string;
      const message = formData.get("message") as string;

      const newErrors: Record<string, string> = {};
      if (!name?.trim()) newErrors.name = "Name is required";
      if (!email?.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        newErrors.email = "Invalid email format";
      if (!company?.trim()) newErrors.company = "Company is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }

      const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            company,
            endpointCount,
            message,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      setResult({ success: true });
      (e.target as HTMLFormElement).reset();
    } catch {
      setResult({ error: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 md:space-y-24">
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="reveal grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="space-y-6">
          <span className="status-badge">
            <span className="status-badge__dot" />
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Talk to us
            <br />
            <span className="headline-gradient">about a rollout.</span>
          </h1>
        </div>
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-md md:pb-3">
          Tell us about your Windows, Linux, and Android environment, and
          we'll get back to you with next steps.
        </p>
      </section>

      {/* ── MAIN GRID ────────────────────────────────────── */}
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Side info */}
        <aside className="space-y-6 reveal reveal-1">
          <div className="glass-card p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(180_100%_50%)] border-b border-white/10 pb-3 mb-4">
              Office hours
            </p>
            <dl className="space-y-3 text-sm">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-white/50">Days</dt>
                <dd className="font-medium">Mon — Fri</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-white/50">Hours</dt>
                <dd className="font-medium">09:00 — 18:00</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-white/50">Zone</dt>
                <dd className="font-medium">GMT+5</dd>
              </div>
            </dl>
          </div>

          <div className="glass-card p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(180_100%_50%)] border-b border-white/10 pb-3 mb-4">
              What to expect
            </p>
            <ol className="space-y-3 text-sm text-white/70">
              {[
                "We start with a short discovery call",
                "We follow up with notes and next steps",
                "From there we plan the pilot together",
              ].map((step, idx) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(180_100%_50%)]/15 text-xs font-semibold text-[hsl(180_100%_50%)]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Form */}
        <section className="glass-panel p-6 md:p-8 reveal reveal-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[hsl(180_100%_50%)] border-b border-white/10 pb-4 mb-6">
            Message
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Tell us about your fleet.
          </h2>
          <p className="mt-2 text-sm text-white/60">
            We'll get back to you.
          </p>

          {result?.error && (
            <div className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {result.error}
            </div>
          )}

          {result?.success && (
            <div className="mt-6 rounded-lg border border-[hsl(180_100%_50%)]/40 bg-[hsl(180_100%_50%)]/10 px-4 py-3 text-sm text-[hsl(180_100%_50%)]">
              Message received. We'll be in touch.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <Field id="name" label="Full name" required error={errors.name}>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className={`glass-input ${errors.name ? "!border-red-500/60" : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>

              <Field id="email" label="Work email" required error={errors.email}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  className={`glass-input ${errors.email ? "!border-red-500/60" : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>
            </div>

            <Field id="company" label="Company" required error={errors.company}>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Contoso"
                autoComplete="organization"
                className={`glass-input ${errors.company ? "!border-red-500/60" : ""}`}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
            </Field>

            <Field id="endpoint-count" label="Fleet size">
              <select
                id="endpoint-count"
                name="endpoint-count"
                className="glass-input"
              >
                <option>Below 250</option>
                <option>250 — 1,000</option>
                <option>1,000 — 5,000</option>
                <option>5,000+</option>
              </select>
            </Field>

            <Field id="message" label="Security priorities">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Goals, current tooling, compliance constraints…"
                className="glass-input resize-y min-h-[120px]"
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting || result?.success}
              className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Sending…</>
              ) : result?.success ? (
                <>Message sent</>
              ) : (
                <>
                  Send request
                  <span aria-hidden>→</span>
                </>
              )}
            </button>

            <p className="text-xs text-white/50 text-center">
              By submitting, you agree to be contacted about GateKeeper
              updates.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 text-sm font-medium text-white/80 mb-2"
      >
        <span>{label}</span>
        {required ? (
          <span className="text-xs text-[hsl(180_100%_50%)]">required</span>
        ) : (
          <span className="text-xs text-white/40">optional</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-xs text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
