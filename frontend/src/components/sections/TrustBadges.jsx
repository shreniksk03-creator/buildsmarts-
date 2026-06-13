import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, HardHat } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "ISO 9001 Certified", sub: "Quality management standard" },
  { icon: Award, title: "Best Builder Award", sub: "Bengaluru Chamber 2025" },
  { icon: Clock, title: "On-Time Delivery", sub: "98% projects on schedule" },
  { icon: HardHat, title: "Quality Assured", sub: "Premium-grade materials" },
];

export default function TrustBadges() {
  return (
    <section
      data-testid="trust-badges-section"
      className="relative py-10 bg-[#0F172A] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10" data-testid="trust-badges-grid">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4"
              data-testid={`trust-badge-${i}`}
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-[#D4AF37]/40 bsi-gold-text">
                <b.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{b.title}</div>
                <div className="text-xs text-gray-300 mt-0.5">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
