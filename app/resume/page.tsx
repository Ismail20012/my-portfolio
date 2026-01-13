"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">{t("resume.title")}</h1>

        {/* Buttons */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 custom-button">
            <a href="/documents/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> {t("resume.download")}
            </a>
          </Button>
          <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50 custom-button">
            <Link href="/contact">
              <ExternalLink className="mr-2 h-4 w-4" /> {t("resume.contactMe")}
            </Link>
          </Button>
        </div>
        {/* End Buttons */}

        {/* Resume Details Card */}
        <Card className="custom-card animate-slide-in-left mb-12 rounded-lg border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">{t("resume.details")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" /> {t("resume.education")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">{t("about.masterProgram")}</h4>
                  <p className="text-gray-600">ISFA (Université Lyon1) | 2023 - Present</p>
                  <p className="text-gray-700 mt-1">
                    {t("resume.coursework")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">{t("about.prepClasses")} (MPSI/MP)</h4>
                  <p className="text-gray-600">Groupe Polytechnique de Nouakchott | 2021 - 2023</p>
                  <p className="text-gray-700 mt-1">
                    {t("resume.prepIntensive")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">{t("about.baccalaureat")} ({t("about.scientific")})</h4>
                  <p className="text-gray-600">{t("resume.bacRank")}</p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Briefcase className="h-5 w-5 mr-2" /> {t("resume.professionalExp")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">{t("resume.webDevInternship")}</h4>
                  <p className="text-gray-600">LHconsult | Paris, France | July - August 2024</p>
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>{t("resume.webDev1")}</li>
                    <li>{t("resume.webDev2")}</li>
                    <li>{t("resume.webDev3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">{t("resume.studentJob")}</h4>
                  <p className="text-gray-600">Food Society/SMPR | Lyon, France | September 2023 - July 2024</p>
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>{t("resume.student1")}</li>
                    <li>{t("resume.student2")}</li>
                    <li>{t("resume.student3")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Code className="h-5 w-5 mr-2" /> {t("resume.skills")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">{t("resume.technicalSkills")}</h4>
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>{t("about.programming")} Python, R, VBA</li>
                    <li>{t("about.dataAnalysis")} {t("about.dataAnalysisDesc")}</li>
                    <li>{t("about.databases")} SQL, Excel, Access</li>
                    <li>{t("about.actuarial")} {t("about.actuarialDesc")}</li>
                    <li>{t("about.webDev")} HTML, CSS, JavaScript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">{t("resume.softSkillsLang")}</h4>
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>{t("about.languages")} {t("about.languagesDesc")}</li>
                    <li>{t("about.communication")} {t("about.communicationDesc")}</li>
                    <li>{t("about.teamwork")} {t("about.teamworkDesc")}</li>
                    <li>{t("about.problemSolving")} {t("about.problemSolvingDesc")}</li>
                    <li>{t("about.organization")} {t("about.organizationDesc")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements & Interests */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Award className="h-5 w-5 mr-2" /> {t("resume.achievementsInterests")}
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>{t("resume.exchangeSemester")}</li>
                <li>{t("resume.bacNational")}</li>
                <li>{t("resume.interests")}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        {/* End Resume Details Card */}


        {/* Embedded PDF Viewer */}
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">{t("resume.viewResume")}</h2>
        <Card className="max-w-4xl mx-auto mb-8 custom-card animate-slide-in-right rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 md:p-8">
            <div className="aspect-[1/1.414] w-full bg-gray-100 shadow-md rounded-md overflow-hidden">
              <iframe
                src="/documents/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full border-none"
                title="Resume PDF Preview"
              >
                <p className="p-4 text-center text-red-600">
                  Your browser does not support embedded PDFs.
                  <a
                    href="/documents/resume.pdf"
                    download
                    className="text-blue-600 underline ml-2"
                  >
                    Download the PDF
                  </a>
                  instead.
                </p>
              </iframe>
            </div>
          </div>
        </Card>
        {/* End Embedded PDF Viewer */}

      </div>
    </main>
  );
}