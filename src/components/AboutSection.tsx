const AboutSection = () => {
  const traits = [
    { icon: "⚔️", name: "Problem Solver", desc: "Debugging since day one" },
    { icon: "🎮", name: "Indie Gamer", desc: "Silksong, Hollow Knight, Undertale" },
    { icon: "🛠️", name: "Tinkerer", desc: "Always building something" },
    { icon: "📚", name: "Learner", desc: "Engineering fundamentals" },
    { icon: "🎨", name: "Pixel Art Fan", desc: "Retro aesthetics enthusiast" },
    { icon: "🎵", name: "Desi Hip Hop Head", desc: "Divine, Emiway, Naezy" },
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="scroll-reveal font-pixel text-lg md:text-xl text-primary glow-cyan text-center mb-12">
        {"// ABOUT_ME"}
      </h2>

      {/* Dialog box */}
      <div className="scroll-reveal pixel-border bg-card p-6 md:p-8 mb-10 max-w-lg mx-auto">
        <p className="font-pixel text-[8px] text-secondary mb-3">CHARACTER BIO:</p>
        <p className="font-mono text-sm text-foreground leading-relaxed">
          Hi, I’m a first-year B.Tech student in Instrumentation Engineering at IIT Kharagpur.
          

        </p>
        <p className="font-mono text-sm text-foreground leading-relaxed">
          I’ve always liked maths and physics — mostly because they make the world feel less random. I enjoy breaking things down, understanding what’s actually happening underneath, and chasing that moment when something finally makes sense.I also really enjoy programming and DSA.Outside academics, I play a lot of video games. Indie games especially — they actually have a soul and feel intentional. I respect gameplay and content over graphics. I’m also big on desi hip hop.

          I’m currently exploring web development and game development, and I’m excited to see where these interests take me. I’m always open to new opportunities and collaborations, so feel free to reach out if you want to connect!
        </p>
        <p className="font-pixel text-[10px] text-muted-foreground mt-4">
          "Are you not entertained?" - Maximus Decimus Meridius
        </p>
      </div>

      {/* Traits / Inventory */}
      <p className="scroll-reveal font-pixel text-[8px] text-secondary text-center mb-6">
        INVENTORY — CHARACTER TRAITS
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto">
        {traits.map((t, i) => (
          <div
            key={i}
            className="scroll-reveal bg-muted border border-border p-4 hover:border-primary hover:box-glow-cyan transition-all duration-300 group"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="text-2xl block mb-2">{t.icon}</span>
            <p className="font-pixel text-[7px] text-primary group-hover:glow-cyan transition-all">
              {t.name}
            </p>
            <p className="font-mono text-[11px] text-muted-foreground mt-1">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
