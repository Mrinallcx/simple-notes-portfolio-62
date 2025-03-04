
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayChildren.props.location?.pathname) {
      setTransitionStage("fadeOut");
      
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage("fadeIn");
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [location, children, displayChildren.props.location?.pathname]);

  return (
    <div 
      className={`transition-opacity duration-300 ease-in-out ${
        transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default TransitionWrapper;
