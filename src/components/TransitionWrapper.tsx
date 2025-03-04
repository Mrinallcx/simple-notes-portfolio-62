
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
    // Check if we need to update the children due to location change
    // We need to safely check if children is a React element with props
    const childrenElement = React.isValidElement(children) ? children : null;
    const displayChildrenElement = React.isValidElement(displayChildren) ? displayChildren : null;
    
    const childrenPath = childrenElement?.props?.location?.pathname;
    const displayChildrenPath = displayChildrenElement?.props?.location?.pathname;
    
    if (childrenPath && displayChildrenPath && childrenPath !== displayChildrenPath) {
      setTransitionStage("fadeOut");
      
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage("fadeIn");
      }, 200); // Reduced from 300ms to 200ms for faster transitions
      
      return () => clearTimeout(timeout);
    }
  }, [location, children, displayChildren]);

  return (
    <div 
      className="w-full overflow-hidden"
    >
      <div
        className={`transition-opacity duration-200 ease-in-out ${
          transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"
        }`}
      >
        {displayChildren}
      </div>
    </div>
  );
};

export default TransitionWrapper;
