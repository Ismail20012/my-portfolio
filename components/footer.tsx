import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Ismail Mohamed El Hafed</h3>
            <p className="text-gray-600">Actuarial Science Student at ISFA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                <a
                  href="mailto:ismaildavou16@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  ismaildavou16@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-600" />
                <a href="tel:+33611644116" className="text-gray-600 hover:text-blue-600 transition-colors">
                  06 11 64 41 16
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-5 w-5 mr-2 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/ismail-mohamed-el-hafed-640440229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Ismail Mohamed El Hafed
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Ismail Mohamed El Hafed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
