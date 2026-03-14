import { useState } from "react";
import { TemplateCard } from "@/components/TemplateCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories = ["All", "Internship", "Research", "Assignment", "Custom"];

const allTemplates = [
  { title: "Internship Report", category: "Internship", description: "Standard corporate internship report format with sections for objectives, tasks, and learnings." },
  { title: "Summer Training Report", category: "Internship", description: "Detailed training report template for summer internship programs." },
  { title: "Research Paper (IEEE)", category: "Research", description: "IEEE-formatted double-column research paper with abstract and references." },
  { title: "Research Paper (APA)", category: "Research", description: "APA 7th edition formatted paper for psychology and social sciences." },
  { title: "Literature Review", category: "Research", description: "Structured template for conducting and writing a literature review." },
  { title: "Lab Report", category: "Assignment", description: "Science lab report with hypothesis, methods, results, and discussion." },
  { title: "Case Study Analysis", category: "Assignment", description: "Business case study template with SWOT analysis and recommendations." },
  { title: "Essay Template", category: "Assignment", description: "Five-paragraph essay template with introduction, body, and conclusion." },
  { title: "Project Proposal", category: "Custom", description: "Project proposal template with timeline, budget, and deliverables." },
  { title: "Thesis Chapter", category: "Research", description: "Individual thesis chapter template with proper academic formatting." },
  { title: "Technical Report", category: "Custom", description: "Technical documentation template for engineering projects." },
  { title: "Book Report", category: "Assignment", description: "Book report template for literature classes." },
];

export default function TemplateLibrary() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = allTemplates.filter(
    (t) =>
      (active === "All" || t.category === active) &&
      (t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="font-display text-lg font-bold text-foreground">Template Library</h1>
      </header>

      <div className="container py-8 max-w-5xl">
        {/* Search + Upload */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="pl-9 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring w-full"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Upload className="w-4 h-4" /> Upload Template
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === c
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((t) => (
            <TemplateCard key={t.title} {...t} onClick={() => navigate("/create")} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No templates found. Try a different search or category.</p>
        )}
      </div>
    </div>
  );
}
