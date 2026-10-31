# ZEROTHAM — A Better Way to Grow

A responsive marketplace landing page built with Next.js App Router, TypeScript, Tailwind CSS, Lucide and Framer Motion. The supplied brand kit is the source of the exact colours and logo assets.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` creates a static export in `out/`. `npm run typecheck` checks TypeScript.

## Preview behaviour

- Locality, city, PIN and category search across six clearly labelled sample spaces in Pune.
- Price, rating, availability and saved-space filters, with an empty state and reset controls.
- Space details and sample bookings with date, plan and time-slot selection.
- Saved spaces stored only in this browser’s local storage.
- Partner enquiry and account previews with native form validation. Forms never send data.
- Membership selector, cancellation information accordion, mobile menu and accessible native dialogs.

No backend, authentication, payment processing or real reservations are implemented. Legal, contact, careers and social dialogs explicitly identify information that is pending launch. Testimonials, prices, ratings, distances and availability are illustrative.

## Main files

- `components/Marketplace.tsx`: page composition and reusable marketplace components.
- `app/globals.css`: brand tokens, layouts, states and responsive styling.
- `app/layout.tsx`: metadata, social preview and supplied symbol favicon.
- `public/images/`: extracted brand artwork and bundled photography.
- `public/fonts/`: self-hosted DM Sans and Manrope fonts.
- `.openai/hosting.json`: private Sites preview configuration.

## Assets

Original supplied files remain in `assests/`. Full logo and symbol were extracted from the provided HTML brand kit. Photography from Unsplash is bundled locally; source IDs: `photo-1507842217343-583bb7270b66` (library), `photo-1534438327276-14e5300c3a48` (gym), `photo-1497366754035-f200968a6e72` (co-working), `photo-1434030216411-0b793f4b4173` (study), `photo-1497366811353-6870744d04b2` (partner). Fonts are licensed under the SIL Open Font License; upstream: Google Fonts / DM Sans and Manrope.
