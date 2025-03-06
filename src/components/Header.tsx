
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
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        <div 
          className={`absolute top-full left-0 right-0 bg-background border-b border-border/40 md:hidden transform transition-all duration-300 ease-in-out ${
            isOpen 
              ? "opacity-100 translate-y-0 shadow-md" 
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <nav className="max-w-4xl mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-6">
              {[
                { path: "/", label: "Home" },
                { path: "/blog", label: "Blog" },
                { path: "/notes", label: "Notes" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/resume", label: "Resume" },
              ].map((item, index) => (
                <li key={item.path} className={`transform transition-all duration-300 delay-${index * 75}`}>
                  <Link 
                    to={item.path} 
                    className={`block py-2 text-lg font-medium relative ${
                      isActive(item.path) 
                        ? "text-foreground" 
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 ${
                      isActive(item.path) ? "w-8" : "group-hover:w-8"
                    }`} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
