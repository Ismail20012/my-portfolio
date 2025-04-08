import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react"

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Professional Experience</h1>

        {/* Abstract decorative elements */}
        <div className="abstract-shape abstract-shape-1"></div>
        <div className="abstract-shape abstract-shape-2"></div>

        <div className="space-y-12">
          {/* Internship */}
          <Card className="border-l-4 border-l-blue-600 custom-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-700">
                <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                Web Development Internship at LHconsult
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-2 gap-y-1 sm:gap-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July – August 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Paris, France</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">Responsibilities</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Web development for the company, creating and maintaining client-facing website of the company
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Database management using Excel, Access, and SQL for data organization and retrieval</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Project coordination with cross-functional teams to ensure timely delivery</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">Skills Used</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Python programming for automation and data processing tasks</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Advanced data handling techniques for large datasets</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Web development using modern frameworks and technologies</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">Key Achievements</h3>
                  <p className="text-gray-700">
                    Successfully implemented database optimization that improved query performance by 30%. Developed an
                    automated reporting system that reduced manual work by several hours per week.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Student Job */}
          <Card className="border-l-4 border-l-orange-500 custom-card animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-700">
                <Briefcase className="h-6 w-6 mr-3 text-orange-500" />
                Student Job at Food Society/SMPR
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-2 gap-y-1 sm:gap-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>September 2023 – July 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Lyon, France</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">Responsibilities</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Cross-functional collaboration with various departments to support business operations
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Autonomous execution of assigned missions and projects</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Communication with team members and stakeholders to ensure smooth operations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">Skills Developed</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Time management and prioritization in a fast-paced environment</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Customer service and interpersonal communication</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Problem-solving in real-time situations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-700">Key Achievements</h3>
                  <p className="text-gray-700">
                    Balanced academic studies with professional responsibilities, demonstrating strong time management
                    skills. Received positive feedback from management for reliability and initiative.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
