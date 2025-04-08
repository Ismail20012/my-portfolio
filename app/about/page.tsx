import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">About Me</h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center animate-slide-in-left">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Ismail Mohamed El Hafed</h2>
            <p className="text-lg text-gray-700 mb-6">
              I'm originally from Mauritania, studied at Groupe Polytechnique de Nouakchott in a Prepa MPSI/MP, and am
              currently pursuing a Master 1 in Actuarial Science at ISFA (Université Lyon1). My focus is on data-driven
              actuarial modeling, risk management, and advanced analytics.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Exchange Semester in Vietnam</h3>
              <p className="text-gray-700">
                My exchange semester in Vietnam was transformative – it significantly enhanced my English skills and
                opened my eyes to actuarial science in different cultural and professional settings, broadening my
                global perspective and practical understanding of the field.
              </p>
            </div>
            <p className="text-lg text-gray-700">
              With a strong mathematical foundation and a passion for applying analytical skills to real-world problems,
              I'm eager to contribute to the field of actuarial science through innovative approaches and rigorous
              analysis.
            </p>
          </div>
          {/* End Text Content */}

          {/* Image Section - Modified for Full Image */}
          <div className="flex justify-center items-start animate-slide-in-right"> {/* Adjusted alignment */}
            <Image
              src="/images/LCP_1442.jpg" // Using the portrait image
              alt="Ismail Mohamed El Hafed"
              width={800} // Original image width (adjust if different)
              height={1200} // Original image height (adjust if different)
              className="rounded-lg shadow-lg w-full h-auto max-w-md" // Make responsive, add styling
            />
          </div>
           {/* End Image Section */}
        </div>
        {/* End Main Content Grid */}

        <div className="section-divider my-12 border-t border-gray-200"></div> {/* Added divider styling */}

        {/* Education Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="custom-card border-t-4 border-t-blue-600 hover-lift rounded-lg shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-xl font-semibold">Master's Degree</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Institution:</strong> ISFA (Université Lyon1)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Program:</strong> Master 1 in Actuarial Science
              </p>
              <p className="text-gray-700">
                <strong>Period:</strong> 2023 - Present
              </p>
            </CardContent>
          </Card>

          <Card className="custom-card border-t-4 border-t-blue-600 hover-lift rounded-lg shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-xl font-semibold">Preparatory Classes</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Institution:</strong> Groupe Polytechnique de Nouakchott
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Program:</strong> Prepa MPSI/MP
              </p>
              <p className="text-gray-700">
                <strong>Focus:</strong> Mathematics, Physics, Engineering Sciences
              </p>
            </CardContent>
          </Card>

          <Card className="custom-card border-t-4 border-t-blue-600 hover-lift rounded-lg shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-xl font-semibold">Baccalauréat</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Achievement:</strong> Ranked 5th at the national level
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Stream:</strong> Scientific
              </p>
              <p className="text-gray-700">
                <strong>Distinction:</strong> Honors
              </p>
            </CardContent>
          </Card>
        </div>
        {/* End Education Section */}

        <div className="section-divider my-12 border-t border-gray-200"></div> {/* Added divider styling */}

        {/* Skills Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="custom-card hover-lift rounded-lg shadow-sm border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-start"> {/* Changed to items-start for wrapping */}
                  <span className="w-32 font-medium flex-shrink-0">Programming:</span>
                  <span className="text-gray-700">Python, R, VBA</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Data Analysis:</span>
                  <span className="text-gray-700">Statistical modeling, Data visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Databases:</span>
                  <span className="text-gray-700">SQL, Excel, Access</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Actuarial:</span>
                  <span className="text-gray-700">Risk modeling, Provisioning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Web Dev:</span>
                  <span className="text-gray-700">HTML, CSS, JavaScript</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="custom-card hover-lift rounded-lg shadow-sm border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Soft Skills</h3>
              <ul className="space-y-2">
                 <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Languages:</span>
                  <span className="text-gray-700">French (Fluent), English (Proficient), Arabic (Native)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Communication:</span>
                  <span className="text-gray-700">Presentation, Technical writing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Teamwork:</span>
                  <span className="text-gray-700">Collaboration, Project coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Problem-solving:</span>
                  <span className="text-gray-700">Analytical thinking, Critical analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-32 font-medium flex-shrink-0">Organization:</span>
                  <span className="text-gray-700">Time management, Task prioritization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* End Skills Section */}

        {/* International Experience Section */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
            <Globe className="h-6 w-6 mr-2" /> International Experience
          </h3>
          <p className="text-gray-700">
            My academic journey has been enriched by international experiences, particularly my exchange semester in
            Vietnam. This experience has not only broadened my technical knowledge but also enhanced my cultural
            awareness and adaptability. I believe these global perspectives are invaluable in today's interconnected
            actuarial field, allowing me to approach problems with diverse viewpoints and innovative solutions.
          </p>
        </div>
         {/* End International Experience Section */}

      </div>
    </main>
  );
}