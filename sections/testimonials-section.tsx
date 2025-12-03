"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { useTranslations } from "next-intl"

export function TestimonialsSection() {
  const t = useTranslations("testimonials")

  const testimonials = [
    {
      id: 1,
      name: "Алексей Иванов",
      company: "ТОО СтройМаксимум",
      image: "/professional-businessman-portrait-asian.jpg",
      text: t("review1"),
      rating: 5,
      projectImage: "/construction-site-concrete-blocks-delivery.jpg",
      date: "Октябрь 2024",
    },
    {
      id: 2,
      name: "Марат Нурланов",
      company: "ИП Нурланов",
      image: "/young-kazakh-businessman-portrait.jpg",
      text: t("review2"),
      rating: 5,
      projectImage: "/warehouse-container-loading-crane.jpg",
      date: "Сентябрь 2024",
    },
    {
      id: 3,
      name: "Елена Петрова",
      company: "МегаСтрой",
      image: "/placeholder.svg?height=100&width=100",
      text: t("review3"),
      rating: 5,
      projectImage: "/placeholder.svg?height=200&width=300",
      date: "Август 2024",
    },
  ]

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background">
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={testimonial.projectImage || "/placeholder.svg"}
                  alt="Проект"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 -mt-12 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-card shadow-lg">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/10 mb-2" />
                <p className="text-muted-foreground leading-relaxed mb-4">{testimonial.text}</p>
                <p className="text-sm text-muted-foreground/60">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
