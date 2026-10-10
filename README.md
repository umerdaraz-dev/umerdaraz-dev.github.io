# Umer Daraz | Odoo Techno-Functional Consultant

Personal portfolio website. Static HTML, CSS and JavaScript, no build step.

## Structure

```
index.html            Main page
404.html              Not-found page (used by GitHub Pages)
robots.txt            Search engine rules
sitemap.xml           Sitemap for search engines
.nojekyll             Tells GitHub Pages to serve files as they are
assets/css/style.css  All styles (light and dark theme)
assets/js/main.js     Theme toggle, scroll, clock, process animation, active menu
assets/img/           Photo (WebP + JPG), favicons, link preview image
```

## Before publishing

1. The site is set up for **https://devbyumer.com** (canonical URL, Open Graph, schema,
   robots.txt, sitemap.xml and the `CNAME` file). If the domain changes, update all of them.
2. Confirm the project details in the Work section (Marco Polo, Motorline, Al-Safwa,
   and the Property Management System flow).
3. Confirm payment methods if you add them back to the FAQ.

## Publish on GitHub Pages

1. Create a public repository named `umerdaraz-dev.github.io`.
2. Upload everything in this folder (including `.nojekyll` and `CNAME`) to the repository root.
3. Go to **Settings > Pages**, set **Source** to the `main` branch, root folder, and save.
4. Under **Custom domain** you should see `devbyumer.com`. When the DNS check passes,
   tick **Enforce HTTPS**.
5. The site goes live at **https://devbyumer.com**.

**DNS at Namecheap (already done):** four A records for `@` pointing to
185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, and a CNAME for
`www` pointing to `umerdaraz-dev.github.io.`

## Updating

- **Photo:** replace `assets/img/umer-daraz-odoo-consultant-800.*` and `-1200.*`
  (portrait, 4:5 ratio, same file names).
- **Text:** edit `index.html`.
- **Colours and fonts:** edit the tokens at the top of `assets/css/style.css`.

## SEO

**Target keywords** (used naturally in titles, headings and copy):

| Priority | Keywords |
|---|---|
| Primary | Odoo techno-functional consultant, Odoo developer |
| Hiring intent | hire Odoo developer, freelance Odoo developer, remote Odoo developer |
| Services | Odoo customization, custom Odoo module development, Odoo migration, Odoo upgrade to 19 / 20, Odoo implementation, Odoo API integration, Odoo website and eCommerce, Odoo POS customization, Odoo.sh |
| Partners | white-label Odoo development, Odoo outsourcing for partners |
| Industries | Odoo property management system, Odoo hotel management |

**What's in place**

- Title (46 chars) and meta description (151 chars) within Google's display limits.
- Open Graph and Twitter cards with a 1200×630 preview image.
- JSON-LD structured data: `WebSite`, `Person`, `ProfessionalService` (with service catalogue) and `FAQPage` (7 questions that match the visible FAQ).
- One H1, keyword-led H2s for every section, descriptive image file names and alt text.
- `robots.txt`, `sitemap.xml`, canonical URL, fast WebP images, mobile-first layout.

**After publishing**

1. Add the site to **Google Search Console** (https://search.google.com/search-console),
   verify it, and submit `sitemap.xml`.
2. Test the structured data at https://search.google.com/test/rich-results
   and the preview card at https://www.opengraph.xyz.
3. Add the site URL to your LinkedIn profile (Contact info and Featured), GitHub profile,
   Upwork/Fiverr profiles and email signature. These links help Google find and trust the site.
4. In GitHub, go to your profile **Settings > Pages** and add `devbyumer.com` as a
   verified domain, so no one else can use it on GitHub.
