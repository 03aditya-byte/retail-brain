import { 
  Brain, 
  Package, 
  DollarSign, 
  Users, 
  AlertTriangle, 
  Settings,
  LayoutDashboard,
  TrendingUp,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { SheetClose } from "@/components/ui/sheet";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: TrendingUp, label: "Forecasting", path: "/dashboard/forecasting" },
  { icon: Package, label: "Inventory", path: "/dashboard/inventory" },
  { icon: DollarSign, label: "Pricing", path: "/dashboard/pricing" },
  { icon: Users, label: "Customers", path: "/dashboard/customers" },
  { icon: AlertTriangle, label: "Alerts", path: "/dashboard/alerts" },
  { icon: FileText, label: "Reports", path: "/dashboard/reports" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const MobileSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-sidebar">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2 px-6 border-b border-sidebar-border">
        <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-lg text-sidebar-foreground">SmartRetail</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <SheetClose asChild key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-primary" 
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              </SheetClose>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileSidebar;
