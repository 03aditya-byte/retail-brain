import { Sparkles, TrendingUp, ShoppingCart, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    icon: TrendingUp,
    title: "Demand Surge Detected",
    description: "Smart Watch Pro sales expected to increase 35% next week based on seasonal patterns.",
    action: "View Forecast",
    priority: "high"
  },
  {
    icon: ShoppingCart,
    title: "Bundle Opportunity",
    description: "Customers buying Wireless Headphones often purchase USB-C cables. Consider bundle pricing.",
    action: "Create Bundle",
    priority: "medium"
  },
  {
    icon: Clock,
    title: "Peak Hours Insight",
    description: "Your store sees 40% more traffic between 2-6 PM on weekends. Optimize staffing.",
    action: "View Analytics",
    priority: "low"
  },
];

const priorityColors = {
  high: "border-l-destructive",
  medium: "border-l-warning",
  low: "border-l-success",
};

const InsightsPanel = () => {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">AI Insights</h3>
            <p className="text-sm text-muted-foreground">Smart recommendations for your business</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const InsightIcon = insight.icon;
          return (
            <div 
              key={index} 
              className={`p-4 rounded-lg bg-secondary/30 border-l-4 ${priorityColors[insight.priority as keyof typeof priorityColors]} hover:bg-secondary/50 transition-colors`}
            >
              <div className="flex items-start gap-3">
                <InsightIcon className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                  <Button variant="ghost" size="sm" className="h-8 px-0 text-primary hover:text-primary/80">
                    {insight.action}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsPanel;
