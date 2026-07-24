import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ismail Mohamed El Hafed | Actuaire & Data Scientist",
  description:
    "Portfolio d'Ismail Mohamed El Hafed, diplômé du Master Actuariat de l'ISFA et apprenti actuaire chez CNP Assurances. Découvrez mes projets en actuariat, data science et modélisation des risques.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ismail Mohamed El Hafed | Actuaire & Data Scientist",
    description:
      "Portfolio d'Ismail Mohamed El Hafed, diplômé du Master Actuariat de l'ISFA et apprenti actuaire chez CNP Assurances. Découvrez mes projets en actuariat, data science et modélisation des risques.",
    type: "website",
    locale: "fr_FR",
    siteName: "Ismail Mohamed El Hafed — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Mohamed El Hafed | Actuaire & Data Scientist",
    description:
      "Portfolio d'Ismail Mohamed El Hafed — Actuariat, Data Science & Machine Learning.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
