import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, TechVenture AI",
    text: "Shazil built our AI-powered analytics platform from scratch. His expertise in LLM integration and clean code architecture exceeded all expectations. The system handles thousands of requests daily flawlessly.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Founder, DataFlow Systems",
    text: "Working with Shazil was exceptional. He delivered a complete computer vision annotation tool with real-time collaboration features. His Python and React skills are top-notch.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, CloudSync",
    text: "Shazil developed our Supabase backend with complex real-time features and authentication. The PostgreSQL optimization and API design were professional and scalable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 sm:py-28 md:py-40 bg-secondary/30">
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
          Social Proof
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground mt-3 sm:mt-4 mb-12 sm:mb-16 md:mb-20 tracking-tight">
          What Clients Say
        </h2>

        <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-1 md:grid-cols-3 gap-px bg-border`}>
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background p-7 sm:p-10 flex flex-col gap-6 group hover:bg-foreground transition-all duration-[600ms]">
              <Quote className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary-foreground/20 transition-colors duration-500 stroke-[1.5]" />
              <p className="text-[13px] sm:text-sm font-body font-light text-muted-foreground group-hover:text-primary-foreground/70 leading-[1.85] transition-colors duration-500 flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border group-hover:border-primary-foreground/10 transition-colors duration-500">
                <div className="w-9 h-9 bg-muted group-hover:bg-primary-foreground/10 rounded-full flex items-center justify-center transition-colors duration-500">
                  <span className="text-[13px] font-display font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-[12px] font-body font-semibold text-foreground group-hover:text-primary-foreground transition-colors duration-500">{t.name}</p>
                  <p className="text-[11px] font-body text-muted-foreground group-hover:text-primary-foreground/50 transition-colors duration-500">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[10px] text-foreground group-hover:text-primary-foreground transition-colors duration-500">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
