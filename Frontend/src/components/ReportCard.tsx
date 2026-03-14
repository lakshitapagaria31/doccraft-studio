import { cn } from "@/lib/utils";
import { FileText, Clock, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportCardProps {
  title: string;
  updatedAt: string;
  pages: number;
  status: "draft" | "complete" | "generating";
  className?: string;
  onClick?: () => void;
}

const statusStyles = {
  draft: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  complete: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  generating: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
};

export function ReportCard({ title, updatedAt, pages, status, className, onClick }: ReportCardProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-soft transition-all hover:shadow-card cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <FileText className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-sm font-semibold text-foreground truncate">{title}</h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {updatedAt}
          </span>
          <span>{pages} pages</span>
        </div>
      </div>
      <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", statusStyles[status])}>
        {status}
      </span>
      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8">
        <MoreHorizontal className="w-4 h-4" />
      </Button>
    </div>
  );
}
