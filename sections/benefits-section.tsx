"use client"

import { motion } from "framer-motion"
import { Truck, Gauge, Clock, Users, FileText, Settings } from "lucide-react"
import { useTranslations } from "next-intl"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function BenefitsSection() {
  const t = useTranslations("benefits")

  const benefits = [
    { icon: Truck, title: t("newManipulators"), description: t("newManipulatorsDesc") },
    { icon: Gauge, title: t("highCapacity"), description: t("highCapacityDesc") },
    { icon: Clock, title: t("efficiency"), description: t("efficiencyDesc") },
    { icon: Users, title: t("professionals"), description: t("professionalsDesc") },
    { icon: FileText, title: t("contractWork"), description: t("contractWorkDesc") },
    { icon: Settings, title: t("flexibleTerms"), description: t("flexibleTermsDesc") },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/10 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
