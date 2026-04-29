import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function PricingPreviewSection() {
  const tiers = [
    {
      name: "Explorer",
      price: "$99",
      description: "For individual sales reps getting started",
      features: [
        "100 searches/month",
        "3 states",
        "CSV export",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$499",
      description: "For growing sales teams",
      features: [
        "Unlimited searches",
        "All 50 states",
        "Salesforce + HubSpot sync",
        "Renewal alerts",
        "Priority email support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "For large teams with custom needs",
      features: [
        "Unlimited searches",
        "All 50 states",
        "Custom integrations",
        "Renewal alerts + SMS",
        "API access",
        "Dedicated support + SLA",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple pricing for{" "}
            <span className="text-primary">sales teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`bg-card border-border relative ${
                tier.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-2">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className="block mt-6">
                  <Button
                    className={`w-full ${
                      tier.popular ? "bg-primary hover:bg-primary/90" : ""
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/pricing">
            <Button variant="link" className="text-muted-foreground">
              View full feature comparison →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
