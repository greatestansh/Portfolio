const projects = [
  {
    title: "BLOCKCHAIN IMPLEMENTATION",
    desc: "A blockchain implementation built with JavaScript. Features block creation, proof-of-work consensus, and transaction validation.",
    tech: ["JavaScript", "Cryptography", "Data Structures"],
    status: "COMPLETE",
    link: "https://github.com/greatestansh/minimal-blockchain-js"
  },
  {
    title: "REACT APP",
    desc: "My first coding project built with React. A simple application that served as my introduction to web development and React fundamentals.",
    tech: ["React", "JavaScript", "CSS"],
    status: "COMPLETE",
    link: "https://github.com/greatestansh/react-app"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="scroll-reveal font-pixel text-lg md:text-xl text-primary glow-cyan text-center mb-12">
        {"// PROJECTS"}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="scroll-reveal bg-card border-2 border-border p-6 relative overflow-hidden group
              hover:border-secondary hover:box-glow-magenta transition-all duration-500"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Power-on effect overlay */}
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-pixel text-[10px] text-secondary group-hover:glow-magenta transition-all">
                  {p.title}
                </h3>
                <span className={`font-pixel text-[6px] px-2 py-1 ${
                  p.status === "LIVE"
                    ? "bg-primary/20 text-primary"
                    : p.status === "IN PROGRESS"
                    ? "bg-secondary/20 text-secondary"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {p.status}
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-pixel text-[7px] px-3 py-2 border border-secondary/50 text-secondary hover:border-secondary hover:text-secondary hover:glow-magenta transition-all mb-4"
                >
                  VIEW CODE →
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-pixel text-[6px] border border-primary/30 text-primary/70 px-2 py-1
                      group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-secondary/0 group-hover:border-secondary transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-secondary/0 group-hover:border-secondary transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-secondary/0 group-hover:border-secondary transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-secondary/0 group-hover:border-secondary transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
