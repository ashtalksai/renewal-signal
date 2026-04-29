import { Search, Bell, Download, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Advanced Search",
      description: "Search by name, license number, state, profession, specialty, or renewal date. Filter by status and renewal window.",
    },
    {
      icon: Bell,
      title: "Renewal Alerts",
      description: "Get notified when licenses in your target segment are approaching renewal. Never miss a timing window again.",
    },
    {
      icon: Download,
      title: "CSV Export",
      description: "Export filtered results to CSV. Bulk selection support. Auto-sync to CRM on Professional tier.",
    },
    {
      icon: Shield,
      title: "Government-Fed Data",
      description: "Direct feeds from state licensing boards. No scraping, no third-party aggregators. Official data only.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Daily updates from all 50 states. Data freshness you can verify, not marketing claims.",
    },
    {
      icon: Users,
      title: "15+ Professions",
      description: "Insurance agents, contractors, healthcare professionals, financial advisors, and more.",
    },
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-primary">find renewing licenses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for power users who need speed, accuracy, and actionable data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
}
