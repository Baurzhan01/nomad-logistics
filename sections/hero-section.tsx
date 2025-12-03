"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, ArrowDown } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function HeroSection() {
  const t = useTranslations("hero")
  const tc = useTranslations("common")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/1200x900n.webp"
          alt="Манипулятор Nomad Logistics в работе"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">{t("badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance"
          >
            {t("title")} <span className="text-secondary">{t("titleHighlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+77758220466"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/90 hover:scale-105 transition-all shadow-lg shadow-secondary/30"
            >
              <Phone className="w-5 h-5" />
              {tc("callNow")}
            </a>
            <a
              href="https://wa.me/77758220466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {tc("whatsapp")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20"
          >
            <div>
              <div className="text-3xl font-bold text-secondary">12+</div>
              <div className="text-white/70 text-sm">{t("statsCapacity")}</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-white/70 text-sm">{t("statsOrders")}</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-white/70 text-sm">{t("statsSchedule")}</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-sm">{tc("learnMore")}</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
