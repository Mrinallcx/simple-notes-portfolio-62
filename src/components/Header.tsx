
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Twitter, Linkedin } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-10 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-border/40 bg-background/80" : "bg-background/0"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link 
            to="/" 
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="/main logo mrinal.svg" 
              alt="Mrinal Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="border-2 border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 text-sm">
                Resume
              </Link>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </nav>

        {/* Mobile CTA Button */}
        <div className="md:hidden">
          <Link to="/" className="border-2 border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 text-sm">
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
