import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

interface TemplateCardProps {
  title: string;
  category: string;
  description: string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export function TemplateCard({ title, category, description, className, onClick }: TemplateCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group cursor-pointer rounded-lg border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-card",
        className
      )}
      onClick={onClick}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <FileText className="h-5 w-5 text-primary" />
      </div>
      <span className="mb-1 inline-block rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
        {category}
      </span>
      <h3 className="mb-1 font-display text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
    </motion.div>
  );
}
