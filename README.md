# Rahul Khanchandani — Portfolio

Built with Next.js 16, TypeScript, and Tailwind CSS.

## Deploy to Vercel (3 steps)

### Option A — GitHub + Vercel (recommended)

1. Push this folder to a new GitHub repo:
   ```
   git init
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to https://vercel.com → New Project → Import your GitHub repo

3. Vercel auto-detects Next.js. Click **Deploy**. Done.

Your site will be live at: `https://your-repo-name.vercel.app`

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Site goes live instantly.

## Local development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customise

- **Links**: Update LinkedIn/GitHub URLs in `Contact.tsx` and `Nav.tsx`
- **Content**: All data is in each component file — no CMS needed
- **Resume PDF**: Drop your PDF into `/public/Rahul_Khanchandani_Resume.pdf` so the resume button works
