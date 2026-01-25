import { Search } from 'lucide-react'

function SearchBar({ value, onChange }) {
  return (
    <div className="flex-1 relative">
      <label htmlFor="search-input" className="sr-only">Search brands, platforms, or purposes</label>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
      <input
        id="search-input"
        type="search"
        placeholder="Search brands, platforms, or purposes..."
        value={value}
        onChange={onChange}
        aria-label="Search brands, platforms, or purposes"
        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 focus:border-transparent transition-shadow"
      />
    </div>
  )
}

export default SearchBar
