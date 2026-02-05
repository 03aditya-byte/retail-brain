import { 
  Brain, 
  BarChart3, 
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

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: TrendingUp, label: "Forecasting", path: "/dashboard/forecasting" },
  { icon: Package, label: "Inventory", path: "/dashboard/inventory" },
  { icon: DollarSign, label: "Pricing", path: "/dashboard/pricing" },
  { icon: Users, label: "Customers", path: "/dashboard/customers" },
  { icon: AlertTriangle, label: "Alerts", path: "/dashboard/alerts" },
  { icon: FileText, label: "Reports", path: "/dashboard/reports" },
];

const bottomMenuItems = [
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-sidebar border-r border-sidebar-border hidden lg:flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2 px-6 border-b border-sidebar-border">
        <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-lg text-sidebar-foreground">SmartRetail</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-6 px-3 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
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
            );
          })}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="py-4 px-3 border-t border-sidebar-border">
        {bottomMenuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
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
          );
        })}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
