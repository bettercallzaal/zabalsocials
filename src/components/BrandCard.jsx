import { memo } from 'react'
import PlatformCard from './PlatformCard'

const BrandCard = memo(function BrandCard({ brand, onLinkClick }) {
  return (
    <article 
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
          {brand.platforms.map((platform, idx) => (
            <PlatformCard 
              key={idx}
              brand={brand}
              platform={platform}
              onLinkClick={onLinkClick}
            />
          ))}
        </ul>
      </div>
    </article>
  )
})

export default BrandCard
