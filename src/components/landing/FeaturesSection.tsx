import { 
  BarChart3, 
  Brain, 
  DollarSign, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  AlertTriangle,
  PieChart
} from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "AI Demand Forecasting",
    description: "Predict future sales with machine learning. Identify trends, seasonality, and growth patterns in your data.",
    gradient: "from-primary to-chart-2",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Smart Inventory",
    description: "Get automatic reorder recommendations. Never overstock or run out of your best-selling products.",
    gradient: "from-chart-2 to-chart-4",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Pricing Intelligence",
    description: "Discover optimal price points that maximize revenue while maintaining customer satisfaction.",
    gradient: "from-chart-3 to-warning",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Customer Patterns",
    description: "Understand buying behaviors, identify product bundles, and find peak shopping times.",
    gradient: "from-chart-4 to-primary",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Risk Alerts",
    description: "Get early warnings about declining sales, slow-moving inventory, and potential losses.",
    gradient: "from-destructive to-chart-3",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Live Dashboard",
    description: "Monitor all your metrics in real-time with beautiful, interactive visualizations.",
    gradient: "from-primary to-chart-4",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            Powered by AI
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-muted-foreground text-lg">
            From forecasting to risk management, our AI handles the complex analytics 
            so you can focus on running your business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
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
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  gradient: string;
  index: number;
}) => (
  <div 
    className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} text-foreground mb-5 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default FeaturesSection;
