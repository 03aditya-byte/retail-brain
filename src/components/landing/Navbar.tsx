import { Button } from "@/components/ui/button";
import { Brain, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-card border-b border-border/50 shadow-elevated' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with animation */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 text-primary-foreground" />
              <div className="absolute inset-0 rounded-xl bg-primary/50 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground leading-tight">SmartRetail</span>
              <span className="text-[10px] text-primary font-medium leading-tight">AI Platform</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLinks />
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => navigate('/dashboard')}
              className="group"
            >
              <Sparkles className="w-4 h-4 mr-1 group-hover:animate-pulse" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              <NavLinks mobile />
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/50">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button variant="default" onClick={() => navigate('/dashboard')}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#solutions", label: "Solutions" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
  ];

  if (mobile) {
    return (
      <>
        {links.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-2.5 px-3 rounded-lg"
          >
            {link.label}
          </a>
        ))}
      </>
    );
  }

  return (
    <>
      {links.map((link) => (
        <a 
          key={link.href}
          href={link.href} 
          className="relative text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-secondary/30 group"
        >
          {link.label}
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300" />
        </a>
      ))}
    </>
  );
};

export default Navbar;
