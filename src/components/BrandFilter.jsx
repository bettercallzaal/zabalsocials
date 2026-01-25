function BrandFilter({ brands, selectedBrand, onSelectBrand }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0" role="group" aria-label="Brand filter buttons">
      <button
        onClick={() => onSelectBrand(null)}
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
      {brands.map(brand => (
        <button
          key={brand.id}
          onClick={() => onSelectBrand(brand.id)}
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
  )
}

export default BrandFilter
