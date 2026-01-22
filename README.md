# Zaal Socials 🌐

A centralized hub for all social media links across the Zaal ecosystem. This modern web application provides an organized, searchable interface to access all social platforms for BetterCallZaal, The ZAO DAO, ZAO Festivals, ZAO Calendar, and WaveWarZ.

**🔗 Live Site:** https://zabalsocials.vercel.app/

## 📚 Documentation

- **[Data Schema Guide](docs/DATA_SCHEMA.md)** - Complete documentation for `socials.json` structure
- **[Contributing Guide](CONTRIBUTING.md)** - How to add or update social links
- **[Changelog](CHANGELOG.md)** - Project history and release notes

## 🎯 Features

- **Multi-Brand Organization**: Separate sections for each brand in the Zaal ecosystem
- **Search & Filter**: Quickly find specific platforms or purposes
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Easy to Update**: Simple JSON data structure for adding/editing links

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to this repository:
```bash
cd /Users/zaalpanthaki/Documents/ZaalSocials
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy.

## 📁 Project Structure

```
ZaalSocials/
├── data/
│   └── socials.json          # All social media links data
├── src/
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

## 📝 Adding New Social Links

**For detailed instructions, see the [Data Schema Guide](docs/DATA_SCHEMA.md) and [Contributing Guide](CONTRIBUTING.md).**

Quick example for adding a new platform:

```json
{
  "platform": "LinkedIn",
  "handle": "@YourHandle",
  "url": "https://linkedin.com/in/yourhandle",
  "purpose": "Professional networking and updates",
  "notes": "Optional notes about this platform",
  "icon": "globe",
  "isPrimary": false
}
```

See [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md) for:
- Complete field documentation
- Available icon names
- `isPrimary` flag usage
- Validation checklist

## 🎨 Customization

### Brand Colors

Each brand has a color property in `socials.json`. These colors are used for:
- Platform icon backgrounds
- Gradient accents in brand cards
- Visual brand identity

### Styling

The app uses TailwindCSS for styling. Modify `tailwind.config.js` to customize:
- Color schemes
- Fonts
- Spacing
- Breakpoints

## 🌐 Deployment

**This project is deployed to Vercel with automatic deployments.**

- **Production URL:** https://zabalsocials.vercel.app/
- **Deployment:** Automatic on push to `main` branch
- **Build Command:** `npm run build`
- **Output Directory:** `dist/`

### How Deployments Work

1. Push changes to the `main` branch (or merge a PR)
2. Vercel automatically detects the change
3. Vercel runs `npm run build`
4. Site updates at https://zabalsocials.vercel.app/ within ~1 minute

**No manual deployment steps required.**

### Alternative Hosting

This app can also be deployed to other static hosting services (Netlify, GitHub Pages, etc.) by building with `npm run build` and deploying the `dist/` folder.

## 📊 Current Brands

1. **BetterCallZaal** - Personal brand for thought leadership and ZAO reflections
2. **The ZAO DAO** - Official DAO communications and ecosystem coordination
3. **ZAO Festivals** - Event coverage for ZAOCHELLA, ZAO-PALOOZA, etc.
4. **ZAO Calendar** - Master event calendar for all ZAO projects
5. **WaveWarZ** - DJ battle platform with wagering and live streaming

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing

## 📄 License

Private repository for Zaal's social media management.

## 🤝 Contributing

**See the [Contributing Guide](CONTRIBUTING.md) for detailed instructions.**

Quick steps:
1. Read [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md) for schema documentation
2. Edit `data/socials.json`
3. Test locally with `npm run dev`
4. Verify all links work
5. Commit and push changes

Changes pushed to `main` will automatically deploy to production via Vercel.

---

Built with ❤️ for the Zaal Ecosystem
