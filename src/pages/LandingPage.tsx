import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Layout, Download, Zap, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/hero-illustration.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const features = [
  { icon: Sparkles, title: "AI Generation", desc: "Enter your topic and let AI craft a complete, well-structured report instantly." },
  { icon: Layout, title: "Smart Templates", desc: "Choose from dozens of pre-built templates for internships, research, and assignments." },
  { icon: BookOpen, title: "Auto Formatting", desc: "Proper citations, table of contents, headers, and page numbers — automatically." },
  { icon: Download, title: "Multi-format Export", desc: "Download your finished document as DOCX, PDF, or Markdown in one click." },
];

const steps = [
  { num: "01", title: "Choose a Template", desc: "Pick from our library or start from scratch." },
  { num: "02", title: "Enter Details", desc: "Tell us the topic, pages, and citation style." },
  { num: "03", title: "AI Generates", desc: "Our AI creates a complete, formatted document." },
  { num: "04", title: "Review & Export", desc: "Edit, refine, and download your report." },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">Docsy</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#workflow" className="hover:text-foreground transition-colors">How it Works</a>
            <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
              Log in
            </Button>
            <Button size="sm" onClick={() => navigate("/dashboard")}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
                <Zap className="w-3 h-3" /> AI-Powered Document Generation
              </span>
            </motion.div>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-5">
              Create Professional Reports in{" "}
              <span className="gradient-text">Minutes</span>
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground max-w-lg mb-8">
              Docsy uses AI to generate fully formatted reports, research papers, and assignments — complete with citations, tables, and proper formatting.
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => navigate("/create")} className="gap-2">
                Create Report <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/dashboard")}>
                Try Demo
              </Button>
            </motion.div>
          </div>
          <motion.div {...fadeUp(0.2)} className="flex justify-center">
            <img
              src={heroImg}
              alt="Docsy AI document generation illustration"
              className="w-full max-w-md animate-float"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              From topic to finished document — Docsy handles it all.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp(i * 0.1)}
                className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-20">
        <div className="container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Four simple steps from idea to professional document.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.num} {...fadeUp(i * 0.1)} className="relative">
                <span className="font-display text-5xl font-bold text-primary/10">{s.num}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            {...fadeUp()}
            className="rounded-2xl gradient-bg p-12 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Craft Your Next Report?
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
              Join thousands of students creating professional documents with AI.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/create")}
              className="gap-2"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-bg flex items-center justify-center">
              <FileText className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-foreground">DocCraft</span>
          </div>
          <p>© 2026 DocCraft. Built for students, by students.</p>
        </div>
      </footer>
    </div>
  );
}
