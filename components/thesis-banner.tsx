"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { GraduationCap, Lock, Loader2, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function ThesisBanner() {
    const { t, projectsData } = useLanguage()
    const thesis = projectsData.thesis

    const [dialogOpen, setDialogOpen] = useState(false)
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [checking, setChecking] = useState(false)

    // Thesis PDF is not yet available
    const thesisAvailable = false

    const handlePasswordSubmit = () => {
        setChecking(true)
        setError(false)

        // Simulate a small delay for UX
        setTimeout(() => {
            const correctPassword = process.env.NEXT_PUBLIC_THESIS_PASSWORD
            if (password === correctPassword) {
                // Open the thesis PDF
                window.open("/documents/memoire_ifrs17.pdf", "_blank")
                setDialogOpen(false)
                setPassword("")
            } else {
                setError(true)
            }
            setChecking(false)
        }, 500)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handlePasswordSubmit()
        }
    }

    return (
        <>
            <div className="relative overflow-hidden rounded-2xl mb-10 animate-slide-up">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />

                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
                                          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Glow effects */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-400/15 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                <GraduationCap className="h-8 w-8 text-blue-200" />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                            {/* Subtitle label */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                <span className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                                    {thesis.subtitle}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                                {thesis.title}
                            </h2>

                            <p className="text-blue-200/90 text-base leading-relaxed mb-4 max-w-3xl">
                                {thesis.description}
                            </p>

                            {/* Expandable long description */}
                            <p className="text-blue-300/70 text-sm leading-relaxed mb-5 max-w-3xl hidden md:block">
                                {thesis.longDescription}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {thesis.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-white/10 text-blue-100 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Action button */}
                            {thesisAvailable ? (
                                <Button
                                    onClick={() => setDialogOpen(true)}
                                    className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 custom-button"
                                >
                                    <Lock className="mr-2 h-4 w-4" />
                                    {thesis.buttonLocked}
                                </Button>
                            ) : (
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-blue-200">
                                    <Clock className="h-4 w-4" />
                                    <span className="text-sm font-medium">{t("projects.thesisInProgress")}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Password Dialog */}
            <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) { setPassword(""); setError(false) } }}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-blue-800">
                            <Lock className="h-5 w-5" />
                            {thesis.buttonLocked}
                        </DialogTitle>
                        <DialogDescription>
                            {thesis.passwordPrompt}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                        <Input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(false) }}
                            onKeyDown={handleKeyDown}
                            className={`transition-all ${error ? "border-red-500 ring-2 ring-red-200 animate-[shake_0.5s_ease-in-out]" : ""}`}
                            autoFocus
                        />
                        {error && (
                            <p className="text-sm text-red-500 mt-2 animate-fade-in">
                                {projectsData.thesis.passwordPrompt.includes("mot de passe")
                                    ? "Mot de passe incorrect. Veuillez réessayer."
                                    : "Incorrect password. Please try again."}
                            </p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => { setDialogOpen(false); setPassword(""); setError(false) }}
                        >
                            {projectsData.thesis.passwordPrompt.includes("mot de passe") ? "Annuler" : "Cancel"}
                        </Button>
                        <Button
                            onClick={handlePasswordSubmit}
                            disabled={!password || checking}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            {checking ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                projectsData.thesis.passwordPrompt.includes("mot de passe") ? "Valider" : "Submit"
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
