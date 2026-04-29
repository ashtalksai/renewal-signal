import { format, differenceInDays } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface RenewalTimelineProps {
  renewalDate: string | Date;
  showLabel?: boolean;
}

export function RenewalTimeline({ renewalDate, showLabel = true }: RenewalTimelineProps) {
  const date = typeof renewalDate === "string" ? new Date(renewalDate) : renewalDate;
  const today = new Date();
  const daysUntilRenewal = differenceInDays(date, today);

  let status: "active" | "warning" | "critical" | "expired" = "active";
  let colorClass = "bg-accent-green";
  let label = "Active";

  if (daysUntilRenewal < 0) {
    status = "expired";
    colorClass = "bg-accent-red";
    label = "Expired";
  } else if (daysUntilRenewal <= 30) {
    status = "critical";
    colorClass = "bg-accent-red";
    label = "Critical";
  } else if (daysUntilRenewal <= 90) {
    status = "warning";
    colorClass = "bg-accent-amber";
    label = "Warning";
  }

  const progress = Math.min(100, Math.max(0, ((90 - daysUntilRenewal) / 90) * 100));

  return (
    <div className="space-y-2">
      {showLabel && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {format(date, "MMM d, yyyy")}
          </span>
          <Badge
            variant="outline"
            className={`${
              status === "active"
                ? "border-accent-green text-accent-green"
                : status === "warning"
                ? "border-accent-amber text-accent-amber"
                : "border-accent-red text-accent-red"
            }`}
          >
            {label}
          </Badge>
        </div>
      )}
      <div className="h-2 bg-card rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClass} transition-all duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {!showLabel && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Today</span>
          <span>{daysUntilRenewal} days</span>
        </div>
      )}
    </div>
  );
}
