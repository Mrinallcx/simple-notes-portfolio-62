
import React from "react";
import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle: React.FC = () => {
  // Light mode only - component kept for layout consistency
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      aria-label="Light mode"
      className="rounded-full w-8 h-8 cursor-default"
      disabled
    >
      <Sun className="h-4 w-4" />
    </Button>
  );
};

export default ThemeToggle;
