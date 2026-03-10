import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, Download, RefreshCw, Table, BookOpen, Wand2, ChevronRight, FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const sections = [
  { id: "abstract", title: "Abstract" },
  { id: "intro", title: "1. Introduction" },
  { id: "lit", title: "2. Literature Review" },
  { id: "method", title: "3. Methodology" },
  { id: "results", title: "4. Results" },
  { id: "discussion", title: "5. Discussion" },
  { id: "conclusion", title: "6. Conclusion" },
  { id: "refs", title: "References" },
];

const sampleContent: Record<string, string> = {
  abstract:
    "This report examines the impact of machine learning algorithms on modern healthcare systems. Through a comprehensive analysis of recent studies and implementations, we explore how AI-driven diagnostic tools, predictive analytics, and personalized treatment plans are transforming patient outcomes across various medical disciplines.",
  intro:
    "The integration of artificial intelligence and machine learning into healthcare has accelerated dramatically over the past decade. From automated diagnostic imaging to predictive patient monitoring systems, these technologies are reshaping how medical professionals approach diagnosis, treatment, and preventive care.\n\nThis paper aims to provide a structured overview of key developments, highlight successful case studies, and identify challenges that remain in the widespread adoption of ML-based healthcare solutions.",
  lit:
    "Smith et al. (2023) demonstrated that convolutional neural networks achieve 94.5% accuracy in detecting early-stage tumors from radiological images, outperforming traditional methods by 12%. Meanwhile, Johnson & Park (2024) showed that predictive models reduced hospital readmission rates by 23% when integrated into electronic health record systems.\n\nRecent meta-analyses by the WHO Digital Health Initiative (2024) suggest that AI-assisted diagnostics could save an estimated $150 billion annually in global healthcare costs by 2030.",
  method: "Our methodology employs a mixed-methods approach combining quantitative analysis of clinical trial data with qualitative interviews of healthcare practitioners. We analyzed 47 peer-reviewed studies published between 2020–2025 and conducted semi-structured interviews with 15 medical professionals across three major hospital systems.",
  results: "Analysis reveals a statistically significant improvement (p < 0.001) in diagnostic accuracy when ML tools are used as decision-support systems alongside human clinicians. The mean improvement in early detection rates was 18.3% (SD = 4.2) across all studied medical specialties.",
  discussion: "While the results strongly support the integration of ML tools in clinical settings, several important considerations remain. Data privacy concerns, algorithmic bias in training datasets, and the need for regulatory frameworks represent significant challenges that must be addressed before widespread deployment.",
  conclusion: "Machine learning offers transformative potential for healthcare delivery. Our findings suggest that a hybrid approach — combining AI capabilities with human expertise — yields the best patient outcomes. Continued investment in ethical AI development and clinician training will be critical to realizing these benefits.",
  refs: "1. Smith, A., Lee, B., & Chen, W. (2023). Deep learning for radiological tumor detection. Journal of Medical AI, 15(2), 112–128.\n2. Johnson, R., & Park, S. (2024). Predictive analytics in hospital readmission prevention. Healthcare Informatics Review, 8(1), 45–61.\n3. WHO Digital Health Initiative. (2024). Global AI in Healthcare Report. World Health Organization.\n4. Williams, T. et al. (2023). Ethical considerations in clinical AI deployment. BMJ Ethics, 349, e102.",
};

export default function DocumentEditor() {
  const [activeSection, setActiveSection] = useState("abstract");
  const [showExport, setShowExport] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="font-display text-sm font-bold text-foreground">Impact of ML on Healthcare</h1>
            <p className="text-xs text-muted-foreground">Draft · 8 pages · APA 7th</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" /> Regenerate
          </Button>
          <Button size="sm" className="gap-1.5" onClick={() => setShowExport(true)}>
            <Download className="w-3.5 h-3.5" /> Export
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Section Nav */}
        <aside className="hidden lg:flex w-56 flex-col border-r border-border p-4 gap-1 overflow-y-auto">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Sections</p>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors text-left ${
                activeSection === s.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <ChevronRight className={`w-3 h-3 transition-transform ${activeSection === s.id ? "rotate-90" : ""}`} />
              {s.title}
            </button>
          ))}

          <div className="mt-auto pt-4 border-t border-border space-y-2">
            <Button variant="outline" size="sm" className="w-full gap-1.5 justify-start">
              <Wand2 className="w-3.5 h-3.5" /> Improve Format
            </Button>
            <Button variant="outline" size="sm" className="w-full gap-1.5 justify-start">
              <Table className="w-3.5 h-3.5" /> Add Table
            </Button>
            <Button variant="outline" size="sm" className="w-full gap-1.5 justify-start">
              <BookOpen className="w-3.5 h-3.5" /> Add References
            </Button>
          </div>
        </aside>

        {/* Editor + Preview */}
        <div className="flex-1 flex overflow-hidden">
          {/* Editor */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                {sections.find((s) => s.id === activeSection)?.title}
              </h2>
              <div className="flex gap-2 mb-4">
                <Button variant="ghost" size="sm" className="gap-1 text-xs text-muted-foreground">
                  <RefreshCw className="w-3 h-3" /> Regenerate section
                </Button>
                <Button variant="ghost" size="sm" className="gap-1 text-xs text-muted-foreground">
                  <Wand2 className="w-3 h-3" /> Improve
                </Button>
              </div>
              <textarea
                value={sampleContent[activeSection] || ""}
                readOnly
                className="w-full min-h-[400px] rounded-lg border border-input bg-background p-4 text-sm leading-relaxed text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
          </div>

          {/* Preview */}
          <div className="hidden xl:block w-80 border-l border-border bg-secondary/30 p-6 overflow-y-auto">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Document Preview</p>
            <div className="rounded-lg bg-card border border-border p-5 shadow-soft text-xs leading-relaxed text-foreground">
              <div className="text-center mb-4">
                <p className="font-display font-bold text-sm">Impact of Machine Learning on Healthcare Systems</p>
                <p className="text-muted-foreground mt-1">Student Name · University · 2025</p>
              </div>
              <hr className="my-3 border-border" />
              {sections.map((s) => (
                <div key={s.id} className="mb-3">
                  <p className="font-semibold text-foreground mb-0.5">{s.title}</p>
                  <p className="text-muted-foreground line-clamp-2">{sampleContent[s.id]?.substring(0, 100)}...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      {showExport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl bg-card border border-border shadow-elevated p-8 w-full max-w-sm"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-1">Export Document</h3>
            <p className="text-sm text-muted-foreground mb-6">Choose your preferred format.</p>
            <div className="space-y-3">
              {[
                { label: "DOCX", desc: "Microsoft Word format", icon: FileText },
                { label: "PDF", desc: "Portable Document Format", icon: FileText },
                { label: "Markdown", desc: "Plain text with formatting", icon: FileText },
              ].map((f) => (
                <button
                  key={f.label}
                  className="w-full flex items-center gap-3 rounded-lg border border-border p-4 hover:bg-secondary transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{f.label}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1" onClick={() => setShowExport(false)}>Cancel</Button>
              <Button className="flex-1">Download</Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
