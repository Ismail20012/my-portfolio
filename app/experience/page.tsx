import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, CheckCircle, FileText } from "lucide-react"

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
          Professional Experience
        </h1>

        {/* Abstract decorative elements */}
        <div className="abstract-shape abstract-shape-1"></div>
        <div className="abstract-shape abstract-shape-2"></div>

        <div className="space-y-12">
          {/* Alternance CNP Prévoyance */}
          <Card className="border-l-4 border-l-green-600 custom-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-green-700">
                <Briefcase className="h-6 w-6 mr-3 text-green-600" />
                Actuarial Apprentice – Pilotage Financier Prévoyance at CNP Assurances
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-2 gap-y-1 sm:gap-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Sept 2025 – Aug 2027</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Lyon / Issy-les-Moulineaux, France</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  Design and implementation of a stochastic P&amp;L projection model for the Prévoyance portfolio (death, disability, LTC, funeral, GAV, credit life) over a 10-year horizon, as part of my actuarial thesis.
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  Contribution to projections and analyses of the Prévoyance income statement under French GAAP and Solvency II (technical margins, combined ratios, lapse rates, PPB allocations, ORSA and strategic plan monitoring).
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  Rebuild and industrialization of the Prévoyance P&amp;L model: restructuring a large Excel ecosystem, replacing volatile formulas (INDIRECT…) with structured architecture (Power Query, named ranges) and VBA automation.
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  Development of tools to simulate scenarios (claims, lapses, expenses) and quantify their impact on margins and financial KPIs used for budgeting and management steering.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Internship Nextuarial */}
          <Card className="border-l-4 border-l-blue-600 custom-card animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-700">
                <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                Actuarial Reserving &amp; Data Science Intern at Nextuarial
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-2 gap-y-1 sm:gap-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 2025 – July 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Station F, Paris, France</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-blue-600" />
                  <a
                    href="/documents/MOHAMED-EL-HAFED_Ismail_RapportStage.pdf"
                    className="text-blue-600 underline"
                  >
                    Internship report (PDF)
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Built an actuarial chatbot on top of Nextuarial&apos;s reserving engine (ReAcT): Streamlit web app, GPT-based assistant, and automated Python code generation to explore reserving outputs in natural language.
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Designed the technical architecture: Excel ingestion → normalization into Pandas DataFrames → interaction with OpenAI API → secure execution of generated code → dynamic tables, charts (Plotly) and multi-format exports (PDF, Excel, PowerPoint, Word, CSV, PNG).
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Implemented robust production features: session management, error handling, retries, execution sandbox and performance optimization for real actuarial use cases (ultimates, development factors, multi-year comparisons).
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Developed a machine-learning–based segmentation methodology for P&amp;C portfolios (k-means clustering on synthetic SPLICE data, PCA diagnostics, silhouette and Davies–Bouldin indices) to improve triangle homogeneity for reserving.
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  Validated the segmentation via Chain-Ladder back-testing (baseline vs clustered vs fully merged triangles), achieving an actuarially coherent 12-cluster structure balancing statistical quality and business interpretability.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Internship LHconsult */}
          <Card className="border-l-4 border-l-purple-600 custom-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-purple-700">
                <Briefcase className="h-6 w-6 mr-3 text-purple-600" />
                Software &amp; Web Development Intern at LHconsult
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-2 gap-y-1 sm:gap-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 2024 – Aug 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Paris, France</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                  Designed and developed the company&apos;s showcase website from scratch, combining WordPress for CMS features with custom HTML/CSS/JavaScript components for tailored UI/UX.
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                  Implemented process automations and small internal tools to structure client data and improve daily operations.
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                  Managed and optimized relational databases (Excel, Access, SQL): data cleaning, query design and performance tuning for reporting needs.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
