import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "DEVLOG", href: "#devlog" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-primary/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("#hero")} className="font-pixel text-[10px] text-primary glow-cyan">
          &lt;GREATEST_LEVIATHAN/&gt;
        </button>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-pixel text-[8px] text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-cyan"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary font-pixel text-[10px]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "[X]" : "[=]"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-primary/30 px-4 pb-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left font-pixel text-[8px] text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              {">"} {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
