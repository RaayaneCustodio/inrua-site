"use client"

import { Badge } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  area: string
}

export function TeamCard({ name, role, area }: TeamCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center">
      {/* Ícone de crachá */}
      <div className="mb-6 p-4 bg-primary/10 rounded-full">
        <Badge className="text-primary" size={32} />
      </div>

      {/* Cargo em destaque (maior) */}
      <h3 className="text-xl font-bold text-primary mb-2">{role}</h3>

      {/* Nome */}
      <p className="text-lg font-semibold text-foreground mb-3">{name}</p>

      {/* Área */}
      <p className="text-sm text-muted-foreground">{area}</p>
    </div>
  )
}
