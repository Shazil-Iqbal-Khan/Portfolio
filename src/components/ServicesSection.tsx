import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Palette, Monitor, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces that delight users and drive engagement through research-backed design decisions.", num: "01" },
  { icon: Monitor, title: "Web Design", desc: "Responsive, performant websites that combine aesthetic beauty with seamless functionality.", num: "02" },
  { icon: Sparkles, title: "Branding", desc: "Cohesive brand identities that communicate your story and resonate with your audience.", num: "03" },
  { icon: MessageCircle, title: "Consulting", desc: "Strategic design guidance to help teams build better products and scale design operations.", num: "04" },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-28 md:py-40">
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-6 md:px-12`}
      >
        <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
          Services
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground mt-4 mb-20 tracking-tight">
          What I Do
        </h2>

        <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 gap-px bg-border`}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background p-10 md:p-12 cursor-pointer hover:bg-foreground transition-all duration-[600ms] relative overflow-hidden"
            >
              <span className="text-[11px] font-body font-medium tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary-foreground/30 transition-colors duration-500 absolute top-10 right-10">
                {service.num}
              </span>
              <service.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground mb-8 transition-colors duration-500 stroke-[1.5]" />
              <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary-foreground mb-4 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-[13px] font-body font-light text-muted-foreground group-hover:text-primary-foreground/60 leading-[1.8] transition-colors duration-500 max-w-xs">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[12px] font-body font-medium text-primary-foreground tracking-wider uppercase">
                  Learn more
                </span>
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
