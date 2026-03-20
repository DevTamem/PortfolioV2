'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Clock } from 'lucide-react'
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
        {project.image && (
          <div className={cn('p-3 pb-0', project.featured && 'p-4')}>
            <div className={cn(
              'relative w-full bg-surface rounded-xl overflow-hidden',
              project.featured ? 'h-48' : 'h-36'
            )}>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-contain p-2"
                style={{ borderRadius: '0.75rem' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        )}

        {project.featured && (
          <div className="px-6 pt-6">
            <Badge variant="accent" className="text-xs">
              Featured Project
            </Badge>
          </div>
        )}

        <CardHeader className={cn(
          project.featured ? 'pt-6' : 'pt-3 pb-2',
          !project.featured && !project.image && 'pt-4'
        )}>
          <CardTitle className={cn('flex items-center gap-2', project.featured ? 'text-lg' : 'text-base')}>
            {project.title}
          </CardTitle>
          <CardDescription className={cn(project.featured ? 'text-base' : 'text-xs line-clamp-2')}>
            {project.featured ? (project.longDescription || project.description) : project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className={cn(project.featured ? 'space-y-6' : 'space-y-3 pt-0 pb-4')}>
          {project.featured ? (
            project.technologies.map((tech) => (
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
            ))
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.flatMap(t => t.items).slice(0, 4).map((item) => (
                <Badge key={item} variant="default" className="text-[10px] px-2 py-0.5">
                  {item}
                </Badge>
              ))}
            </div>
          )}

          <div className={cn('flex flex-wrap gap-2', project.featured && 'gap-3 pt-2')}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className={cn(
                    'inline-flex items-center gap-2',
                    !project.featured && 'text-xs h-7 px-2'
                  )}
                >
                  <Github className={cn('w-4 h-4', !project.featured && 'w-3 h-3')} />
                  {project.featured ? 'View Code' : 'Code'}
                </Button>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="sm"
                  className={cn(
                    'inline-flex items-center gap-2',
                    !project.featured && 'text-xs h-7 px-2'
                  )}
                >
                  <ExternalLink className={cn('w-4 h-4', !project.featured && 'w-3 h-3')} />
                  {project.featured ? 'Live Demo' : 'Demo'}
                </Button>
              </a>
            )}
            {project.inProgress && !project.links.github && !project.links.live && (
              <Badge
                variant="outline"
                className={cn(
                  'inline-flex items-center gap-1.5',
                  project.featured ? 'px-3 py-1.5' : 'px-2 py-1 text-[10px]'
                )}
              >
                <Clock className={cn(project.featured ? 'w-3.5 h-3.5' : 'w-3 h-3')} />
                In Progress
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
