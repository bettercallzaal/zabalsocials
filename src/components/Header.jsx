import { memo } from 'react'

const Header = memo(function Header() {
  return (
    <header className="text-center mb-16" role="banner">
      <h1 className="text-6xl font-bold mb-4 gradient-text from-blue-400 via-purple-400 to-pink-400">
        Zaal Socials
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Your centralized hub for all social media links across the Zaal ecosystem
      </p>
    </header>
  )
})

export default Header
