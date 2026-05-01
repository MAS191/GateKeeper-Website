import { readFileSync, writeFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync('dist/.vite/manifest.json', 'utf8'));
const entry = manifest['node_modules/@react-router/dev/dist/config/defaults/entry.client.tsx']?.file;
const rootCss = manifest['app/root.tsx?__react-router-build-client-route']?.css?.[0];

if (!entry) throw new Error('Could not find React Router client entry in manifest.');

const cssTag = rootCss ? `  <link rel="stylesheet" href="/${rootCss}">\n` : '';

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GateKeeper Website</title>
${cssTag}</head>
<body>
  <div id="root"></div>
  <script type="module" src="/${entry}"></script>
</body>
</html>
`;

writeFileSync('dist/index.html', html);
