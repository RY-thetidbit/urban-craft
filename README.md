# Urban Craft — Kitchen & Interiors

A modern, responsive marketing website for **Urban Craft**, a kitchen & interior
studio in Ambernath. Built with **Next.js 14** (App Router) and **Tailwind CSS**.

## Features

- Cinematic hero with background imagery and call-to-action
- Sections: About, Services, Filterable Projects gallery, Process, Why Choose Us, Testimonials, Contact
- WhatsApp enquiry form (no backend required)
- Floating Call / WhatsApp buttons
- Scroll-reveal animations, sticky responsive navbar, mobile menu
- SEO metadata and fully responsive layout

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Editing your business details

All business info (phone, address, GST, hours, social links) lives in one file:

`lib/site.js`

Update it there and it changes everywhere on the site.

## Replacing the images

The site currently uses high-quality stock photos from Unsplash as placeholders.
To use your own project photos:

1. Drop your images into the `public/` folder.
2. Replace the Unsplash URLs in the components (`components/Hero.js`,
   `Services.js`, `Projects.js`, etc.) with paths like `/my-kitchen.jpg`.

## Deploy

Deploy free on [Vercel](https://vercel.com): push to a Git repo and import it,
or run `npx vercel`.
