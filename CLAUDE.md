# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build static site (output: `build/`)
- `npm run preview` — Preview production build

No test runner or linter is configured.

## Architecture

Static personal portfolio site built with SvelteKit 2 + Svelte 5, using `adapter-static` for fully prerendered output. Deployed to GitHub Pages via Actions on push to `main`.

### Content system

Project content lives in `src/content/projects/*.svx` (mdsvex markdown files). Each `.svx` file has YAML frontmatter with fields defined by the `Project` interface in `src/lib/data/content.ts`: `name`, `slug`, `order`, `type`, `url`, `github`, `summary`, `tags`.

The homepage (`src/routes/+page.ts`) eagerly imports all `.svx` files via `import.meta.glob`, extracts metadata, and sorts by `order`. Individual project pages (`src/routes/projects/[slug]/+page.ts`) lazy-load the matching `.svx` and render it as a Svelte component. The `entries()` export generates static paths for prerendering.

### Layout

- `+layout.svelte` — Flex layout with sticky `Sidebar` (desktop) and `MobileHeader` (mobile, ≤720px)
- `+page.svelte` — Homepage with intro header, experience section, and project list
- Global styles in `src/app.css`; component styles are scoped via Svelte `<style>` blocks
- CSS variables for theming defined in `:root` (`--bg`, `--text`, `--secondary`, `--blue`, `--purple`, `--rule`)

### Adding a project

Create a new `.svx` file in `src/content/projects/` with the standard frontmatter. Set `order` to control homepage sort position. The file is automatically picked up by the glob imports — no registration needed.
