import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";
import { useParallax, useCountUp } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const scrollY = useParallax();
  const [loaded, setLoaded] = useState(false);
  const projectCount = useCountUp(200, 2200, loaded);
  const startupCount = useCountUp(50, 2200, loaded);
  const clientCount = useCountUp(98, 2200, loaded);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.055]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, hsl(var(--background)) 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[85vh]">

          {/* Left Content */}
          <div className="relative z-10 order-2 lg:order-1 lg:col-span-5 py-8 lg:py-0">
            <div className="hidden lg:block absolute -left-16 top-1/2"
              style={{ transform: `translateY(calc(-50% + ${scrollY * 0.04}px))` }}>
              <span className="text-vertical text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground/60">
                Product designer
              </span>
            </div>

            <div className="lg:hidden mb-8 animate-fade-up">
              <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground/60">
                Product designer
              </span>
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-10 mb-10 md:mb-14 animate-fade-up">
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground stat-number tracking-tight">+{projectCount}</span>
                <p className="text-[10px] sm:text-[11px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mt-1.5">Projects</p>
              </div>
              <div className="relative pl-8 sm:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-8 sm:before:h-10 before:bg-border">
                <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground stat-number tracking-tight">+{startupCount}</span>
                <p className="text-[10px] sm:text-[11px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mt-1.5">Startups</p>
              </div>
              <div className="relative pl-8 sm:pl-10 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-8 sm:before:h-10 before:bg-border">
                <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground stat-number tracking-tight">{clientCount}%</span>
                <p className="text-[10px] sm:text-[11px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mt-1.5">Satisfaction</p>
              </div>
            </div>

            {/* Hook headline */}
            <div className="overflow-hidden">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-display font-extralight text-foreground leading-[0.85] mb-6 md:mb-8 animate-fade-up-delay-1"
                style={{ transform: `translateY(${scrollY * 0.025}px)`, letterSpacing: '0.08em' }}
              >
                Hello
              </h1>
            </div>

            {/* Subtext */}
            <div className="animate-fade-up-delay-2 flex items-center gap-3 sm:gap-4 mb-3">
              <div className="w-8 sm:w-12 h-px bg-foreground/25 line-draw" />
              <p className="text-sm sm:text-base font-body font-light text-muted-foreground tracking-wide">
                It's <span className="text-foreground font-medium">M. Shazil Iqbal Khan</span> — a design wizard
              </p>
            </div>

            {/* Value proposition */}
            <p className="animate-fade-up-delay-2 text-[13px] sm:text-sm font-body font-light text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-sm">
              I turn ideas into stunning digital products — UI/UX, branding, and web design that converts visitors into customers.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 text-[12px] sm:text-[13px] font-body font-medium tracking-[0.1em] uppercase hover:bg-foreground/85 transition-all duration-400 group"
              >
                Hire Me <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 sm:px-8 py-3 sm:py-3.5 text-[12px] sm:text-[13px] font-body font-medium tracking-[0.1em] uppercase hover:bg-foreground/5 transition-all duration-400"
              >
                View Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-body font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Download className="w-3.5 h-3.5" /> Resume
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="animate-fade-up-delay-3">
              <a href="#about-me"
                className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-body font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 group">
                Scroll down
                <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 scroll-bounce group-hover:text-foreground transition-colors duration-500" />
              </a>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[420px] grain-overlay"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
              <img
                src={heroPortrait}
                alt="M. Shazil Iqbal Khan - Product Designer"
                className="w-full h-auto object-contain animate-zoom-in drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
              />
              {/* Availability badge */}
              <div className="absolute bottom-4 left-0 sm:-left-6 bg-background border border-border px-4 py-2.5 shadow-lg animate-fade-in-delay">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] font-body font-medium text-foreground">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Year marker */}
      <div className="hidden lg:flex absolute bottom-10 left-12 flex-col items-center gap-3">
        <div className="w-px h-14 bg-border/60" />
        <span className="text-[10px] font-body font-medium tracking-[0.3em] text-muted-foreground/50">2025</span>
      </div>
    </section>
  );
};

export default HeroSection;
