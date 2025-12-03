export const locales = ["ru", "kk"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "ru"

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  kk: "Қазақша",
}

export const localeFlags: Record<Locale, string> = {
  ru: "🇷🇺",
  kk: "🇰🇿",
}
