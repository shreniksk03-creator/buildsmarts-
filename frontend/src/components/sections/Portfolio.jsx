import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowUpRight, Maximize2 } from "lucide-react";

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
    span: "lg:col-span-8 lg:row-span-2",
    aspect: "aspect-[16/10]",
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
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Skyline Heights",
    location: "Whitefield, Bengaluru",
    type: "Residential Tower · 22 Floors",
    cover:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "The Greenwood Villa",
    location: "Devanahalli, Bengaluru",
    type: "Bungalow · 4800 Sq.ft",
    cover:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Aurum Corporate Park",
    location: "Outer Ring Road, Bengaluru",
    type: "Commercial · 1.2 Lakh Sq.ft",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
    span: "lg:col-span-8",
    aspect: "aspect-[21/9]",
  },
  {
    title: "Heritage Court",
    location: "Yelahanka, Bengaluru",
    type: "Row Houses · 12 Units",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "The Atrium",
    location: "Indiranagar, Bengaluru",
    type: "Mixed Use · 6 Floors",
    cover:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Lotus Residency",
    location: "HSR Layout, Bengaluru",
    type: "Residential · 24 Apartments",
    cover:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    ],
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);

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
          <p className="text-gray-300 max-w-md">
            From luxury villas to corporate parks — eight signature builds that
            define our craft across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 auto-rows-auto" data-testid="portfolio-grid">
          {projects.slice(0, 8).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`${p.span} group relative overflow-hidden cursor-pointer`}
              onClick={() => open(p)}
              data-testid={`portfolio-card-${i}`}
            >
              <div className={`${p.aspect} overflow-hidden`}>
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#050A15]/40 to-transparent" />
              <div className="absolute top-4 right-4 w-9 h-9 bg-[#050A15]/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <div className="flex items-center gap-2 text-[11px] text-gray-200 uppercase tracking-[0.2em]">
                  <MapPin className="w-3 h-3 bsi-gold-text" />
                  {p.location}
                </div>
                <h3 className="mt-2.5 font-display text-2xl lg:text-3xl font-bold leading-tight">{p.title}</h3>
                <div className="mt-1 text-xs text-gray-300">{p.type}</div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] bsi-gold-text border-b border-[#D4AF37]/40 pb-1 opacity-90 group-hover:opacity-100">
                  View Project
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            data-testid="portfolio-view-all"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#D4AF37]/50 text-white hover:bg-[#D4AF37] hover:text-[#050A15] font-semibold text-sm tracking-[0.2em] uppercase transition-all"
          >
            View Full Gallery
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
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
                  <div className="text-sm text-gray-300 mt-1">{active.location} · {active.type}</div>
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

      {/* Full Gallery Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[#050A15]/98 backdrop-blur-md overflow-y-auto"
            data-testid="portfolio-full-gallery"
          >
            <div className="sticky top-0 z-10 bg-[#050A15]/95 backdrop-blur-md border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
                <div>
                  <div className="bsi-overline">Complete Portfolio</div>
                  <h3 className="font-display text-2xl mt-1">Every project we&apos;ve built</h3>
                </div>
                <button
                  data-testid="portfolio-full-gallery-close"
                  onClick={() => setShowAll(false)}
                  className="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((p, i) => (
                <button
                  key={p.title + i}
                  data-testid={`full-gallery-item-${i}`}
                  onClick={() => {
                    setShowAll(false);
                    setTimeout(() => open(p), 200);
                  }}
                  className="group text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="mt-3">
                    <div className="text-[10px] uppercase tracking-[0.25em] bsi-gold-text">{p.location}</div>
                    <h4 className="mt-1 font-display text-lg">{p.title}</h4>
                    <div className="text-xs text-gray-300">{p.type}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
