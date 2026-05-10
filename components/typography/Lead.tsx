import { cn } from '@/lib/utils'

interface LeadProps {
  children: React.ReactNode
  className?: string
  size?: 'base' | 'lg'
}

export function Lead({ children, className, size = 'base' }: LeadProps) {
  return (
    <p
      className={cn(
        'font-body text-ink-2 leading-[1.6]',
        size === 'lg' ? 'text-[1.25rem]' : 'text-body',
        'max-w-[60ch]',
        className
      )}
    >
      {children}
    </p>
  )
}
