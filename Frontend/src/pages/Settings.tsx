import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Moon, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>

        <h1 className="font-display text-lg font-bold text-foreground">
          Settings
        </h1>
      </header>

      <div className="container max-w-3xl py-10 space-y-8">

        {/* Profile */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Profile
            </h2>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />

            <Button size="sm">Save Changes</Button>
          </div>
        </div>

        {/* Appearance */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Moon className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Appearance
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Toggle dark / light mode
            </p>

            <ThemeToggle />
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Notifications
            </h2>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-primary" />
            <span className="text-sm text-muted-foreground">
              Email notifications
            </span>
          </label>
        </div>
        {/* Account */}
<div className="rounded-xl border border-border bg-card p-6">
  <div className="flex items-center gap-3 mb-4">
    <User className="w-5 h-5 text-primary" />
    <h2 className="font-display text-lg font-semibold text-foreground">
      Account
    </h2>
  </div>

  <div className="flex flex-col sm:flex-row gap-3">
    <Button variant="outline">
      Log out
    </Button>

    <Button variant="destructive">
      Delete Account
    </Button>
  </div>
</div>

      </div>
    </div>
  );
}