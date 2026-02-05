import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">SmartRetail</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="default" size="sm" onClick={() => navigate('/dashboard')}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <NavLinks mobile />
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button variant="default" onClick={() => navigate('/dashboard')}>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const baseClass = mobile 
    ? "text-muted-foreground hover:text-foreground transition-colors py-2"
    : "text-sm text-muted-foreground hover:text-foreground transition-colors";

  return (
    <>
      <a href="#features" className={baseClass}>Features</a>
      <a href="#solutions" className={baseClass}>Solutions</a>
      <a href="#pricing" className={baseClass}>Pricing</a>
      <a href="#about" className={baseClass}>About</a>
    </>
  );
};

export default Navbar;
