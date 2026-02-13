import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const SkillBar = ({ skill, visible }: { skill: Skill; visible: boolean }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-pixel text-[7px] text-foreground">{skill.name}</span>
      <span className="font-pixel text-[7px] text-muted-foreground">{skill.level}/100</span>
    </div>
    <div className="h-4 bg-muted border border-border relative overflow-hidden">
      <div
        className={`h-full transition-all duration-1000 ease-out ${skill.color}`}
        style={{
          width: visible ? `${skill.level}%` : "0%",
          boxShadow: visible
            ? `0 0 8px currentColor, 0 0 16px currentColor`
            : "none",
        }}
      />
      {/* Pixel segments */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-background/30" />
        ))}
      </div>
    </div>
  </div>
);

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories: { title: string; skills: Skill[] }[] = [
    {
      title: "LANGUAGES",
      skills: [
        { name: "C / C++", level: 65, color: "bg-primary" },
        { name: "JAVA", level: 55, color: "bg-primary" },
        { name: "HTML/CSS", level: 70, color: "bg-primary" },
        { name: "JavaScript", level: 45, color: "bg-primary" },
      ],
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Git", level: 50, color: "bg-secondary" },
        { name: "VS Code", level: 75, color: "bg-secondary" },
        { name: "Linux", level: 40, color: "bg-secondary" }
        
      ],
    },
    {
      title: "FRAMEWORKS",
      skills: [
        { name: "React", level: 35, color: "bg-accent" },
        { name: "Tailwind CSS", level: 50, color: "bg-accent" },
        { name: "Node.js", level: 25, color: "bg-accent" },
        { name: "Express.js", level: 20, color: "bg-accent" }
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto" ref={ref}>
      <h2 className="scroll-reveal font-pixel text-lg md:text-xl text-primary glow-cyan text-center mb-12">
        {"// SKILL_TREE"}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <div key={ci} className="scroll-reveal" style={{ transitionDelay: `${ci * 150}ms` }}>
            <p className="font-pixel text-[8px] text-secondary mb-4 glow-magenta">{cat.title}</p>
            {cat.skills.map((skill, si) => (
              <SkillBar key={si} skill={skill} visible={visible} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
