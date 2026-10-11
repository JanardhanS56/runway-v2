# Runway

> A calm, visual cockpit for making better decisions with your money, time, and energy.

**Live demo:** [runway-pexz3glf8-ctrl-shift-esc.vercel.app](https://runway-pexz3glf8-ctrl-shift-esc.vercel.app)

## What is Runway?

Runway is a lightweight personal decision system designed to make planning feel clearer and less overwhelming. It turns everyday trade-offs into an approachable set of views:

- **Cockpit** — a quick overview of current runway, momentum, and the next useful action.
- **Money** — see where available fuel goes, including subscriptions and commitments.
- **Goals** — make room for meaningful goals without turning progress into pressure.
- **Health** — understand the relationship between capacity, pace, and runway.
- **Decision Lab** — explore a decision before committing to it.

The product is intentionally calm: high-signal summaries, progressive disclosure, and clear next steps instead of dense spreadsheets or noisy dashboards.

## Product walkthrough

1. Start on the [Cockpit](https://runway-pexz3glf8-ctrl-shift-esc.vercel.app/) for the current state.
2. Open [Money](https://runway-pexz3glf8-ctrl-shift-esc.vercel.app/money) to review spending fuel, subscriptions, and upcoming commitments.
3. Use [Goals](https://runway-pexz3glf8-ctrl-shift-esc.vercel.app/goals) to adjust goal pace and review progress.
4. Visit [Health](https://runway-pexz3glf8-ctrl-shift-esc.vercel.app/health) to inspect runway and capacity signals.
5. Try [Decision Lab](https://runway-pexz3glf8-ctrl-shift-esc.vercel.app/decision-lab) to compare a decision before taking action.

## Highlights

- Responsive desktop and mobile layouts
- Dark-first visual system with a lime signal accent
- Accessible semantic navigation and controls
- Interactive goal pace slider
- Interactive money tabs for subscriptions and commitments
- Health runway scenarios and decision exploration
- Fast Next.js App Router experience
- Vercel-ready deployment

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui primitives
- Lucide icons
- Vercel deployment and Analytics

## Local development

### Prerequisites

- Node.js 20 or newer
- pnpm 12 or newer

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production verification

```bash
pnpm build
pnpm start
```

## Project structure

```text
app/
├── page.tsx                 # Cockpit overview
├── money/page.tsx           # Money, subscriptions, commitments
├── goals/page.tsx           # Goals and pace controls
├── health/page.tsx          # Health and runway view
├── decision-lab/page.tsx    # Decision exploration flow
├── globals.css              # Shared design system and responsive styling
└── layout.tsx               # Root metadata and application shell
public/                     # Favicon and static assets
```

## Design principles

- **Clarity over complexity:** show the useful signal first.
- **Progress, not pressure:** frame movement as guidance, not judgment.
- **Calm confidence:** use contrast, spacing, and restrained color to create trust.
- **Responsive by default:** every key flow works across desktop and mobile widths.

## Evaluation checklist

- [x] Live public deployment linked above
- [x] Core sections are navigable from the main cockpit
- [x] Interactive goal pace control
- [x] Money subscription and commitment tabs
- [x] Health runway scenario interaction
- [x] Decision Lab experience
- [x] Responsive mobile layouts
- [x] Accessible labels for interactive controls
- [x] Production build verification supported by the project scripts

## Status

This is a polished hackathon prototype focused on the product experience and interaction model. The current data is intentionally local demo data; a future production version could add authentication, persistent user data, and integrations with financial providers.

## License

No license has been declared yet. Add a license before accepting external contributions or redistributing the project.
