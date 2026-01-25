import { useState } from 'react'
import socialsData from '../data/socials.json'
import { useFilteredBrands } from './hooks/useFilteredBrands'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BrandFilter from './components/BrandFilter'
import BrandCard from './components/BrandCard'
import EmptyState from './components/EmptyState'
import Footer from './components/Footer'

// === Analytics Helper ===
// Centralized function for tracking events with Plausible Analytics
// Fails silently if Plausible is not loaded (e.g., blocked by ad blockers)
const trackEvent = (eventName, props = {}) => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props })
    // Log events in development for debugging
    if (import.meta.env.DEV) {
      console.log('[Analytics]', eventName, props)
    }
  }
}

// === Main Component ===
function App() {
  // === State Management ===
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // === Analytics: Search Usage Tracking ===
  // Debounced search tracking to avoid excessive events
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchTerm(query)
    
    // Track search usage after user stops typing (debounced via setTimeout)
    if (query.length > 0) {
      // Clear previous timeout if user is still typing
      if (window.searchTimeout) clearTimeout(window.searchTimeout)
      
      window.searchTimeout = setTimeout(() => {
        // Calculate if search has results
        const hasResults = socialsData.brands.some(brand => 
          brand.name.toLowerCase().includes(query.toLowerCase()) ||
          brand.description.toLowerCase().includes(query.toLowerCase()) ||
          brand.platforms.some(p => 
            p.platform.toLowerCase().includes(query.toLowerCase()) ||
            p.purpose.toLowerCase().includes(query.toLowerCase())
          )
        )
        
        // Track search event with privacy-friendly metadata
        trackEvent('Search Used', {
          query_length: query.length,
          has_results: hasResults
        })
      }, 1000) // 1 second debounce
    }
  }

  // === Analytics: Brand Filter Tracking ===
  const handleBrandFilterClick = (brandId) => {
    const isActivating = brandId !== selectedBrand
    
    // Track filter usage
    trackEvent('Brand Filter Used', {
      brand: brandId || 'all',
      active: isActivating
    })
    
    setSelectedBrand(brandId)
  }

  // === Analytics: Social Link Click Tracking ===
  const handleLinkClick = (brand, platform) => {
    trackEvent('Social Link Click', {
      brand: brand.name,
      platform: platform.platform,
      isPrimary: platform.isPrimary || false,
      url: platform.url
    })
  }

  // === Filtering Logic ===
  const { filteredBrands, hasResults } = useFilteredBrands(
    socialsData.brands,
    searchTerm,
    selectedBrand
  )

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
        <Header />

        <nav className="mb-8 flex flex-col sm:flex-row gap-4" role="navigation" aria-label="Search and filter controls">
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
          <BrandFilter 
            brands={socialsData.brands}
            selectedBrand={selectedBrand}
            onSelectBrand={handleBrandFilterClick}
          />
        </nav>

        <main id="main-content" role="main" aria-label="Social media links by brand">
          <div className="grid gap-8">
            {filteredBrands.map(brand => (
              <BrandCard 
                key={brand.id}
                brand={brand}
                onLinkClick={handleLinkClick}
              />
            ))}
          </div>

          {!hasResults && <EmptyState />}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
