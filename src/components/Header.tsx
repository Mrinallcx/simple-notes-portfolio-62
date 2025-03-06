
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-10 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-border/40 bg-background/80" : "bg-background/0"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link 
            to="/" 
            className="font-serif text-lg font-medium hover:opacity-80 transition-opacity duration-200"
          >
            SP
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-10">
            <li>
              <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/notes" className={`nav-link ${isActive("/notes") ? "active" : ""}`}>
                Notes
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/resume" className={`nav-link ${isActive("/resume") ? "active" : ""}`}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border/40 md:hidden animate-fade-in">
            <nav className="max-w-4xl mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className={`block py-2 ${isActive("/") ? "text-foreground" : "text-foreground/80"}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className={`block py-2 ${isActive("/blog") ? "text-foreground" : "text-foreground/80"}`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/notes" 
                    className={`block py-2 ${isActive("/notes") ? "text-foreground" : "text-foreground/80"}`}
                  >
                    Notes
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className={`block py-2 ${isActive("/portfolio") ? "text-foreground" : "text-foreground/80"}`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/resume" 
                    className={`block py-2 ${isActive("/resume") ? "text-foreground" : "text-foreground/80"}`}
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
