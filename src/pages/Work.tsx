import { motion } from "motion/react";
import { Filter, Search, Award, ArrowUpRight, Play, ChevronRight, Terminal } from "lucide-react";

export default function Work() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-primary mb-4 block font-bold text-xs">
              Project Archive — 2024
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-none text-on-surface mb-6">
              Curated <br /> <span className="text-primary-container">Exhibitions.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
              A selection of digital experiences, architectural UI explorations,
              and technical internships focused on minimal complexity and high
              utility.
            </p>
          </div>
          <div className="flex gap-2 pb-2">
            <button className="bg-surface-container-highest p-3 rounded-lg text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <Filter size={20} />
            </button>
            <button className="bg-surface-container-highest p-3 rounded-lg text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <Search size={20} />
            </button>
          </div>
        </div>
        {/* Project Scrubber */}
        <div className="w-full h-[1px] bg-outline-variant/20 mt-12 relative">
          <div className="absolute left-0 top-[-1px] h-[3px] w-1/3 bg-primary rounded-full"></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
        {/* Featured Project */}
        <div className="md:col-span-8 group cursor-pointer">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-surface-container-low mb-6">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY0bnB6LNbZ6dD-a_DNN0esBvErcKxf7fIlRzInG2qCuqDoiJR3PAWLStbH_mwRL5NkgaWNQx7nRXOg1bJjvVmwOn1jNX2_rBwRPRP3US0ZdgfIXkMVdBQGQWTpbKQ2PxKmggpEMZV0HIHQETekJBlvUrMmaINX9MHwPL1v8TOJRWQQ0vxYHls5HFto4o0hKDVIOdDKujRHudDCwY59OgJlao9of5shC_DEegy3Gph0C0djEuBbOAUqhyXfbGrQNZGZOdOvx1oJNws"
              alt="Nebula Dashboard"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-widest uppercase">
                Featured
              </span>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <span className="uppercase tracking-[0.1em] text-outline text-xs block mb-2">
                Internal Product — UX Design
              </span>
              <h3 className="text-3xl font-bold text-on-surface group-hover:text-primary transition-colors">
                Nebula Dashboard
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-outline font-mono">01 // 04</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Three.js", "Tailwind CSS", "Framer"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-outline-variant/30 text-[10px] uppercase tracking-wider text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Internship Card */}
        <div className="md:col-span-4 md:mt-24 group cursor-pointer">
          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden h-full flex flex-col justify-between hover:bg-surface-container transition-colors duration-500">
            <div className="relative z-10">
              <Award className="text-primary mb-6" size={40} />
              <h3 className="text-2xl font-bold text-on-surface mb-3 uppercase tracking-tight">
                Vanguard Lab Internship
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Contributed to the development of micro-frontend architectures
                for high-frequency trading platforms. Focus on performance
                optimization and design tokens.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  Summer 2023
                </span>
                <ArrowUpRight className="text-outline group-hover:text-primary transition-colors" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Side Card */}
        <div className="md:col-span-5 group cursor-pointer">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0DCNvFAdp7RttkURfemqBTigOhyzZMCPuOxdUHOFgGySkRl0X0ljoG8Taj3USvPE5lUUYCzQo6xQpomlz_roCGA9jArvjgUr-Tmk7PoIGzzlPVGFhcd7jELqEo2M565oPCKAEm5Hhvfa3p2u2QKlxB9gFjpfW68Xi1uIL-sqXddUKDW53JF9rF4IaTJlcXnpaPofSEcxRVjDCnfzhsq_570EZnZ2dBSELbKJC4v6kSG8pmtmeuvTYb6hOhrpUOrPYs5NVTX4htTq3"
              alt="Structural Rhythm"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                <Play className="text-white" size={20} fill="white" />
              </div>
            </div>
          </div>
          <div>
            <span className="uppercase tracking-[0.1em] text-outline text-xs block mb-2">
              Experimental — Architecture UI
            </span>
            <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
              Structural Rhythm
            </h3>
            <p className="mt-2 text-sm text-on-surface-variant max-w-sm">
              Exploring the intersection of brutalist architecture and digital
              interface paradigms.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SmallProjectCard
            title="Ether OS Icons"
            category="Iconography"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAOeXF3nZ-qr7t42U7UMeOIEj4nrtVUdlCKja5CCFX0GMYDAlR-pm5au4gCK35Rl08B8H_Pb3bT9swFuFqI8i8Ymhz2R3ymV36Wljplw6fkYG5YGMfay88TdyN1r-2rgi146NvcCgzUWJDFemYDSYHzJNEIDKGJE7uHnSlNBcLXqkXHuQ-oLS7QcTOKa1glBS6IWL5sxII3DOETA_2R6ff1-ApXLFVww2GTbwSS2tV2x1Ev0sF4mNxOyAHK0xNq8PtM3U5Q5UMHtXnn"
          />
          <SmallProjectCard
            title="React Flux Engine"
            category="Open Source"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCOgro75alIvLM8BsE7VUlaMXxvFmtX4wr8gI-ja6ryJWVBle0VvnY_HJSK1HbJIAblhFiPAJ6F70UAfibogWsUHFUNITxJiljijuyLiuPx6dGwFCb16mOerZ41CzgAiUM4z-rqPDsdjdSq-zztMnELM29_za1ctysJzI_9G7efT_fRcMhZd-U2rBufAYOWMMqzU8LKbRe1IOrLD_iA0XEXj52umZeT5DCuvl77IFqqN-JgJxUZbyJh0mywW6VqQjxxhIfLfeiTjHYI"
          />
          <div className="md:col-span-2 group cursor-pointer bg-surface-container-low p-6 rounded-xl flex items-center gap-6 border border-white/5 hover:border-primary/20 transition-all">
            <div className="w-20 h-20 bg-surface-container-highest rounded-lg flex items-center justify-center flex-shrink-0">
              <Terminal className="text-primary" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1 uppercase tracking-tighter">
                System Internship // Helix AI
              </h4>
              <p className="text-sm text-on-surface-variant">
                Optimizing large language model latency via custom Python
                kernels.
              </p>
            </div>
            <div className="ml-auto">
              <ChevronRight className="text-outline" />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-24 flex items-center justify-between border-t border-outline-variant/10 pt-12">
        <span className="text-outline text-xs uppercase tracking-[0.2em]">
          Showing 06 of 24
        </span>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-outline-variant/30 text-xs uppercase font-bold tracking-widest hover:bg-surface-container transition-colors">
            Previous
          </button>
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-xs uppercase font-bold tracking-widest active:scale-95 transition-all">
            Next Collection
          </button>
        </div>
      </div>
    </div>
  );
}

function SmallProjectCard({
  title,
  category,
  image,
}: {
  title: string;
  category: string;
  image: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>
      <h4 className="text-lg font-bold text-on-surface mb-1">{title}</h4>
      <span className="text-[10px] text-outline uppercase tracking-widest">
        {category}
      </span>
    </div>
  );
}
