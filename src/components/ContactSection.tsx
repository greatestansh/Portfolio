import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Github, label: "GITHUB", href: "https://github.com" },
  { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com" },
  { icon: Mail, label: "EMAIL", href: "mailto:hello@example.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="scroll-reveal font-pixel text-lg md:text-xl text-secondary glow-magenta mb-4">
        GAME OVER
      </h2>
      <p className="scroll-reveal font-pixel text-[10px] text-primary blink mb-10">
        CONTINUE? [Y/N]
      </p>

      <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border-2 border-primary/50 bg-card
              font-pixel text-[8px] text-primary hover:border-primary hover:box-glow-cyan
              transition-all duration-300 group w-full sm:w-auto justify-center"
          >
            <l.icon className="w-4 h-4 group-hover:text-secondary transition-colors" />
            {l.label}
          </a>
        ))}
      </div>

      <p className="scroll-reveal font-mono text-xs text-muted-foreground mt-16">
        Built with React + Tailwind • Powered by caffeine & pixel dust
      </p>
      <p className="font-pixel text-[6px] text-muted-foreground/50 mt-2">
        © 2026 PLAYER ONE — ALL RIGHTS RESERVED
      </p>
    </section>
  );
};

export default ContactSection;
