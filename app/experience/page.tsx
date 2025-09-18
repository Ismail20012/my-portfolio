import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, CheckCircle, FileText } from "lucide-react"

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Professional Experience</h1>

        {/* Abstract decorative elements */}
        <div className="abstract-shape abstract-shape-1"></div>
        <div className="abstract-shape abstract-shape-2"></div>

        <div className="space-y-12">
          {/* Alternance CNP Prévoyance */}
          <Card className="border-l-4 border-l-green-600 custom-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-green-700">
                <Briefcase className="h-6 w-6 mr-3 text-green-600" />
                Actuarial Apprentice – Pilotage Financier at CNP Prévoyance
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-2 gap-y-1 sm:gap-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Sept 2025 – Aug 2027</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Lyon, France</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  Contribution au provisionnement et à la projection du compte de résultat Prévoyance (risques décès, obsèques, dépendance, GAV, emprunteur…).
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  Analyse financière et production de reporting (ORSA, marges PB, ratios financiers) sur plusieurs horizons (1 an, 5 ans, 10 ans).
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  Automatisation et simplification de modèles de projection sous FGAAP à l’aide d’outils de Business Intelligence (Excel VBA, Python, BI tools).
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Internship Nextuarial */}
          <Card className="border-l-4 border-l-blue-600 custom-card animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-700">
                <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                Actuarial Data Science Intern at Nextuarial
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-2 gap-y-1 sm:gap-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June – July 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Paris, France</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-blue-600" />
                  <a href="/documents/MOHAMED-EL-HAFED_Ismail_RapportStage.pdf" className="text-blue-600 underline">
                    Rapport de stage (PDF)
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Développement d’un chatbot actuariel (GPT-4, Streamlit, Python) permettant d’interroger des données de provisionnement en langage naturel.
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Segmentation de portefeuilles via Machine Learning (clustering, k-means, validation statistique et métier).
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Mise en œuvre de méthodologies Chain Ladder, Mack, et Bornhueter-Ferguson dans un contexte industriel.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
