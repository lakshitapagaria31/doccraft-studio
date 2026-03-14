import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import CreateReport from "./pages/CreateReport";
import TemplateLibrary from "./pages/TemplateLibrary";
import DocumentEditor from "./pages/DocumentEditor";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import MyReports from "./pages/MyReports";
import DashboardLayout from "./components/DashboardLayout";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>

{/* Public page */}
<Route path="/" element={<LandingPage />} />

{/* Dashboard layout wrapper */}
<Route element={<DashboardLayout />}>

  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/create" element={<CreateReport />} />
  <Route path="/reports" element={<MyReports />} />
  <Route path="/templates" element={<TemplateLibrary />} />
  <Route path="/editor" element={<DocumentEditor />} />
  <Route path="/settings" element={<Settings />} />

</Route>

<Route path="*" element={<NotFound />} />

</Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
