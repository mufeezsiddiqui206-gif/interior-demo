# DEMO — Business Website

A premium, professional business website built for **DEMO** (working title —
originally scoped for Jaybhadraa Associates, Dharashiv, Maharashtra), built
as a sales-demo deliverable.

The site is fully working: interactive service selector, scroll-triggered
animations, enquiry form, floating WhatsApp CTA, mobile sticky bar, custom
cursor on desktop, and a responsive layout down to 320px.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## 2. Update the real business content

Everything factual on the site — name, category, services, contact details,
address, socials, FAQs, testimonials, process, values — lives in **one
file**:

```
src/data/business.js
```

Every field marked `[VERIFY ...]` is a placeholder the business owner should
confirm before this goes live. Replace those values and the whole site
updates automatically — no need to touch any component.

Key things to fill in first:
- `business.name` / `business.category` / `business.description`
- `business.phone`, `business.phoneHref`, `business.whatsappNumber`, `business.email`
- `business.address`, `business.googleMaps`, `business.openingHours`
- `services` array — 6 editable entries, do not invent real names
- `testimonials`, `work` — leave empty/placeholder until real content exists

The `work` array is empty by default. As soon as you add real project
entries there, the "Our Work" portfolio section automatically replaces the
placeholder "Our Services In Action" gallery — no code changes needed.

## 3. Images

Hero and services-in-action imagery currently uses royalty-free demo photos
from Unsplash purely as placeholders — they are **not** photos of the real
business. Swap them for real photography once available (drop files into
`src/assets/` and update the `src` in `Hero.jsx` and `Work.jsx`).

## 4. Project structure

```
src/
├── components/     # Nav, Footer, Loader, CustomCursor, WhatsAppButton, MobileStickyBar
├── sections/       # Hero, Intro, Services, WhyUs, About, Values, Process,
│                   # Work, Trust, Testimonials, FAQ, Contact, EnquiryForm, Location
├── data/
│   └── business.js # <-- single source of truth for all content
├── App.jsx
├── main.jsx
└── index.css
```

## 5. Tech stack

React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React. No Next.js.

## 6. Before going live

- Replace every `[VERIFY]` placeholder in `src/data/business.js`
- Wire `EnquiryForm.jsx`'s `handleSubmit` to a real endpoint (email service,
  CRM, or form backend) — it currently just shows a demo confirmation
- Swap placeholder Unsplash imagery for real photography
- Add real testimonials once available
- Confirm the Google Maps link and embed
