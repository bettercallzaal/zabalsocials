# Changelog

All notable changes to the Zaal Socials project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.0.3] - 2026-01-17

### Added
- LinkedIn profile for BetterCallZaal
- Official website for The ZAO DAO (https://www.thezao.com/)
- Official website for ZAO Festivals (https://zaofestivals.com/)
- `isPrimary` flag to mark primary/recommended platforms across all brands
- Primary platform indicators for main entry points

### Changed
- Reordered platforms to show websites first for The ZAO DAO and ZAO Festivals
- Updated WaveWarZ website purpose description for clarity
- Improved purpose text for several platforms

**Commit:** [4192639](https://github.com/bettercallzaal/zabalsocials/commit/4192639) - "content: expand and validate social links across Zabal ecosystem"

## [1.0.2] - 2026-01-17

### Added
- Static assets for SEO and social sharing:
  - `robots.txt` for search engine crawling
  - `sitemap.xml` for search engine indexing
  - `og.png` (1200×630) for social media previews
  - `favicon.png` (32×32) for browser tabs
  - `apple-touch-icon.png` (180×180) for iOS bookmarks

### Changed
- Updated `index.html` to reference new favicon files
- Replaced default Vite favicon with custom "Z" icon

**Commit:** [6dc0fe8](https://github.com/bettercallzaal/zabalsocials/commit/6dc0fe8) - "feat: add static assets for SEO and social sharing"

## [1.0.1] - 2026-01-17

### Added
- Comprehensive SEO and social metadata in `index.html`:
  - Meta description
  - Canonical URL
  - OpenGraph tags (og:type, og:title, og:description, og:url, og:image)
  - Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)

### Changed
- Enhanced discoverability for search engines and social platforms

**Commit:** [baff623](https://github.com/bettercallzaal/zabalsocials/commit/baff623) - "feat: add SEO and social metadata"

## [1.0.0] - 2026-01-17

### Added
- ESM module configuration in `package.json`
- `"type": "module"` to align with ESM syntax used in config files

### Fixed
- Eliminated Node.js module-type warnings during build
- Resolved ambiguity in module type detection

**Commit:** [657fa26](https://github.com/bettercallzaal/zabalsocials/commit/657fa26) - "chore: align package.json with ESM config"

## [0.1.0] - Initial Release

### Added
- Initial project setup with React 18, Vite, and TailwindCSS
- Multi-brand social media link hub for Zaal ecosystem
- Five brands: BetterCallZaal, The ZAO DAO, ZAO Festivals, ZAO Calendar, WaveWarZ
- Search and filter functionality
- Responsive design with gradient UI
- JSON-based data structure for easy updates
- Lucide React icons for platform identification
- Deployed to Vercel at https://zabalsocials.vercel.app/

### Project Structure
- `/data/socials.json` - Centralized social media data
- `/src/App.jsx` - Main React component
- `/public/` - Static assets
- Vite build configuration
- TailwindCSS styling

---

## Legend

- **Added** - New features or files
- **Changed** - Changes to existing functionality
- **Deprecated** - Features that will be removed in future versions
- **Removed** - Removed features or files
- **Fixed** - Bug fixes
- **Security** - Security improvements
