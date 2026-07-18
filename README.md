# Song Sleuth Component Library

The React component library behind [**Song Sleuth**](https://songsleuth.app), a
Next.js app that links your Spotify library to purchase links (Apple Music,
Discogs) for every track. These are the real, production components, extracted
into a standalone Storybook so they can be browsed on their own.

**▶ Live Storybook:** https://ayoolanfsd.github.io/song-sleuth-storybook/
&nbsp;·&nbsp; **Live app:** https://songsleuth.app

## Stack

- **React 19** + **Next.js 16** (App Router components)
- **TypeScript**
- **Tailwind CSS**
- **Storybook 10** (`@storybook/nextjs-vite`), with the a11y and docs addons

## What's inside

16 components with stories, spanning primitives, feature UI, and marketing sections:

| Area | Components |
| --- | --- |
| **UI primitives** | Button, Input, Card, Table, Avatar, Dropdown, ProfileDropdown |
| **Library / player** | LibrarySidebar, SongLinkIcon, PlaylistHeader |
| **Account** | AccountSidebar, SidebarMenu, LinkedAccountItem |
| **Marketing** | HeroSection, FeatureSection, CTASection |

Stories exercise the real prop surfaces (variants, states, and controls) via
Storybook's `argTypes`, with autodocs and accessibility checks enabled.

## Running locally

Requires **Node ≥ 22.12** (see `.nvmrc`).

```bash
nvm use          # Node 22
npm install
npm run storybook        # dev server at http://localhost:6006
npm run build-storybook  # static build → storybook-static/
```

## Deployment

Pushing to `main` builds the static Storybook and publishes it to GitHub Pages
via [`.github/workflows/deploy-storybook.yml`](.github/workflows/deploy-storybook.yml).
Enable it once under **Settings → Pages → Source → GitHub Actions**.

## Note

This is a showcase extract, so app-specific wiring (auth, data fetching) is
stubbed. For example, the profile menu's sign-out is a no-op here. The components are
otherwise unchanged from the app.
