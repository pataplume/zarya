import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'font-display font-medium uppercase text-muted',
        'text-[0.75rem] tracking-[0.14em] leading-none',
        className
      )}
    >
      {children}
    </p>
  )
}
