import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'outline'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors',
        {
          'bg-highlight text-secondary': variant === 'default',
          'bg-accent/10 text-accent': variant === 'accent',
          'border border-border bg-transparent text-secondary': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
