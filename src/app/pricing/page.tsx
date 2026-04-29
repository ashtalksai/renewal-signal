import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const tiers = [
  {
    name: "Explorer",
    price: 99,
    description: "For individual sales reps getting started",
    features: {
      searches: "100 searches/month",
      states: "3 states",
      crmSync: false,
      renewalAlerts: false,
      apiAccess: false,
      support: "Email support",
      export: "CSV export",
    },
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: 499,
    description: "For growing sales teams",
    features: {
      searches: "Unlimited searches",
      states: "All 50 states",
      crmSync: true,
      renewalAlerts: true,
      apiAccess: false,
      support: "Priority email support",
      export: "CSV + Auto-sync",
    },
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 999,
    description: "For large teams with custom needs",
    features: {
      searches: "Unlimited searches",
      states: "All 50 states",
      crmSync: true,
      renewalAlerts: true,
      apiAccess: true,
      support: "Dedicated support + SLA",
      export: "All formats + API",
    },
    cta: "Start Free Trial",
    popular: false,
  },
];

const allFeatures = [
  { key: "searches", label: "Searches per month" },
  { key: "states", label: "State coverage" },
  { key: "crmSync", label: "CRM Sync (Salesforce + HubSpot)" },
  { key: "renewalAlerts", label: "Renewal alerts" },
  { key: "apiAccess", label: "API access" },
  { key: "support", label: "Support" },
  { key: "export", label: "Export options" },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Simple pricing for{" "}
                <span className="text-primary">sales teams</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                14-day free trial. No credit card required. Cancel anytime.
              </p>
            </div>

            {/* Pricing cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {tiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`bg-card border-border relative flex flex-col ${
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
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        <span>{tier.features.searches}</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        <span>{tier.features.states}</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        {tier.features.crmSync ? (
                          <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={tier.features.crmSync ? "" : "text-muted-foreground"}>
                          CRM Sync
                        </span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        {tier.features.renewalAlerts ? (
                          <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={tier.features.renewalAlerts ? "" : "text-muted-foreground"}>
                          Renewal alerts
                        </span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        {tier.features.apiAccess ? (
                          <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={tier.features.apiAccess ? "" : "text-muted-foreground"}>
                          API access
                        </span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        <span>{tier.features.support}</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        <span>{tier.features.export}</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/signup" className="w-full">
                      <Button
                        className={`w-full ${
                          tier.popular ? "bg-primary hover:bg-primary/90" : ""
                        }`}
                        variant={tier.popular ? "default" : "outline"}
                        size="lg"
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* FAQ section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                    <p className="text-muted-foreground">
                      Yes, you can upgrade or downgrade at any time from your account settings. Changes take effect immediately.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Is there an annual discount?</h3>
                    <p className="text-muted-foreground">
                      Yes! Save 20% when you pay annually. Contact us for Enterprise annual pricing.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                    <p className="text-muted-foreground">
                      We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for Enterprise plans.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
