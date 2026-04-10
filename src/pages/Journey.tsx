import { motion } from "motion/react";
import { Rocket, Briefcase, GraduationCap, Award } from "lucide-react";

export default function Journey() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col gap-2">
          <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold">
            PROFESSIONAL TIMELINE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-on-surface">
            Journey
          </h2>
          <p className="text-on-surface-variant max-w-xl mt-4 leading-relaxed">
            A chronological exhibition of academic foundations and professional
            evolution within the digital architecture landscape.
          </p>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="relative pl-12 space-y-16 before:content-[''] before:absolute before:left-[20px] before:top-0 before:bottom-0 before:width-[1px] before:bg-gradient-to-b before:from-transparent before:via-outline-variant/40 before:to-transparent">
        <TimelineEntry
          icon={Rocket}
          period="2023 — PRESENT"
          title="Lead Product Architect"
          company="Lumina Digital Systems • Berlin"
          description="Spearheading the design language system for next-generation fintech platforms. Managing a cross-functional team of 12 designers and engineers to bridge the gap between aesthetic vision and technical feasibility."
          tags={["Design Systems", "Strategic UX"]}
          isCurrent
        />
        <TimelineEntry
          icon={Briefcase}
          period="2021 — 2023"
          title="Senior Interactive Designer"
          company="Flux Creative Agency • London"
          description="Developed immersive digital experiences for high-end luxury brands. Focused on editorial-style layouts and motion design integration for mobile-first ecosystems."
        />
        <TimelineEntry
          icon={GraduationCap}
          period="2020 — 2021"
          title="Visual Design Intern"
          company="Prism Architecture Studio • Remote"
          description="Assisted in the digital transformation of architectural portfolios. Mastered the 'Nocturnal' aesthetic and high-contrast typographic hierarchy."
        />
        <TimelineEntry
          icon={Award}
          period="2017 — 2021"
          title="BFA in Digital Communication"
          company="Royal Academy of Art • The Hague"
          description="Specialized in typographic systems and human-centered design principles. Graduated with honors for the 'Digital Resilience' thesis project."
        />
      </section>

      {/* Stats Grid */}
      <section className="mt-24 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard value="07+" label="Years of Expertise" />
        <StatCard value="42" label="Global Projects" />
        <StatCard value="12" label="Design Awards" />
      </section>
    </div>
  );
}

function TimelineEntry({
  icon: Icon,
  period,
  title,
  company,
  description,
  tags,
  isCurrent,
}: {
  icon: any;
  period: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  isCurrent?: boolean;
}) {
  return (
    <div className="relative group">
      {/* Timeline Dot */}
      <div
        className={`absolute -left-[32px] top-1.5 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center z-10 transition-colors duration-300 ${
          isCurrent
            ? "bg-primary ring-4 ring-primary/10"
            : "bg-surface-container-highest group-hover:bg-primary"
        }`}
      >
        <Icon
          size={12}
          className={isCurrent ? "text-on-primary" : "text-outline group-hover:text-on-primary"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span
            className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border ${
              isCurrent
                ? "text-primary bg-primary/10 border-primary/20"
                : "text-on-surface-variant bg-surface-container-low border-white/5"
            }`}
          >
            {period}
          </span>
          <h3 className="text-2xl font-bold text-on-surface">{title}</h3>
        </div>
        <div className="text-on-surface-variant uppercase tracking-widest text-[11px] font-medium">
          {company}
        </div>
        <p className="text-on-surface-variant leading-relaxed max-w-2xl">
          {description}
        </p>
        {tags && (
          <div className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] uppercase text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-8 bg-surface-container-low rounded-2xl border border-white/5 flex flex-col gap-2">
      <span className="text-primary font-bold text-4xl tracking-tighter">
        {value}
      </span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}
