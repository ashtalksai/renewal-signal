import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to find renewing licenses{" "}
            <span className="text-primary">before your competitors?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join sales teams using RenewalIQ to close more deals with perfectly-timed outreach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="text-base px-8">
                Start Your 14-Day Free Trial
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
