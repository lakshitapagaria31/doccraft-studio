import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReportCard } from "@/components/ReportCard";

const reports = [
  { title: "Internship Report — Summer 2025", updatedAt: "2 hours ago", pages: 12, status: "complete" as const },
  { title: "Machine Learning Research Paper", updatedAt: "Yesterday", pages: 8, status: "draft" as const },
  { title: "Database Systems Assignment #3", updatedAt: "3 days ago", pages: 5, status: "generating" as const },
  { title: "Marketing Strategy Analysis", updatedAt: "1 week ago", pages: 15, status: "complete" as const },
];

export default function MyReports() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>

        <h1 className="font-display text-lg font-bold text-foreground">
          My Reports
        </h1>
      </header>

      <div className="container max-w-4xl py-8 space-y-4">

        {reports.map((r) => (
          <ReportCard
            key={r.title}
            {...r}
            onClick={() => navigate("/editor")}
          />
        ))}

      </div>

    </div>
  );
}