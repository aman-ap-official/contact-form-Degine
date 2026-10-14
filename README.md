# Pure & Natural — Contact Form Design

A modern, animated **contact section** built for a fictional fresh juices & ice creams brand, *Pure & Natural*. This is a static, single-page front-end project that combines an elegant dark theme with smooth **GSAP** scroll animations, a responsive **Bootstrap 5** grid, a styled contact form, and an embedded Google Map.

<img width="1423" height="758" alt="Image" src="https://github.com/user-attachments/assets/dae13a09-8351-4294-a41d-0eb175dcd764" />

---

## Table of Contents

- [Overview](#overview)
- [Preview](#preview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
  - [HTML Structure](#html-structure)
  - [Styling & Theming](#styling--theming)
  - [Animations](#animations)
- [Customization Guide](#customization-guide)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Roadmap / Ideas](#roadmap--ideas)
- [License](#license)
- [Author](#author)

---

## Overview

This project is a standalone **"Visit Us or Get in Touch"** section. It is designed as a reusable UI block that could be dropped into a larger landing page or portfolio site. The layout is split into two balanced columns:

1. **Contact Information (left)** — location, opening hours, phone, email, and an embedded Google Map.
2. **Contact Form (right)** — a name / email / subject / message form with a styled submit button.

The section uses a dark background (`#2b2b3b`) to make the pastel brand colors (pink, peach, teal) pop, and reveals both columns with a slide-in animation as the user scrolls into view.

---

## Preview

![Project Output](https://github.com/user-attachments/assets/dae13a09-8351-4294-a41d-0eb175dcd764)

---

## Features

- 🎨 **Custom pastel theme** driven by CSS variables for instant re-branding.
- 📱 **Fully responsive** two-column layout powered by Bootstrap 5's grid.
- ✨ **GSAP + ScrollTrigger animations** — columns slide in from opposite sides on scroll.
- 🗺️ **Embedded Google Map** inside a rounded, shadowed container.
- 🧾 **Styled contact form** with dark inputs, focus states, and a hover-animated submit button.
- 🔤 **Google Fonts** pairing: *Playfair Display* for headings, *Inter* for body text.
- ⚡ **Icon support** via Font Awesome 6 (location, clock, phone, mail, send icons).
- 🚫 **No build step** — pure HTML/CSS/JS, ready to open in a browser.

---

## Tech Stack

| Layer          | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| Markup         | HTML5                                                                       |
| Styling        | CSS3 (custom properties / variables), Bootstrap 5.3.3                        |
| Animations     | GSAP 3.12.5 + ScrollTrigger                                                 |
| Icons          | Font Awesome 6.5.2                                                          |
| Fonts          | Google Fonts — Playfair Display & Inter                                     |
| 3D (optional)  | Three.js 0.164.1 + GLTFLoader / OrbitControls (loaded, ready for use)       |
| Map            | Google Maps Embed (iframe)                                                  |

> All libraries are loaded from public CDNs — there is **no `package.json`** and no dependency installation required.

---

## Project Structure

```
contact/
├── index.html      # Markup: contact section, form, map, CDN script/link tags
├── style.css       # Theme variables + all section styling
├── script.js       # GSAP ScrollTrigger animations for the contact section
├── README.md       # You are here
└── .vscode/        # Editor settings (optional)
```

---

## Getting Started

### Option 1 — Open directly

Simply open `index.html` in any modern browser.

### Option 2 — Local dev server (recommended)

Because the page loads external CDN resources, running a local server avoids any file-protocol quirks:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

### Option 3 — VS Code Live Server

Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

---

## How It Works

### HTML Structure

- `index.html:17` — The `<section id="contact">` wrapper, styled with `bg-dark text-white` and `py-5` spacing.
- `index.html:20-52` — A Bootstrap `row` containing two `col-md-6` columns:
  - `index.html:21-30` — **Contact info**: location, hours, phone, email, plus a `.map-container` holding a Google Maps `<iframe>`.
  - `index.html:31-52` — **Contact form**: Bootstrap form controls for name, email, subject, and message, ending in a `.submit-btn`.
- `index.html:57-63` — CDN scripts for Bootstrap, GSAP, ScrollTrigger, Three.js, and the project's `script.js`.

The two columns carry data attributes used as animation hooks:

```html
<div data-gsap-animation="contact-info"> ... </div>
<div data-gsap-animation="contact-form"> ... </div>
```

### Styling & Theming

All colors, fonts, and background tokens are defined as CSS variables at the top of `style.css:2-16`, so the entire look can be re-themed from one place:

```css
:root {
    --primary-color: #ffc0cb;      /* Pink — main brand color */
    --secondary-color: #d1d1f6;    /* Light purple/blue accent */
    --accent-color: #c0fff4;       /* Light green/teal accent */
    --highlight-color: #ffd5c0;    /* Peach — headings & buttons */
    --extra-accent-color: #fff5c0; /* Light yellow */
    --dark-bg: #2b2b3b;            /* Section background */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
}
```

Key style highlights:

- **Dark form fields** (`style.css:60-75`) with a peach focus ring matching the brand.
- **Rounded map container** with a soft shadow (`style.css:49-59`).
- **Pill-shaped, animated submit button** (`style.css:81-101`) that lifts on hover and slides its paper-plane icon to the right.

### Animations

`script.js` registers ScrollTrigger and animates the two columns into view:

```js
gsap.registerPlugin(ScrollTrigger);

gsap.from("[data-gsap-animation='contact-info']", {
    x: -100, opacity: 0, duration: 1.2, ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});

gsap.from("[data-gsap-animation='contact-form']", {
    x: 100, opacity: 0, duration: 1.2, ease: "power2.out", delay: 0.2,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none reverse",
    }
});
```

**Result:** when the section reaches 70% of the viewport height, the info column slides in from the left and the form column (slightly delayed) slides in from the right. Scrolling back up reverses the animation.

---

## Customization Guide

| What to change           | Where                                             |
| ------------------------ | ------------------------------------------------- |
| Brand colors / theme     | CSS variables in `style.css:2-16`                 |
| Fonts                    | `:root` variables + the Google Fonts link in `index.html:10` |
| Contact details          | Text inside `index.html:22-26`                    |
| Map location             | Replace the `iframe` `src` at `index.html:28` (Google Maps → Share → Embed a map) |
| Form fields              | `index.html:33-51`                                |
| Animation direction/speed| `x`, `duration`, `delay`, and `start` values in `script.js` |

### Wiring up the form

The form is currently **front-end only** — it does not submit anywhere. To make it functional, add an `action` and `method` to the `<form>` (or handle the `submit` event in JS and POST to a service such as Formspree, Getform, or your own API):

```html
<form class="contact-form" action="https://formspree.io/f/your-id" method="POST">
```

---

## Responsive Design

- Bootstrap's grid (`col-md-6`) stacks the two columns vertically on screens narrower than the `md` breakpoint (768px).
- `body { overflow-x: hidden; }` (`style.css:23`) prevents horizontal scrollbars caused by the slide-in animations.
- The map iframe uses `width="100%"` with a fixed `300px` height for consistent rendering on all devices.

---

## Browser Support

Works in all modern evergreen browsers (Chrome, Edge, Firefox, Safari). Requires JavaScript enabled for the GSAP scroll animations; without it, the content still renders and is fully usable.

---

## Roadmap / Ideas

- [ ] Add client-side form validation and a success toast.
- [ ] Connect the form to a real backend or form service.
- [ ] Add a lightweight Three.js hero/scene (libraries are already loaded).
- [ ] Add a favicon (currently referenced at `img/favicon.png`).
- [ ] Add dark/light theme toggle.

---

## License

This project is released under the **Attribution License** — see the [LICENSE](LICENSE) file for full details.

**You are free to use, modify, and build upon this code in your own project, but you must give credit to the original author for creating this form.**

---

## Author

**Aman AP** — [GitHub @aman-ap-official](https://github.com/aman-ap-official)

Repository: [contact-form-Degine](https://github.com/aman-ap-official/contact-form-Degine)
