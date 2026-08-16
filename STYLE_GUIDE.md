# Arctic Westies Style Guide

This guide defines the visual system used across the site and maps directly to the shared tokens in `res/shared.css`.

## 1. Design Principles

- Keep visuals clean, calm, and arctic-inspired.
- Use teal accents sparingly to highlight interactions and calls to action.
- Preserve strong readability with high contrast in both dark and light themes.
- Prefer rounded shapes and soft transitions over sharp or abrupt UI changes.

## 2. Typography

### Primary UI Font

- `Manrope`, sans-serif
- Use for body text, navigation links, labels, buttons, and utility copy.

### Display/Brand Font

- `Cormorant Garamond`, serif
- Use for logo text, key headings, and decorative emphasis.

### Type Guidance

- Body text: keep around `1rem` with line-height near `1.6`.
- UI labels and nav links: around `0.82rem` to `0.95rem`.
- Large display text: reserve for hero sections and brand moments.

## 3. Color System

Use semantic tokens, not raw hex values, in markup-specific CSS.

### 3.1 Dark Theme (default)

| Token | Value | Recommended Use |
|---|---|---|
| `--navy` | `#080d1a` | Page background |
| `--navy-mid` | `#0e1629` | Section surfaces, footer background |
| `--card-bg` | `#111c2e` | Cards and elevated containers |
| `--teal` | `#62e2e7` | Primary accents, CTA background |
| `--teal-dim` | `#2faeb5` | Secondary accent states |
| `--aurora` | `#a7f4f7` | Hover highlights, accent glow |
| `--ice` | `#e4fbfc` | Primary text on dark surfaces |
| `--white` | `#ffffff` | High-emphasis text/logo |
| `--muted` | `#8fa8b8` | Secondary text and metadata |
| `--nav-overlay` | `rgba(8, 13, 26, 0.7)` | Desktop nav translucent background |
| `--mobile-overlay` | `rgba(8, 13, 26, 0.97)` | Full-screen mobile menu overlay |

### 3.2 Light Theme (`[data-theme="light"]`)

| Token | Value | Recommended Use |
|---|---|---|
| `--navy` | `#edf7f8` | Page background |
| `--navy-mid` | `#dbecef` | Section surfaces |
| `--card-bg` | `#ffffff` | Cards and containers |
| `--teal` | `#1f9da3` | Primary accents, links, CTA |
| `--teal-dim` | `#187f84` | Secondary accent states |
| `--aurora` | `#66ccd2` | Hover highlights |
| `--ice` | `#10202d` | Primary text |
| `--white` | `#0e1c2a` | High-emphasis text |
| `--muted` | `#4e6574` | Secondary text |
| `--nav-overlay` | `rgba(237, 247, 248, 0.92)` | Desktop nav translucent background |
| `--mobile-overlay` | `rgba(237, 247, 248, 0.98)` | Full-screen mobile menu overlay |

### 3.3 RGB Tokens

These support alpha blending in borders and fills:

- `--teal-rgb`: `98, 226, 231` (dark), `31, 157, 163` (light)
- `--aurora-rgb`: `167, 244, 247` (dark), `102, 204, 210` (light)

Use like:

```css
border-color: rgba(var(--teal-rgb), 0.3);
background: rgba(var(--teal-rgb), 0.08);
```

## 4. Core Tokens

| Token | Value | Purpose |
|---|---|---|
| `--radius` | `14px` | Standard corner radius for cards/buttons |
| `--transition` | `0.35s cubic-bezier(.4,0,.2,1)` | Primary interaction transition |

## 5. Component Styling Rules

- Navigation:
  - Keep fixed nav glassy and subtle with overlay + blur.
  - Active and hover link state should use `--teal`.
- Buttons/CTAs:
  - Primary button background: `--teal`.
  - Primary button text should contrast strongly against background.
  - Hover can shift toward `--aurora` with slight lift.
- Cards:
  - Use `--card-bg` with `--radius`.
  - Keep border accents low-opacity using `rgba(var(--teal-rgb), alpha)`.
- Footer:
  - Use `--navy-mid` background and `--muted` text for low visual noise.

## 6. Motion

- Use the shared transition token for color, border, and transform changes.
- Keep micro-interactions subtle (`translateY(-1px)` style lift is enough).
- For reveals, use opacity + small upward translation.

## 7. Accessibility

- Maintain strong contrast between text and background in both themes.
- Do not rely on color alone for state; pair with underline, weight, or icon changes where possible.
- Keep touch targets around 36px to 44px minimum for mobile interactions.

## 8. Print And Merchandise Applications

Use the same brand system when producing physical items such as T-shirts, posters, stickers, and event banners.

### 8.1 Logo Usage On Apparel

- Prefer single-color logo applications for embroidery and low-cost screen printing.
- Use `--ice` logo on dark garments and `--navy` logo on light garments.
- Keep clear space around the logo at least equal to the height of the logo mark.
- Do not stretch, outline, or add glow effects to the logo.

### 8.2 T-Shirt Production Guidance

- Screen print for larger quantities; direct-to-garment for short runs and multi-color art.
- Convert artwork to vector (SVG, AI, EPS, or PDF) before vendor handoff.
- Minimum print width recommendation:
  - Left chest mark: 7 cm to 10 cm (about 2.75 in to 4 in)
  - Full front print: 25 cm to 30 cm (about 10 in to 12 in)
- For dark fabric, request an underbase so teal and aurora colors stay vivid.
- Ask for a physical sample or digital proof before full production.

### 8.3 Poster And Print Layout Guidance

- Recommended poster sizes: A3, A2, and 18 x 24 in.
- Keep a safe margin of at least 10 mm (or 0.4 in) from trim edges.
- Add 3 mm bleed on all sides for print-ready files.
- Preserve strong hierarchy:
  - Headline in display font (`Cormorant Garamond`)
  - Supporting information in `Manrope`
  - High-contrast call to action in `--teal`

### 8.4 Print Color Definitions

For vendor communication, provide both HEX and approximate CMYK values.

| Brand Color | HEX | Approx. CMYK |
|---|---|---|
| Navy | `#080d1a` | 76, 52, 0, 90 |
| Navy Mid | `#0e1629` | 66, 47, 0, 84 |
| Teal | `#62e2e7` | 57, 2, 0, 9 |
| Teal Dim | `#2faeb5` | 74, 3, 0, 29 |
| Aurora | `#a7f4f7` | 32, 1, 0, 3 |
| Ice | `#e4fbfc` | 10, 0, 0, 1 |

Notes:

- CMYK values are approximation targets; final output depends on printer profile, substrate, and ink set.
- For mission-critical color matching, request Pantone bridge suggestions from the print vendor.
- Always review a hard proof when ordering large quantities.

### 8.5 Deliverables Checklist For Vendors

- Print-ready PDF with bleed and crop marks
- Source artwork (SVG/AI/EPS)
- Font outlines or packaged fonts
- Color spec sheet (HEX + CMYK + any Pantone references)
- Placement mockups for each apparel size or poster format

## 9. Implementation Notes

- Define all theme tokens in one place (`:root` and `[data-theme="light"]`).
- Components should consume semantic tokens (`--muted`, `--card-bg`, `--teal`) rather than hard-coded hex values.
- If a new color is needed, add it as a token first, then consume it in components.
