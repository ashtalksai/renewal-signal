"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/shared/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { RenewalTimeline } from "@/components/dashboard/renewal-timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Download, Share2, Bell, ExternalLink, ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

interface License {
  id: string;
  licenseNumber: string;
  state: string;
  profession: string;
  status: string;
  renewalDate: string;
  issueDate?: string;
  specialty?: string;
  firstName: string;
  lastName: string;
  businessName?: string;
  address?: string;
  city?: string;
  stateAddress?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  disciplinaryActions?: string;
  sourceUrl?: string;
}

export default function LicenseDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [license, setLicense] = useState<License | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLicense() {
      try {
        const response = await fetch(`/api/licenses/${params.id}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError("License not found");
          } else {
            setError("Failed to fetch license");
          }
          return;
        }
        const data = await response.json();
        setLicense(data);
      } catch (err) {
        setError("Failed to fetch license");
      } finally {
        setIsLoading(false);
      }
    }

    if (params.id) {
      fetchLicense();
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-auto p-6 flex items-center justify-center">
              <p className="text-muted-foreground">Loading license...</p>
            </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }

  if (error || !license) {
    return (
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-auto p-6 flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">{error || "License not found"}</p>
                <Button onClick={() => router.push("/dashboard")}>
                  Back to Dashboard
                </Button>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "border-accent-green text-accent-green",
      warning: "border-accent-amber text-accent-amber",
      critical: "border-accent-red text-accent-red",
      expired: "border-accent-red text-accent-red bg-accent-red/10",
    };
    const labels = {
      active: "Active",
      warning: "Pending",
      critical: "Renewing Soon",
      expired: "Expired",
    };
    return (
      <Badge
        variant="outline"
        className={`capitalize ${variants[status as keyof typeof variants] || ""}`}
      >
        {labels[status as keyof typeof labels] || status}
      </Badge>
    );
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Back button */}
              <Button variant="ghost" onClick={() => router.back()} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="md:hidden" />
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-bold">
                        {license.firstName} {license.lastName}
                      </h1>
                      {getStatusBadge(license.status)}
                    </div>
                    <p className="text-muted-foreground font-mono text-sm mt-1">
                      {license.licenseNumber}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Bell className="w-4 h-4" />
                    Set Alert
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Professional Information */}
                <Card className="bg-card border-border">
                  <CardContent className="pt-6 space-y-4">
                    <h2 className="text-lg font-semibold">Professional Information</h2>
                    <Separator className="bg-border" />
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-muted-foreground">Full Name</label>
                        <p className="font-medium">
                          {license.firstName} {license.lastName}
                        </p>
                      </div>
                      {license.businessName && (
                        <div>
                          <label className="text-sm text-muted-foreground">Business Name</label>
                          <p className="font-medium">{license.businessName}</p>
                        </div>
                      )}
                      {license.specialty && (
                        <div>
                          <label className="text-sm text-muted-foreground">Specialty</label>
                          <p className="font-medium">{license.specialty}</p>
                        </div>
                      )}
                      {license.address && (
                        <div>
                          <label className="text-sm text-muted-foreground">Address</label>
                          <p className="font-medium">
                            {license.address}
                            {license.city && license.stateAddress && license.zipCode && (
                              <>, {license.city}, {license.stateAddress} {license.zipCode}</>
                            )}
                          </p>
                        </div>
                      )}
                      {license.phone && (
                        <div>
                          <label className="text-sm text-muted-foreground">Phone</label>
                          <p className="font-medium">{license.phone}</p>
                        </div>
                      )}
                      {license.email && (
                        <div>
                          <label className="text-sm text-muted-foreground">Email</label>
                          <p className="font-medium">{license.email}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* License Information */}
                <Card className="bg-card border-border">
                  <CardContent className="pt-6 space-y-4">
                    <h2 className="text-lg font-semibold">License Information</h2>
                    <Separator className="bg-border" />
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-muted-foreground">License Number</label>
                        <p className="font-mono font-medium">{license.licenseNumber}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">State</label>
                        <p className="font-medium">{license.state}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Profession</label>
                        <p className="font-medium">{license.profession}</p>
                      </div>
                      {license.issueDate && (
                        <div>
                          <label className="text-sm text-muted-foreground">Issue Date</label>
                          <p className="font-medium">{license.issueDate}</p>
                        </div>
                      )}
                      <div>
                        <label className="text-sm text-muted-foreground">Renewal Date</label>
                        <RenewalTimeline renewalDate={license.renewalDate} />
                      </div>
                      {license.disciplinaryActions && (
                        <div>
                          <label className="text-sm text-muted-foreground">Disciplinary Actions</label>
                          <p className="font-medium text-red-600">{license.disciplinaryActions}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Source Information */}
              {license.sourceUrl && (
                <Card className="bg-card border-border">
                  <CardContent className="pt-6 space-y-4">
                    <h2 className="text-lg font-semibold">Source Information</h2>
                    <Separator className="bg-border" />
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-muted-foreground">Source URL</label>
                        <p className="font-medium">
                          <a
                            href={license.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            View Original Source
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
