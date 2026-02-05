import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const benefits = [
  { icon: <Zap className="w-4 h-4" />, text: "Setup in 5 minutes" },
  { icon: <Shield className="w-4 h-4" />, text: "Enterprise security" },
  { icon: <Clock className="w-4 h-4" />, text: "24/7 AI monitoring" },
];

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-chart-4/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="relative max-w-5xl mx-auto">
          {/* Main CTA card */}
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center border-primary/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-chart-4/10 rounded-full blur-3xl" />
            
            {/* Badge */}
            <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-chart-4/20 text-primary text-sm font-medium mb-8 border border-primary/20">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Limited Time Offer</span>
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            </div>
            
            {/* Heading */}
            <h2 className="relative font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Transform Your
              <br />
              <span className="text-gradient-primary">Retail Business?</span>
            </h2>
            
            {/* Description */}
            <p className="relative text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of retailers using AI to make smarter decisions. 
              Start your free trial today—no credit card required.
            </p>

            {/* Benefits row */}
            <div className="relative flex flex-wrap justify-center gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <div className="text-primary">{benefit.icon}</div>
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/dashboard')}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button variant="outline" size="xl" className="backdrop-blur-sm">
                Schedule Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="relative flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Free 14-day trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-6">Trusted by leading retailers worldwide</p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {["TechCorp", "RetailMax", "ShopSmart", "MegaStore", "QuickMart"].map((brand) => (
                <div key={brand} className="text-muted-foreground/50 font-display font-bold text-xl hover:text-muted-foreground transition-colors cursor-pointer">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
