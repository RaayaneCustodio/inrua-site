import type { ReactNode } from "react"

interface StatsCardProps {
  icon: ReactNode
  label: string
  value: string
  description?: string
}

export function StatsCard({ icon, label, value, description }: StatsCardProps) {
  return (
    <div className="p-6 border border-border rounded-lg hover:shadow-lg hover:border-primary/30 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="font-bold text-lg text-foreground mb-2">{label}</h3>
      <p className="text-2xl font-bold text-primary mb-2">{value}</p>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}
