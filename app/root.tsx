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
    href: "https://fonts.googleapis.com/css2?family=Sora:wght@300..700&family=Source+Sans+3:wght@300..700&display=swap",
  },
  { rel: "icon", href: "/icon.png" },
  { rel: "apple-touch-icon", href: "/icon.png" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("gk-theme");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    setTheme(stored ?? (prefersLight ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("gk-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="page-shell">
          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <img
                      src="/icon.png"
                      alt="GateKeeper"
                      className="logo-mark logo-mark--dark"
                    />
                    <img
                      src="/icon-dark.png"
                      alt="GateKeeper"
                      className="logo-mark logo-mark--light"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight text-white">
                      GateKeeper
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Cross-platform security
                    </p>
                  </div>
                </div>
                <nav className="hidden items-center gap-2 text-sm font-semibold md:flex">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `rounded-full px-3 py-1.5 transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/features"
                    className={({ isActive }) =>
                      `rounded-full px-3 py-1.5 transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    Features
                  </NavLink>
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      `rounded-full px-3 py-1.5 transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `rounded-full px-3 py-1.5 transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:text-white"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </nav>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition hover:border-white/30 hover:text-white"
                  >
                    {theme === "dark" ? "Light" : "Dark"}
                  </button>
                  <NavLink
                    to="/contact"
                    className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-300"
                  >
                    Talk to us
                  </NavLink>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
                {children}
              </div>
            </main>
            <footer className="border-t border-white/5">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                <p>
                  GateKeeper Security Suite. Built for Windows, Linux, and
                  Android teams.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Production ready
                  </span>
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  <span className="text-xs">2026</span>
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
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-white">{message}</h1>
      <p className="mt-3 text-base text-white/70">{details}</p>
      {stack && (
        <pre className="mt-6 w-full overflow-x-auto rounded-2xl bg-black/40 p-4 text-xs text-white/80 shadow-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
