import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-4/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Retail Intelligence</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Transform Data Into</span>
            <br />
            <span className="text-gradient-primary">Smart Decisions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            SmartRetail AI turns your sales data into actionable insights. Forecast demand, 
            optimize inventory, and discover pricing strategies that maximize profit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate('/dashboard')}
              className="group"
            >
              Launch Dashboard
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6" />}
              title="Demand Forecasting"
              description="Predict future sales with ML precision"
            />
            <FeatureCard 
              icon={<Brain className="w-6 h-6" />}
              title="Smart Inventory"
              description="Optimize stock levels automatically"
            />
            <FeatureCard 
              icon={<Sparkles className="w-6 h-6" />}
              title="Price Intelligence"
              description="Find optimal pricing strategies"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default HeroSection;
