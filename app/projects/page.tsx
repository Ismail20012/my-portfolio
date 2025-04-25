import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, BarChart, Code, LineChart, CheckSquare, Download } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Knowledge graphs in Actuarial science",
      description:
        "Création d’un graphe de connaissances causal, extrait automatiquement de rapports d’accidents NTSB via LLM et analysé par GNN, pour tester l’estimation de provisions et la prédiction de recommandations de sécurité en assurance.",
      tools: ["Python", "GNN", "LLM", "Statistical Analysis","Predictive Modelling"],
      icon: <Database className="h-8 w-8 text-blue-600" />,
      status: "Completed",
      pdfUrl: "/documents/TER_KGs.pdf",
    },
    {
      id: 2,
      title: "Impact of Unemployment Rates on Inflation",
      description:
        "Analyzed the relationship between unemployment rates and inflation using econometric models. Conducted time series analysis to identify patterns and correlations between these economic indicators.",
      tools: ["R", "Econometrics", "Linear model", "Data Visualization"],
      icon: <LineChart className="h-8 w-8 text-green-600" />,
      status: "Completed",
      pdfUrl: "/documents/project2.pdf",
    },
    {
      id: 3,
      title: "Excel Data Quality Verification",
      description:
        "Developed a comprehensive data quality verification framework for insurance datasets. Implemented automated checks and validation procedures to ensure data integrity for actuarial analysis.",
      tools: ["Excel", "VBA", "Data Analysis", "Statistics"],
      icon: <CheckSquare className="h-8 w-8 text-purple-600" />,
      status: "Completed",
      pdfUrl: "/documents/project3.pdf",
    },
    {
      id: 4,
      title: "New Actuarial Methods and Machine Learning",
      description:
        "Explored innovative actuarial methods and machine learning applications in insurance. Compared traditional actuarial approaches with modern machine learning techniques for pricing and risk assessment.",
      tools: ["XGBoost", "Random Forest", "GLM", "Data Visualization"],
      icon: <Code className="h-8 w-8 text-teal-600" />,
      status: "Completed",
      pdfUrl: "/documents/project4.pdf",
    },
    {
      id: 5,
      title: "Data Analysis and Clustering on Automotive Datasets",
      description:
        "Performed comprehensive data analysis using real-world automotive and customer datasets. Applied various supervised and unsupervised learning methods including ANOVA, PCA, LDA, and Hierarchical Clustering.",
      tools: ["Python", "R", "ANOVA", "PCA/LDA", "Clustering"],
      icon: <BarChart className="h-8 w-8 text-orange-600" />,
      status: "Completed",
      pdfUrl: "/documents/project5.pdf",
    },
    {
      id: 6,
      title: "SAS Data Processing for Insurance",
      description:
        "Developed SAS scripts for processing and analyzing insurance data. Created efficient data pipelines for actuarial modeling and reporting.",
      tools: ["SAS", "Data Processing", "Statistical Analysis"],
      icon: <Database className="h-8 w-8 text-blue-800" />,
      status: "Completed",
      pdfUrl: "/documents/project7.pdf",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Projects</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
          Here are some of my academic and professional projects that showcase my skills in actuarial science, data
          analysis, and programming.
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
                <CardTitle className="text-xl text-blue-700">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-700 text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tool}
                    </Badge>
                  ))}
                </div>
                {project.status === "In Progress" ? (
                  <div className="text-orange-600 font-medium flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-600 mr-2"></span>
                    Report In Progress
                  </div>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 custom-button"
                  >
                    <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" download>
                      <Download className="mr-2 h-4 w-4" /> Download Report
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="section-divider"></div>

        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Personal Project</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="custom-card animate-slide-up">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Code className="h-10 w-10 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-center text-blue-700">Innovative Actuarial Modeling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                This project demonstrates my commitment to innovative actuarial modeling and creative problem-solving in
                data science. It reflects my passion for leveraging analytical insights to address real-world challenges
                in the actuarial domain.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Advanced statistical modeling techniques for risk assessment</span>
                    </li>
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Integration of machine learning with traditional actuarial methods</span>
                    </li>
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Practical applications in insurance pricing and risk management</span>
                    </li>
                    <li className="flex">
                      <CheckSquare className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive documentation and reproducible research</span>
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
                  <Download className="mr-2 h-4 w-4" /> Download Report
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
