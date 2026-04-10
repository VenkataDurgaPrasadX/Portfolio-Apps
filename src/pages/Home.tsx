import { motion } from "motion/react";
import { Layers, Sparkles, Zap, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12px] tracking-[0.2em] uppercase text-primary mb-6 font-semibold"
            >
              Digital Architect & Product Designer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(3rem,8vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-on-surface mb-8"
            >
              Crafting digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
                experiences
              </span>{" "}
              with architectural precision.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-on-surface-variant leading-relaxed max-w-sm mb-8 font-light"
            >
              I bridge the gap between complex engineering and human-centered
              design to build products that feel effortless.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-sm tracking-tight hover:scale-[1.02] transition-transform active:scale-95">
                View Case Studies
              </button>
              <button className="text-primary px-6 py-4 rounded-lg font-bold text-sm tracking-tight border border-primary/20 hover:bg-primary/5 transition-colors">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-[10px] tracking-[0.3em] uppercase text-outline font-bold">
            Expertise & Disciplines
          </h3>
          <div className="h-px flex-1 mx-8 bg-outline-variant/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-2 bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
              <Layers size={120} className="text-primary" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="text-primary text-[10px] tracking-widest uppercase mb-4 block">
                  01 / Strategy
                </span>
                <h4 className="text-3xl font-bold text-on-surface mb-4 tracking-tight">
                  Product Architecture
                </h4>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
                Defining core structures and scalable design systems for
                enterprise-grade applications.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-12">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-2">
                Visual Craft
              </h4>
              <p className="text-outline text-sm">
                High-fidelity interfaces with editorial sensibility.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center text-primary mb-12">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-2">
                Motion Design
              </h4>
              <p className="text-outline text-sm">
                Kinetic storytelling that guides user attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section>
        <div className="flex items-baseline gap-4 mb-12">
          <h3 className="text-5xl font-black tracking-tighter text-on-surface">
            Selected Works
          </h3>
          <span className="text-outline text-sm tracking-widest uppercase">
            / 2023—2024
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProjectCard
            category="Fintech • Mobile App"
            title="Lumina Financial"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBB3llX_HsnxarjeOcWsdvVhH-9u8cx765anxdweE_5FTbTrqyI64XSWWKqaoGOD8zMJczNChCZ2yoehNvqiNpjtczu8fv9fnS_oxv1VXiEgfWErWZrzq3JzMO2ndEif8P96NHSXIqGuycfsTZ-KCHOEwuHxc5XskKZuf8d3KuG5j9PtRGZXG1i5mwWryXjrcc2GeOVxx0BNfl6XJJ1UH3o0umMwrxi1ZNjtlDi1aC4KIWTd9wcm9x4ByLfnMTvOWdEim-9FgIL1ogK"
          />
          <ProjectCard
            category="E-Commerce • Web Platform"
            title="Ether Objects"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAF47rub3Xvmz2gNXi9EBjT-xu2tRr57KAb4m_sqlKISa8cSRnmrcSZJUleouYTNlpECFk8aXoiIkFb8Ii9Fxkac-L753g4LpqzUT1URvI3iom_xsTyb0oMqQOHqZWad06jMifeuxPhtMOppLTZt1agK4yjKK-H12r7lkaAGul0mkF9iUCuf6LojPlXna2Zu0OthDfmQdDyRkKbCNT8oOgGTEMOEX6xRLvOq7rfgw1sPSs16MyqbeUkikQN19uTSY4BL_hayG9-6s6q"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-lowest p-12 rounded-xl border border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="08+" label="Years Exp." />
          <Stat value="42" label="Projects" />
          <Stat value="12" label="Awards" />
          <Stat value="100%" label="Happy Clients" />
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  category,
  title,
  image,
}: {
  category: string;
  title: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-xl bg-surface-container mb-6 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-on-background text-background px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
            View Project
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] tracking-widest uppercase text-primary mb-2">
            {category}
          </p>
          <h4 className="text-2xl font-bold text-on-surface tracking-tight group-hover:translate-x-2 transition-transform">
            {title}
          </h4>
        </div>
        <ArrowUpRight className="text-outline-variant group-hover:text-primary transition-colors" />
      </div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <span className="block text-4xl font-black text-on-surface mb-1">
        {value}
      </span>
      <span className="text-[10px] tracking-widest uppercase text-outline font-bold">
        {label}
      </span>
    </div>
  );
}
