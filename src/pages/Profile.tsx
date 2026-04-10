import { motion } from "motion/react";
import { Terminal, Link as LinkIcon, Mail, ArrowUpRight, Copy } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-5/12 aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl group relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-hQY8VaBCYJuHE2EoW56SXvDHleJGqqDLRnA-UZmSTCnzH1dxwGJkrI44P2yZWHYsXFlnmcQCiwApgPjCYa0Ppfs58nvC6IteE06CziicwQdNKcfGCZVazB_nCj5vFap-Tat3qCXyraGJ-5oI1jIKdy7MM3Ov8pC9U7BDLebAE8nJVhCR0lXimrOE85SNcBcnBfataOzLYkTPhR1PBfoHCHm7d2xlZptmcFuVcEqPvcJ0hrhZNa1jHbA7TujRMtmacmNdmWLsaGhf"
            alt="Main Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-primary">
              CURRENT ROLE
            </span>
            <span className="text-xl font-bold tracking-tight text-white">
              Lead Experience Architect
            </span>
          </div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-outline-variant mb-4">
            IDENTITY / OVERVIEW
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-on-surface leading-none mb-8">
            Alex <br />
            <span className="text-primary">Vanderwaal</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-outline">
                LOCATION / UTC+1
              </span>
              <p className="text-lg text-on-surface-variant">
                Copenhagen, Denmark
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-outline">
                EXPERIENCE / 08Y
              </span>
              <p className="text-lg text-on-surface-variant">
                Digital Product Design
              </p>
            </div>
          </div>
          <p className="mt-12 text-2xl leading-relaxed text-on-surface-variant font-light max-w-xl">
            Crafting digital ecosystems where{" "}
            <span className="text-white font-medium">brutalism meets elegance</span>
            . Specialized in high-performance interfaces for the next generation
            of creative tools.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-on-primary rounded-lg font-bold tracking-tight hover:scale-105 transition-transform duration-300">
              DOWNLOAD RESUME
            </button>
            <button className="px-8 py-4 bg-surface-container-high text-on-surface rounded-lg font-bold tracking-tight hover:bg-surface-variant transition-colors border border-outline-variant/10">
              LET'S CHAT
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <SocialBlock
          icon={Terminal}
          label="REPOSITORY"
          title="GitHub"
          description="Check out my latest commits in Rust, TypeScript, and Framer Motion."
          className="md:col-span-4"
        />
        <SocialBlock
          icon={LinkIcon}
          label="NETWORKING"
          title="LinkedIn"
          description="Connecting with industry leaders and sharing design insights daily."
          className="md:col-span-4"
        />
        <SocialBlock
          icon={Mail}
          label="CONTACT"
          title="Direct Email"
          description="hello@vanderwaal.design"
          className="md:col-span-4"
          actionIcon={Copy}
        />

        {/* Skills Wide Block */}
        <div className="md:col-span-12 p-12 bg-surface-container-lowest rounded-xl flex flex-col md:flex-row gap-12 items-center border border-outline-variant/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-l from-primary to-transparent"></div>
          </div>
          <div className="md:w-1/3 relative z-10">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-primary mb-4 block">
              CORE STACK
            </span>
            <h3 className="text-4xl font-bold text-white leading-tight">
              Precision at every <span className="italic font-serif">pixel</span>.
            </h3>
          </div>
          <div className="md:w-2/3 flex flex-wrap gap-3 relative z-10">
            {[
              "Visual Identity",
              "UI Architecture",
              "Tailwind CSS",
              "Product Strategy",
              "React.js",
              "Web3 UI",
              "Motion Graphics",
              "Framer",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full border border-outline-variant/20 bg-surface-container-high text-on-surface text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-outline-variant/10 pt-16">
        <Stat value="42+" label="PROJECTS COMPLETED" />
        <Stat value="12" label="AWARDS WON" />
        <Stat value="99%" label="CLIENT SATISFACTION" />
        <Stat value="08" label="YEARS ACTIVE" />
      </section>
    </div>
  );
}

function SocialBlock({
  icon: Icon,
  label,
  title,
  description,
  className,
  actionIcon: ActionIcon = ArrowUpRight,
}: {
  icon: any;
  label: string;
  title: string;
  description: string;
  className?: string;
  actionIcon?: any;
}) {
  return (
    <div
      className={`p-8 bg-surface-container-low rounded-xl flex flex-col justify-between min-h-[280px] group hover:bg-surface-container transition-colors border border-outline-variant/5 ${className}`}
    >
      <div className="flex justify-between items-start">
        <Icon className="text-4xl text-primary" size={40} />
        <ActionIcon className="text-outline-variant group-hover:text-primary transition-colors" />
      </div>
      <div>
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-outline mb-2 block">
          {label}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-black text-white mb-2">{value}</span>
      <span className="text-[10px] tracking-[0.1em] font-bold uppercase text-outline-variant">
        {label}
      </span>
    </div>
  );
}
