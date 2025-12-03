"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const t = useTranslations("nav")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#equipment", label: t("equipment") },
    { href: "#services", label: t("services") },
    { href: "#gallery", label: t("gallery") },
    { href: "#reviews", label: t("reviews") },
    { href: "#faq", label: t("faq") },
    { href: "#contacts", label: t("contacts") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span
                className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
              >
                Nomad Logistics
              </span>
              <span className={`text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                {useTranslations("common")("manipulatorServices")}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? "text-foreground" : "text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className={isScrolled ? "" : "text-white"}>
              <LanguageSwitcher variant="compact" />
            </div>
            <a
              href="tel:+77758220466"
              className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+7 775 822 04 66</span>
            </a>
            <a
              href="https://wa.me/77758220466"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
              <a
                href="tel:+77758220466"
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>+7 775 822 04 66</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
