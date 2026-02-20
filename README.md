# ⚡ base-css

A ultra-performant, bare-bones CSS foundation designed for 2026. `base-css` focuses on modern standards—**OKLCH colors**, **Fluid Typography**, and **Intrinsic Layouts**—to provide a robust starting point with zero legacy bloat.

---

## ✨ Features

* **Fluid Typography:** A single `clamp()` formula that scales typography perfectly from mobile to desktop.
* **OKLCH Colors:** Utilizing the `oklch()` color space for perceptually uniform colors and better vibrancy.
* **Intrinsic Grid:** Responsive layouts that adapt to their container without a single `@media` query.
* **Modern CSS:** Built with Logical Properties (`padding-inline`) for automatic RTL support.
* **Font Loader:** A lightweight JS utility to inject Google Fonts with 10 built-in presets.
* **Ultra-Fast Build:** Powered by Lightning CSS and esbuild for sub-millisecond processing.

---

## 🚀 Quick Start

### Installation

```bash
npm install base-css
```

### Usage

1. Include the CSS in your project:

```html
<link rel="stylesheet" href="node_modules/base-css/dist/base.min.css">
```

2. Use the font loader to inject Google Fonts:

```javascript
import { loadFont, presets } from 'base-css';

// Loads 'Inter' by default
loadFont(); 

// Or choose a specific preset
loadFont(presets.playfair);
```

### 🛠 Usage Guide

#### Fluid Typography

We use a **Major Third** scale ($1.25$) to ensure headers feel balanced. The base font size scales dynamically:
- Minimum: `1rem` at `320px` viewport.
- Maximum: `1.25rem` at `1240px` viewport.

The hierarchy follows:
- `h1`: $Step 3 = Base x 1.25^3$h2: $Step 2 = Base \times 1.25^2$h3: $Step 1 = Base \times 1.25^1$

#### The Intrinsic Grid

Stop writing media queries for columns. Use the .grid utility:

```HTML
<div class="grid">
  <div class="p-2 bg-primary">Card 1</div>
  <div class="p-2 bg-primary">Card 2</div>
  <div class="p-2 bg-primary">Card 3</div>
</div>
```

The grid will automatically wrap items when they drop below 250px in width.🏗 

## Development

### Build Production Assets

This script minifies your CSS via Lightning CSS and bundles your JS via esbuild.

```bash
npm run build
```

### Run Unit Tests

Validate the font preset logic and typography scales using the native Node.js test runner.

```bash
npm test
```

## 🎨 Available Font Presets

| Key | Font Name |
| --- | --- |
| inter | Inter |
| roboto | Roboto |
| playfair | Playfair Display |
| montserrat | Montserrat |
| lora | Lora |
| oswald | Oswald |
| fira | Fira Code |
| merri | Merriweather |
| raleway | Raleway |
| work | Work Sans |


## 📝 License

This project is licensed under the Apache-2.0 License