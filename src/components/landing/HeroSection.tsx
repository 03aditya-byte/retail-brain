import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, Sparkles, Zap, LineChart, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.3),transparent)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,hsl(var(--chart-4)/0.2),transparent)]" />
      </div>

      {/* Floating orbs with enhanced animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-4/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Additional floating particles */}
        <FloatingParticles />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up border border-primary/20">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <div className="absolute inset-0 w-4 h-4 bg-primary/50 rounded-full blur-sm animate-ping" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Retail Intelligence</span>
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          </div>

          {/* Main heading with enhanced typography */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Transform Data</span>
            <br />
            <span className="text-foreground">Into </span>
            <span className="relative inline-block">
              <span className="text-gradient-primary">Smart Decisions</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 4 150 6C200 8 250 4 298 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" className="animate-draw-line" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--chart-4))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            SmartRetail AI turns your sales data into actionable insights. Forecast demand, 
            optimize inventory, and discover pricing strategies that maximize profit.
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate('/dashboard')}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Dashboard
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-2 to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button variant="outline" size="xl" className="group backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              Watch Demo
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <StatItem value="94%" label="Forecast Accuracy" />
            <StatItem value="3x" label="Faster Decisions" />
            <StatItem value="40%" label="Cost Reduction" />
          </div>

          {/* Feature highlights with 3D cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6" />}
              title="Demand Forecasting"
              description="Predict future sales with ML precision"
              color="primary"
            />
            <FeatureCard 
              icon={<Brain className="w-6 h-6" />}
              title="Smart Inventory"
              description="Optimize stock levels automatically"
              color="chart-4"
            />
            <FeatureCard 
              icon={<LineChart className="w-6 h-6" />}
              title="Price Intelligence"
              description="Find optimal pricing strategies"
              color="chart-2"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4,
  }));

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="font-display text-3xl md:text-4xl font-bold text-gradient-primary mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  color
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  color: string;
}) => (
  <div className="group relative glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow cursor-pointer overflow-hidden">
    {/* Glow effect on hover */}
    <div className={`absolute inset-0 bg-gradient-to-b from-${color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    
    <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${color}/10 text-${color} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
      {icon}
      <div className={`absolute inset-0 rounded-xl bg-${color}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
    </div>
    <h3 className="relative font-display font-semibold text-foreground mb-2">{title}</h3>
    <p className="relative text-sm text-muted-foreground">{description}</p>
  </div>
);

export default HeroSection;
