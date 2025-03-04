
import React from "react";
import Header from "./Header";
import TransitionWrapper from "./TransitionWrapper";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 md:py-16">
        <TransitionWrapper>{children}</TransitionWrapper>
      </main>
      <footer className="w-full max-w-4xl mx-auto px-4 py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} • Built with minimalism in mind</p>
      </footer>
    </div>
  );
};

export default Layout;
