import { useEffect, useRef, useState } from "react";
import { Palette, Monitor, Sparkles, MessageCircle } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces that delight users and drive engagement through research-backed design decisions." },
  { icon: Monitor, title: "Web Design", desc: "Responsive, performant websites that combine aesthetic beauty with seamless functionality." },
  { icon: Sparkles, title: "Branding", desc: "Cohesive brand identities that communicate your story and resonate with your audience." },
  { icon: MessageCircle, title: "Consulting", desc: "Strategic design guidance to help teams build better products and scale design operations." },
];

const ServicesSection = () => {
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
    <section id="services" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">Services</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-16">What I Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-border p-8 hover:bg-foreground hover:border-foreground transition-all duration-500 cursor-pointer"
            >
              <service.icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground mb-6 transition-colors duration-500" />
              <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors duration-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
