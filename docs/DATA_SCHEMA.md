# Data Schema Documentation

This document explains the structure of `data/socials.json` and how to add or update social media links.

## Overview

The `socials.json` file contains all social media links for the Zaal ecosystem, organized by brand. Each brand has multiple platforms (social media accounts, websites, etc.).

## Schema Structure

```json
{
  "brands": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string",
      "platforms": [...]
    }
  ]
}
```

## Brand Object

Each brand represents a distinct entity in the Zaal ecosystem.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ Yes | Unique identifier (lowercase, no spaces). Used for filtering. |
| `name` | string | ✅ Yes | Display name shown in the UI |
| `description` | string | ✅ Yes | Brief description of the brand's purpose |
| `color` | string | ✅ Yes | Hex color code (e.g., `#3B82F6`) used for brand theming |
| `platforms` | array | ✅ Yes | Array of platform objects (see below) |

### Example

```json
{
  "id": "bettercallzaal",
  "name": "BetterCallZaal",
  "description": "Personal brand focused on thought leadership, ZAO reflections, and Year of the ZAO",
  "color": "#3B82F6",
  "platforms": [...]
}
```

## Platform Object

Each platform represents a social media account, website, or communication channel.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `platform` | string | ✅ Yes | Platform name (e.g., "Twitter (X)", "Website", "LinkedIn") |
| `handle` | string | ✅ Yes | Username or display text (e.g., "@BetterCallZaal", "TheZAO.com") |
| `url` | string | ✅ Yes | Full URL to the platform (must be valid and accessible) |
| `purpose` | string | ✅ Yes | Brief description of what this platform is used for |
| `notes` | string | ❌ No | Optional internal notes or future plans |
| `icon` | string | ✅ Yes | Icon identifier (see Valid Icons below) |
| `isPrimary` | boolean | ❌ No | If `true`, marks this as a primary/recommended platform |

### Example

```json
{
  "platform": "Twitter (X)",
  "handle": "@BetterCallZaal",
  "url": "https://x.com/BetterCallZaal",
  "purpose": "Personal + thought leadership, ZAO reflections, Year of the ZAO",
  "notes": "Primary BCZ channel",
  "icon": "twitter",
  "isPrimary": true
}
```

## The `isPrimary` Flag

**Purpose:** Indicates which platforms are the main entry points for a brand.

**When to use:**
- Official websites (always mark as primary)
- Main social media channels where the brand is most active
- "Start here" destinations for new followers

**When NOT to use:**
- Supporting or secondary platforms
- Experimental or seasonal channels
- Archive or legacy accounts

**Example:**
```json
{
  "platform": "Website",
  "handle": "TheZAO.com",
  "url": "https://www.thezao.com/",
  "purpose": "Official ZAO DAO website — about, community, calendar, leaderboard",
  "notes": "Start here for ZAO ecosystem overview",
  "icon": "globe",
  "isPrimary": true
}
```

## Valid Icon Names

The following icon identifiers are supported (mapped to Lucide React icons):

| Icon Value | Visual Icon | Common Use Cases |
|------------|-------------|------------------|
| `twitter` | Twitter/X logo | Twitter/X accounts |
| `instagram` | Instagram logo | Instagram accounts |
| `youtube` | YouTube logo | YouTube channels |
| `twitch` | Twitch logo | Twitch channels |
| `globe` | Globe icon | Websites, LinkedIn, generic links |
| `calendar` | Calendar icon | Luma, Google Calendar, event platforms |
| `newspaper` | Newspaper icon | Paragraph, newsletters, blogs |
| `discord` | Message circle | Discord servers |
| `telegram` | Send icon | Telegram groups |
| `farcaster` | Message circle | Farcaster/Warpcast profiles |
| `tiktok` | Music note | TikTok accounts |
| `threads` | Message circle | Threads accounts |

**Note:** If you need a new icon, it must be added to the `iconMap` in `src/App.jsx` first.

## How to Add a New Platform

1. **Find the brand** in `data/socials.json`
2. **Add a new object** to the `platforms` array:

```json
{
  "platform": "LinkedIn",
  "handle": "Your Name",
  "url": "https://linkedin.com/in/yourprofile",
  "purpose": "Professional networking and updates",
  "notes": "Optional notes here",
  "icon": "globe",
  "isPrimary": false
}
```

3. **Verify the URL** works (no 404s)
4. **Choose the correct icon** from the table above
5. **Test locally** with `npm run dev`
6. **Commit and push** to deploy

## How to Add a New Brand

1. **Add a new object** to the `brands` array in `data/socials.json`:

```json
{
  "id": "newbrand",
  "name": "New Brand Name",
  "description": "Brief description of this brand's purpose",
  "color": "#FF6B6B",
  "platforms": [
    {
      "platform": "Website",
      "handle": "NewBrand.com",
      "url": "https://www.newbrand.com",
      "purpose": "Official website",
      "icon": "globe",
      "isPrimary": true
    }
  ]
}
```

2. **Choose a unique `id`** (lowercase, no spaces)
3. **Pick a brand color** (hex code) that doesn't conflict with existing brands
4. **Add at least one platform** (preferably the primary website)
5. **Test locally** with `npm run dev`
6. **Commit and push** to deploy

## Validation Checklist

Before committing changes to `socials.json`:

- ✅ All URLs are valid and return 200 status
- ✅ All required fields are present
- ✅ JSON syntax is valid (no trailing commas, quotes are correct)
- ✅ Icon names match the valid icon list
- ✅ Brand colors are hex codes (e.g., `#3B82F6`)
- ✅ `isPrimary` is only used for main entry points
- ✅ Tested locally with `npm run dev`

## Common Mistakes to Avoid

❌ **Using curly quotes** — Use straight quotes (`"`) not curly quotes (`"` or `"`)  
❌ **Trailing commas** — JSON doesn't allow commas after the last item in an array/object  
❌ **Invalid URLs** — Always test links before adding them  
❌ **Wrong icon names** — Use exact strings from the Valid Icons table  
❌ **Missing required fields** — All fields marked "Required" must be present  
❌ **Duplicate brand IDs** — Each brand must have a unique `id`  

## Questions?

If you're unsure about any changes, refer to existing entries in `socials.json` as examples, or consult the [CONTRIBUTING.md](../CONTRIBUTING.md) guide.
