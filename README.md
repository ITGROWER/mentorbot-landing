# mentorbot-landing

Landing page for MentorBot built with React, Vite and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment with Caddy

After building, the static files in `dist/` can be served with [Caddy](https://caddyserver.com):

```bash
caddy run --config Caddyfile
```

The provided `Caddyfile` serves the built assets and falls back to `index.html` for client-side routing.

For local development, Caddy is also configured to serve the site on [http://localhost](http://localhost). You can run the site in a container with:

```bash
docker compose up --build
```
