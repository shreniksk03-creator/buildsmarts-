import { useState, useRef } from "react";
import { motion } from "framer-motion";

const pairs = [
  {
    label: "Sarjapur Villa · Renovation",
    before: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
  {
    label: "Whitefield Apartment · Interior Upgrade",
    before: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    after: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
];

function Slider({ before, after, label, testidIndex }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);

  const onMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    setPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div data-testid={`beforeafter-${testidIndex}`} className="group">
      <div className="text-xs uppercase tracking-[0.25em] bsi-gold-text mb-3">{label}</div>
      <div
        ref={ref}
        className="relative aspect-[16/10] overflow-hidden bg-black select-none cursor-ew-resize"
        onMouseMove={(e) => e.buttons === 1 && onMove(e)}
        onTouchMove={onMove}
        onClick={onMove}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] z-10 pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#050A15] font-bold text-xs shadow-2xl">
            ⇆
          </div>
        </div>

        <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] uppercase tracking-[0.25em]">Before</div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-[#D4AF37] text-[#050A15] text-[10px] uppercase tracking-[0.25em] font-bold">After</div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      data-testid="beforeafter-section"
      className="relative py-24 lg:py-32 bg-[#050A15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="bsi-overline mb-4">The Transformation</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Before &amp; <span className="bsi-gold-text italic">After.</span>
          </h2>
          <p className="mt-5 text-gray-300">
            Drag the gold handle to see the difference our craft makes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {pairs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Slider {...p} testidIndex={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
