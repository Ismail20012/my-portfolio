"use client"

import { useLanguage, type Language } from "@/lib/i18n/LanguageContext"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    const handleToggle = () => {
        const newLang: Language = language === "fr" ? "en" : "fr"
        setLanguage(newLang)
    }

    return (
        <button
            onClick={handleToggle}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm hover:bg-blue-50 transition-all duration-300 text-sm font-medium group"
            aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
        >
            <span
                className={cn(
                    "transition-all duration-300",
                    language === "fr"
                        ? "text-blue-700 font-semibold"
                        : "text-gray-400 group-hover:text-gray-600"
                )}
            >
                FR
            </span>
            <span className="text-gray-300">|</span>
            <span
                className={cn(
                    "transition-all duration-300",
                    language === "en"
                        ? "text-blue-700 font-semibold"
                        : "text-gray-400 group-hover:text-gray-600"
                )}
            >
                EN
            </span>
        </button>
    )
}
