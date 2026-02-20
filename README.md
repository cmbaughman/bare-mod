# ⚡ bare-mod

![NPM Version](https://img.shields.io/npm/v/bare-mod?color=60%200.15%20250)
![NPM Size](https://img.shields.io/bundlephobia/min/bare-mod?color=60%200.15%20250)

An ultra-performant, bare-bones CSS foundation designed for 2026. `bare-mod` focuses on modern standards—**OKLCH colors**, **Fluid Typography**, and **Intrinsic Layouts**—to provide a robust starting point with zero legacy bloat.

---

## ✨ Features

* **Fluid Typography:** A single `clamp()` formula that scales typography perfectly from mobile to desktop.
* **OKLCH Colors:** Utilizing the `oklch()` color space for perceptually uniform colors and better vibrancy.
* **Intrinsic Grid:** Responsive layouts that adapt to their container without a single `@media` query.
* **12-Column System:** A variable-based grid system for precise layout control.
* **Modern CSS:** Built with Logical Properties for automatic RTL (Right-to-Left) support.
* **Font Loader:** A lightweight JS utility to inject Google Fonts with 10 built-in presets.
* **Visual Debugger:** Built-in dev tools to visualize your grid and spacing logic.

---

## 🚀 Quick Start

### Installation

```bash
npm install bare-mod
```

### Usage

1. Include the CSS in your project:

```html
<link rel="stylesheet" href="node_modules/bare-mod/dist/bare.min.css">
```

2. Load a font:

```javascript
import { loadFont, presets } from 'bare-mod';

loadFont(presets.inter);
```

### 🛠 Usage Guide

#### 12 Column Grid

Precision control using CSS variables. Override `--span` to set width (defaults to 12).

```html
<div class="grid-12">
  <div class="column" style="--span: 8;">Main (8/12)</div>
  <div class="column" style="--span: 4;">Sidebar (4/12)</div>
</div>
```

#### The Intrinsic (Auto) Grid

No configuration needed. Items wrap automatically when they drop below `250px`.

```HTML
<div class="grid">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

#### 🎨 Customization (Theming)

`bare-mod` is designed to be overridden. Simply redefine the variables in your own CSS:

```css
:root {
  --primary: oklch(65% 0.2 150); /* Brand Green */
  --fluid-base: clamp(1.1rem, 1vw, 1.5rem); /* Larger Text */
  --ratio: 1.333; /* Perfect Fourth scale */
}
```

#### 🛠 Visual Debugger

To see the "bones" of your layout during development, add `data-debug="true"` to your `<body>` tag.

```html
<body data-debug="true">
  <!-- Your content here -->
</body>
```

### 🏗 Development

Build assets: `npm run build`

Run tests: `npm test`

Dev server: `npm start` (Requires Vite)

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