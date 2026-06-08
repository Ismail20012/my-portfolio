"use client"

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "fr" | "en"

// Re-export types from translations so consumers can use them
export type { ProjectsData, ProjectItem, ProjectFile, ThesisData } from "./translations/fr"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    projectsData: import("./translations/fr").ProjectsData
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Import translations
import { translations as frTranslations, projectsData as frProjectsData } from "./translations/fr"
import { translations as enTranslations, projectsData as enProjectsData } from "./translations/en"

const allTranslations: Record<Language, Record<string, string>> = {
    fr: frTranslations,
    en: enTranslations,
}

const allProjectsData: Record<Language, import("./translations/fr").ProjectsData> = {
    fr: frProjectsData,
    en: enProjectsData,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("fr")
    const [isHydrated, setIsHydrated] = useState(false)

    // Load saved language from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem("portfolio-language") as Language | null
        if (savedLang && (savedLang === "fr" || savedLang === "en")) {
            setLanguageState(savedLang)
        }
        setIsHydrated(true)
    }, [])

    // Save language to localStorage when it changes
    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("portfolio-language", lang)
        // Update HTML lang attribute
        document.documentElement.lang = lang
    }

    // Translation function
    const t = (key: string): string => {
        const translations = allTranslations[language]
        return translations[key] || key
    }

    // Structured project data for the current language
    const projectsData = allProjectsData[language]

    // Prevent hydration mismatch by showing nothing until hydrated
    if (!isHydrated) {
        return null
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, projectsData }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
