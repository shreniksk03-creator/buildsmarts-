import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Sofa,
  Hammer,
  Ruler,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Independent houses, villas and apartments crafted with timeless detail and modern engineering.",
    items: ["Independent Houses", "Villas", "Apartments"],
    span: "md:col-span-7",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Offices, retail and warehouses built to perform.",
    items: ["Offices", "Retail Spaces", "Shopping Complexes", "Warehouses"],
    span: "md:col-span-5",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    desc: "Modular kitchens, wardrobes, false ceilings and lighting tuned to your lifestyle.",
    items: ["Modular Kitchens", "Wardrobes", "False Ceilings", "Lighting"],
    span: "md:col-span-5",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Bring older spaces back to life with modern upgrades and structural extensions.",
    items: ["House Renovation", "Structural Extension", "Modern Upgrades"],
    span: "md:col-span-7",
  },
  {
    icon: Ruler,
    title: "Architecture & Planning",
    desc: "From 2D floor plans to government approvals and vastu-aligned planning.",
    items: ["2D Floor Plans", "3D Elevations", "Govt. Approvals", "Vastu Planning"],
    span: "md:col-span-7",
  },
  {
    icon: KeyRound,
    title: "Turnkey Projects",
    desc: "Complete responsibility — from planning to key handover.",
    items: ["End-to-end Execution", "Single Point Accountability"],
    span: "md:col-span-5",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 lg:py-32 bg-[#050A15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bsi-overline mb-4">What we build</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Services tailored to <br />
              <span className="bsi-gold-text italic">your blueprint.</span>
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-md">
            Six core capabilities — covered end to end, with zero handover gaps
            between architects, engineers and execution teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6" data-testid="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`${s.span} group relative p-8 lg:p-10 border border-white/8 bg-[#0F172A]/60 hover:bg-[#0F172A] hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] transition-all duration-500`}
              data-testid={`service-card-${s.title.toLowerCase().replace(/\s+&\s+|\s+/g, "-")}`}
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-all">
                  <s.icon className="w-6 h-6 bsi-gold-text group-hover:text-[#050A15]" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#D4AF37] group-hover:rotate-45 transition-all duration-300" />
              </div>
              <h3 className="mt-7 font-display text-2xl md:text-3xl font-semibold leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-lg">
                {s.desc}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="text-[11px] uppercase tracking-[0.15em] px-3 py-1 border border-white/10 text-gray-300"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
