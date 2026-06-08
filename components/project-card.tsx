"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { FileText, ExternalLink, Download, ChevronRight } from "lucide-react"
import type { ProjectItem } from "@/lib/i18n/LanguageContext"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface ProjectCardProps {
    project: ProjectItem
    index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const { t } = useLanguage()
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <>
            <Card
                className="flex flex-col h-full custom-card animate-slide-in-left cursor-pointer group hover:border-blue-300 transition-all duration-300"
                style={{ animationDelay: `${index * 0.07}s` }}
                onClick={() => setDialogOpen(true)}
            >
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-1">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/50 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </div>
                    <CardTitle className="text-lg leading-tight text-blue-700 mt-2">
                        {project.title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow pb-3">
                    <p className="text-gray-600 text-sm line-clamp-3">
                        {project.description}
                    </p>
                </CardContent>

                <CardFooter className="pt-0 flex flex-col items-stretch gap-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 badge-bounce-in"
                                style={{ animationDelay: `${tagIndex * 0.05}s` }}
                            >
                                {tag}
                            </Badge>
                        ))}
                        {project.tags.length > 4 && (
                            <Badge variant="secondary" className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5">
                                +{project.tags.length - 4}
                            </Badge>
                        )}
                    </div>

                    {/* File download buttons — always visible */}
                    {project.files.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                            {project.files.map((file) => (
                                <Button
                                    key={file.url}
                                    variant="outline"
                                    size="sm"
                                    className="text-xs border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation() // Don't open dialog when clicking download
                                        window.open(file.url, "_blank")
                                    }}
                                >
                                    <ExternalLink className="mr-1.5 h-3 w-3" />
                                    {file.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </CardFooter>
            </Card>

            {/* Detail Dialog */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/50 flex items-center justify-center flex-shrink-0">
                                <FileText className="h-5 w-5 text-blue-600" />
                            </div>
                            <DialogTitle className="text-xl text-blue-800">
                                {project.title}
                            </DialogTitle>
                        </div>
                        <DialogDescription className="text-base text-gray-700 leading-relaxed">
                            {project.longDescription}
                        </DialogDescription>
                    </DialogHeader>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 my-4">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Embedded PDF Viewer — show the first file */}
                    {project.files.length > 0 && (
                        <div className="w-full aspect-[1/1.3] bg-gray-100 rounded-lg overflow-hidden border shadow-inner">
                            <iframe
                                src={`${project.files[0].url}#toolbar=1&navpanes=0`}
                                className="w-full h-full border-none"
                                title={`PDF: ${project.title}`}
                            >
                                <p className="p-4 text-center text-gray-600">
                                    Your browser does not support embedded PDFs.
                                </p>
                            </iframe>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        {project.files.map((file, i) => (
                            <Button
                                key={file.url}
                                asChild
                                className={
                                    i === 0
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "border-blue-600 text-blue-600 hover:bg-blue-50"
                                }
                                variant={i === 0 ? "default" : "outline"}
                            >
                                <a href={file.url} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    {file.label}
                                </a>
                            </Button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
