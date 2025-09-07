# BlackDeck Wiki

A modern, fast, and community-driven **Wiki for the Black Deck card game**, built with:

- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH color tokens
- [shadcn/ui](https://ui.shadcn.com/) for polished UI components

This project aims to provide players with a clean, mobile-friendly wiki to explore **cards, factions, rarities, and game mechanics** in depth.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/shahenwaz/blackdeck_wiki.git
cd blackdeck_wiki
```

### 2. Install dependencies

```bash
npm install
```

(or `pnpm install` / `yarn install` depending on your setup)

### 3. Run development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
app/            # Next.js App Router pages
components/     # Reusable UI components (CardTile, Filters, etc.)
data/           # Static card data (heroes, units, stats, etc.)
lib/            # Utilities (colors, helpers, etc.)
types/          # TypeScript types and enums
docs/           # Developer documentation
public/         # Static assets (images, icons, etc.)
```

- `docs/cards.md` → Developer notes about the Cards page
- More docs coming soon as features expand

## ✨ Features (WIP)

- Card browser with factions, rarity, hero/unit distinction
- Advanced filters (rarity, type, hero-only, etc.)
- Interactive card details (base/max/upgraded stats, skills)
- Dark theme with smooth Tailwind transitions

## 📝 Contributing

Pull requests are welcome!
If you want to add cards or improve UI/UX, check the `docs/` folder first.

## 📜 License

MIT License © 2025 Shahenwaz Muzahid

---
