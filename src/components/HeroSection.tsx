import { ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";
import { useParallax, useCountUp } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const scrollY = useParallax();
  const [loaded, setLoaded] = useState(false);
  const projectCount = useCountUp(200, 2200, loaded);
  const startupCount = useCountUp(50, 2200, loaded);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="relative z-10 order-2 lg:order-1 lg:col-span-5">
            {/* Vertical Text */}
            <div
              className="hidden lg:block absolute -left-14 top-1/2 -translate-y-1/2"
              style={{ transform: `translateY(calc(-50% + ${scrollY * 0.05}px))` }}
            >
              <span className="text-vertical text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
                Product designer
              </span>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mb-12 animate-fade-up">
              <div>
                <span className="text-3xl md:text-4xl font-display font-bold text-foreground stat-number tracking-tight">
                  +{projectCount}
                </span>
                <p className="text-[11px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mt-2">
                  Project completed
                </p>
              </div>
              <div className="relative pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-10 before:bg-border">
                <span className="text-3xl md:text-4xl font-display font-bold text-foreground stat-number tracking-tight">
                  +{startupCount}
                </span>
                <p className="text-[11px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mt-2">
                  Startup raised
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <h1
                className="text-7xl md:text-8xl lg:text-[9rem] font-display font-black text-foreground leading-[0.85] mb-8 animate-fade-up-delay-1"
                style={{ transform: `translateY(${scrollY * 0.03}px)`, letterSpacing: '-0.03em' }}
              >
                Hello
              </h1>
            </div>

            {/* Subtext */}
            <div className="animate-fade-up-delay-2 flex items-center gap-4">
              <div className="w-12 h-px bg-foreground/30 line-draw" />
              <p className="text-sm md:text-base font-body font-light text-muted-foreground tracking-wide">
                It's <span className="text-foreground font-medium">D.Nova</span> a design wizard
              </p>
            </div>

            {/* Scroll indicator */}
            <div className="mt-24 lg:mt-32 animate-fade-up-delay-3">
              <a
                href="#about-me"
                className="inline-flex items-center gap-3 text-xs font-body font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 group"
              >
                Scroll down
                <ArrowDown className="w-3.5 h-3.5 scroll-bounce group-hover:text-foreground transition-colors duration-500" />
              </a>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center lg:justify-end animate-fade-up">
            <div
              className="relative w-full max-w-md lg:max-w-none grain-overlay"
              style={{ transform: `translateY(${scrollY * -0.06}px)` }}
            >
              <img
                src={heroPortrait}
                alt="D.Nova - Product Designer"
                className="w-full h-auto object-cover grayscale contrast-[1.1] animate-zoom-in"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border/40 -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Year marker */}
      <div className="hidden lg:flex absolute bottom-12 left-6 md:left-12 flex-col items-center gap-3">
        <div className="w-px h-16 bg-border" />
        <span className="text-[10px] font-body font-medium tracking-[0.3em] text-muted-foreground">2024</span>
      </div>
    </section>
  );
};

export default HeroSection;
