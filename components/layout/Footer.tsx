'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react'
import { socialLinks, personalInfo } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name/Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="font-heading font-bold text-primary text-lg">
              {personalInfo.name}
            </h3>
          </motion.div>

          {/* Center - Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-2 rounded-full text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right - Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-secondary text-sm flex items-center gap-1"
          >
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> &copy; {currentYear}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
