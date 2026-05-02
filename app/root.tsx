import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useEffect, useState } from "react";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap",
  },
  { rel: "icon", href: "/icon.png" },
  { rel: "apple-touch-icon", href: "/icon.png" },
];

type NavItem = { to: string; label: string; end?: boolean };

const NAV_ITEMS: readonly NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/features", label: "Features" },
  { to: "/contact", label: "Contact" },
];

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      aria-hidden
    >
      <path d="M2 5h14M2 9h14M2 13h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      aria-hidden
    >
      <path d="M3.5 3.5l11 11M14.5 3.5l-11 11" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="9" cy="9" r="3.25" />
      <path
        strokeLinecap="round"
        d="M9 1.5v2M9 14.5v2M2.5 9h-1M16.5 9h-1M3.8 3.8l1.4 1.4M12.8 12.8l1.4 1.4M3.8 14.2l1.4-1.4M12.8 5.2l1.4-1.4"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14.5 11.2A6 6 0 0 1 6.8 3.5a6.5 6.5 0 1 0 7.7 7.7z" />
    </svg>
  );
}

// Inline script to set theme before paint — avoids FOUC
const themeBootScript = `
  (function() {
    try {
      var stored = localStorage.getItem('gk-theme');
      var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      var theme = stored || (prefersLight ? 'light' : 'dark');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`;

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("gk-theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>
        <a href="#main" className="gk-skip-link">
          Skip to main content
        </a>
        <div className="page-shell">
          <div className="relative flex min-h-screen flex-col">
            <header className="border-b border-[var(--gk-border)] bg-[var(--gk-bg)]/80 backdrop-blur-sm sticky top-0 z-40">
              <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-5">
                <NavLink
                  to="/"
                  className="flex items-center gap-3 group"
                  aria-label="GateKeeper home"
                >
                  <div className="relative h-9 w-9 flex-shrink-0 border border-[var(--gk-border-strong)] bg-[var(--gk-bg-elev)]">
                    <img
                      src="/icon.png"
                      alt=""
                      className="gk-logo--dark absolute inset-1 h-7 w-7 object-contain"
                    />
                    <img
                      src="/icon-dark.png"
                      alt=""
                      className="gk-logo--light absolute inset-1 h-7 w-7 object-contain"
                    />
                  </div>
                  <span className="font-mono text-base font-bold tracking-tight text-[var(--gk-fg)]">
                    GateKeeper
                  </span>
                </NavLink>

                <nav
                  className="hidden items-center gap-7 md:flex"
                  aria-label="Main navigation"
                >
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) =>
                        `gk-nav-link ${isActive ? "is-active" : ""}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="gk-icon-btn"
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                  >
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </button>
                  <NavLink
                    to="/contact"
                    className="!hidden md:!inline-flex gk-btn gk-btn--primary"
                  >
                    Talk to us
                  </NavLink>
                  <button
                    type="button"
                    className="md:hidden gk-icon-btn"
                    onClick={() => setMobileMenuOpen((o) => !o)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="gk-mobile-nav"
                  >
                    {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                  </button>
                </div>
              </div>

              {mobileMenuOpen && (
                <nav
                  id="gk-mobile-nav"
                  className="border-t border-[var(--gk-border)] bg-[var(--gk-bg-elev)] md:hidden"
                  aria-label="Mobile navigation"
                >
                  <div className="mx-auto w-full max-w-7xl px-5 py-3 flex flex-col">
                    {NAV_ITEMS.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block border-b border-[var(--gk-border)] py-3 font-mono text-sm uppercase tracking-[0.1em] last:border-b-0 ${
                            isActive
                              ? "text-[var(--gk-highlight)]"
                              : "text-[var(--gk-fg-muted)] hover:text-[var(--gk-fg)]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    <NavLink
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="gk-btn gk-btn--primary mt-4 w-full"
                    >
                      Talk to us
                    </NavLink>
                  </div>
                </nav>
              )}
            </header>

            <main id="main" className="flex-1">
              <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-10 md:px-8 md:pt-16">
                {children}
              </div>
            </main>

            <footer className="border-t border-[var(--gk-border)] bg-[var(--gk-bg-elev)]/40">
              <div className="mx-auto w-full max-w-7xl px-5 md:px-8 py-10">
                <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
                  <div className="space-y-3">
                    <span className="font-mono text-sm font-bold text-[var(--gk-fg)]">
                      GateKeeper
                    </span>
                    <p className="text-sm text-[var(--gk-fg-muted)] max-w-md">
                      Endpoint, network, and DNS protection for Windows, Linux,
                      and Android. Built for security operations teams.
                    </p>
                  </div>

                  <div>
                    <p className="gk-eyebrow mb-3">Product</p>
                    <ul className="space-y-1.5 text-sm text-[var(--gk-fg-muted)]">
                      <li>
                        <NavLink
                          to="/features"
                          className="hover:text-[var(--gk-accent)] transition-colors"
                        >
                          Features
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          className="hover:text-[var(--gk-accent)] transition-colors"
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="gk-eyebrow mb-3">Platforms</p>
                    <ul className="space-y-1.5 font-mono text-xs text-[var(--gk-fg-muted)]">
                      <li className="flex items-center justify-between gap-3">
                        <span>Windows</span>
                        <span className="text-[var(--gk-accent)]">●</span>
                      </li>
                      <li className="flex items-center justify-between gap-3">
                        <span>Linux</span>
                        <span className="text-[var(--gk-accent)]">●</span>
                      </li>
                      <li className="flex items-center justify-between gap-3">
                        <span>Android</span>
                        <span className="text-[var(--gk-accent)]">●</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr className="gk-rule mt-8" />

                <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between font-mono text-xs text-[var(--gk-fg-dim)]">
                  <p>GateKeeper Security Suite</p>
                  <p>{new Date().getFullYear()}</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "ERR";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : `ERR ${error.status}`;
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="gk-eyebrow gk-eyebrow--accent">{"// system"}</p>
      <h1 className="gk-display gk-display-lg mt-3 text-[var(--gk-fg)]">
        {message}
      </h1>
      <p className="mt-4 text-base text-[var(--gk-fg-muted)] max-w-xl">
        {details}
      </p>
      {stack && (
        <pre className="mt-8 w-full overflow-x-auto border border-[var(--gk-border)] bg-[var(--gk-bg-elev)] p-4 font-mono text-xs text-[var(--gk-fg-muted)]">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
