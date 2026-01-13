"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center py-16 md:py-24">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.png"
            alt="Blue textured background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent backdrop-blur-sm" />
        </div>

        {/* Container for Flex Layout */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 lg:gap-12">
            {/* Text Block */}
            <div className="w-full md:w-3/5 lg:w-1/2 bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl animate-slide-up order-2 md:order-1">
              <h1 className="text-4xl font-bold tracking-tight text-blue-800 sm:text-5xl mb-4">
                {t("home.title")}
              </h1>
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {t("home.subtitle")}
              </h2>
              <p className="text-lg text-gray-800 mb-6">
                {t("home.intro")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 custom-button">
                  <Link href="/about">
                    {t("home.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 custom-button"
                >
                  <Link href="/resume">
                    {t("home.viewResume")} <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* End Text Block */}

            {/* Image Block */}
            <div className="w-full md:w-2/5 lg:w-1/3 order-1 md:order-2 animate-slide-up">
              <div className="relative w-full max-w-xs mx-auto md:max-w-sm aspect-square overflow-hidden rounded-lg shadow-xl image-hover-zoom">
                <Image
                  src="/images/LCP_2588.jpg"
                  alt="Ismail Mohamed El Hafed"
                  fill
                  className="object-cover object-center transition-transform duration-500"
                />
              </div>
            </div>
            {/* End Image Block */}
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Quick Overview Section */}
      <section className="py-16 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-800 animate-fade-in">
            {t("home.focusAreas")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education Card */}
            <div
              className="custom-card p-6 animate-slide-in-left rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{t("home.education")}</h3>
              <p className="text-gray-700">
                {t("home.educationDesc")}
              </p>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-medium link-underline-gradient"
              >
                {t("home.learnMoreLink")}
              </Link>
            </div>

            {/* Experience Card */}
            <div
              className="custom-card p-6 animate-slide-in-left rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{t("home.experience")}</h3>
              <p className="text-gray-700">
                {t("home.experienceDesc")}
              </p>
              <Link
                href="/experience"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-medium link-underline-gradient"
              >
                {t("home.viewExperience")}
              </Link>
            </div>

            {/* Projects Card */}
            <div
              className="custom-card p-6 animate-slide-in-left rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: "0.5s" }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{t("home.projects")}</h3>
              <p className="text-gray-700">
                {t("home.projectsDesc")}
              </p>
              <Link
                href="/projects"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-medium link-underline-gradient"
              >
                {t("home.exploreProjects")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Quick Overview Section */}

      {/* Contact Preview */}
      <section className="py-16 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">{t("home.getInTouch")}</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center hover-scale">
              <Mail className="h-5 w-5 mr-2 text-blue-600" />
              <a
                href="mailto:ismaildavou16@gmail.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                ismaildavou16@gmail.com
              </a>
            </div>
            <div className="flex items-center hover-scale">
              <Phone className="h-5 w-5 mr-2 text-blue-600" />
              <a
                href="tel:+33611644116"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                06 11 64 41 16
              </a>
            </div>
            <div className="flex items-center hover-scale">
              <Linkedin className="h-5 w-5 mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/ismail-mohamed-el-hafed-640440229"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ismail Mohamed El Hafed
              </a>
            </div>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 custom-button animate-pulse-slow">
            <Link href="/contact">{t("home.contactMe")}</Link>
          </Button>
        </div>
      </section>
      {/* End Contact Preview */}
    </main>
  );
}
