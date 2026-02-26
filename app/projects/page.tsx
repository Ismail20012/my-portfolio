"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Database, BarChart, Code, LineChart, CheckSquare, Download, Eye } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface Project {
  id: number
  titleKey: string
  descKey: string
  tools: string[]
  icon: React.ReactNode
  pdfUrl: string
  slidesUrl?: string
  category: "academic" | "professional"
}

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "project.ml.title",
      descKey: "project.ml.desc",
      tools: ["Python", "CatBoost", "XGBoost", "Hyperopt", "SHAP", "Scikit-learn"],
      icon: <BarChart className="h-8 w-8 text-indigo-600" />,
      pdfUrl: "/documents/Data_science_project.pdf",
      category: "academic",
    },
    {
      id: 2,
      titleKey: "project.copula.title",
      descKey: "project.copula.desc",
      tools: ["R", "Copules", "Maximum de Vraisemblance", "Modélisation Statistique"],
      icon: <LineChart className="h-8 w-8 text-cyan-600" />,
      pdfUrl: "/documents/Projet_qrm.pdf",
      slidesUrl: "/documents/Projet_qrm_slides.pdf",
      category: "academic",
    },
    {
      id: 3,
      titleKey: "project.montecarlo.title",
      descKey: "project.montecarlo.desc",
      tools: ["Python", "Black-Scholes", "Monte Carlo", "Merton", "SciPy"],
      icon: <Code className="h-8 w-8 text-violet-600" />,
      pdfUrl: "/documents/projet_intermediaire_techniques_numériques.pdf",
      category: "academic",
    },
    {
      id: 4,
      titleKey: "project.kg.title",
      descKey: "project.kg.desc",
      tools: ["Python", "GNN", "LLM", "NLP", "Neo4j"],
      icon: <Database className="h-8 w-8 text-blue-600" />,
      pdfUrl: "/documents/TER_KGs.pdf",
      category: "academic",
    },
    {
      id: 5,
      titleKey: "project.unemployment.title",
      descKey: "project.unemployment.desc",
      tools: ["R", "Économétrie", "Séries Temporelles"],
      icon: <LineChart className="h-8 w-8 text-green-600" />,
      pdfUrl: "/documents/Econometrie_Inflation_Chomage.pdf",
      category: "academic",
    },
    {
      id: 6,
      titleKey: "project.excel.title",
      descKey: "project.excel.desc",
      tools: ["Excel", "VBA", "Data Quality", "Automation"],
      icon: <CheckSquare className="h-8 w-8 text-purple-600" />,
      pdfUrl: "/documents/Data_Quality_VBA.pdf",
      category: "professional",
    },
    {
      id: 7,
      titleKey: "project.newmethods.title",
      descKey: "project.newmethods.desc",
      tools: ["XGBoost", "Random Forest", "GLM", "Data Viz"],
      icon: <Code className="h-8 w-8 text-teal-600" />,
      pdfUrl: "/documents/Nouvelles_Methodes_Actuarielles.pdf",
      category: "academic",
    },
    {
      id: 8,
      titleKey: "project.clustering.title",
      descKey: "project.clustering.desc",
      tools: ["Python", "R", "ANOVA", "ACP/ADL", "Clustering"],
      icon: <BarChart className="h-8 w-8 text-orange-600" />,
      pdfUrl: "/documents/Analyse_Donnees_Clustering.pdf",
      category: "academic",
    },
    {
      id: 9,
      titleKey: "project.sas.title",
      descKey: "project.sas.desc",
      tools: ["SAS", "Data Processing", "Actuarial Reporting"],
      icon: <Database className="h-8 w-8 text-blue-800" />,
      pdfUrl: "/documents/SAS_Traitement_Assurance.pdf",
      category: "professional",
    },
    {
      id: 10,
      titleKey: "project.personal.title",
      descKey: "project.personal.desc",
      tools: ["Python", "Machine Learning", "Actuarial Science"],
      icon: <Code className="h-8 w-8 text-blue-600" />,
      pdfUrl: "/documents/Projet_Personnel_Modelisation.pdf",
      category: "academic",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">{t("projects.title")}</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
          {t("projects.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col h-full custom-card animate-slide-in-left cursor-pointer group hover:border-blue-300 transition-all duration-300"
              style={{ animationDelay: `${index * 0.07}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  {project.icon}
                  <Eye className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg leading-tight text-blue-700">
                  {t(project.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-3">
                <p className="text-gray-600 text-sm line-clamp-3">
                  {t(project.descKey)}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 4).map((tool, toolIndex) => (
                    <Badge
                      key={toolIndex}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 badge-bounce-in"
                      style={{ animationDelay: `${toolIndex * 0.05}s` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                  {project.tools.length > 4 && (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5">
                      +{project.tools.length - 4}
                    </Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  {selectedProject.icon}
                  <DialogTitle className="text-xl text-blue-800">
                    {t(selectedProject.titleKey)}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base text-gray-700 leading-relaxed">
                  {t(selectedProject.descKey)}
                </DialogDescription>
              </DialogHeader>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.tools.map((tool, i) => (
                  <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-700">
                    {tool}
                  </Badge>
                ))}
              </div>

              {/* Embedded PDF Viewer */}
              <div className="w-full aspect-[1/1.3] bg-gray-100 rounded-lg overflow-hidden border shadow-inner">
                <iframe
                  src={`${selectedProject.pdfUrl}#toolbar=1&navpanes=0`}
                  className="w-full h-full border-none"
                  title={`PDF: ${t(selectedProject.titleKey)}`}
                >
                  <p className="p-4 text-center text-gray-600">
                    Your browser does not support embedded PDFs.
                  </p>
                </iframe>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href={selectedProject.pdfUrl} download>
                    <Download className="mr-2 h-4 w-4" /> {t("projects.downloadReport")}
                  </a>
                </Button>
                {selectedProject.slidesUrl && (
                  <Button asChild variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                    <a href={selectedProject.slidesUrl} download>
                      <Download className="mr-2 h-4 w-4" /> {t("projects.downloadSlides")}
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
