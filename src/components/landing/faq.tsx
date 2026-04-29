"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How current is the license data?",
      answer: "We update daily from all 50 state licensing boards. Most states update within 24-48 hours of any change. You can verify data freshness by checking the 'Last Updated' timestamp on each license record.",
    },
    {
      question: "Which professions are covered?",
      answer: "We track 15+ licensed professions including insurance agents, general contractors, healthcare professionals, financial advisors, real estate agents, cosmetologists, and more. See our full list on the Pricing page.",
    },
    {
      question: "Can I export data to my CRM?",
      answer: "Yes! Professional and Enterprise tiers include automatic sync to Salesforce and HubSpot. You can also export CSV files on all plans. Enterprise customers can request custom integrations.",
    },
    {
      question: "What happens if a license expires?",
      answer: "Expired licenses are clearly marked in red. You can filter to exclude them or specifically target professionals with recently expired licenses (who may need your compliance/insurance solutions immediately).",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all plans include a 14-day free trial. No credit card required to start. You'll have full access to all features during the trial period.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. No contracts, no hidden fees. Cancel from your account settings with one click. Your subscription remains active until the end of your billing period.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked{" "}
            <span className="text-primary">questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-card border-border cursor-pointer transition-colors hover:bg-card/80"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold flex-1">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
