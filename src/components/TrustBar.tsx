import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Star, Zap, Users } from "lucide-react";

const trust = [
  { icon: Star, label: "Top-Rated Designer", sub: "5★ on every project" },
  { icon: Users, label: "200+ Happy Clients", sub: "Worldwide" },
  { icon: Zap, label: "Fast Turnaround", sub: "On-time delivery" },
  { icon: ShieldCheck, label: "Quality Guaranteed", sub: "Revisions included" },
];

const TrustBar = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section className="border-y border-border bg-secondary/20 py-8 sm:py-10">
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8`}>
          {trust.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-foreground stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[12px] sm:text-[13px] font-body font-semibold text-foreground">{label}</p>
                <p className="text-[10px] sm:text-[11px] font-body text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
