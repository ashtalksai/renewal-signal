import { ArrowRight, Search, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Filter by profession, state, renewal window, and license status. Find your ideal prospects.",
    },
    {
      icon: ArrowRight,
      title: "Export",
      description: "Download CSV or auto-sync to CRM. Get contact details and renewal dates instantly.",
    },
    {
      icon: FileSpreadsheet,
      title: "Close",
      description: "Reach out at the perfect time. Your prospects are renewing— they need your solution now.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three steps to{" "}
            <span className="text-primary">perfectly-timed leads</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-8 h-8 text-muted-foreground mt-8" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/signup">
            <Button size="lg" className="text-base px-8">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
