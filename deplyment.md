# Deployment Guide — Deploying from your laptop to Cloudflare

This document explains, in exhaustive detail, how to deploy this repository directly from a developer laptop to Cloudflare Pages/Workers using Wrangler. It also includes a clear checklist and step-by-step instructions a collaborator (your friend) can follow to clone, improve, and safely deploy their own changes. Follow the platform-specific notes for Windows (PowerShell), macOS, and Linux.

---

## Summary

- Target platform: Cloudflare Pages (static SPA) backed by Wrangler for uploads.
- Build output (for this repository): `build/client` (static assets) — this is what we upload.
- Deployment command (recommended):

  - Locally (recommended):

    ```bash
    npm ci
    npm run build
    npx wrangler deploy --config wrangler.toml
    ```

  - Or using the included `deploy` script:

    ```bash
    npm run deploy
    ```

  Note: `npx wrangler deploy --config wrangler.toml` is explicit and avoids local wrangler binary issues.

---

## Prerequisites (what you and collaborators need locally)

- Git (clone/push rights to the repository) — https://git-scm.com/
- Node.js (LTS recommended) and `npm` — make sure `node` and `npm` are on your PATH.
- A Cloudflare account and access to the Cloudflare account that will host the site.
- Wrangler (Cloudflare CLI) — not required to install globally because `npx wrangler` works, but installing is optional:

  ```bash
  # optional global install
  npm install -g wrangler
  wrangler --version
  ```

- For Windows PowerShell users: use compatible commands (`Remove-Item` instead of `rm`) — this repo's build script was adjusted for cross-platform use.

---

## Cloudflare Authentication (two options — interactive vs token)

Option A — Interactive login (recommended for local developers):

1. Run:

   ```bash
   npx wrangler login
   ```

   This opens a browser and authenticates Wrangler with your Cloudflare account. It stores credentials locally in your user profile (under `.wrangler`).

Option B — API token (recommended for CI or when you need a token):

1. In the Cloudflare Dashboard, go to **My Profile → API Tokens** → **Create Token**.
2. Use the **Edit Cloudflare Pages** template if available, or create a Custom Token with these minimum permissions:

   - Account Resources: the account for this project (choose the specific Account)
   - Permissions:
     - `Pages:Edit` (to upload site assets)
     - `Pages:Read` (optional, for reading project details)
     - `Account:Read` (optional, helps some tooling)

   If you're also using Workers or Wrangler features that manage Workers, include:

     - `Workers Scripts:Edit`

3. Save the token. Copy the value (this is shown only once).

4. Expose the token locally or to CI as `CF_API_TOKEN` (or `CF_TOKEN`) — Wrangler respects `CF_API_TOKEN` env var.

   - Bash / macOS / Linux:

     ```bash
     export CF_API_TOKEN="<paste-your-token-here>"
     export CF_ACCOUNT_ID="<cloudflare-account-id>"
     ```

   - PowerShell (session-only):

     ```powershell
     $env:CF_API_TOKEN = '<paste-your-token-here>'
     $env:CF_ACCOUNT_ID = '<cloudflare-account-id>'
     ```

   - Persist on Windows:

     ```powershell
     setx CF_API_TOKEN "<token>"
     setx CF_ACCOUNT_ID "<account-id>"
     ```

5. Find your `CF_ACCOUNT_ID` in the Cloudflare dashboard under **Overview → Account ID**, or run `npx wrangler whoami` after login to see account details.

Note about scopes: only grant the minimum privileges needed for collaboration. Tokens can be revoked from Cloudflare Dashboard at any time.

---

## Local build & deploy (step-by-step)

1. Clone the repository:

   ```bash
   git clone https://github.com/MAS191/GateKeeper-Website.git
   cd GateKeeper-Website
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. (Optional) Set any build-time environment variables used by the app. This project uses `VITE_`-prefixed env vars for build-time injection. Examples:

   - Add a `.env.local` (do NOT commit) or export before building:

     ```bash
     # Example (Bash/macOS/Linux)
     export VITE_CONTACT_WEBHOOK_URL="https://example.webhook/endpoint"

     # Example (PowerShell session)
     $env:VITE_CONTACT_WEBHOOK_URL = 'https://example.webhook/endpoint'
     ```

   - For production secrets, prefer CI secrets or the Cloudflare Pages dashboard environment variables (set these in the Pages project settings if using the Pages UI).

4. Build the project:

   ```bash
   npm run build
   ```

   This generates static assets under `build/client`.

5. Deploy to Cloudflare using Wrangler (explicit config recommended):

   ```bash
   npx wrangler deploy --config wrangler.toml
   ```

   - This uploads the static files from the assets directory defined in `wrangler.toml` (in this repo it's `build/client`).
   - If you installed `wrangler` globally, you can run `wrangler deploy --config wrangler.toml` instead.

Notes / Troubleshooting during deploy:

- If you see an error referencing `.wrangler/deploy/config.json` pointing at a non-existent build path (e.g. `build/server/wrangler.json`), clear the local wrangler cache with:

  - PowerShell:

    ```powershell
    Remove-Item -Path .wrangler -Recurse -Force -ErrorAction SilentlyContinue
    ```

  - Bash:

    ```bash
    rm -rf .wrangler
    ```

  Then re-run the deploy command.

- If `npx wrangler deploy` uploads only some assets or says "already uploaded" for many files — that is normal (it caches previously uploaded assets). If it errors, double-check `wrangler.toml`'s `assets` path.

---

## Collaboration workflow (for your friend who wants to improve & deploy)

Assume your friend has this repository and wants to make improvements and deploy them to the same Cloudflare account.

1. Fork or get collaborator access on GitHub. Clone the repo locally:

   ```bash
   git clone https://github.com/<your-friend>/GateKeeper-Website.git
   cd GateKeeper-Website
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Create a feature branch and make changes:

   ```bash
   git checkout -b feat/my-change
   # make edits
   git add -A
   git commit -m "feat: improve hero UI"
   git push origin feat/my-change
   ```

4. Open a Pull Request to the main repository. Use PR checks and peer review.

5. To deploy locally (if allowed):

   - They must authenticate to Cloudflare (see Authentication section). Either `npx wrangler login` or set `CF_API_TOKEN` and `CF_ACCOUNT_ID`.

   - Build and deploy from their laptop:

     ```bash
     npm ci
     npm run build
     npx wrangler deploy --config wrangler.toml
     ```

6. Recommended safer approach for teams: Use CI-driven deployments (GitHub Actions) and limit who can trigger deploys by controlling who can merge to `master` or by using protected branches.

---

## CI / GitHub Actions example (automatic deploy on merge)

Create `.github/workflows/deploy.yml` with the following minimal workflow. Store `CF_API_TOKEN` in the repository secrets (Settings → Secrets):

```yaml
name: Build and Deploy
on:
  push:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - run: npx wrangler deploy --config wrangler.toml
        env:
          CF_API_TOKEN: ${{ secrets.CF_API_TOKEN }}
          CF_ACCOUNT_ID: ${{ secrets.CF_ACCOUNT_ID }}
```

Notes:

- Keep `CF_API_TOKEN` scoped and revoke it if compromise is suspected.
- Use protected branches and require PRs to be reviewed before merging.

---

## Environment variables & secrets

- Build-time env vars (beginning with `VITE_`) are embedded into the compiled client bundle at build time. For example: `VITE_CONTACT_WEBHOOK_URL`.
- Do NOT store sensitive secrets in client-visible env vars; if the webhook URL is secret, it must be invoked by a server (or use signed short-lived client tokens). If the webhook is public or non-sensitive, `VITE_` is acceptable.
- Where to set them:
  - Locally: `.env.local` (ignored by git) or export before `npm run build`.
  - Cloudflare Pages dashboard (Project → Settings → Environment variables) for production values.
  - GitHub Actions: `Repository Settings → Secrets` and referenced in workflow.

---

## Common errors & how to fix them

- `"rm" is not recognized`: On Windows a build script used `rm` — this repository was updated to avoid `rm` in `package.json`. If you see this, either run in Git Bash or update the script to use cross-platform tools.

- `.wrangler/deploy/config.json` pointing to `build/server/wrangler.json` not found: delete `.wrangler` folder (see troubleshooting above) or run `npx wrangler deploy --config wrangler.toml` to force use of the local `wrangler.toml`.

- `wrangler: command not found`: either run via `npx wrangler` or install `wrangler` globally: `npm i -g wrangler`.

---

## Appendix: Quick checklists

Local deploy checklist:

1. Node + npm installed
2. Clone repository and `npm ci`
3. Login to Cloudflare: `npx wrangler login` OR set `CF_API_TOKEN`+`CF_ACCOUNT_ID`
4. Build: `npm run build`
5. Deploy: `npx wrangler deploy --config wrangler.toml`

Share-with-friend checklist:

1. Give collaborator GitHub access (or they fork the repo)
2. Tell them to create Cloudflare API token or run `npx wrangler login` with the account you want them to deploy to (only if you trust them)
3. Provide instructions to set any required `VITE_` variables locally or via CI
4. Have them open a PR; once merged, CI or `npx wrangler deploy` can publish

---

If you want I can:

- Add the GitHub Actions workflow file and push it (I can create `.github/workflows/deploy.yml`).
- Add a short script to the repo for Windows-compatible asset copying (if needed for old workflows).

File: `deplyment.md`
