"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, CheckCircle, FileText } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function ExperiencePage() {
  const { t } = useLanguage()

  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
          {t("experience.title")}
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
                {t("experience.cnpTitle")}
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
                  {t("experience.cnpTask1")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  {t("experience.cnpTask2")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  {t("experience.cnpTask3")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                  {t("experience.cnpTask4")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Internship Nextuarial */}
          <Card className="border-l-4 border-l-blue-600 custom-card animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-700">
                <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                {t("experience.nextuarialTitle")}
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
                    {t("experience.internshipReport")}
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  {t("experience.nextuarialTask1")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  {t("experience.nextuarialTask2")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  {t("experience.nextuarialTask3")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  {t("experience.nextuarialTask4")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  {t("experience.nextuarialTask5")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Internship LHconsult */}
          <Card className="border-l-4 border-l-purple-600 custom-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-purple-700">
                <Briefcase className="h-6 w-6 mr-3 text-purple-600" />
                {t("experience.lhconsultTitle")}
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
                  {t("experience.lhconsultTask1")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                  {t("experience.lhconsultTask2")}
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                  {t("experience.lhconsultTask3")}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
