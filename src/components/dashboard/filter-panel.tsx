"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const states = [
  "All States",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
];

const professions = [
  "All Professions",
  "Insurance Agent",
  "General Contractor",
  "Real Estate Agent",
  "Financial Advisor",
  "Healthcare Professional",
  "Cosmetologist",
  "Electrician",
  "Plumber",
];

const statuses = [
  { value: "all", label: "All Statuses" },
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending Renewal" },
  { value: "expired", label: "Expired" },
];

const renewalWindows = [
  { value: "all", label: "Any Time" },
  { value: "30", label: "Next 30 Days" },
  { value: "60", label: "Next 60 Days" },
  { value: "90", label: "Next 90 Days" },
];

interface FilterPanelProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  state: string;
  profession: string;
  status: string;
  renewalWindow: string;
}

export function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    state: "All States",
    profession: "All Professions",
    status: "all",
    renewalWindow: "all",
  });

  const updateFilter = (key: keyof FilterState, value: string | null) => {
    const newFilters = { ...filters, [key]: value ?? "all" };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      state: "All States",
      profession: "All Professions",
      status: "all",
      renewalWindow: "all",
    };
    setFilters(clearedFilters);
    onFilterChange?.(clearedFilters);
  };

  const hasActiveFilters =
    filters.state !== "All States" ||
    filters.profession !== "All Professions" ||
    filters.status !== "all" ||
    filters.renewalWindow !== "all";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 text-xs flex items-center justify-center">
              !
            </Badge>
          )}
        </Button>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
            <X className="w-3 h-3" />
            Clear all
          </Button>
        )}
      </div>

      {isOpen && (
        <Card className="bg-card border-border">
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">State</label>
                <Select
                  value={filters.state}
                  onValueChange={(value) => updateFilter("state", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Profession</label>
                <Select
                  value={filters.profession}
                  onValueChange={(value) => updateFilter("profession", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select profession" />
                  </SelectTrigger>
                  <SelectContent>
                    {professions.map((profession) => (
                      <SelectItem key={profession} value={profession}>
                        {profession}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">License Status</label>
                <Select
                  value={filters.status}
                  onValueChange={(value) => updateFilter("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Renewal Window</label>
                <Select
                  value={filters.renewalWindow}
                  onValueChange={(value) => updateFilter("renewalWindow", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select window" />
                  </SelectTrigger>
                  <SelectContent>
                    {renewalWindows.map((window) => (
                      <SelectItem key={window.value} value={window.value}>
                        {window.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
