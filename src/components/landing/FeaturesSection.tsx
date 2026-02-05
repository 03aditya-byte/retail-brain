import { 
  BarChart3, 
  Brain, 
  DollarSign, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  AlertTriangle,
  PieChart,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "AI Demand Forecasting",
    description: "Predict future sales with machine learning. Identify trends, seasonality, and growth patterns in your data.",
    gradient: "from-primary via-chart-2 to-primary",
    metric: "94% Accuracy",
  },
  {
    icon: <Package className="w-7 h-7" />,
    title: "Smart Inventory",
    description: "Get automatic reorder recommendations. Never overstock or run out of your best-selling products.",
    gradient: "from-chart-2 via-chart-4 to-chart-2",
    metric: "40% Less Waste",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Pricing Intelligence",
    description: "Discover optimal price points that maximize revenue while maintaining customer satisfaction.",
    gradient: "from-chart-3 via-warning to-chart-3",
    metric: "+23% Revenue",
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Customer Patterns",
    description: "Understand buying behaviors, identify product bundles, and find peak shopping times.",
    gradient: "from-chart-4 via-primary to-chart-4",
    metric: "3x Insights",
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: "Risk Alerts",
    description: "Get early warnings about declining sales, slow-moving inventory, and potential losses.",
    gradient: "from-destructive via-chart-3 to-destructive",
    metric: "Real-time",
  },
  {
    icon: <PieChart className="w-7 h-7" />,
    title: "Live Dashboard",
    description: "Monitor all your metrics in real-time with beautiful, interactive visualizations.",
    gradient: "from-primary via-chart-4 to-primary",
    metric: "24/7 Access",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,hsl(var(--chart-4)/0.06),transparent_60%)]" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section header with animation */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6 border border-primary/20">
            <Brain className="w-4 h-4" />
            <span>Powered by Advanced AI</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Grow</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            From forecasting to risk management, our AI handles the complex analytics 
            so you can focus on running your business.
          </p>
        </div>

        {/* Features grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            Join <span className="text-foreground font-semibold">2,000+</span> retailers already using SmartRetail AI
          </p>
          <div className="flex justify-center gap-8 items-center opacity-50">
            {["TechCorp", "RetailMax", "ShopSmart", "MegaStore"].map((brand) => (
              <span key={brand} className="text-muted-foreground font-display font-semibold text-lg">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  gradient,
  metric,
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  gradient: string;
  metric: string;
  index: number;
}) => (
  <div 
    className="group relative glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
    style={{ 
      animationDelay: `${index * 100}ms`,
      animation: 'slide-up 0.6s ease-out backwards'
    }}
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
    </div>

    {/* Top accent line */}
    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

    {/* Metric badge */}
    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      {metric}
    </div>

    {/* Icon container */}
    <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
      <div className="text-foreground">{icon}</div>
    </div>

    {/* Content */}
    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gradient-primary transition-all duration-300">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

    {/* Learn more link */}
    <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      <span>Learn more</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </div>
);

export default FeaturesSection;
