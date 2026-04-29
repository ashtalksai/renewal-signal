"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Download, ExternalLink } from "lucide-react";
import { RenewalTimeline } from "./renewal-timeline";

// Mock data for now - will be replaced with real DB data
const mockLicenses = [
  {
    id: "1",
    name: "John Smith",
    licenseNumber: "INS-2024-001234",
    state: "California",
    profession: "Insurance Agent",
    status: "active",
    renewalDate: "2026-08-15",
    specialty: "Life Insurance",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    licenseNumber: "GC-2023-005678",
    state: "Texas",
    profession: "General Contractor",
    status: "warning",
    renewalDate: "2026-06-01",
    specialty: "Residential",
  },
  {
    id: "3",
    name: "Michael Chen",
    licenseNumber: "RE-2022-009012",
    state: "Florida",
    profession: "Real Estate Agent",
    status: "critical",
    renewalDate: "2026-05-10",
    specialty: "Commercial",
  },
  {
    id: "4",
    name: "Emily Davis",
    licenseNumber: "FA-2021-003456",
    state: "New York",
    profession: "Financial Advisor",
    status: "active",
    renewalDate: "2026-12-20",
    specialty: "Investment Advisory",
  },
  {
    id: "5",
    name: "Robert Wilson",
    licenseNumber: "HC-2020-007890",
    state: "Illinois",
    profession: "Healthcare Professional",
    status: "expired",
    renewalDate: "2026-03-15",
    specialty: "Physical Therapy",
  },
];

interface LicenseTableProps {
  onExport?: (selectedIds: string[]) => void;
  onViewLicense?: (id: string) => void;
}

export function LicenseTable({ onExport, onViewLicense }: LicenseTableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const toggleRowSelection = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllRows = () => {
    if (selectedRows.size === mockLicenses.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(mockLicenses.map((l) => l.id)));
    }
  };

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
        className={`capitalize ${variants[status as keyof typeof variants]}`}
      >
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  return (
    <div className="space-y-4">
      {selectedRows.size > 0 && (
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
          <span className="text-sm text-muted-foreground">
            {selectedRows.size} license{selectedRows.size !== 1 ? "s" : ""} selected
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onExport?.(Array.from(selectedRows))}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedRows.size === mockLicenses.length}
                  onCheckedChange={toggleAllRows}
                />
              </TableHead>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">License #</TableHead>
              <TableHead className="font-semibold">State</TableHead>
              <TableHead className="font-semibold">Profession</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Renewal Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLicenses.map((license) => (
              <TableRow
                key={license.id}
                className="border-grid hover:bg-card/50"
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(license.id)}
                    onCheckedChange={() => toggleRowSelection(license.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{license.name}</TableCell>
                <TableCell className="font-mono text-sm">
                  {license.licenseNumber}
                </TableCell>
                <TableCell>{license.state}</TableCell>
                <TableCell>
                  <div>
                    <div>{license.profession}</div>
                    {license.specialty && (
                      <div className="text-xs text-muted-foreground">
                        {license.specialty}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(license.status)}</TableCell>
                <TableCell className="w-48">
                  <RenewalTimeline
                    renewalDate={license.renewalDate}
                    showLabel={false}
                  />
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onViewLicense?.(license.id)}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onExport?.([license.id])}>
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          Showing 1-{mockLicenses.length} of {mockLicenses.length} results
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
