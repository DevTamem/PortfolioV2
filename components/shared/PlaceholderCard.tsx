'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface PlaceholderCardProps {
  index?: number
}

export function PlaceholderCard({ index = 0 }: PlaceholderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="relative overflow-hidden h-full min-h-[280px] flex items-center justify-center bg-surface/50">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl">
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['200% 0', '-200% 0'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <div className="absolute inset-[2px] rounded-xl bg-card" />
        </div>

        {/* Pulsing question mark */}
        <motion.span
          className="relative z-10 text-6xl font-bold text-muted/40 select-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ?
        </motion.span>

        {/* Corner accents */}
        <motion.div
          className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent/30 rounded-tl-lg"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent/30 rounded-tr-lg"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent/30 rounded-bl-lg"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent/30 rounded-br-lg"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </Card>
    </motion.div>
  )
}
