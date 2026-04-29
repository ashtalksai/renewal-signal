import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              {/* Hero */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  About{" "}
                  <span className="text-primary">RenewalIQ</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  We're on a mission to eliminate the data freshness gap in B2B sales intelligence.
                </p>
              </div>

              {/* Story */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  RenewalIQ was born from a simple observation: sales reps selling to licensed professionals 
                  were working with outdated data. Traditional directories update quarterly, but state 
                  licensing boards update daily. That 90-day gap meant missed opportunities and wasted outreach.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We built RenewalIQ to close that gap. By connecting directly to all 50 state licensing 
                  boards, we provide sales teams with real-time visibility into license renewals—so they 
                  can reach prospects at the exact moment they need their solutions.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground">
                      To provide B2B sales teams with the most accurate, up-to-date license data 
                      available—updated daily, verified at the source, and delivered in a format 
                      that drives action.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Eye className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground">
                      A world where sales reps never miss a renewal window because they have 
                      perfect visibility into license status changes—before their competitors 
                      even know they exist.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* What Makes Us Different */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">What Makes Us Different</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-card border-border">
                    <CardContent className="pt-6 space-y-3">
                      <Award className="w-8 h-8 text-primary" />
                      <h3 className="font-semibold">Government-Fed Data</h3>
                      <p className="text-sm text-muted-foreground">
                        Direct feeds from state boards. No scraping, no third-party aggregators.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border">
                    <CardContent className="pt-6 space-y-3">
                      <Target className="w-8 h-8 text-primary" />
                      <h3 className="font-semibold">Daily Updates</h3>
                      <p className="text-sm text-muted-foreground">
                        Not quarterly. Not monthly. Daily. Verify freshness on every record.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border">
                    <CardContent className="pt-6 space-y-3">
                      <Eye className="w-8 h-8 text-primary" />
                      <h3 className="font-semibold">Built for Power Users</h3>
                      <p className="text-sm text-muted-foreground">
                        Bloomberg terminal-style interface. No consumer-grade fluff.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="text-center pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">Questions?</h2>
                <p className="text-muted-foreground mb-6">
                  We're here to help. Reach out anytime.
                </p>
                <a href="mailto:hello@renewaliq.com" className="text-primary hover:underline">
                  hello@renewaliq.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
