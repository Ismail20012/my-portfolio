"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">{t("about.title")}</h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center animate-slide-in-left">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Ismail Mohamed El Hafed</h2>
            <p className="text-lg text-gray-700 mb-6">
              {t("about.intro")}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">{t("about.exchangeTitle")}</h3>
              <p className="text-gray-700">
                {t("about.exchangeDesc")}
              </p>
            </div>
            <p className="text-lg text-gray-700">
              {t("about.passion")}
            </p>
          </div>
          {/* End Text Content */}

          {/* Image Section */}
          <div className="flex justify-center items-start animate-slide-in-right">
            <Image
              src="/images/LCP_1442.jpg"
              alt="Ismail Mohamed El Hafed"
              width={800}
              height={1200}
              className="rounded-lg shadow-lg w-full h-auto max-w-md image-hover-zoom"
            />
          </div>
          {/* End Image Section */}
        </div>
        {/* End Main Content Grid */}

        <div className="section-divider my-12 border-t border-gray-200"></div>

        {/* Education Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">{t("about.educationTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="custom-card border-t-4 border-t-blue-600 hover-lift rounded-lg shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-xl font-semibold">{t("about.masterDegree")}</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>{t("about.institution")}</strong> ISFA (Université Lyon1)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>{t("about.program")}</strong> {t("about.masterProgram")}
              </p>
              <p className="text-gray-700">
                <strong>{t("about.period")}</strong> 2023 - Present
              </p>
            </CardContent>
          </Card>

          <Card className="custom-card border-t-4 border-t-blue-600 hover-lift rounded-lg shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-xl font-semibold">{t("about.prepClasses")}</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>{t("about.institution")}</strong> Groupe Polytechnique de Nouakchott
              </p>
              <p className="text-gray-700 mb-2">
                <strong>{t("about.program")}</strong> {t("about.prepProgram")}
              </p>
              <p className="text-gray-700">
                <strong>{t("about.focus")}</strong> {t("about.prepFocus")}
              </p>
            </CardContent>
          </Card>

          <Card className="custom-card border-t-4 border-t-blue-600 hover-lift rounded-lg shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-xl font-semibold">{t("about.baccalaureat")}</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>{t("about.achievement")}</strong> {t("about.bacRank")}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>{t("about.stream")}</strong> {t("about.scientific")}
              </p>
              <p className="text-gray-700">
                <strong>{t("about.distinction")}</strong> {t("about.honors")}
              </p>
            </CardContent>
          </Card>
        </div>
        {/* End Education Section */}

        <div className="section-divider my-12 border-t border-gray-200"></div>

        {/* Skills Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">{t("about.skillsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="custom-card hover-lift rounded-lg shadow-sm border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">{t("about.technicalSkills")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.programming")}</span>
                  <span className="text-gray-700">Python, R, VBA</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.dataAnalysis")}</span>
                  <span className="text-gray-700">{t("about.dataAnalysisDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.databases")}</span>
                  <span className="text-gray-700">SQL, Excel, Access</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.actuarial")}</span>
                  <span className="text-gray-700">{t("about.actuarialDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.webDev")}</span>
                  <span className="text-gray-700">HTML, CSS, JavaScript</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="custom-card hover-lift rounded-lg shadow-sm border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">{t("about.softSkills")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.languages")}</span>
                  <span className="text-gray-700">{t("about.languagesDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.communication")}</span>
                  <span className="text-gray-700">{t("about.communicationDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.teamwork")}</span>
                  <span className="text-gray-700">{t("about.teamworkDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.problemSolving")}</span>
                  <span className="text-gray-700">{t("about.problemSolvingDesc")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">{t("about.organization")}</span>
                  <span className="text-gray-700">{t("about.organizationDesc")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* End Skills Section */}

        {/* International Experience Section */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
            <Globe className="h-6 w-6 mr-2" /> {t("about.internationalExp")}
          </h3>
          <p className="text-gray-700">
            {t("about.internationalDesc")}
          </p>
        </div>
        {/* End International Experience Section */}

      </div>
    </main>
  );
}