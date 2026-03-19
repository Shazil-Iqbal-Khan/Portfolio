import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-me" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">About Me</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              I craft digital experiences that leave lasting impressions.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base font-body text-muted-foreground leading-relaxed">
              With over a decade of experience in product design, I've helped 200+ companies transform their digital presence. From early-stage startups to Fortune 500 brands, I bring a meticulous eye for detail and a deep understanding of user behavior.
            </p>
            <p className="text-base font-body text-muted-foreground leading-relaxed">
              My approach blends strategic thinking with aesthetic precision — every pixel serves a purpose, every interaction tells a story. I believe great design isn't just about how things look, but how they make people feel.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {["UI/UX Design", "Brand Strategy", "Design Systems", "Creative Direction"].map((skill) => (
                <div key={skill} className="border-t border-border pt-3">
                  <span className="text-sm font-body text-foreground">{skill}</span>
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
