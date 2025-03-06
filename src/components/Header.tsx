
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
      <div className="w-full max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link 
            to="/" 
            className="font-serif text-lg font-medium hover:opacity-80 transition-opacity duration-200"
          >
            SP
          </Link>
        </div>
        <nav className="flex items-center">
          <ul className="flex items-center space-x-6 md:space-x-10">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive("/") ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`nav-link ${isActive("/blog") ? "active" : ""}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/notes" 
                className={`nav-link ${isActive("/notes") ? "active" : ""}`}
              >
                Notes
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={`nav-link ${isActive("/resume") ? "active" : ""}`}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
