import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import SalesChart from "@/components/dashboard/SalesChart";
import InventoryStatus from "@/components/dashboard/InventoryStatus";
import InsightsPanel from "@/components/dashboard/InsightsPanel";
import TopProducts from "@/components/dashboard/TopProducts";
import { DollarSign, Package, TrendingUp, Users, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <h1 className="font-display text-2xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your store.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            title="Total Revenue" 
            value="$48,352" 
            change="+12.5%" 
            changeType="positive"
            icon={DollarSign}
            iconColor="text-success"
          />
          <MetricCard 
            title="Products Sold" 
            value="1,234" 
            change="+8.2%" 
            changeType="positive"
            icon={Package}
            iconColor="text-primary"
          />
          <MetricCard 
            title="Forecast Accuracy" 
            value="94.2%" 
            change="+2.1%" 
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-chart-4"
          />
          <MetricCard 
            title="Active Alerts" 
            value="3" 
            change="2 urgent" 
            changeType="negative"
            icon={AlertTriangle}
            iconColor="text-warning"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <InsightsPanel />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InventoryStatus />
          <TopProducts />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
