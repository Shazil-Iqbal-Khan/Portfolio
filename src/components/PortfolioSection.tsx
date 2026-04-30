import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    num: "01",
    title: "Lumiere Brand Identity",
    category: "Branding & Visual Design",
    desc: "Complete brand overhaul for a luxury fashion label — logo, typography, color system, and brand guidelines.",
    img: project1,
    featured: true,
  },
  {
    num: "02",
    title: "Finova Dashboard",
    category: "UI/UX Design",
    desc: "A fintech SaaS dashboard redesign focused on data clarity, user flow, and conversion optimization.",
    img: project2,
    featured: false,
  },
  {
    num: "03",
    title: "Commerce Plus Storefront",
    category: "Web Design",
    desc: "E-commerce redesign that increased sales by 35% through improved UX and visual hierarchy.",
    img: project3,
    featured: false,
  },
  {
    num: "04",
    title: "Pulse Mobile App",
    category: "Product Design",
    desc: "Health & wellness app UI from concept to prototype — clean, accessible, and user-tested.",
    img: project4,
    featured: false,
  },
];

const PortfolioSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="portfolio" className="py-20 sm:py-28 md:py-40 relative overflow-hidden">
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16 md:mb-20">
          <div>
            <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground mt-3 sm:mt-4 tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-[13px] font-body font-light text-muted-foreground max-w-xs leading-relaxed">
            A curated selection of projects across branding, UI/UX, and web design.
          </p>
        </div>

        <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 gap-px bg-border`}>
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-background overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden h-56 sm:h-64 md:h-72">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[12px] font-body font-medium tracking-[0.15em] uppercase text-primary-foreground flex items-center gap-2">
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-foreground text-primary-foreground px-3 py-1 text-[10px] font-body font-medium tracking-[0.15em] uppercase">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8 border-t border-border">
                <span className="text-[10px] font-body font-medium tracking-[0.3em] uppercase text-muted-foreground/60">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mt-2 mb-2 group-hover:tracking-wide transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] font-body font-light text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3.5 text-[12px] font-body font-medium tracking-[0.1em] uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-500 group"
          >
            Start a Project <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
