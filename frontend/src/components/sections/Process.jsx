import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", text: "Free discovery call to map vision, plot, budget and timelines." },
  { num: "02", title: "Planning", text: "Site survey, soil test, and feasibility/cost planning." },
  { num: "03", title: "Design", text: "2D floor plans, 3D elevations and material selection." },
  { num: "04", title: "Approval", text: "BBMP / panchayat sanction, BWSSB and other approvals." },
  { num: "05", title: "Construction", text: "Foundation to finishing — milestone-driven build." },
  { num: "06", title: "Quality Check", text: "Multi-stage QA, snag list and third-party audits." },
  { num: "07", title: "Handover", text: "Walk-through, documentation and keys to your dream." },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-24 lg:py-32 bg-[#050A15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="bsi-overline mb-4">How we build</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Seven steps. <br />
            <span className="bsi-gold-text italic">One smooth journey.</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative" data-testid="process-timeline">
          {/* desktop: connected horizontal line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
                data-testid={`process-step-${i}`}
              >
                <div className="relative mx-auto lg:mx-0 w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#D4AF37]/30 rotate-45" />
                  <div className="absolute inset-2 bg-[#0F172A] rotate-45" />
                  <span className="relative font-display text-2xl font-bold bsi-gold-text">
                    {s.num}
                  </span>
                </div>
                <div className="mt-6 lg:text-left text-center">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
