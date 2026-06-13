import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

/**
 * HERO VIDEO REPLACEMENT
 * ----------------------
 * To replace the hero background video later:
 * 1) Drop your .mp4 file into /app/frontend/public/ (e.g. hero-bg.mp4)
 * 2) Replace the `src` of <source> below with "/hero-bg.mp4"
 *    OR change `VIDEO_URL` constant just below to your CDN URL.
 * 3) Make sure the poster image (fallback) is also updated if needed.
 *
 * Video must be muted + autoplay + playsInline + loop for mobile autoplay.
 */
const VIDEO_URL =
  "https://cdn.coverr.co/videos/coverr-building-construction-site-2752/1080p.mp4";

const POSTER_IMG =
  "https://images.unsplash.com/photo-1519143009590-e3800b9df468?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920";

function Counter({ to, suffix = "", duration = 2.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (t) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(animate);
      else setVal(to);
    };
    requestAnimationFrame(animate);
  }, [inView, to, duration]);

  const formatted = (n) => {
    if (to >= 1000000) return (n / 1000000).toFixed(n === to ? 1 : 1) + "M";
    return n.toLocaleString("en-IN");
  };

  return (
    <span ref={ref} className="font-display text-3xl md:text-5xl font-bold bsi-gold-text">
      {formatted(val)}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1500000, suffix: "+", label: "Sq Ft Constructed" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Years Legacy" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function Hero() {
  const go = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* VIDEO PLACEHOLDER — replace src below with your construction video */}
      <video
        data-testid="hero-bg-video"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER_IMG}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay gradient for legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050A15]/70 via-[#050A15]/65 to-[#050A15]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#050A15_85%)]" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="bsi-overline mb-6" data-testid="hero-overline">
            Bengaluru&apos;s Trusted Builder · Est. Legacy
          </div>
          <h1
            data-testid="hero-heading"
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]"
          >
            Building Dreams with{" "}
            <span className="bsi-gold-text italic font-medium">Precision</span>{" "}
            <br className="hidden md:block" />& <span className="bsi-gold-text italic font-medium">Innovation</span>.
          </h1>
          <p
            data-testid="hero-subheading"
            className="mt-7 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            From residential villas to commercial complexes — we deliver
            excellence in every square foot. Quality construction, transparent
            dealings, and timely delivery.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              data-testid="hero-cta-consultation"
              onClick={() => go("#contact")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bsi-gold-bg text-[#050A15] font-semibold tracking-wide hover:bg-[#F3E5AB] transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              data-testid="hero-cta-projects"
              onClick={() => go("#portfolio")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-semibold tracking-wide transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              View Projects
            </button>
          </div>
        </motion.div>
      </div>

      {/* Counters */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bsi-glass grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-y border-[#D4AF37]/20"
            data-testid="hero-counters"
          >
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-7 text-center" data-testid={`hero-counter-${i}`}>
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
