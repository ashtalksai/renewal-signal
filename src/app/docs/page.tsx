import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", desc: "What is RenewalIQ and how it works" },
        { name: "Quick Start", desc: "Set up your account in 5 minutes" },
        { name: "Authentication", desc: "API keys and OAuth setup" },
      ],
    },
    {
      title: "API Reference",
      items: [
        { name: "Licenses API", desc: "Search and retrieve license data" },
        { name: "Exports API", desc: "Generate CSV exports programmatically" },
        { name: "Subscriptions API", desc: "Manage subscriptions and billing" },
        { name: "Webhooks", desc: "Receive renewal alerts via webhook" },
      ],
    },
    {
      title: "Guides",
      items: [
        { name: "Search Best Practices", desc: "How to find the right prospects" },
        { name: "CRM Integration", desc: "Sync with Salesforce or HubSpot" },
        { name: "Renewal Alerts", desc: "Set up automated notifications" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "FAQ", desc: "Common questions and answers" },
        { name: "Contact", desc: "Get in touch with our team" },
        { name: "Status", desc: "System status and uptime" },
      ],
    },
  ];

  const endpoints = [
    {
      method: "GET",
      path: "/api/licenses",
      description: "Search licenses with filters",
      params: ["state", "profession", "renewalWindow", "status", "limit", "offset"],
    },
    {
      method: "GET",
      path: "/api/licenses/:id",
      description: "Get license details by ID",
      params: ["id"],
    },
    {
      method: "POST",
      path: "/api/licenses/export",
      description: "Export filtered results to CSV",
      params: ["filters", "format"],
    },
    {
      method: "GET",
      path: "/api/subscription",
      description: "Get current subscription status",
      params: [],
    },
    {
      method: "POST",
      path: "/api/subscription/checkout",
      description: "Create Stripe checkout session",
      params: ["tier", "billingCycle"],
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Hero */}
              <div className="text-center space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  Documentation
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold">
                  RenewalIQ{" "}
                  <span className="text-primary">API Docs</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to integrate RenewalIQ into your workflows.
                </p>
              </div>

              {/* Documentation sections */}
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="pt-6 space-y-4">
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="space-y-1">
                            <a href="#" className="text-primary hover:underline font-medium">
                              {item.name}
                            </a>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* API Endpoints */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">API Endpoints</h2>
                <div className="space-y-4">
                  {endpoints.map((endpoint, index) => (
                    <Card key={index} className="bg-card border-border">
                      <CardContent className="pt-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className={
                              endpoint.method === "GET"
                                ? "border-accent-green text-accent-green"
                                : "border-primary text-primary"
                            }
                          >
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono bg-background px-2 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                        <p className="text-muted-foreground">{endpoint.description}</p>
                        {endpoint.params.length > 0 && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Parameters: </span>
                            {endpoint.params.join(", ")}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Rate Limits */}
              <Card className="bg-card border-border">
                <CardContent className="pt-6 space-y-4">
                  <h2 className="text-xl font-semibold">Rate Limits</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Explorer</p>
                      <p className="text-2xl font-bold text-primary">100</p>
                      <p className="text-sm text-muted-foreground">requests/month</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Professional</p>
                      <p className="text-2xl font-bold text-primary">Unlimited</p>
                      <p className="text-sm text-muted-foreground">fair use policy</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Enterprise</p>
                      <p className="text-2xl font-bold text-primary">Custom</p>
                      <p className="text-sm text-muted-foreground">SLA guaranteed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Authentication */}
              <Card className="bg-card border-border">
                <CardContent className="pt-6 space-y-4">
                  <h2 className="text-xl font-semibold">Authentication</h2>
                  <p className="text-muted-foreground">
                    All API requests require authentication. Include your API key in the Authorization header:
                  </p>
                  <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm font-mono">
                    <code>Authorization: Bearer YOUR_API_KEY</code>
                  </pre>
                  <p className="text-sm text-muted-foreground">
                    API keys are available in your account settings. Enterprise customers can request dedicated keys.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
