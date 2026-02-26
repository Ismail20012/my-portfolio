"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Code } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">{t("resume.title")}</h1>

        {/* Summary Header */}
        <Card className="custom-card mb-8 rounded-lg border border-blue-200 bg-blue-50/50 shadow-sm animate-slide-up">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">{t("resume.statusLabel")}</h3>
                  <p className="text-gray-700 text-sm mt-1">{t("resume.statusValue")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">{t("resume.expertiseLabel")}</h3>
                  <p className="text-gray-700 text-sm mt-1">{t("resume.expertiseValue")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">{t("resume.techLabel")}</h3>
                  <p className="text-gray-700 text-sm mt-1">{t("resume.techValue")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 custom-button text-base px-8 py-3">
            <a href="/documents/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" /> {t("resume.download")}
            </a>
          </Button>
        </div>

        {/* Embedded PDF Viewer */}
        <Card className="max-w-4xl mx-auto custom-card animate-slide-in-right rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">{t("resume.viewResume")}</h2>
            <div className="w-full bg-gray-100 shadow-inner rounded-lg overflow-hidden" style={{ height: "85vh" }}>
              <iframe
                src="/documents/resume.pdf#toolbar=1&navpanes=0"
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

      </div>
    </main>
  );
}