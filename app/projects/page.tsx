"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import ThesisBanner from "@/components/thesis-banner"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
    const { t, projectsData } = useLanguage()

    return (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800">{t("projects.title")}</h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        {t("projects.intro")}
                    </p>
                </div>

                {/* Featured Thesis Banner */}
                <ThesisBanner />

                {/* Section divider */}
                <div className="section-divider mb-8" />

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.list.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
