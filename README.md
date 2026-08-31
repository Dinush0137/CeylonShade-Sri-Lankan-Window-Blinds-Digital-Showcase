# 🪟 CeylonShade — Sri Lankan Window Blinds Digital Showcase

A modern, responsive digital showcase and product catalogue for **CeylonShade**, a Sri Lankan window blinds brand. Built with React + Vite, this web application presents the product range, supports custom sizing, and allows customers to submit product inquiries directly from the site.

---

## ✨ Features

- **Hero Landing Page** — Visually rich hero section with brand messaging and call-to-action
- **Product Category Grid** — Browse products by category with a dynamic grid layout
- **Featured Products** — Highlighted/recommended products section
- **Trust Row** — Social proof and brand trust indicators
- **Product Catalogue** — Full product listing with category tabs, filters, and sorting
- **Custom Sizing Tool** — Step-by-step wizard for custom blind dimensions and weave density selection
- **Inquiry Modal** — Per-product inquiry form available site-wide via React Context
- **Responsive Design** — Mobile-first layout across all pages

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18 | UI Framework |
| [Vite](https://vitejs.dev/) | 8.2 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | 7.18 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first styling |
| [PostCSS](https://postcss.org/) | 8.5 | CSS processing |
| [TypeScript](https://www.typescriptlang.org/) | 6.0 | Type checking |

---

## 📁 Project Structure

```
ceylonshade-landing/
├── public/                   # Static assets
├── src/
│   ├── assets/               # Images and media
│   ├── components/
│   │   ├── Header.jsx        # Global navigation header
│   │   ├── Footer.jsx        # Global footer
│   │   └── InquiryModal/     # Product inquiry modal (global)
│   ├── context/
│   │   └── InquiryModalContext.jsx  # Global modal state
│   ├── pages/
│   │   ├── Landing/          # Home page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── CategoryGrid.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── TrustRow.jsx
│   │   │   ├── BottomCta.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── Catalogue/        # Product catalogue page
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── CategoryTabs.jsx
│   │   │   ├── FiltersSort.jsx
│   │   │   └── PageHeader.jsx
│   │   └── CustomSizing/     # Custom sizing wizard
│   │       ├── DimensionsCard.jsx
│   │       ├── WeaveDensitySelector.jsx
│   │       ├── SummaryCard.jsx
│   │       ├── StepIndicator.jsx
│   │       └── InfoBanner.jsx
│   ├── App.jsx               # Root component & routes
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/CeylonShade-Sri-Lankan-Window-Blinds-Digital-Showcase.git

# 2. Navigate into the project folder
cd CeylonShade-Sri-Lankan-Window-Blinds-Digital-Showcase/ceylonshade-landing

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🗺️ Routes

| Route | Page |
|---|---|
| `/` | Home / Landing page |
| `/catalogue` | Full product catalogue with filters |
| `/custom-sizing` | Custom sizing wizard |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or raise an issue.

---

## 📄 License

This project is for showcase/demonstration purposes. All rights reserved © CeylonShade.
