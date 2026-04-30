import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight, Award, X } from "lucide-react";

import cert3DPrinting from "@/assets/3D Printing (1).pdf?url";
import certCybersecurity from "@/assets/Introduction to Cybersecurity Awareness (1).pdf?url";
import certWebsites from "@/assets/Effective Business Websites (1).pdf?url";

const certificates = [
  { title: "3D Printing", issuer: "Professional Certification", category: "Technology", num: "01", pdf: cert3DPrinting },
  { title: "Introduction to Cybersecurity Awareness", issuer: "Professional Certification", category: "Security", num: "02", pdf: certCybersecurity },
  { title: "Effective Business Websites", issuer: "Professional Certification", category: "Web & Business", num: "03", pdf: certWebsites },
];

const CertificatesSection = () => {
  const { ref, visible } = useScrollReveal();
  const [modal, setModal] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 sm:py-28 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-border/20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
          Achievements
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-3 sm:mt-4 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground tracking-tight">
            Certificates
          </h2>
          <p className="text-[13px] font-body font-light text-muted-foreground max-w-xs leading-relaxed">
            A collection of professional certifications earned across various disciplines.
          </p>
        </div>

        <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border`}>
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group relative flex flex-col bg-background cursor-pointer hover:bg-foreground transition-all duration-[600ms] overflow-hidden"
              onClick={() => setModal(cert.pdf)}
            >
              {/* Card top visual */}
              <div className="relative h-44 sm:h-52 bg-secondary/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />
                <span className="absolute top-4 right-5 text-[11px] font-body font-medium tracking-[0.2em] text-muted-foreground/30 group-hover:text-primary-foreground/20 transition-colors duration-500">
                  {cert.num}
                </span>
                <div className="w-14 h-14 border border-border group-hover:border-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <Award className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground/60 stroke-[1.2] transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[11px] font-body font-medium tracking-[0.2em] uppercase text-primary-foreground/60 flex items-center gap-2">
                    View Certificate <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <span className="text-[10px] font-body font-medium tracking-[0.3em] uppercase text-muted-foreground/50 group-hover:text-primary-foreground/30 transition-colors duration-500 mb-2">
                  {cert.category}
                </span>
                <h3 className="text-base sm:text-lg font-display font-semibold text-foreground group-hover:text-primary-foreground leading-snug mb-2 transition-colors duration-500">
                  {cert.title}
                </h3>
                <p className="text-[12px] font-body text-muted-foreground group-hover:text-primary-foreground/50 mt-auto pt-4 border-t border-border group-hover:border-primary-foreground/10 flex items-center justify-between transition-colors duration-500">
                  <span>{cert.issuer}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh] bg-background border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <span className="text-[12px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground">
                Certificate Preview
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={modal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-body font-medium text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  Open in new tab <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setModal(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <iframe src={modal} className="w-full h-[calc(100%-48px)]" title="Certificate Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
