import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border-primary/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Start Free Today
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <span className="text-gradient-primary"> Retail Business?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of retailers using AI to make smarter decisions. 
            No credit card required to get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate('/dashboard')}
              className="group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            ✓ Free 14-day trial &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
