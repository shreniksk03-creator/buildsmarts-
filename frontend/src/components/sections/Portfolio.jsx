import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Villa",
    location: "Sarjapur Road, Bengaluru",
    type: "Residential · 6500 Sq.ft",
    cover:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
  },
  {
    title: "Sunrise Apartments",
    location: "Electronic City, Bengaluru",
    type: "Commercial · 48 Units",
    cover:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  const open = (p) => {
    setActive(p);
    setImgIdx(0);
  };

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="relative py-24 lg:py-32 bg-[#0A101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bsi-overline mb-4">Selected Work</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Projects we&apos;ve <br />
              <span className="bsi-gold-text italic">brought to life.</span>
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-md">
            A glimpse of the homes and commercial complexes we&apos;ve
            engineered across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" data-testid="portfolio-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => open(p)}
              data-testid={`portfolio-card-${i}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#050A15]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                <div className="flex items-center gap-2 text-xs text-gray-300 uppercase tracking-[0.25em]">
                  <MapPin className="w-3.5 h-3.5 bsi-gold-text" />
                  {p.location}
                </div>
                <h3 className="mt-3 font-display text-3xl lg:text-4xl font-bold">{p.title}</h3>
                <div className="mt-1 text-sm text-gray-400">{p.type}</div>
                <button
                  data-testid={`portfolio-view-${i}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] bsi-gold-text border-b border-[#D4AF37]/40 pb-1 group-hover:border-[#D4AF37]"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050A15]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActive(null)}
            data-testid="portfolio-lightbox"
          >
            <button
              data-testid="portfolio-lightbox-close"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={active.gallery[imgIdx]}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl">{active.title}</h3>
                  <div className="text-sm text-gray-400 mt-1">{active.location} · {active.type}</div>
                </div>
                <div className="flex gap-2">
                  {active.gallery.map((g, idx) => (
                    <button
                      key={idx}
                      data-testid={`lightbox-thumb-${idx}`}
                      onClick={() => setImgIdx(idx)}
                      className={`w-16 h-16 overflow-hidden border-2 ${
                        imgIdx === idx ? "border-[#D4AF37]" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
