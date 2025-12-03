"use client"

import { motion } from "framer-motion"
import { Package, Container, Building2, Wrench, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function ServicesSection() {
  const t = useTranslations("services")
  const tc = useTranslations("common")

  const services = [
    { icon: Package, title: t("loadingUnloading"), description: t("loadingUnloadingDesc") },
    { icon: Container, title: t("containerTransport"), description: t("containerTransportDesc") },
    { icon: Building2, title: t("jbiDelivery"), description: t("jbiDeliveryDesc") },
    { icon: Wrench, title: t("installationWorks"), description: t("installationWorksDesc") },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t("title")}</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">{t("subtitle")}</p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-secondary transition-colors">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-secondary group-hover:translate-x-1 transition-all self-center" />
                </motion.div>
              ))}
            </div>

            <a
              href="tel:+77001234567"
              className="inline-flex items-center gap-2 mt-8 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary/90 hover:scale-105 transition-all"
            >
              {tc("getConsultation")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/crane-lifting-heavy-cargo-container-construction-s.jpg"
                alt="Услуги манипулятора"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-4xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">{t("satisfiedClients")}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-2xl shadow-xl"
            >
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">{t("yearsExperience")}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
