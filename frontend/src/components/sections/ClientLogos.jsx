import { motion } from "framer-motion";

// Curated brand-style logos rendered as elegant wordmarks for premium feel.
const clients = [
  "Prestige Group",
  "Sobha Realty",
  "Godrej Properties",
  "Brigade",
  "Embassy",
  "Adarsh Developers",
  "Salarpuria",
  "Mantri",
  "Puravankara",
  "Total Environment",
];

export default function ClientLogos() {
  // Duplicate for seamless infinite scroll
  const looped = [...clients, ...clients];

  return (
    <section
      data-testid="client-logos-section"
      className="relative py-16 bg-[#050A15] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="bsi-overline">Trusted Across Bengaluru</div>
          <h3 className="mt-3 font-display text-2xl md:text-3xl text-gray-200">
            Partnered with India&apos;s most respected names in real estate
          </h3>
        </motion.div>
      </div>

      <div className="relative">
        {/* edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050A15] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050A15] to-transparent pointer-events-none" />

        <div className="flex overflow-hidden" data-testid="client-logos-marquee">
          <motion.div
            className="flex gap-14 pr-14 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {looped.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 shrink-0"
                data-testid={`client-logo-${i}`}
              >
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <span className="font-display text-2xl lg:text-3xl text-gray-200 tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
