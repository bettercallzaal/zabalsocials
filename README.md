# Zaal Socials 🌐

A centralized hub for all social media links across the Zaal ecosystem. This modern web application provides an organized, searchable interface to access all social platforms for BetterCallZaal, The ZAO DAO, ZAO Festivals, ZAO Calendar, and WaveWarZ.

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

To add new platforms or brands, edit `data/socials.json`:

### Adding a New Platform to an Existing Brand

```json
{
  "platform": "LinkedIn",
  "handle": "@YourHandle",
  "url": "https://linkedin.com/in/yourhandle",
  "purpose": "Professional networking and updates",
  "notes": "Optional notes about this platform",
  "icon": "globe"
}
```

### Adding a New Brand

```json
{
  "id": "newbrand",
  "name": "New Brand Name",
  "description": "Description of this brand",
  "color": "#FF6B6B",
  "platforms": [
    // ... platform objects
  ]
}
```

### Available Icons

The following icons are available (from Lucide React):
- `twitter` - Twitter/X
- `instagram` - Instagram
- `youtube` - YouTube
- `twitch` - Twitch
- `globe` - Generic website
- `calendar` - Calendar platforms
- `newspaper` - Newsletter/blog platforms
- `discord` - Discord
- `telegram` - Telegram
- `farcaster` - Farcaster (uses MessageCircle)
- `tiktok` - TikTok (uses Music)
- `threads` - Threads (uses MessageCircle)

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

This app can be deployed to any static hosting service:

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### Vercel
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist/` folder to a `gh-pages` branch

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

To add or update social links:
1. Edit `data/socials.json`
2. Test locally with `npm run dev`
3. Commit and push changes

---

Built with ❤️ for the Zaal Ecosystem
