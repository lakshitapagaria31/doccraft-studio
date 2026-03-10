import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/ui/step-indicator";
import { ArrowLeft, ArrowRight, Upload, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["Topic", "Format", "Options", "Generate"];

const citationStyles = ["APA 7th", "IEEE", "MLA 9th", "Chicago", "Harvard"];
const pageOptions = ["3–5", "5–10", "10–15", "15–20", "20+"];

export default function CreateReport() {
  const [step, setStep] = useState(0);
  const [topic, setTopic] = useState("");
  const [pages, setPages] = useState("5–10");
  const [citation, setCitation] = useState("APA 7th");
  const [includeToC, setIncludeToC] = useState(true);
  const [includeRefs, setIncludeRefs] = useState(true);
  const navigate = useNavigate();

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleGenerate = () => {
    navigate("/editor");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="font-display text-lg font-bold text-foreground">Create New Report</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <StepIndicator steps={STEPS} currentStep={step} className="justify-center mb-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-border bg-card p-8 shadow-card"
            >
              {step === 0 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">What's your report about?</h2>
                  <p className="text-sm text-muted-foreground mb-6">Enter the topic or title for your document.</p>
                  <textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Impact of Machine Learning on Healthcare Systems"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px] resize-none"
                  />
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">Format & Length</h2>
                  <p className="text-sm text-muted-foreground mb-6">Choose your citation style and report length.</p>

                  <label className="text-sm font-medium text-foreground mb-2 block">Citation Style</label>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {citationStyles.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCitation(c)}
                        className={`rounded-lg px-3 py-2 text-sm border transition-colors ${
                          citation === c
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-border text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  <label className="text-sm font-medium text-foreground mb-2 block">Number of Pages</label>
                  <div className="flex flex-wrap gap-2">
                    {pageOptions.map((p) => (
                      <button
                        key={p}
                        onClick={() => setPages(p)}
                        className={`rounded-lg px-3 py-2 text-sm border transition-colors ${
                          pages === p
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-border text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {p} pages
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">Additional Options</h2>
                  <p className="text-sm text-muted-foreground mb-6">Customize your document structure.</p>

                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeToC}
                        onChange={() => setIncludeToC(!includeToC)}
                        className="w-4 h-4 rounded border-input accent-primary"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">Table of Contents</p>
                        <p className="text-xs text-muted-foreground">Auto-generate a linked table of contents</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeRefs}
                        onChange={() => setIncludeRefs(!includeRefs)}
                        className="w-4 h-4 rounded border-input accent-primary"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">References / Bibliography</p>
                        <p className="text-xs text-muted-foreground">Include AI-generated citations</p>
                      </div>
                    </label>
                  </div>

                  <div className="mt-6 rounded-lg border border-dashed border-border p-6 text-center">
                    <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Upload a custom template (optional)</p>
                    <Button variant="outline" size="sm" className="mt-2">Browse Files</Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">Ready to Generate!</h2>
                  <p className="text-sm text-muted-foreground mb-2">Your report will be generated with these settings:</p>
                  <div className="rounded-lg bg-secondary p-4 text-left text-sm space-y-1 mb-6">
                    <p><span className="text-muted-foreground">Topic:</span> <span className="font-medium text-foreground">{topic || "Not specified"}</span></p>
                    <p><span className="text-muted-foreground">Pages:</span> <span className="font-medium text-foreground">{pages}</span></p>
                    <p><span className="text-muted-foreground">Citation:</span> <span className="font-medium text-foreground">{citation}</span></p>
                    <p><span className="text-muted-foreground">ToC:</span> <span className="font-medium text-foreground">{includeToC ? "Yes" : "No"}</span></p>
                    <p><span className="text-muted-foreground">References:</span> <span className="font-medium text-foreground">{includeRefs ? "Yes" : "No"}</span></p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prev} disabled={step === 0} className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            {step < 3 ? (
              <Button onClick={next} className="gap-2">
                Next <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleGenerate} className="gap-2">
                <Sparkles className="w-4 h-4" /> Generate Report
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
