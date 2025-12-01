import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocumentCardProps {
  title: string
  description?: string
  fileUrl: string
  fileName?: string
  date?: string
}

export function DocumentCard({ title, description, fileUrl, fileName, date }: DocumentCardProps) {
  return (
    <div className="p-4 border border-border rounded-lg hover:shadow-md transition-all">
      <div className="flex items-start gap-3 mb-3">
        <FileText className="text-primary mt-1 flex-shrink-0" size={20} />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">{title}</h4>
          {date && <p className="text-xs text-muted-foreground">{date}</p>}
        </div>
      </div>
      {description && <p className="text-sm text-muted-foreground mb-3">{description}</p>}
      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
        <a href={fileUrl} download={fileName} target="_blank" rel="noopener noreferrer">
          <Download size={16} />
          Baixar PDF
        </a>
      </Button>
    </div>
  )
}
