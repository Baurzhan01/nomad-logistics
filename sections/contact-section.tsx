"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export function ContactSection() {
  const t = useTranslations("contact")
  const tc = useTranslations("common")
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section id="contacts" className="py-20 md:py-32 bg-background">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="tel:+77758220466"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-secondary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{tc("phone")}</p>
                  <p className="font-semibold text-foreground">+7 775 822 04 66</p>
                </div>
              </a>

              <a
                href="https://wa.me/77758220466"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-green-500/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{tc("whatsapp")}</p>
                  <p className="font-semibold text-foreground">{tc("write")}</p>
                </div>
              </a>

              <a
                href="mailto:info@nomad-logistics.kz"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{tc("email")}</p>
                  <p className="font-semibold text-foreground">info@nomad-logistics.kz</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{tc("workingHours")}</p>
                  <p className="font-semibold text-foreground">{tc("workSchedule")}</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-muted rounded-xl mb-8">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">{tc("address")}</p>
                <p className="font-medium text-foreground">{t("addressFull")}</p>
              </div>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1252.1469126674403!2d71.57528334581109!3d51.12148807829544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1764757634875!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("mapTitle")}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">{t("formTitle")}</h3>
              <p className="text-muted-foreground mb-6">{t("formSubtitle")}</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{tc("requestSent")}</h4>
                  <p className="text-muted-foreground">{tc("weWillContact")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("yourName")}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                      placeholder={t("enterName")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{tc("phone")}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                      placeholder={t("phonePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("messageOptional")}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                      placeholder={t("describeTask")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {tc("sendRequest")}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
