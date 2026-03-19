'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Skill } from '@/lib/data'

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={cn(
        'flex items-center gap-3 p-4 rounded-xl',
        'bg-surface border border-border',
        'transition-shadow duration-300',
        'hover:shadow-soft hover:border-accent/30',
        'cursor-default'
      )}
    >
      <div className="p-2 rounded-lg bg-accent/10">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <span className="font-medium text-primary">{skill.name}</span>
    </motion.div>
  )
}
