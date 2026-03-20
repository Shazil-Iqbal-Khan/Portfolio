import { ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/portrait.png";
import { useParallax, useCountUp } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const scrollY = useParallax();
  const [loaded, setLoaded] = useState(false);
  const projectCount = useCountUp(200, 2200, loaded);
  const startupCount = useCountUp(50, 2200, loaded);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="relative z-10 order-2 lg:order-1 lg:col-span-5 py-8 lg:py-0">
            {/* Vertical Text */}
            <div
              className="hidden lg:block absolute -left-16 top-1/2"
              style={{ transform: `translateY(calc(-50% + ${scrollY * 0.04}px))` }}
            >
              <span className="text-vertical text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground/60">
                Product designer
              </span>
            </div>

            {/* Mobile label */}
            <div className="lg:hidden mb-8 animate-fade-up">
              <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground/60">
                Product designer
              </span>
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-12 mb-10 md:mb-14 animate-fade-up">
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground stat-number tracking-tight">
                  +{projectCount}
                </span>
                <p className="text-[10px] sm:text-[11px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mt-1.5">
                  Project completed
                </p>
              </div>
              <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-8 sm:before:h-10 before:bg-border">
                <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground stat-number tracking-tight">
                  +{startupCount}
                </span>
                <p className="text-[10px] sm:text-[11px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground mt-1.5">
                  Startup raised
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-display font-extralight text-foreground leading-[0.85] mb-6 md:mb-8 animate-fade-up-delay-1"
                style={{ transform: `translateY(${scrollY * 0.025}px)`, letterSpacing: '0.08em' }}
              >
                Hello
              </h1>
            </div>

            {/* Subtext */}
            <div className="animate-fade-up-delay-2 flex items-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-12 h-px bg-foreground/25 line-draw" />
              <p className="text-sm sm:text-base font-body font-light text-muted-foreground tracking-wide">
                It's <span className="text-foreground font-medium">D.Nova</span> a design wizard
              </p>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 sm:mt-20 lg:mt-28 animate-fade-up-delay-3">
              <a
                href="#about-me"
                className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-body font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 group"
              >
                Scroll down
                <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 scroll-bounce group-hover:text-foreground transition-colors duration-500" />
              </a>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center lg:justify-end animate-fade-up">
            <div
              className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-none grain-overlay"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <img
                src={heroPortrait}
                alt="D.Nova - Product Designer"
                className="w-full h-auto object-cover grayscale contrast-[1.1] animate-zoom-in"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full border border-border/30 -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Year marker */}
      <div className="hidden lg:flex absolute bottom-10 left-12 flex-col items-center gap-3">
        <div className="w-px h-14 bg-border/60" />
        <span className="text-[10px] font-body font-medium tracking-[0.3em] text-muted-foreground/50">2024</span>
      </div>
    </section>
  );
};

export default HeroSection;
