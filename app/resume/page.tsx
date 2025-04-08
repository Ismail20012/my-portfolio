import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Resume</h1>

        {/* Buttons */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 custom-button">
            <a href="/documents/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume (PDF)
            </a>
          </Button>
          <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50 custom-button">
            <Link href="/contact">
              <ExternalLink className="mr-2 h-4 w-4" /> Contact Me
            </Link>
          </Button>
        </div>
        {/* End Buttons */}

        {/* Resume Details Card */}
        <Card className="custom-card animate-slide-in-left mb-12 rounded-lg border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Resume Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" /> Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Master 1 in Actuarial Science</h4>
                  <p className="text-gray-600">ISFA (Université Lyon1) | 2023 - Present</p>
                  <p className="text-gray-700 mt-1">
                    Coursework: Actuarial Modeling, Risk Theory, Financial Mathematics, Statistics, Data Science
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Preparatory Classes (MPSI/MP)</h4>
                  <p className="text-gray-600">Groupe Polytechnique de Nouakchott | 2021 - 2023</p>
                  <p className="text-gray-700 mt-1">
                    Intensive preparation in Mathematics, Physics, and Engineering Sciences
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Baccalauréat (Scientific Stream)</h4>
                  <p className="text-gray-600">Ranked 5th at the national level | With Honors</p>
                </div>
              </div>
            </div>

            {/* Professional Experience - RESTORED DETAILS */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Briefcase className="h-5 w-5 mr-2" /> Professional Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Web Development Internship</h4>
                  <p className="text-gray-600">LHconsult | Paris, France | July - August 2024</p>
                  {/* --- Restored List --- */}
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>Web development and database management</li>
                    <li>Project coordination with cross-functional teams</li>
                    <li>Implemented database optimization improving query performance by 30%</li>
                  </ul>
                   {/* --- End Restored List --- */}
                </div>
                <div>
                  <h4 className="font-medium">Student Job</h4>
                  <p className="text-gray-600">Food Society/SMPR | Lyon, France | September 2023 - July 2024</p>
                   {/* --- Restored List --- */}
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>Cross-functional collaboration with various departments</li>
                    <li>Autonomous execution of assigned missions and projects</li>
                    <li>Developed strong time management and communication skills</li>
                  </ul>
                   {/* --- End Restored List --- */}
                </div>
              </div>
            </div>

            {/* Skills - RESTORED DETAILS */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Code className="h-5 w-5 mr-2" /> Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* --- Restored Technical Skills --- */}
                <div>
                  <h4 className="font-medium">Technical Skills</h4>
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>Programming: Python, R, VBA</li>
                    <li>Data Analysis: Statistical modeling, Data visualization</li>
                    <li>Databases: SQL, Excel, Access</li>
                    <li>Actuarial: Risk modeling, Provisioning</li>
                    <li>Web Development: HTML, CSS, JavaScript</li>
                  </ul>
                </div>
                 {/* --- End Restored Technical Skills --- */}
                 {/* --- Restored Soft Skills --- */}
                <div>
                  <h4 className="font-medium">Soft Skills & Languages</h4>
                  <ul className="list-disc pl-5 mt-1 text-gray-700">
                    <li>Languages: French (Fluent), English (Proficient), Arabic (Native)</li>
                    <li>Communication: Presentation, Technical writing</li>
                    <li>Teamwork: Collaboration, Project coordination</li>
                    <li>Problem-solving: Analytical thinking, Critical analysis</li>
                    <li>Organization: Time management, Task prioritization</li>
                  </ul>
                </div>
                 {/* --- End Restored Soft Skills --- */}
              </div>
            </div>

            {/* Achievements & Interests - RESTORED DETAILS */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Award className="h-5 w-5 mr-2" /> Achievements & Interests
              </h3>
               {/* --- Restored List --- */}
              <ul className="list-disc pl-5 text-gray-700">
                <li>Exchange semester in Vietnam enhancing global perspective and cultural awareness</li>
                <li>Ranked 5th nationally in the Baccalauréat scientific stream</li>
                <li>Interests: Data science, Machine learning, Financial modeling, International economics</li>
              </ul>
               {/* --- End Restored List --- */}
            </div>
          </CardContent>
        </Card>
        {/* End Resume Details Card */}


        {/* Embedded PDF Viewer */}
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">View Resume</h2>
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