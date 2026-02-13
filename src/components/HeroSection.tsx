import { useState, useEffect } from "react";
import StarField from "./StarField";

const HeroSection = () => {
  const fullName = "PLAYER ONE";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayed(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!typingDone) return;
    const interval = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(interval);
  }, [typingDone]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <StarField />
      <div className="relative z-10 text-center">
        <p className="font-pixel text-[10px] md:text-xs text-secondary mb-6 tracking-widest">
          — WELCOME TO —
        </p>
        <h1 className="font-pixel text-2xl sm:text-3xl md:text-5xl text-primary glow-cyan mb-6">
          {displayed}
          <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-secondary`}>_</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-10">
          First Year Engineering Student | Indie Game Enthusiast
        </p>
        <div className="animate-float">
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="font-pixel text-[10px] text-secondary blink hover:text-primary transition-colors"
          >
            ▼ PRESS START ▼
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
