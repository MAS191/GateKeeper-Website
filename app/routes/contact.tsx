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
    <div className="space-y-20 md:space-y-28">
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="gk-reveal grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="space-y-6">
          <span className="gk-status">
            <span>Contact</span>
          </span>
          <h1 className="gk-display gk-display-lg text-[var(--gk-fg)]">
            Talk to us
            <br />
            <span className="text-[var(--gk-fg-muted)]">
              about a rollout.
            </span>
          </h1>
        </div>
        <p className="text-base text-[var(--gk-fg-muted)] leading-relaxed max-w-md md:pb-3">
          Tell us about your Windows, Linux, and Android environment, and we'll
          get back to you with next steps.
        </p>
      </section>

      {/* ── MAIN GRID ────────────────────────────────────── */}
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Side info */}
        <aside className="space-y-6 gk-reveal gk-reveal-1">
          <div className="gk-surface p-6">
            <p className="gk-eyebrow gk-eyebrow--accent border-b border-[var(--gk-border)] pb-3 mb-4">
              Office hours
            </p>
            <dl className="space-y-3 font-mono text-sm">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-[var(--gk-fg-dim)]">DAYS</dt>
                <dd className="text-[var(--gk-fg)]">Mon — Fri</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-[var(--gk-fg-dim)]">HOURS</dt>
                <dd className="text-[var(--gk-fg)]">09:00 — 18:00</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-[var(--gk-fg-dim)]">ZONE</dt>
                <dd className="text-[var(--gk-fg)]">GMT+5</dd>
              </div>
            </dl>
          </div>

          <div className="gk-surface p-6">
            <p className="gk-eyebrow gk-eyebrow--accent border-b border-[var(--gk-border)] pb-3 mb-4">
              What to expect
            </p>
            <ol className="space-y-3 text-sm text-[var(--gk-fg-muted)]">
              {[
                "We start with a short discovery call",
                "We follow up with notes and next steps",
                "From there we plan the pilot together",
              ].map((step, idx) => (
                <li key={step} className="flex gap-3">
                  <span className="font-mono text-xs text-[var(--gk-highlight)] pt-0.5 flex-shrink-0">
                    0{idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Form */}
        <section className="gk-surface p-6 md:p-8 gk-reveal gk-reveal-2">
          <p className="gk-eyebrow gk-eyebrow--accent border-b border-[var(--gk-border)] pb-4 mb-6">
            Message
          </p>

          <h2 className="gk-display gk-display-md text-[var(--gk-fg)]">
            Tell us about your fleet.
          </h2>
          <p className="mt-2 text-sm text-[var(--gk-fg-muted)]">
            We'll get back to you.
          </p>

          {result?.error && (
            <div className="mt-6 border border-[var(--gk-danger)] bg-[var(--gk-bg)] px-4 py-3 text-xs text-[var(--gk-danger)]">
              {result.error}
            </div>
          )}

          {result?.success && (
            <div className="mt-6 border border-[var(--gk-highlight)] bg-[var(--gk-highlight-soft)] px-4 py-3 text-xs text-[var(--gk-highlight)]">
              Message received. We'll be in touch.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                id="name"
                label="Full name"
                required
                error={errors.name}
              >
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className={`gk-input ${errors.name ? "gk-input--error" : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>

              <Field
                id="email"
                label="Work email"
                required
                error={errors.email}
              >
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  className={`gk-input ${errors.email ? "gk-input--error" : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>
            </div>

            <Field
              id="company"
              label="Company"
              required
              error={errors.company}
            >
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Contoso"
                autoComplete="organization"
                className={`gk-input ${errors.company ? "gk-input--error" : ""}`}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
            </Field>

            <Field id="endpoint-count" label="Fleet size">
              <select
                id="endpoint-count"
                name="endpoint-count"
                className="gk-select"
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
                className="gk-textarea"
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting || result?.success}
              className="gk-btn gk-btn--primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
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

            <p className="text-xs text-[var(--gk-fg-dim)] text-center">
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
        className="flex items-baseline justify-between gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--gk-fg-muted)] mb-2"
      >
        <span>{label}</span>
        {required ? (
          <span className="text-[var(--gk-highlight)]">required</span>
        ) : (
          <span className="text-[var(--gk-fg-dim)]">optional</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 font-mono text-xs text-[var(--gk-danger)]"
          role="alert"
        >
          {"// "}
          {error}
        </p>
      )}
    </div>
  );
}
