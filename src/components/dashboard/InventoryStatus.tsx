import { Package, AlertTriangle, TrendingDown, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const inventoryItems = [
  { 
    name: "Wireless Headphones", 
    sku: "WH-001", 
    stock: 245, 
    status: "optimal",
    recommendation: "Stock level healthy" 
  },
  { 
    name: "Smart Watch Pro", 
    sku: "SW-002", 
    stock: 12, 
    status: "low",
    recommendation: "Reorder 150 units" 
  },
  { 
    name: "Bluetooth Speaker", 
    sku: "BS-003", 
    stock: 890, 
    status: "overstock",
    recommendation: "Consider 20% markdown" 
  },
  { 
    name: "USB-C Cable Pack", 
    sku: "UC-004", 
    stock: 67, 
    status: "warning",
    recommendation: "Reorder soon (45 units)" 
  },
  { 
    name: "Power Bank 20K", 
    sku: "PB-005", 
    stock: 156, 
    status: "optimal",
    recommendation: "Stock level healthy" 
  },
];

const statusConfig = {
  optimal: { icon: CheckCircle, color: "text-success", bg: "bg-success/10", label: "Optimal" },
  low: { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10", label: "Low Stock" },
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10", label: "Warning" },
  overstock: { icon: TrendingDown, color: "text-chart-4", bg: "bg-chart-4/10", label: "Overstock" },
};

const InventoryStatus = () => {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Inventory Status</h3>
          <p className="text-sm text-muted-foreground">AI-powered stock recommendations</p>
        </div>
        <Package className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-4">
        {inventoryItems.map((item) => {
          const config = statusConfig[item.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;
          
          return (
            <div key={item.sku} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <div className={cn("p-2 rounded-lg", config.bg)}>
                <StatusIcon className={cn("w-4 h-4", config.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground truncate">{item.name}</p>
                  <span className="text-xs text-muted-foreground">{item.sku}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.recommendation}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">{item.stock}</p>
                <p className="text-xs text-muted-foreground">units</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryStatus;
