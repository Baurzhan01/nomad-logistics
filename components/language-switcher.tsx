"use client"

import { useState, useTransition } from "react"
import { useLocale } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Globe } from "lucide-react"
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config"

export function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "compact" }) {
  const locale = useLocale() as Locale
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: Locale) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`
      window.location.reload()
    })
    setIsOpen(false)
  }

  if (variant === "compact") {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isPending}
          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
        >
          <span>{localeFlags[locale]}</span>
          <span className="hidden sm:inline">{locale.toUpperCase()}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50 min-w-[140px]"
              >
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors ${
                      locale === loc ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    <span>{localeFlags[loc]}</span>
                    <span>{localeNames[loc]}</span>
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{localeFlags[locale]}</span>
        <span>{localeNames[locale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px]"
            >
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors ${
                    locale === loc ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                >
                  <span className="text-lg">{localeFlags[loc]}</span>
                  <span>{localeNames[loc]}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
