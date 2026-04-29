import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SolutionSection() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Real-time Data Pipeline",
      description: "Direct feeds from all 50 state licensing boards. Updated daily, not quarterly.",
    },
    {
      icon: CheckCircle2,
      title: "Renewal Timeline Visualization",
      description: "See exactly when each professional's license renews. Filter by 30/60/90 day windows.",
    },
    {
      icon: CheckCircle2,
      title: "CRM Sync",
      description: "Push leads directly to Salesforce or HubSpot. Auto-sync renewal alerts to your pipeline.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            How RenewalIQ Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for sales reps who need data{" "}
            <span className="text-primary">before morning standup</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No marketing fluff. No consumer-grade UI. Just fast, accurate license data in a Bloomberg terminal-style interface.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Renewal Timeline Visualization Preview */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-semibold mb-2">Renewal Timeline</h3>
                <p className="text-sm text-muted-foreground">
                  Visual indicator showing renewal status at a glance
                </p>
              </div>
              <div className="p-6 bg-background/50">
                <div className="space-y-4">
                  {/* Timeline example */}
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-muted-foreground">Today</div>
                    <div className="flex-1 h-3 bg-card rounded-full overflow-hidden flex">
                      <div className="w-1/4 bg-accent-green h-full" />
                      <div className="w-1/4 bg-accent-amber h-full" />
                      <div className="w-1/4 bg-accent-red h-full" />
                      <div className="w-1/4 bg-card h-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="w-32">Renewal Window</div>
                    <div className="flex-1 flex justify-between">
                      <span className="text-accent-green">Active (&gt;90 days)</span>
                      <span className="text-accent-amber">Warning (30-90 days)</span>
                      <span className="text-accent-red">Critical (&lt;30 days)</span>
                      <span>Expired</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
