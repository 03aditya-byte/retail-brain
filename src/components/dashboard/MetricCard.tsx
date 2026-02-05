import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  iconColor = "text-primary"
}: MetricCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2.5 rounded-lg bg-primary/10", iconColor.includes("success") && "bg-success/10", iconColor.includes("warning") && "bg-warning/10", iconColor.includes("destructive") && "bg-destructive/10")}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        {change && (
          <span className={cn(
            "text-sm font-medium px-2 py-0.5 rounded-full",
            changeType === "positive" && "text-success bg-success/10",
            changeType === "negative" && "text-destructive bg-destructive/10",
            changeType === "neutral" && "text-muted-foreground bg-muted"
          )}>
            {change}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-1">{title}</p>
      <p className="text-2xl font-bold font-display text-foreground">{value}</p>
    </div>
  );
};

export default MetricCard;
