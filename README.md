# PARALLEL

Premium digital experience studio site built with Vite, React, TypeScript and Framer Motion.

## Run locally

```
npm install
npm run dev
```

## Contact form

The production contact form uses the server-side `/api/contact` function and Resend.

Add these environment variables in Vercel:

- `RESEND_API_KEY` — Resend API key
- `CONTACT_TO_EMAIL` — inbox that should receive inquiries
- `CONTACT_FROM_EMAIL` — verified sender address/domain in Resend

After adding the variables, redeploy the production deployment so the function can access them.

## Deployment

The production site should be connected to the GitHub repository's production branch. New commits on that branch should create production deployments in Vercel.
