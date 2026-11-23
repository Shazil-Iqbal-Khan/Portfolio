import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Code2, Database, Boxes, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Application Development", desc: "Building intelligent applications with LLM integration, prompt engineering, and AI-powered features that solve real-world problems.", num: "01" },
  { icon: Code2, title: "Full-Stack Development", desc: "Modern web applications using React.js, Vite, Python, and RESTful APIs with clean architecture and real-time capabilities.", num: "02" },
  { icon: Database, title: "Data & Backend Systems", desc: "Scalable database solutions with PostgreSQL, Supabase, real-time data workflows, and secure authentication systems.", num: "03" },
  { icon: Boxes, title: "Data Annotation & CV", desc: "Computer vision workflows, image and video annotation, data labeling pipelines, and AI training dataset preparation.", num: "04" },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-20 sm:py-28 md:py-40">
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
          Services
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground mt-3 sm:mt-4 mb-12 sm:mb-16 md:mb-20 tracking-tight">
          What I Build
        </h2>

        <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-1 sm:grid-cols-2 gap-px bg-border`}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background p-7 sm:p-10 md:p-12 cursor-pointer hover:bg-foreground transition-all duration-[600ms] relative overflow-hidden"
            >
              <span className="text-[11px] font-body font-medium tracking-[0.2em] text-muted-foreground/30 group-hover:text-primary-foreground/20 transition-colors duration-500 absolute top-7 right-7 sm:top-10 sm:right-10">
                {service.num}
              </span>
              <service.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground mb-6 sm:mb-8 transition-colors duration-500 stroke-[1.5]" />
              <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground group-hover:text-primary-foreground mb-3 sm:mb-4 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] font-body font-light text-muted-foreground group-hover:text-primary-foreground/60 leading-[1.8] transition-colors duration-500 max-w-xs">
                {service.desc}
              </p>
              <div className="mt-6 sm:mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[11px] sm:text-[12px] font-body font-medium text-primary-foreground tracking-wider uppercase">Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
