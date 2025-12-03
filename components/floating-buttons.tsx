"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/77758220466"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      <motion.a
        href="tel:+77758220466"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg shadow-secondary/30 hover:bg-secondary/90 transition-colors"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
