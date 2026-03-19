'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { projects } from '@/lib/data'

export function Projects() {
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

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
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
