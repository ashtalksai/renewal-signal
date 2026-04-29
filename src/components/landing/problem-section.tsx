import { AlertCircle, Clock, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your directory is 4 months old.{" "}
            <span className="text-accent-amber">State boards update daily.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional sales intelligence tools rely on outdated data. By the time you get a lead, the license has already expired.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-amber/10">
                <Clock className="w-6 h-6 text-accent-amber" />
              </div>
              <h3 className="text-lg font-semibold">Data Freshness Gap</h3>
              <p className="text-sm text-muted-foreground">
                Most databases update quarterly. State licensing boards update daily. That's a 90-day blind spot.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-red/10">
                <AlertCircle className="w-6 h-6 text-accent-red" />
              </div>
              <h3 className="text-lg font-semibold">Missed Renewal Windows</h3>
              <p className="text-sm text-muted-foreground">
                67% of professionals renew within 30 days of expiration. If you're not tracking renewals, you're too late.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-blue/10">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Fragmented Sources</h3>
              <p className="text-sm text-muted-foreground">
                50 state boards, 15+ professions, different update schedules. Manually tracking this is impossible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
