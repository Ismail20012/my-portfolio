"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, BarChart, Code, LineChart, CheckSquare, Download } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      titleKey: "project.ml.title",
      descKey: "project.ml.desc",
      tools: ["Python", "CatBoost", "XGBoost", "Hyperopt", "SHAP", "Scikit-learn"],
      icon: <BarChart className="h-8 w-8 text-indigo-600" />,
      status: "Completed",
      pdfUrl: "/documents/Data_science_project.pdf",
    },
    {
      id: 2,
      titleKey: "project.copula.title",
      descKey: "project.copula.desc",
      tools: ["R", "Copula Theory", "Maximum Likelihood", "Statistical Modeling"],
      icon: <LineChart className="h-8 w-8 text-cyan-600" />,
      status: "Completed",
      pdfUrl: "/documents/Projet_qrm.pdf",
      slidesUrl: "/documents/Projet_qrm_slides.pdf",
    },
    {
      id: 3,
      titleKey: "project.montecarlo.title",
      descKey: "project.montecarlo.desc",
      tools: ["Python", "Black-Scholes", "Monte Carlo", "Merton Model", "SciPy"],
      icon: <Code className="h-8 w-8 text-violet-600" />,
      status: "Completed",
      pdfUrl: "/documents/projet_intermediaire_techniques_numériques.pdf",
    },
    {
      id: 4,
      titleKey: "project.kg.title",
      descKey: "project.kg.desc",
      tools: ["Python", "GNN", "LLM", "Statistical Analysis", "Predictive Modelling"],
      icon: <Database className="h-8 w-8 text-blue-600" />,
      status: "Completed",
      pdfUrl: "/documents/TER_KGs.pdf",
    },
    {
      id: 5,
      titleKey: "project.unemployment.title",
      descKey: "project.unemployment.desc",
      tools: ["R", "Econometrics", "Linear model", "Data Visualization"],
      icon: <LineChart className="h-8 w-8 text-green-600" />,
      status: "Completed",
      pdfUrl: "/documents/project2.pdf",
    },
    {
      id: 6,
      titleKey: "project.excel.title",
      descKey: "project.excel.desc",
      tools: ["Excel", "VBA", "Data Analysis", "Statistics"],
      icon: <CheckSquare className="h-8 w-8 text-purple-600" />,
      status: "Completed",
      pdfUrl: "/documents/project3.pdf",
    },
    {
      id: 7,
      titleKey: "project.newmethods.title",
      descKey: "project.newmethods.desc",
      tools: ["XGBoost", "Random Forest", "GLM", "Data Visualization"],
      icon: <Code className="h-8 w-8 text-teal-600" />,
      status: "Completed",
      pdfUrl: "/documents/project4.pdf",
    },
    {
      id: 8,
      titleKey: "project.clustering.title",
      descKey: "project.clustering.desc",
      tools: ["Python", "R", "ANOVA", "PCA/LDA", "Clustering"],
      icon: <BarChart className="h-8 w-8 text-orange-600" />,
      status: "Completed",
      pdfUrl: "/documents/project5.pdf",
    },
    {
      id: 9,
      titleKey: "project.sas.title",
      descKey: "project.sas.desc",
      tools: ["SAS", "Data Processing", "Statistical Analysis"],
      icon: <Database className="h-8 w-8 text-blue-800" />,
      status: "Completed",
      pdfUrl: "/documents/project7.pdf",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">{t("projects.title")}</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
          {t("projects.intro")}
        </p>

        {/* Abstract decorative elements */}
        <div className="abstract-shape abstract-shape-1"></div>
        <div className="abstract-shape abstract-shape-2"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col h-full custom-card animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4">{project.icon}</div>
                <CardTitle className="text-xl text-blue-700">{t(project.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-700 text-base">{t(project.descKey)}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="bg-blue-100 text-blue-800 badge-bounce-in" style={{ animationDelay: `${toolIndex * 0.05}s` }}>
                      {tool}
                    </Badge>
                  ))}
                </div>
                {project.status === "In Progress" ? (
                  <div className="text-orange-600 font-medium flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-600 mr-2"></span>
                    {t("projects.reportInProgress")}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 w-full">
                    <Button
                      asChild
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 custom-button"
                    >
                      <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" download>
                        <Download className="mr-2 h-4 w-4" /> {t("projects.downloadReport")}
                      </a>
                    </Button>
                    {(project as any).slidesUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 custom-button"
                      >
                        <a href={(project as any).slidesUrl} target="_blank" rel="noopener noreferrer" download>
                          <Download className="mr-2 h-4 w-4" /> {t("projects.downloadSlides")}
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="section-divider"></div>

        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">{t("projects.personalProject")}</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="custom-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Code className="h-10 w-10 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-center text-blue-700">{t("projects.personalProjectTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                {t("projects.personalProjectDesc")}
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">{t("projects.keyFeatures")}</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("projects.feature1")}</span>
                    </li>
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("projects.feature2")}</span>
                    </li>
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("projects.feature3")}</span>
                    </li>
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("projects.feature4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 custom-button w-full"
              >
                <a href="/documents/project6.pdf" target="_blank" rel="noopener noreferrer" download>
                  <Download className="mr-2 h-4 w-4" /> {t("projects.downloadReport")}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
