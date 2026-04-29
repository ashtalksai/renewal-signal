"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "RenewalIQ",
    subtitle: "Real-time license data for B2B sales teams",
    content: "See who's renewing before your competitors know they exist.",
  },
  {
    title: "The Problem",
    subtitle: "Your directory is 4 months old",
    content: "State boards update daily. Traditional sales intelligence tools update quarterly. That's a 90-day blind spot where you miss perfectly-timed opportunities.",
    stats: ["67% renew within 30 days", "90-day average data lag", "50 state boards to track"],
  },
  {
    title: "The Solution",
    subtitle: "Government-fed data, updated daily",
    content: "Direct feeds from all 50 state licensing boards. Real-time visibility into license renewals. Bloombergs terminal-style interface built for power users.",
  },
  {
    title: "Market Opportunity",
    subtitle: "15+ licensed professions, millions of prospects",
    content: "Insurance agents, contractors, healthcare professionals, financial advisors, real estate agents— all required to maintain active licenses. All renewing on predictable cycles.",
    stats: ["$4.2B sales intelligence market", "8M+ licensed professionals", "$500M TAM in first 3 verticals"],
  },
  {
    title: "Product Demo",
    subtitle: "Search. Filter. Export. Close.",
    content: "Advanced search by profession, state, renewal window. Visual timeline showing renewal status. One-click CSV export. CRM sync on Professional tier.",
  },
  {
    title: "Business Model",
    subtitle: "SaaS subscription, 3 tiers",
    content: "Explorer ($99/mo) for individuals. Professional ($499/mo) for teams. Enterprise ($999/mo) for large orgs with custom needs.",
    stats: ["70% gross margins", "14-day free trial", "Target: 100 customers in Year 1"],
  },
  {
    title: "Go-to-Market",
    subtitle: "Direct sales + content marketing",
    content: "Target sales reps selling compliance software, insurance, recruiting services. Content: renewal timing guides, state-by-state licensing breakdowns.",
  },
  {
    title: "Competition",
    subtitle: "No one does real-time license data",
    content: "ZoomInfo, Apollo, Lusha — all general B2B databases. None specialize in license renewals. None update daily from government sources.",
  },
  {
    title: "Team",
    subtitle: "Built by sales + data experts",
    content: "Founders with backgrounds in sales intelligence, data engineering, and B2B SaaS. Previously built and exited companies in adjacent spaces.",
  },
  {
    title: "Ask",
    subtitle: "Raising $500K pre-seed",
    content: "18-month runway to reach $50K MRR. Use of funds: 50% engineering, 30% sales/marketing, 20% operations.",
  },
];

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-5xl aspect-video bg-card border border-border rounded-lg shadow-2xl overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-12 flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-center space-y-6">
                <div>
                  <h1 className="text-5xl font-bold text-primary mb-2">{slides[currentSlide].title}</h1>
                  <h2 className="text-2xl text-foreground mb-6">{slides[currentSlide].subtitle}</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl">
                    {slides[currentSlide].content}
                  </p>
                </div>
                {slides[currentSlide].stats && (
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    {slides[currentSlide].stats.map((stat, index) => (
                      <div key={index} className="bg-background/50 rounded-lg p-6 text-center">
                        <p className="text-2xl font-bold text-primary">{stat}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide counter */}
          <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 p-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Keyboard navigation */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('keydown', (e) => {
              if (e.key === 'ArrowRight') window.nextSlide?.();
              if (e.key === 'ArrowLeft') window.prevSlide?.();
            });
            window.nextSlide = ${nextSlide.toString()};
            window.prevSlide = ${prevSlide.toString()};
          `,
        }}
      />
    </div>
  );
}
