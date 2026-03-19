'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  as: Component = 'p'
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <Component className={cn(className)}>{text}</Component>
    </motion.div>
  )
}

interface StaggeredTextProps {
  words: string[]
  className?: string
  wordClassName?: string
  staggerDelay?: number
}

export function StaggeredText({
  words,
  className,
  wordClassName,
  staggerDelay = 0.1
}: StaggeredTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <motion.div
      className={cn('inline-flex flex-wrap gap-x-2', className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={cn(wordClassName)}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
