function BrandCardSkeleton() {
  return (
    <article className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-white/20 animate-pulse">
        <div className="h-9 bg-gray-700/50 rounded w-48 mb-2"></div>
        <div className="h-5 bg-gray-700/30 rounded w-full max-w-md"></div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 animate-pulse">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-gray-700/50 rounded-lg flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-5 bg-gray-700/50 rounded w-24 mb-2"></div>
                  <div className="h-4 bg-gray-700/30 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-gray-700/20 rounded w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default BrandCardSkeleton
