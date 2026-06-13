import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  BadgeIndianRupee,
  Clock,
  Sparkles,
  Cpu,
  Layers,
  HeartHandshake,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Quality Construction", desc: "Engineer-graded materials with rigorous QA at every stage." },
  { icon: Users, title: "Experienced Team", desc: "Architects, engineers and site experts with proven legacy." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Itemised packages — every brand and rate listed upfront." },
  { icon: Clock, title: "Timely Delivery", desc: "Milestone-tracked schedules and on-time key handovers." },
  { icon: Sparkles, title: "Premium Materials", desc: "Only certified, top-tier brands across every category." },
  { icon: Cpu, title: "Modern Technology", desc: "BIM, drone surveys and digital monitoring tools." },
  { icon: Layers, title: "End-to-End Solutions", desc: "Design, approvals, construction & interiors under one roof." },
  { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Long-term relationships built on trust and follow-through." },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="relative py-24 lg:py-32 bg-[#050A15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bsi-overline mb-4">Why Build Smarts Infra</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Eight reasons clients <br />
            <span className="bsi-gold-text italic">build with us.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-testid="why-us-grid">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group p-7 bg-[#0F172A]/60 border border-white/8 hover:border-[#D4AF37]/40 hover:bg-[#0F172A] transition-all duration-500"
              data-testid={`why-us-card-${i}`}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-all">
                <it.icon className="w-5 h-5 bsi-gold-text group-hover:text-[#050A15]" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
