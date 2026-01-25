import { memo } from 'react'

const Footer = memo(function Footer() {
  return (
    <footer className="mt-16 text-center text-gray-500 text-sm" role="contentinfo">
      <p>© {new Date().getFullYear()} Zaal Ecosystem. All rights reserved.</p>
      <p className="mt-2">Built with React + TailwindCSS + Lucide Icons</p>
    </footer>
  )
})

export default Footer
