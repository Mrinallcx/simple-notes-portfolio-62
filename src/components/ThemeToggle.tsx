import React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-1">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="icon"
        aria-label="Light mode"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="icon"
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="icon"
        aria-label="System mode"
        onClick={() => setTheme("system")}
      >
        <Laptop className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
