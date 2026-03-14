import { Button } from "@/components/ui/button";
import { ReportCard } from "@/components/ReportCard";
import { TemplateCard } from "@/components/TemplateCard";
import {
  LayoutDashboard, FileText, Library, Settings, Plus, Search, Bell, TrendingUp, Clock, FileCheck,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/docsy-logo.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
const recentReports = [
  { title: "Internship Report — Summer 2025", updatedAt: "2 hours ago", pages: 12, status: "complete" as const },
  { title: "Machine Learning Research Paper", updatedAt: "Yesterday", pages: 8, status: "draft" as const },
  { title: "Database Systems Assignment #3", updatedAt: "3 days ago", pages: 5, status: "generating" as const },
  { title: "Marketing Strategy Analysis", updatedAt: "1 week ago", pages: 15, status: "complete" as const },
];

const templates = [
  { title: "Internship Report", category: "Professional", description: "Standard format for company internship reports." },
  { title: "Research Paper (IEEE)", category: "Academic", description: "IEEE-formatted research paper template." },
  { title: "College Assignment", category: "Education", description: "Simple assignment template with grading rubric." },
];

const stats = [
  { icon: FileCheck, label: "Reports Created", value: "24" },
  { icon: Clock, label: "Hours Saved", value: "18" },
  { icon: TrendingUp, label: "This Month", value: "7" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "My Reports", path: "/reports" },
  { icon: Library, label: "Templates", path: "/templates" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-9 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring w-64"
            />
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
            </Button>
            <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary hover:bg-primary/30 transition">
      A
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end" className="w-40">
    <DropdownMenuItem onClick={() => navigate("/settings")}>
      Profile
    </DropdownMenuItem>

    <DropdownMenuItem onClick={() => navigate("/settings")}>
      Settings
    </DropdownMenuItem>

    <DropdownMenuItem className="text-red-500">
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          </div>
        </header>

        <div className="p-6 max-w-5xl">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Recent Reports */}
          <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-bold text-foreground">Recent Reports</h2>
              <Button variant="ghost" size="sm" className="text-muted-foreground">View all</Button>
            </div>
            <div className="space-y-3 mb-10">
              {recentReports.map((r) => (
                <ReportCard key={r.title} {...r} onClick={() => navigate("/editor")} />
              ))}
            </div>
          </motion.section>

          {/* Templates Preview */}
          <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-bold text-foreground">Quick Templates</h2>
              <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => navigate("/templates")}>
                Browse all
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {templates.map((t) => (
                <TemplateCard key={t.title} {...t} onClick={() => navigate("/create")} />
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
