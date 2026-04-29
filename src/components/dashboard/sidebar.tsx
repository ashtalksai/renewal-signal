"use client";

import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  Save,
  Download,
  Settings,
  LogOut,
} from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/search", icon: Search, label: "Search" },
  { href: "/dashboard/saved-filters", icon: Save, label: "Saved Filters" },
  { href: "/dashboard/exports", icon: Download, label: "Exports" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <ShadcnSidebar className="border-r border-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    className="data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                    onClick={() => handleNavigate(item.href)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground"
          onClick={() => window.location.href = "/api/auth/signout"}
        >
          <LogOut className="w-4 h-4 mr-3" />
          Sign Out
        </Button>
      </SidebarFooter>
    </ShadcnSidebar>
  );
}
