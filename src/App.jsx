// === Imports ===
import { useState } from 'react'
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Twitch,
  Globe,
  Calendar,
  Newspaper,
  MessageCircle,
  Send,
  Music,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react'
import socialsData from '../data/socials.json'

// === Icon Mapping ===
// Maps icon string identifiers from socials.json to Lucide React components
// See docs/DATA_SCHEMA.md for valid icon names
const iconMap = {
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  twitch: Twitch,
  globe: Globe,
  calendar: Calendar,
  newspaper: Newspaper,
  discord: MessageCircle,
  telegram: Send,
  farcaster: MessageCircle,
  tiktok: Music,
  threads: MessageCircle,
}

// === Main Component ===
function App() {
  // === State Management ===
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // === Filtering Logic ===
  // Filter brands by search term (searches across brand name, description, platform names, and purposes)
  const filteredBrands = socialsData.brands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.platforms.some(p => 
      p.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.purpose.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  // Combine brand filter with search filter
  const displayBrands = selectedBrand 
    ? socialsData.brands.filter(b => b.id === selectedBrand)
    : filteredBrands

  // === Rendering ===
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Skip to main content link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Skip to main content
      </a>
      
      {/* Background pattern: SVG grid with low opacity for subtle texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* === Header Section === */}
        <header className="text-center mb-16" role="banner">
          <h1 className="text-6xl font-bold mb-4 gradient-text from-blue-400 via-purple-400 to-pink-400">
            Zaal Socials
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your centralized hub for all social media links across the Zaal ecosystem
          </p>
        </header>

        {/* === Search and Filter Controls === */}
        <nav className="mb-8 flex flex-col sm:flex-row gap-4" role="navigation" aria-label="Search and filter controls">
          <div className="flex-1 relative">
            <label htmlFor="search-input" className="sr-only">Search brands, platforms, or purposes</label>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
            <input
              id="search-input"
              type="search"
              placeholder="Search brands, platforms, or purposes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search brands, platforms, or purposes"
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 focus:border-transparent transition-shadow"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0" role="group" aria-label="Brand filter buttons">
            <button
              onClick={() => setSelectedBrand(null)}
              aria-pressed={!selectedBrand}
              aria-label="Show all brands"
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                !selectedBrand 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Brands
            </button>
            {socialsData.brands.map(brand => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                aria-pressed={selectedBrand === brand.id}
                aria-label={`Filter to show only ${brand.name}`}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  selectedBrand === brand.id 
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </nav>

        {/* === Brand Cards Grid === */}
        <main id="main-content" role="main" aria-label="Social media links by brand">
        <div className="grid gap-8">
          {displayBrands.map(brand => (
            <article 
              key={brand.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              aria-labelledby={`brand-${brand.id}-heading`}
            >
              <div 
                className="p-6 border-b border-white/20"
                style={{ 
                  background: `linear-gradient(135deg, ${brand.color}20 0%, transparent 100%)`
                }}
              >
                <h2 id={`brand-${brand.id}-heading`} className="text-3xl font-bold text-white mb-2">{brand.name}</h2>
                <p className="text-gray-300">{brand.description}</p>
              </div>

              <div className="p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label={`${brand.name} social media links`}>
                  {brand.platforms.map((platform, idx) => {
                    const Icon = iconMap[platform.icon] || Globe
                    return (
                      <li key={idx}>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${brand.name} on ${platform.platform}: ${platform.handle}`}
                        className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 block"
                      >
                        <div className="flex items-start gap-3">
                          <div 
                            className="p-2 rounded-lg flex-shrink-0"
                            style={{ backgroundColor: `${brand.color}30` }}
                            aria-hidden="true"
                          >
                            <Icon className="w-5 h-5" style={{ color: brand.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-white truncate">{platform.platform}</h3>
                              <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                            </div>
                            <p className="text-sm text-gray-400 mb-2 truncate">{platform.handle}</p>
                            <p className="text-xs text-gray-500 line-clamp-2">{platform.purpose}</p>
                            {platform.notes && (
                              <p className="text-xs text-purple-400 mt-2 line-clamp-1">
                                💡 {platform.notes}
                              </p>
                            )}
                          </div>
                        </div>
                      </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* === Empty State === */}
        {displayBrands.length === 0 && (
          <div className="text-center py-16" role="status" aria-live="polite">
            <p className="text-gray-400 text-lg">No results found. Try a different search term.</p>
          </div>
        )}
        </main>

        {/* === Footer === */}
        <footer className="mt-16 text-center text-gray-500 text-sm" role="contentinfo">
          <p>© {new Date().getFullYear()} Zaal Ecosystem. All rights reserved.</p>
          <p className="mt-2">Built with React + TailwindCSS + Lucide Icons</p>
        </footer>
      </div>
    </div>
  )
}

export default App
