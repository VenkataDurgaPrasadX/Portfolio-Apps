import { motion } from "motion/react";
import {
  SquareStack,
  Cpu,
  Zap,
  Terminal,
  ArrowUpRight,
  Award,
  Trophy,
  CheckCircle,
  Star,
  FileText,
} from "lucide-react";

export default function Skills() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-4 font-bold">
              Core Competencies
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-on-surface leading-tight mb-4">
              Mastery & <br />
              <span className="text-primary italic">Recognition</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              A curated exhibition of technical proficiency and professional
              milestones earned through years of architectural digital design.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Skills */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Skill Card */}
          <div className="md:col-span-8 bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <SquareStack size={120} />
            </div>
            <p className="font-bold uppercase tracking-[0.15em] text-outline mb-12 text-xs">
              01 / Technical Architecture
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              <SkillItem
                title="React Ecosystem"
                desc="Next.js, Redux, Tailwind"
                progress={92}
              />
              <SkillItem
                title="Systems Design"
                desc="Tokens, Components, Docs"
                progress={88}
              />
              <SkillItem
                title="Node.js"
                desc="Express, Prisma, GraphQL"
                progress={75}
              />
            </div>
          </div>

          {/* Specialization Card */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary/10 to-primary-container/20 p-8 rounded-xl border border-primary/10">
            <p className="font-bold uppercase tracking-[0.15em] text-primary mb-8 text-xs">
              Specialization
            </p>
            <div className="space-y-6">
              <SpecialtyItem icon={Cpu} label="Web3 Integration" />
              <SpecialtyItem icon={Zap} label="Motion Design" />
              <SpecialtyItem icon={Terminal} label="DevOps (CI/CD)" />
            </div>
          </div>

          {/* Tools Card */}
          <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl">
            <p className="font-bold uppercase tracking-[0.15em] text-outline mb-6 text-xs">
              Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {["Figma", "VS Code", "Blender", "Linear"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface text-xs font-bold uppercase tracking-wider"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Current Learning */}
          <div className="md:col-span-8 bg-surface-container-low p-8 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-surface-container transition-colors">
            <div>
              <p className="font-bold uppercase tracking-[0.15em] text-outline mb-2 text-xs">
                Current Learning
              </p>
              <h4 className="text-2xl font-bold">Rust & WebAssembly</h4>
            </div>
            <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold tracking-tight">Achievements</h3>
          <div className="h-[1px] flex-grow mx-8 bg-outline-variant/20"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Badge
            icon={Award}
            title="Awwwards SOTD"
            subtitle="Digital Craft · 2023"
            color="primary"
          />
          <Badge
            icon={Trophy}
            title="GitHub Star"
            subtitle="Open Source · 2022"
            color="tertiary"
          />
          <Badge
            icon={CheckCircle}
            title="Adobe Certified"
            subtitle="Expert Designer · 2021"
            color="primary"
          />
          <Badge
            icon={Star}
            title="Product Hunt #1"
            subtitle="Product of Day · 2023"
            color="tertiary"
          />
        </div>
      </section>

      {/* Certificates Section */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold tracking-tight">Certifications</h3>
        </div>
        <div className="space-y-4">
          <CertItem
            title="AWS Certified Solutions Architect"
            org="Amazon Web Services · Dec 2023"
          />
          <CertItem
            title="Google Professional UX Design"
            org="Coursera · Oct 2023"
          />
          <CertItem
            title="Meta Front-End Developer"
            org="Meta · Aug 2023"
          />
        </div>
      </section>
    </div>
  );
}

function SkillItem({
  title,
  desc,
  progress,
}: {
  title: string;
  desc: string;
  progress: number;
}) {
  return (
    <div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-sm text-on-surface-variant">{desc}</p>
      <div className="mt-4 w-full h-[1px] bg-outline-variant/30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          className="h-full bg-primary"
        ></motion.div>
      </div>
    </div>
  );
}

function SpecialtyItem({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
        <Icon size={20} className="text-primary" />
      </div>
      <span className="font-medium">{label}</span>
    </div>
  );
}

function Badge({
  icon: Icon,
  title,
  subtitle,
  color,
}: {
  icon: any;
  title: string;
  subtitle: string;
  color: "primary" | "tertiary";
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-2xl border border-white/5">
      <div className="w-20 h-20 mb-6 relative">
        <div
          className={`absolute inset-0 blur-xl rounded-full ${
            color === "primary" ? "bg-primary/20" : "bg-primary-container/20"
          }`}
        ></div>
        <div className="relative w-full h-full bg-surface-container-high rounded-full flex items-center justify-center border border-primary/30">
          <Icon size={32} className="text-primary" />
        </div>
      </div>
      <h5 className="text-lg font-bold mb-2">{title}</h5>
      <p className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">
        {subtitle}
      </p>
    </div>
  );
}

function CertItem({ title, org }: { title: string; org: string }) {
  return (
    <div className="group flex items-center justify-between p-6 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all">
      <div className="flex items-center gap-6">
        <div className="w-12 h-16 bg-surface-container-highest rounded flex items-center justify-center">
          <FileText size={24} className="opacity-40" />
        </div>
        <div>
          <h6 className="text-lg font-bold">{title}</h6>
          <p className="text-sm text-on-surface-variant">{org}</p>
        </div>
      </div>
      <button className="px-6 py-2 rounded-lg border border-outline-variant text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-background transition-colors">
        Verify
      </button>
    </div>
  );
}
