import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DevlogSection from "@/components/DevlogSection";

const Devlog = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="scanlines pixel-grid min-h-screen">
      {/* Simple top bar for Devlog page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="font-pixel text-[10px] text-primary glow-cyan"
          >
            &lt;GREATEST_LEVIATHAN/&gt;
          </Link>
          <div className="flex gap-6 items-center">
            <Link
              to="/"
              className="font-pixel text-[8px] text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-cyan"
            >
              HOME
            </Link>
            <span className="font-pixel text-[8px] text-secondary glow-magenta">
              DEVLOG
            </span>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <DevlogSection />
      </main>
    </div>
  );
};

export default Devlog;
