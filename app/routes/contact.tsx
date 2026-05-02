import type { Route } from "./+types/contact";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GateKeeper | Contact" },
    {
      name: "description",
      content:
        "Get in touch with the GateKeeper team to plan your cross-platform security rollout.",
    },
    { property: "og:title", content: "GateKeeper | Contact" },
    { property: "og:description", content: "Get in touch with the GateKeeper team to plan your cross-platform security rollout." },
  ];
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

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

      // Client-side validation
      const newErrors: Record<string, string> = {};
      if (!name?.trim()) newErrors.name = "Name is required";
      if (!email?.trim()) newErrors.email = "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";
      if (!company?.trim()) newErrors.company = "Company is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }

      // Submit to webhook or external service
      const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, company, endpointCount, message, timestamp: new Date().toISOString() }),
        });
      }

      setResult({ success: true });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setResult({ error: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="space-y-20">
      {/* Header */}
      <section className="fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 mb-3">
          Get in touch
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
          Plan Your
          <br />
          <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Security Rollout
          </span>
        </h1>
        <p className="max-w-2xl text-base text-white/70">
          Share your Windows, Linux, and Android environment. We'll respond with a tailored implementation plan including AppGate, NetGate, and WebGate deployment strategies.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Column - Info Cards */}
        <section className="space-y-6 fade-up delay-1">
          {/* Office Hours */}
          <div className="glass-card rounded-3xl p-6 hover:border-emerald-300/30">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-semibold text-white">Office Hours</p>
                <p className="text-xs text-white/50 mt-1">Contact us during our business hours</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/70 ml-10">
              <p><strong>Monday - Friday</strong></p>
              <p className="text-white">09:00 - 18:00 GMT+5</p>
            </div>
            <div className="mt-4 ml-10 flex items-center gap-2 text-xs text-emerald-300 font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Guaranteed response within 24 hours
            </div>
          </div>

          {/* Quick Info */}
          <div className="glass-card rounded-3xl p-6 hover:border-cyan-300/30">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-white">Quick Onboarding</p>
                <p className="text-xs text-white/50 mt-1">Fast deployment with dedicated support</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70 ml-10">
              <li className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span> Same-day demo scheduling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span> Pilot deployment in 7-10 days
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span> Full rollout support included
              </li>
            </ul>
          </div>
        </section>

        {/* Right Column - Form */}
        <section className="glass-panel rounded-3xl p-8 fade-up delay-2">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Tell us about your fleet
          </h2>
          <p className="text-sm text-white/60 mb-6">
            Help us understand your environment so we can create a personalized plan.
          </p>

          {result?.error && (
            <div className="mb-5 rounded-lg border border-red-400/50 bg-red-400/10 px-4 py-3 text-sm text-red-300 flex items-center gap-2">
              <span>⚠️</span>
              {result.error}
            </div>
          )}

          {result?.success && (
            <div className="mb-5 rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300 flex items-center gap-2">
              <span>✓</span>
              Thank you! We'll be in touch within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label htmlFor="name" className="text-sm text-white/70 font-medium">
                Full name *
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  className={`glass-input mt-2 w-full ${errors.name ? "ring-1 ring-red-400" : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1.5">
                    {errors.name}
                  </p>
                )}
              </label>
              <label htmlFor="email" className="text-sm text-white/70 font-medium">
                Work email *
              <input
                id="email"
                type="email"
                name="email"
                placeholder="jane@company.com"
                className={`glass-input mt-2 w-full ${errors.email ? "ring-1 ring-red-400" : ""}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-xs mt-1.5">
                  {errors.email}
                </p>
              )}
              </label>
            </div>

            <label htmlFor="company" className="block text-sm text-white/70 font-medium">
              Company *
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Contoso"
                className={`glass-input mt-2 w-full ${errors.company ? "ring-1 ring-red-400" : ""}`}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
              />
              {errors.company && (
                <p id="company-error" className="text-red-400 text-xs mt-1.5">
                  {errors.company}
                </p>
              )}
            </label>

            <label htmlFor="endpoint-count" className="block text-sm text-white/70 font-medium">
              Fleet size
              <select
                id="endpoint-count"
                name="endpoint-count"
                className="glass-input mt-2 w-full"
              >
                <option>Below 250</option>
                <option>250 - 1,000</option>
                <option>1,000 - 5,000</option>
                <option>5,000+</option>
              </select>
            </label>

            <label htmlFor="message" className="block text-sm text-white/70 font-medium">
              Security priorities
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your Windows, Linux, and Android security goals..."
                className="glass-input mt-2 w-full resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting || result?.success}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:shadow-emerald-400/50 hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⟳</span> Sending...
                </>
              ) : result?.success ? (
                <>✓ Message sent!</>
              ) : (
                <>Send request →</>
              )}
            </button>

            <p className="text-xs text-white/60 text-center">
              By submitting, you agree to be contacted about GateKeeper updates.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
