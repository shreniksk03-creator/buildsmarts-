import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text:
      "To deliver excellence in every square foot — through quality construction, transparent dealings, and timely handover that earns lifelong client trust.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text:
      "To be Bengaluru's most respected luxury construction brand — blending architectural craft with intelligent engineering and uncompromising integrity.",
  },
  {
    icon: Gem,
    title: "Core Values",
    text:
      "Precision. Transparency. Innovation. Punctuality. Safety. Customer obsession — the six pillars that shape every project we build.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 bg-[#050A15] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="bsi-overline mb-5">Who we are</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              About <span className="bsi-gold-text italic">Build Smarts Infra</span>
            </h2>
            <div className="mt-8 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Build Smarts Infra construction site"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  data-testid="about-image"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bsi-gold-bg text-[#050A15] px-6 py-4 hidden md:block">
                <div className="font-display text-3xl font-black leading-none">5+</div>
                <div className="text-xs uppercase tracking-[0.2em] mt-1">Years legacy</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 lg:pt-24"
          >
            <p className="text-lg text-gray-200 leading-relaxed">
              Build Smarts Infra is a trusted construction and infrastructure
              company delivering residential, commercial, architectural, and
              interior solutions across Bengaluru.
            </p>
            <p className="mt-5 text-base text-gray-300 leading-relaxed">
              Our commitment to quality construction, transparency, innovation,
              and timely delivery has helped us successfully complete numerous
              projects while earning long-term client trust — built one
              honest brick at a time.
            </p>

            <div className="mt-12 space-y-6" data-testid="about-pillars">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex gap-5 p-5 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 bg-[#0F172A]/40"
                  data-testid={`about-pillar-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-[#050A15] transition-all">
                    <p.icon className="w-5 h-5 bsi-gold-text group-hover:text-[#050A15]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
