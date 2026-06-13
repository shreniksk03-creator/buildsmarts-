import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Villa Owner · Sarjapur",
    quote:
      "Build Smarts Infra transformed our vision into reality. The team was professional and delivered on time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=200",
  },
  {
    name: "Anita Desai",
    role: "Homeowner · Whitefield",
    quote:
      "The attention to detail in our new home's interiors was exceptional. Highly recommended.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&q=85&w=200",
  },
  {
    name: "Karthik Reddy",
    role: "Commercial Developer",
    quote:
      "Transparent pricing, premium materials, and a team that genuinely cares about quality. A rare combination.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85&w=200",
  },
];

export default function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", () => setSelected(embla.selectedScrollSnap()));
  }, [embla]);

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 lg:py-32 bg-[#0A101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="bsi-overline mb-4">Word of mouth</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Heard from <br />
              <span className="bsi-gold-text italic">happy homeowners.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              data-testid="testimonials-prev"
              onClick={() => embla?.scrollPrev()}
              className="w-12 h-12 flex items-center justify-center border border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              data-testid="testimonials-next"
              onClick={() => embla?.scrollNext()}
              className="w-12 h-12 flex items-center justify-center border border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="mt-14 embla" ref={emblaRef} data-testid="testimonials-carousel">
          <div className="embla__container">
            {testimonials.map((t, i) => (
              <div className="embla__slide pr-4 md:pr-8" key={i}>
                <div
                  className="bsi-glass p-8 md:p-12 lg:p-16 h-full"
                  data-testid={`testimonial-${i}`}
                >
                  <Quote className="w-10 h-10 bsi-gold-text" />
                  <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-100">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]/40"
                    />
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-[0.2em] mt-0.5">{t.role}</div>
                      <div className="flex gap-1 mt-1.5">
                        {Array.from({ length: t.rating }).map((_, k) => (
                          <Star key={k} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              data-testid={`testimonials-dot-${i}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1 transition-all ${
                selected === i ? "w-10 bsi-gold-bg" : "w-5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
