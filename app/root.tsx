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
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M3 6h14M3 10h14M3 14h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 4l12 12M16 4l-12 12" />
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
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-background)]/70 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
              <NavLink
                to="/"
                className="flex items-center gap-3 group"
                aria-label="GateKeeper home"
              >
                <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img
                    src="/icon.png"
                    alt=""
                    className="logo-dark absolute inset-1 h-7 w-7 object-contain"
                  />
                  <img
                    src="/icon-dark.png"
                    alt=""
                    className="logo-light absolute inset-1 h-7 w-7 object-contain"
                  />
                </div>
                <span className="text-base font-semibold tracking-tight">
                  GateKeeper
                </span>
              </NavLink>

              <nav
                className="hidden items-center gap-1 md:flex"
                aria-label="Main navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "is-active" : ""}`
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
                  className="btn btn-ghost btn-icon"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                >
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </button>
                <NavLink
                  to="/contact"
                  className="!hidden md:!inline-flex btn btn-primary"
                >
                  Talk to us
                </NavLink>
                <button
                  type="button"
                  className="md:hidden btn btn-ghost btn-icon"
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
                className="border-t border-white/10 bg-[var(--color-background)]/80 backdrop-blur-xl md:hidden"
                aria-label="Mobile navigation"
              >
                <div className="mx-auto w-full max-w-7xl px-5 py-3 flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "is-active" : ""}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn btn-primary mt-3 w-full"
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

          <footer className="border-t border-white/10 bg-[var(--color-background)]/40 backdrop-blur-md">
            <div className="mx-auto w-full max-w-7xl px-5 md:px-8 py-10">
              <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
                <div className="space-y-3">
                  <span className="text-sm font-semibold tracking-tight">
                    GateKeeper
                  </span>
                  <p className="text-sm text-white/60 max-w-md">
                    Endpoint, network, and DNS protection for Windows, Linux,
                    and Android. Built for security operations teams.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-3">
                    Product
                  </p>
                  <ul className="space-y-1.5 text-sm text-white/70">
                    <li>
                      <NavLink
                        to="/features"
                        className="hover:text-primary transition-colors"
                      >
                        Features
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="hover:text-primary transition-colors"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-3">
                    Platforms
                  </p>
                  <ul className="space-y-1.5 text-sm text-white/70">
                    <li className="flex items-center justify-between gap-3">
                      <span>Windows</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span>Linux</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span>Android</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-7 border-white/10" />

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-white/50">
                <p>GateKeeper Security Suite</p>
                <p>{new Date().getFullYear()}</p>
              </div>
            </div>
          </footer>
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
  let message = "Error";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : `Error ${error.status}`;
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
      <h1 className="text-5xl font-semibold tracking-tight">{message}</h1>
      <p className="mt-4 text-base text-white/70 max-w-xl">{details}</p>
      {stack && (
        <pre className="mt-8 w-full overflow-x-auto glass-card p-4 font-mono text-xs text-white/70">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
