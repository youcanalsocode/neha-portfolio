# Neha Nadlal Gupta: Portfolio (React + TypeScript + Vite + Tailwind)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/

## Add before deploying
1. `public/images/neha.jpg`: your headshot (a monogram shows until then). Add `public/images/og.png` (1200x630) for LinkedIn previews.
2. `public/resume/Neha_Nadlal_Gupta_Resume.pdf`: your resume.
3. Contact form: copy `.env.example` to `.env`, set `VITE_FORM_ENDPOINT` to a Formspree (or similar) endpoint. Without it the form opens the visitor's email app and never shows a false success message.
4. Replace `YOUR-DOMAIN.com` in `index.html`, `public/robots.txt`, `public/sitemap.xml`.
5. Edit all text in `src/data/content.ts`. Optional certifications placeholder is in `src/components/Education.tsx` (hidden until filled).

## Deploy
Vercel / Netlify / Cloudflare Pages: build command `npm run build`, output `dist`. HTTPS is automatic.
