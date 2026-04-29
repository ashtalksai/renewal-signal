"use client";

import { useState, useEffect, useCallback } from "react";
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
import { useRouter } from "next/navigation";

interface License {
  id: string;
  licenseNumber: string;
  state: string;
  profession: string;
  specialty?: string;
  firstName: string;
  lastName: string;
  businessName?: string;
  status: string;
  renewalDate: string;
}

interface LicenseTableProps {
  onExport?: (selectedIds: string[]) => void;
  onViewLicense?: (id: string) => void;
  searchQuery?: string;
  filters?: {
    state?: string;
    profession?: string;
    status?: string;
  };
}

export function LicenseTable({ onExport, onViewLicense, searchQuery, filters }: LicenseTableProps) {
  const router = useRouter();
  const [licenses, setLicenses] = useState<License[]>([]);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 0 });

  const fetchLicenses = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", pagination.page.toString());
      params.set("limit", "20");
      
      if (searchQuery) params.set("search", searchQuery);
      if (filters?.state) params.set("state", filters.state);
      if (filters?.profession) params.set("profession", filters.profession);
      if (filters?.status) params.set("status", filters.status);

      const response = await fetch(`/api/licenses?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to fetch licenses");
      
      const data = await response.json();
      setLicenses(data.licenses);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching licenses:", error);
    } finally {
      setIsLoading(false);
    }
  }, [pagination.page, searchQuery, filters]);

  useEffect(() => {
    fetchLicenses();
  }, [fetchLicenses]);

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
    if (selectedRows.size === licenses.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(licenses.map((l) => l.id)));
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

  const handleExport = async (ids: string[]) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (filters?.state) params.set("state", filters.state);
    if (filters?.profession) params.set("profession", filters.profession);
    if (filters?.status) params.set("status", filters.status);
    
    window.open(`/api/export/csv?${params.toString()}`, "_blank");
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
              onClick={() => handleExport(Array.from(selectedRows))}
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
                  checked={licenses.length > 0 && selectedRows.size === licenses.length}
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
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  Loading licenses...
                </TableCell>
              </TableRow>
            ) : licenses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No licenses found
                </TableCell>
              </TableRow>
            ) : (
              licenses.map((license) => (
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
                  <TableCell className="font-medium">
                    {license.firstName} {license.lastName}
                    {license.businessName && (
                      <div className="text-xs text-muted-foreground">{license.businessName}</div>
                    )}
                  </TableCell>
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
                      <DropdownMenuTrigger>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => router.push(`/dashboard/license/${license.id}`)}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleExport([license.id])}>
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          Showing {licenses.length > 0 ? 1 : 0}-{licenses.length} of {pagination.total} results
        </p>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            disabled={pagination.page <= 1}
            onClick={() => setPagination(p => ({ ...p, page: p.page - 1 }))}
          >
            Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            disabled={pagination.page >= pagination.totalPages}
            onClick={() => setPagination(p => ({ ...p, page: p.page + 1 }))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
