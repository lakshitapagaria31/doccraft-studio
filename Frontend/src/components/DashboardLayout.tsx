import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Library, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/docsy-logo.png";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FileText, label: "My Reports", path: "/reports" },
  { icon: Library, label: "Templates", path: "/templates" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card p-5 gap-1">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-8 hover:opacity-80 transition"
        >
          <img src={logo} alt="Docsy Logo" className="w-8 h-8 object-contain" />
          <span className="font-display text-lg font-bold text-foreground">
            Docsy
          </span>
        </button>

        <Button className="mb-6 gap-2 w-full" onClick={() => navigate("/create")}>
          <Plus className="w-4 h-4" /> New Report
        </Button>

        <nav className="flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                location.pathname.startsWith(item.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

      </aside>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}