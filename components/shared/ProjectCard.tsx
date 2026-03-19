'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          'overflow-hidden transition-all duration-300',
          'hover:shadow-soft-lg hover:-translate-y-1',
          project.featured && 'border-accent/30'
        )}
      >
        {project.featured && (
          <div className="px-6 pt-6">
            <Badge variant="accent" className="text-xs">
              Featured Project
            </Badge>
          </div>
        )}

        <CardHeader className={cn(!project.featured && 'pt-6')}>
          <CardTitle className="flex items-center gap-2">
            {project.title}
          </CardTitle>
          <CardDescription className="text-base">
            {project.longDescription || project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {project.technologies.map((tech) => (
            <div key={tech.category}>
              <h4 className="text-sm font-semibold text-muted mb-2 uppercase tracking-wide">
                {tech.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <Badge key={item} variant="default" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="inline-flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
