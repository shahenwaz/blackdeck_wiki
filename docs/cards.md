# Cards Page — Developer Notes

## Data model

See `/types/cards.ts` for enums & interfaces.

- `Card.stats` holds three snapshots: BASE, MAX, UPGRADED.
- `Card.hero` distinguishes Hero vs Unit.
- Optional `attackEffect` supports FIRE / FROST / LIGHTNING / POISON.

## Adding cards

Edit `/data/cards.ts`. Keep portraits under `/public/images/cards/*` and reference via `/images/cards/name.png`.

## UI components

- `CardTile` — compact tile with rarity/faction accents and upgraded stat preview.
- `CardModal` — detail view showing Base/Max/Upgraded and skills.
- `FiltersBar` — search, faction, rarities, type, hero-only.
- `CardsGrid` — sorting + state + modal management.

## Route

`/app/cards/page.tsx` (server) → `<CardsClient data={cards} />` (client).

## Roadmap

- URL query persistence for filters.
- Foil shimmer / rarity glow micro-animations.
- Attack Pattern previews.
- Relations from Heroes to recommended Units.
