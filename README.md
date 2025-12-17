# clubhousekidsri (Next.js clone)

This repo is a **pixel-clone** of the Netlify page content, served from **Next.js App Router + TypeScript**, and packaged for **AWS App Runner**.

## Local dev

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build (local)

```bash
npm run build
npm run start
```

`npm run start` respects `PORT` (cross-platform).

## AWS App Runner (Docker)

- **Build command**: handled by the Dockerfile (multi-stage)
- **Listening port**: configure App Runner to use **3000** (or set `PORT` to match your chosen port)

### Build locally

```bash
docker build -t clubhousekidsri .
docker run --rm -p 3000:3000 clubhousekidsri
```


