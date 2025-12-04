import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://nomad-logistics.kz"),
  alternates: {
    canonical: "https://nomad-logistics.kz/",
  },
  title: "Nomad Logistics | Аренда манипулятора в Астане до 12 тонн",
  description:
    "Nomad Logistics — профессиональные услуги манипулятора в Астане. Современная техника, грузоподъёмность до 12 тонн. Работа по городу и пригородам. Звоните 24/7!",
  keywords: [
    "Nomad Logistics",
    "манипулятор Астана",
    "аренда манипулятора",
    "услуги манипулятора",
    "манипулятор 12 тонн",
    "грузоперевозки Астана",
    "кран манипулятор",
    "погрузка разгрузка Астана",
    "перевозка грузов Астана",
    "Астана манипулятор",
    "манипулятор жалға алу",
    "манипулятор қызметтері",
    "Астана жүк тасымалдау",
  ],
  authors: [{ name: "Nomad Logistics" }],
  creator: "Nomad Logistics",
  publisher: "Nomad Logistics",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Nomad Logistics | Аренда манипулятора в Астане",
    description: "Современная техника, грузоподъёмность до 12 тонн. Работаем 24/7 по городу и пригородам.",
    type: "website",
    locale: "ru_KZ",
    alternateLocale: "kk_KZ",
    siteName: "Nomad Logistics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Logistics | Аренда манипулятора в Астане",
    description: "Современная техника, грузоподъёмность до 12 тонн. Работаем 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#3b82f6" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="39fc710a-81ff-4dc8-9dc4-8c4bb0403736"
          type="text/javascript"
          async
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-149XJ0LZCJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-149XJ0LZCJ');
            gtag('config', 'AW-17777585644');
          `}
        </Script>
        <meta name="google-site-verification" content="oa0Bxa-lP_78z_4Hc1KwRHP4Bwm73F1GfV7pUI0tzNw" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
