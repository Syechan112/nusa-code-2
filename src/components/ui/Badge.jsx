import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-navy-900 text-white',
  outline: 'bg-transparent text-navy-900 border border-navy-200',
  soft: 'bg-navy-100 text-navy-800',
}

export default function Badge({ variant = 'primary', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wider uppercase',
        variants[variant] || variants.primary,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
