import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight, Clock } from "lucide-react";

const MidFunnelCTA = () => {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section className="py-16 sm:py-20 bg-foreground relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-3.5 h-3.5 text-primary-foreground/50" />
              <span className="text-[10px] font-body font-medium tracking-[0.3em] uppercase text-primary-foreground/50">
                Limited availability — 2 slots open this month
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-foreground tracking-tight leading-tight">
              Ready to build something<br className="hidden sm:block" /> extraordinary together?
            </h2>
            <p className="text-[13px] sm:text-sm font-body font-light text-primary-foreground/60 mt-3 max-w-lg">
              From concept to launch — I handle design, UX, and branding so you can focus on growing your business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-7 py-3.5 text-[12px] font-body font-medium tracking-[0.1em] uppercase hover:bg-primary-foreground/90 transition-all duration-400 group"
            >
              Get in Touch <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 text-[12px] font-body font-medium tracking-[0.1em] uppercase hover:bg-primary-foreground/10 transition-all duration-400"
            >
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidFunnelCTA;
