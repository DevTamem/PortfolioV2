'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { Button } from '@/components/ui/button'
import { socialLinks, personalInfo } from '@/lib/data'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@DevTamem',
    href: socialLinks.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: personalInfo.name,
    href: socialLinks.linkedin,
  },
]

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-secondary text-lg mb-8"
        >
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat about tech. Feel free to reach out!
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-secondary mb-8"
        >
          <MapPin className="w-5 h-5 text-accent" />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center p-6 rounded-xl bg-surface border border-border
                          hover:shadow-soft hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-medium text-primary mb-1">{method.label}</span>
                <span className="text-sm text-secondary">{method.value}</span>
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href={`mailto:${socialLinks.email}`}>
            <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send me an email
            </Button>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
