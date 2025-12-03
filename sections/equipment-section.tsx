"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Ruler, Weight, Package, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function EquipmentSection() {
  const t = useTranslations("equipment")
  const tc = useTranslations("common")

  const equipment = [
    {
      id: 1,
      name: "Sitrak C5H 12 тонн",
      image: "/IMG-20250907-WA0075.jpg",
      capacity: "12 тонн",
      boom: "13 м",
      platform: "8.5 x 2.5 м",
      works: [t("jbiProducts"), t("containers"), t("buildingMaterials")],
    },
    {
      id: 2,
      name: "Sitrak C5H 16 тонн",
      image: "/IMG-20250925-WA0007.jpg",
      capacity: "16 тонн",
      boom: "16 м",
      platform: "8.5 x 2.5 м",
      works: [t("heavyLoads"), t("machinery"), t("specialEquipment")],
    },
    {
      id: 3,
      name: "HOWO T5G 20 тонн",
      image: "/IMG20250902130032.jpg",
      capacity: "20 тонн",
      boom: "18 м",
      platform: "9.0 x 2.5 м",
      works: [t("oversizedCargo"), t("industrialEquipment")],
    },
  ]

  return (
    <section id="equipment" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted rounded-xl">
                    <Weight className="w-5 h-5 text-secondary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{item.capacity}</div>
                    <div className="text-xs text-muted-foreground">{t("cargo")}</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-xl">
                    <Ruler className="w-5 h-5 text-secondary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{item.boom}</div>
                    <div className="text-xs text-muted-foreground">{t("boom")}</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-xl">
                    <Package className="w-5 h-5 text-secondary mx-auto mb-1" />
                    <div className="text-sm font-semibold">{item.platform}</div>
                    <div className="text-xs text-muted-foreground">{t("platform")}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-sm font-medium text-foreground">{t("workTypes")}:</div>
                  <div className="flex flex-wrap gap-2">
                    {item.works.map((work, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full">
                        {work}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/77001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 hover:gap-3 transition-all"
                >
                  {tc("order")}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
