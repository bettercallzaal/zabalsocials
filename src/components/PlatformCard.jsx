import { ExternalLink } from 'lucide-react'
import { iconMap } from '../utils/iconMap'
import { Globe } from 'lucide-react'

function PlatformCard({ brand, platform, onLinkClick }) {
  const Icon = iconMap[platform.icon] || Globe

  return (
    <li>
      <a
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${brand.name} on ${platform.platform}: ${platform.handle}`}
        onClick={() => onLinkClick(brand, platform)}
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
}

export default PlatformCard
