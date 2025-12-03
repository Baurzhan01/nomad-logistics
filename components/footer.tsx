"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Footer() {
  const t = useTranslations("nav")
  const tc = useTranslations("common")
  const tContact = useTranslations("contact")

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#equipment", label: t("equipment") },
    { href: "#services", label: t("services") },
    { href: "#gallery", label: t("gallery") },
    { href: "#reviews", label: t("reviews") },
    { href: "#faq", label: t("faq") },
    { href: "#contacts", label: t("contacts") },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Nomad Logistics</span>
                <span className="text-xs text-white/70">{tc("manipulatorServices")}</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-4">{tc("professionalServices")}</p>
            <LanguageSwitcher />
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{tc("navigation")}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{tc("contacts")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+77758220466"
                  className="flex items-center gap-2 text-white/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 775 822 04 66
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/77758220466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-secondary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {tc("whatsapp")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nomad-logistics.kz"
                  className="flex items-center gap-2 text-white/70 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@nomad-logistics.kz
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {tContact("addressFull")}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{tc("workingHours")}</h4>
            <p className="text-white/70 mb-4">{tc("roundTheClock")}</p>
            <a
                href="tel:+77758220466"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {tc("callNow")}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © 2025 Nomad Logistics. {tc("allRightsReserved")}
          </p>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              {tc("privacyPolicy")}
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              {tc("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
