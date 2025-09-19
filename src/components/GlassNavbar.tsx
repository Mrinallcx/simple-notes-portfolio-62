import React from "react";

const GlassNavbar: React.FC = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full h-14 z-[9999] backdrop-blur-md bg-white/30 dark:bg-black/20 shadow-lg"
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '3.5rem',
        zIndex: 9999,
      }}
    >
      {/* Empty glassmorphism navbar */}
    </nav>
  );
};

export default GlassNavbar; 