"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useTranslations } from "next-intl"

export function GallerySection() {
  const t = useTranslations("gallery")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/crane-truck-loading-heavy-machinery-industrial.jpg",
      alt: t("equipmentLoading"),
      title: t("equipmentLoading"),
    },
    {
      id: 2,
      type: "image",
      src: "/manipulator-crane-lifting-concrete-blocks-construc.jpg",
      alt: t("jbiInstallation"),
      title: t("jbiInstallation"),
    },
    {
      id: 3,
      type: "image",
      src: "/yellow-crane-truck-delivering-container-warehouse.jpg",
      alt: t("containerDelivery"),
      title: t("containerDelivery"),
    },
    {
      id: 4,
      type: "image",
      src: "/crane-manipulator-unloading-building-materials-cit.jpg",
      alt: t("materialsUnloading"),
      title: t("materialsUnloading"),
    },
    {
      id: 5,
      type: "video",
      src: "/crane-truck-working-at-construction-site-video-thu.jpg",
      alt: t("manipulatorAtWork"),
      title: t("manipulatorAtWork"),
    },
    {
      id: 6,
      type: "image",
      src: "/heavy-crane-lifting-prefab-house-module.jpg",
      alt: t("moduleInstallation"),
      title: t("moduleInstallation"),
    },
  ]

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const goToPrevious = () => {
    if (selectedImage !== null) setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1)
  }
  const goToNext = () => {
    if (selectedImage !== null) setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1)
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-secondary-foreground ml-1" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedImage].src || "/placeholder.svg"}
                alt={galleryItems[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
