import { Header } from "@/components/shared/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { SearchBar } from "@/components/dashboard/search-bar";
import { FilterPanel } from "@/components/dashboard/filter-panel";
import { LicenseTable } from "@/components/dashboard/license-table";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              {/* Top bar */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
                  <SidebarTrigger className="md:hidden" />
                  <div className="flex-1 max-w-xl">
                    <SearchBar />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FilterPanel />
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Results table */}
              <LicenseTable />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
