import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const ongoing = [
  {
    title: "Belle Vue Residency",
    location: "Hennur Road",
    progress: 72,
    eta: "Q3 2026",
    type: "G+3 Apartments",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    title: "Arcadia Villa Phase II",
    location: "Sarjapur Road",
    progress: 45,
    eta: "Q4 2026",
    type: "Luxury Villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    title: "Aurum Square",
    location: "Outer Ring Road",
    progress: 28,
    eta: "Q1 2027",
    type: "Mixed Use Commercial",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
];

export default function OngoingProjects() {
  return (
    <section
      id="ongoing"
      data-testid="ongoing-section"
      className="relative py-24 lg:py-32 bg-[#0A101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="bsi-overline mb-4">Live on Site</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Ongoing <span className="bsi-gold-text italic">projects.</span>
            </h2>
          </div>
          <p className="text-gray-300 max-w-md">
            Transparency you can verify — track progress on builds currently
            under our care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="ongoing-grid">
          {ongoing.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0F172A] border border-white/8 hover:border-[#D4AF37]/40 transition-all"
              data-testid={`ongoing-card-${i}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-[#050A15] text-[10px] font-bold uppercase tracking-[0.2em]">
                  Live
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-300">
                  <MapPin className="w-3 h-3 bsi-gold-text" />
                  {p.location} · {p.type}
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs text-gray-200">
                    <span>Progress</span>
                    <span className="bsi-gold-text font-semibold">{p.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                      className="h-full bsi-gold-bg"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-300">
                  <Calendar className="w-3.5 h-3.5 bsi-gold-text" />
                  Expected Handover · <span className="text-white">{p.eta}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
