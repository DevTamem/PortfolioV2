'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { personalInfo, socialLinks } from '@/lib/data'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container-custom px-6 py-20 md:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-accent font-medium mb-4 text-2xl"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-secondary mb-6"
            >
              {personalInfo.title} at{' '}
              <span className="text-accent">{personalInfo.university}</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-secondary max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a href="#projects">
                <Button variant="primary" size="lg">View Projects</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" size="lg">Contact Me</Button>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface border border-border text-secondary
                         hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface border border-border text-secondary
                         hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-3 rounded-full bg-surface border border-border text-secondary
                         hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Profile image placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse" />

              {/* Image container */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden border-4 border-surface shadow-soft-lg">
                {/* Placeholder with initials - replace with actual image later */}
                <div className="w-full h-full flex items-center justify-center bg-highlight">
                  <span className="text-6xl md:text-7xl font-heading font-bold text-accent/40">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <Image
                  src="/images/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-secondary hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
