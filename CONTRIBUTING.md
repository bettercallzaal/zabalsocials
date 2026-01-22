# Contributing to Zaal Socials

Thank you for contributing to the Zaal Socials project! This guide will help you add or update social media links safely and efficiently.

## Quick Start

The most common contribution is updating social media links in `data/socials.json`. Here's how:

1. **Read the schema documentation**: [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md)
2. **Make your changes** to `data/socials.json`
3. **Test locally** (see below)
4. **Submit a pull request** (see checklist below)

## Adding or Updating Social Links

### Step 1: Edit the Data File

Open `data/socials.json` and locate the brand you want to update.

**To add a new platform to an existing brand:**
```json
{
  "platform": "Platform Name",
  "handle": "@YourHandle",
  "url": "https://example.com/yourprofile",
  "purpose": "Brief description of what this platform is for",
  "notes": "Optional internal notes",
  "icon": "globe",
  "isPrimary": false
}
```

**To add a new brand:**
```json
{
  "id": "uniqueid",
  "name": "Brand Name",
  "description": "What this brand is about",
  "color": "#3B82F6",
  "platforms": [...]
}
```

See [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md) for complete field documentation.

### Step 2: Test Locally

Before submitting your changes, test them locally:

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev

# Open http://localhost:5173 in your browser
```

**What to check:**
- All new links are clickable and work
- Brand colors display correctly
- Search and filter functionality still works
- Mobile view looks good (resize your browser)
- No console errors in browser DevTools

### Step 3: Validate Your Changes

Use this checklist before committing:

- [ ] All URLs are valid and return 200 (no 404 errors)
- [ ] JSON syntax is correct (no trailing commas, proper quotes)
- [ ] All required fields are present (see DATA_SCHEMA.md)
- [ ] Icon names are valid (see DATA_SCHEMA.md for list)
- [ ] `isPrimary` flag is only used for main entry points
- [ ] Tested locally with `npm run dev`
- [ ] No changes to UI, logic, or styling (data only)

### Step 4: Submit Your Changes

```bash
# Stage your changes
git add data/socials.json

# Commit with a clear message
git commit -m "content: add [Platform] link for [Brand]"

# Push to your branch
git push origin your-branch-name
```

Then create a pull request on GitHub.

## Pull Request Checklist

When submitting a PR, ensure:

- [ ] **Links verified** — All new URLs tested and working
- [ ] **No UI changes** — Only data modifications
- [ ] **JSON validates** — No syntax errors
- [ ] **Tested locally** — Ran `npm run dev` and checked the site
- [ ] **Clear description** — PR explains what was added/changed

## How Deployments Work

This project uses **automatic deployment via Vercel**:

1. You push changes to the `main` branch (or merge a PR)
2. Vercel automatically builds and deploys the site
3. Changes appear at https://zabalsocials.vercel.app/ within ~1 minute
4. No manual deployment steps required

**Important:** Always test locally before pushing to `main` to avoid breaking the production site.

## What NOT to Change

Unless explicitly authorized, do NOT modify:

- ❌ React components (`src/App.jsx`, `src/main.jsx`)
- ❌ Styling or CSS (`src/index.css`, Tailwind classes)
- ❌ Configuration files (`vite.config.js`, `tailwind.config.js`, etc.)
- ❌ Build scripts or dependencies (`package.json`)
- ❌ Static assets (`public/` directory)

**Only modify `data/socials.json` unless you have explicit approval.**

## Common Issues

### JSON Syntax Errors

**Problem:** Site breaks after your changes.

**Solution:**
- Check for trailing commas (not allowed in JSON)
- Ensure all strings use straight quotes (`"`) not curly quotes (`"`)
- Validate JSON syntax with a tool like [JSONLint](https://jsonlint.com/)

### Link Not Working

**Problem:** Added a link but it doesn't appear or work.

**Solution:**
- Verify the URL is correct and accessible
- Check that all required fields are present
- Ensure the icon name is valid (see DATA_SCHEMA.md)
- Clear your browser cache and refresh

### Icon Not Showing

**Problem:** Platform shows a generic globe icon instead of the correct one.

**Solution:**
- Check the icon name matches exactly (case-sensitive)
- See [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md) for valid icon names
- If you need a new icon, it must be added to `src/App.jsx` first

## Need Help?

- **Schema questions:** See [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md)
- **Examples:** Look at existing entries in `data/socials.json`
- **Technical issues:** Open an issue on GitHub

## Code of Conduct

Be respectful, collaborative, and constructive. This is a professional project representing the Zaal ecosystem.

---

**Thank you for contributing to Zaal Socials!** 🌐
