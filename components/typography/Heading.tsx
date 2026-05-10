import { cn } from '@/lib/utils'

type Level = 'display' | 'h1' | 'h2' | 'h3'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  level?: Level
  children: React.ReactNode
  className?: string
}

const sizeMap: Record<Level, string> = {
  display: 'text-display leading-[1.05] tracking-[-0.02em]',
  h1: 'text-h1 leading-[1.15] tracking-[-0.01em]',
  h2: 'text-h2 leading-[1.15] tracking-[-0.01em]',
  h3: 'text-h3 leading-[1.3]',
}

export function Heading({ as: Tag = 'h2', level, children, className }: HeadingProps) {
  const resolvedLevel = level ?? (Tag === 'h1' ? 'h1' : Tag === 'h3' ? 'h3' : 'h2')
  return (
    <Tag
      className={cn(
        'font-display font-[400] text-ink',
        sizeMap[resolvedLevel],
        className
      )}
    >
      {children}
    </Tag>
  )
}
