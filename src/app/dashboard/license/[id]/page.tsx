import { Header } from "@/components/shared/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { RenewalTimeline } from "@/components/dashboard/renewal-timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Download, Share2, Bell, ExternalLink } from "lucide-react";
import Link from "next/link";

// Mock data - will be replaced with real DB data
const mockLicense = {
  id: "1",
  name: "John Smith",
  licenseNumber: "INS-2024-001234",
  state: "California",
  profession: "Insurance Agent",
  status: "active",
  renewalDate: "2026-08-15",
  issueDate: "2024-08-15",
  specialty: "Life Insurance",
  address: "123 Main Street, Los Angeles, CA 90001",
  phone: "(555) 123-4567",
  email: "john.smith@example.com",
  statusHistory: [
    { status: "Active", date: "2024-08-15", note: "License issued" },
    { status: "Renewed", date: "2025-08-15", note: "Annual renewal completed" },
  ],
};

export default function LicenseDetailPage({ params }: { params: { id: string } }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="md:hidden" />
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-bold">{mockLicense.name}</h1>
                      <Badge
                        variant="outline"
                        className="border-accent-green text-accent-green"
                      >
                        Active
                      </Badge>
                    </div>
                    <p className="text-muted-foreground font-mono text-sm mt-1">
                      {mockLicense.licenseNumber}
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
                        <p className="font-medium">{mockLicense.name}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Specialty</label>
                        <p className="font-medium">{mockLicense.specialty}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Address</label>
                        <p className="font-medium">{mockLicense.address}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Phone</label>
                        <p className="font-medium">{mockLicense.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Email</label>
                        <p className="font-medium">{mockLicense.email}</p>
                      </div>
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
                        <p className="font-mono font-medium">{mockLicense.licenseNumber}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">State</label>
                        <p className="font-medium">{mockLicense.state}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Profession</label>
                        <p className="font-medium">{mockLicense.profession}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Issue Date</label>
                        <p className="font-medium">{mockLicense.issueDate}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Renewal Date</label>
                        <RenewalTimeline renewalDate={mockLicense.renewalDate} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Status History */}
              <Card className="bg-card border-border">
                <CardContent className="pt-6 space-y-4">
                  <h2 className="text-lg font-semibold">Status History</h2>
                  <Separator className="bg-border" />
                  <div className="space-y-4">
                    {mockLicense.statusHistory.map((entry, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{entry.status}</p>
                            <p className="text-sm text-muted-foreground">{entry.date}</p>
                          </div>
                          {entry.note && (
                            <p className="text-sm text-muted-foreground mt-1">{entry.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Back to dashboard */}
              <div className="flex justify-center">
                <Link href="/dashboard">
                  <Button variant="outline" className="gap-2">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
