"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { LanguageToggle } from "@/components/language-toggle"

const navItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.experience", href: "/experience" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.contact", href: "/contact" },
  { key: "nav.resume", href: "/resume" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-700">Ismail M. El Hafed</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600 relative group",
                pathname === item.href ? "text-blue-700 font-semibold" : "text-gray-700",
              )}
            >
              {t(item.key)}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full",
                  pathname === item.href ? "w-full" : "",
                )}
              ></span>
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        {/* Mobile: Language toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="container py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-2 text-base font-medium transition-colors hover:text-blue-600 hover:bg-blue-50 px-4 rounded-md",
                  pathname === item.href ? "text-blue-700 bg-blue-50" : "text-gray-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
