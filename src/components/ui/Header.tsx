import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../logo-ico.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { label: 'Hero', href: '#home' },
    { label: 'Who We Are', href: '#about' },
    { label: 'What We Do', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)

    if (!target) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const headerOffset = 28
    const startY = window.scrollY
    const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset
    const distance = targetY - startY
    const duration = prefersReducedMotion ? 0 : 850
    const startTime = performance.now()

    const easeInOutCubic = (progress: number) =>
      progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = duration === 0 ? 1 : Math.min(elapsed / duration, 1)

      window.scrollTo(0, startY + distance * easeInOutCubic(progress))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setMenuOpen(false)
    scrollToSection(href)
    window.history.pushState(null, '', href)
  }

  return (
    <header className="relative z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Logo */}
          <div className="text-2xl font-semibold tracking-tight text-white">
            <img src={logo} className="app-logo" alt="logo" width={38} />
          </div>

          {/* Desktop Nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="text-gray-300 transition hover:text-brand-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition hover:bg-gray-800 hover:text-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute left-4 right-4 top-16 z-40 rounded-xl border border-gray-800 bg-gray-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-200 transition hover:bg-gray-900 hover:text-brand-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
