'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code, Lightbulb, Rocket } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { personalInfo } from '@/lib/data'

const highlights = [
  {
    icon: Code,
    title: 'Building',
    description: 'Creating real-world applications that solve problems',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Always exploring new technologies and best practices',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity',
    description: 'Driven by the desire to understand how things work',
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Every project is an opportunity to level up',
  },
]

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <SectionWrapper id="about" className="bg-surface/50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-6" />

          <p className="text-secondary leading-relaxed mb-6 text-lg">
            {personalInfo.aboutMe}
          </p>

          <p className="text-secondary leading-relaxed">
            My goal is to keep growing as a developer while building projects
            that not only challenge me technically but also bring value to others.
            I&apos;m always excited to collaborate, learn from others, and contribute
            to meaningful work.
          </p>
        </motion.div>

        {/* Right side - Highlights grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-xl bg-background border border-border
                          hover:shadow-soft hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
