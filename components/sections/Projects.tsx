'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { PlaceholderCard } from '@/components/shared/PlaceholderCard'
import { projects } from '@/lib/data'

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <SectionWrapper id="projects" className="bg-surface/50">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-1 bg-accent rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-secondary max-w-2xl mx-auto"
        >
          Some of the projects I&apos;ve been working on
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Featured projects */}
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}

        {/* Non-featured projects + placeholder cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 1}
            />
          ))}
          <PlaceholderCard index={otherProjects.length + 1} />
          <PlaceholderCard index={otherProjects.length + 2} />
        </div>
      </div>

      {/* Call to action for more projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-secondary mb-4">
          More projects coming soon...
        </p>
        <p className="text-sm text-muted">
          I&apos;m always working on something new. Check back later or
          <a
            href="#contact"
            className="text-accent hover:text-accent-hover ml-1 transition-colors"
          >
            get in touch
          </a>
          {' '}to learn more.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
