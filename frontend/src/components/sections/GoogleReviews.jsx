import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Iyer",
    initial: "P",
    color: "#7C3AED",
    rating: 5,
    time: "2 weeks ago",
    text: "Build Smarts Infra delivered our 3BHK villa exactly on schedule. Quality of finishing is outstanding — better than what we got quoted from 3 other builders.",
  },
  {
    name: "Sandeep Rao",
    initial: "S",
    color: "#0EA5E9",
    rating: 5,
    time: "1 month ago",
    text: "Pricing was completely transparent. Itemised list of every brand and material — no surprise costs. Their team showed up every single day on site.",
  },
  {
    name: "Meera Krishnan",
    initial: "M",
    color: "#F43F5E",
    rating: 5,
    time: "3 months ago",
    text: "The architect understood our vision the first meeting itself. From soil testing to handover, the entire process was a joy. Highly recommend.",
  },
  {
    name: "Vikram Joshi",
    initial: "V",
    color: "#10B981",
    rating: 5,
    time: "5 months ago",
    text: "We did a renovation with the Gold package. Their attention to detail in modular kitchens & wardrobes was exceptional. Will hire again for our office.",
  },
];

export default function GoogleReviews() {
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="relative py-24 lg:py-32 bg-[#0A101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14"
        >
          <div className="lg:col-span-7">
            <div className="bsi-overline mb-4">Verified Reviews</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Rated <span className="bsi-gold-text italic">4.9 / 5</span> by 200+ homeowners on Google.
            </h2>
          </div>
          <div className="lg:col-span-5 bsi-glass p-6 flex flex-col justify-center" data-testid="reviews-summary">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-xl text-[#4285F4]">
                G
              </div>
              <div>
                <div className="text-sm text-gray-300">Google Customer Reviews</div>
                <div className="text-2xl font-display font-bold">
                  4.9 <span className="text-sm text-gray-300">/ 5</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="ml-3 text-xs text-gray-300">Based on 200+ verified reviews</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="reviews-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0F172A] border border-white/8 p-7 hover:border-[#D4AF37]/40 transition-all"
              data-testid={`review-card-${i}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initial}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white">{r.name}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, k) => (
                        <Star key={k} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-300">· {r.time}</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#4285F4]">G</span>
              </div>
              <p className="mt-4 text-sm text-gray-200 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
