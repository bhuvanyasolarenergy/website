# Image checklist — Bhuvanya Energy website

Practical shot list for the **live landing site** (routes under `LandingLayout`). Paths note where assets are referenced in the codebase today.

---

## Site-wide (every page)

| What | Where it appears | What to use |
|------|------------------|-------------|
| **Company logo** | Header, footer (`company.logoUrl` → `/images/about-us/logo.png`) | Official BEPL logo: PNG or SVG, transparent background, readable at ~32–40px height. |

---

## Home (`/`)

| What | Where on page | What to use |
|------|----------------|-------------|
| **7 service cover photos** | “Services” band (`LandingServices`) — large card images | One strong photo per service line: rooftop/C&I array, BESS containers or yard, consultancy/engineering session, investor or site context, O&M/technician, factory line, strategy/boardroom. **Today:** Unsplash URLs in `src/assets/data/company.js` → `coreServices[].coverImage`. |
| **7 service icons** (optional refresh) | Same cards, small icon tile | SVGs under `/images/home-one/service/service-*.svg` — can stay or swap for branded icons. |
| **Up to 6 project thumbnails** | “Projects” band (`LandingProjects`) — each tile image | Real sites (with client approval) or your own drone/site photos. **Today:** `projectTilePlaceholderPhotos` in `company.js` via `getProjectTilePlaceholder()`. |
| **Case study hero image** | “Case spotlight” (`LandingCase`) — large image beside featured client copy | Wide landscape of largest/most representative plant (aim ~1200×780+). **Today:** `caseSpotlightPlaceholderImage` in `company.js`. |
| **Hero background** (optional) | Top hero | No raster photo today — CSS (`ld-hero__bg`). Optional: subtle onsite/drone image or texture if added later in SCSS. |

---

## Services (`/services`)

| What | Where on page | What to use |
|------|----------------|-------------|
| **Same 7 covers + icons** | Service line cards | Same as home — driven by `company.coreServices` in `company.js`. |
| **4 “project type” card photos** | Dark “Project types covered” section (`Services.jsx` → `projectTypeCovers`) | Themed shots: BESS/hybrid, tender/government scale, utility or C&I array, rooftop. **Today:** Unsplash URLs in `Services.jsx`. |

---

## Projects (`/projects`)

| What | Where on page | What to use |
|------|----------------|-------------|
| **Spotlight card images** | “Largest operational installations” grid | Same pool as home project tiles — ideally one real photo per featured client if you have rights. **Today:** `getProjectTilePlaceholder()`. |

---

## Insights — list and article (`/blogs`, `/blogs/:id`)

| What | Where on page | What to use |
|------|----------------|-------------|
| **Article hero images** | Featured post, list cards, detail hero, “Continue reading” | One image per post in `src/assets/data/blogs.js` (`image` paths such as `/images/blog/1.png`, `/images/home-one/blog/...`). Topic-specific shots or clean graphics. |

---

## About (`/about`)

| What | Where on page | What to use |
|------|----------------|-------------|
| **Director photos** (optional) | Leadership cards — currently **initials only** | Professional headshots if you want faces; not wired as `<img>` yet — would need a small data/component change. |

---

## Contact (`/contact`)

| What | Where on page | What to use |
|------|----------------|-------------|
| **None required** | Map uses Google Embed | Optional: static map/office graphic if you replace the embed. |

---

## Summary counts (landing only)

- **1** logo (brand consistency).
- **7** service hero/cover images (replace Unsplash in `company.js`).
- **4** project-type images on Services (replace in `Services.jsx`).
- **6+** project/portfolio thumbnails (replace `projectTilePlaceholderPhotos` in `company.js`, or use per-project files).
- **1** flagship case study image (`caseSpotlightPlaceholderImage` in `company.js`).
- **1 per blog post** hero image (`blogs.js`).
- **7** small service SVG icons (optional).

**Note:** Legacy home-one / home-two template images under `/public/images/...` may still exist but are **not** used by the current router unless those templates are restored.
