import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();
  const scrollY = useParallax();

  return (
    <section id="about-me" className="py-20 sm:py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent to-border" />
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
          About Me
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 mt-8 sm:mt-12">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground leading-[1.1] tracking-tight"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 400) * 0.015)}px)` }}
            >
              I craft digital experiences that leave lasting impressions.
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <p className="text-sm sm:text-[15px] font-body font-light text-muted-foreground leading-[1.85] tracking-wide">
              With over a decade of experience in product design, I have helped 200+ companies transform their digital presence.
            </p>
            <p className="text-sm sm:text-[15px] font-body font-light text-muted-foreground leading-[1.85] tracking-wide">
              My approach blends strategic thinking with aesthetic precision. Every pixel serves a purpose, every interaction tells a story.
            </p>
            <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6 mt-4 sm:mt-6`}>
              {["UI/UX Design", "Brand Strategy", "Design Systems", "Creative Direction"].map((skill) => (
                <div key={skill} className="border-t border-border pt-3 sm:pt-4 group cursor-default">
                  <span className="text-[12px] sm:text-[13px] font-body font-medium text-foreground group-hover:tracking-wider transition-all duration-500">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
