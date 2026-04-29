import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RenewalIQ — Real-time license data for B2B sales teams",
  description: "See who's renewing before your competitors know they exist. Government-fed license database for sales reps selling to licensed professionals.",
  keywords: ["license database", "sales intelligence", "renewal tracking", "B2B sales", "compliance"],
  authors: [{ name: "RenewalIQ" }],
  openGraph: {
    title: "RenewalIQ — Real-time license data for B2B sales teams",
    description: "See who's renewing before your competitors know they exist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
