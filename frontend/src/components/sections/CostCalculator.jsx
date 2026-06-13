import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, ArrowRight } from "lucide-react";

const RATES = {
  Silver: 1799,
  Gold: 1999,
  Diamond: 2250,
};

const STORIES = {
  "Ground Floor (G)": 1,
  "G + 1": 2,
  "G + 2": 3,
  "G + 3": 4,
};

export default function CostCalculator() {
  const [area, setArea] = useState(1500);
  const [pkg, setPkg] = useState("Gold");
  const [floors, setFloors] = useState("G + 1");

  const total = useMemo(() => {
    const built = area * STORIES[floors];
    return built * RATES[pkg];
  }, [area, pkg, floors]);

  const inr = (n) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(n);

  const goContact = () => {
    sessionStorage.setItem("bsi_pkg", pkg.toLowerCase());
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cost-calculator"
      data-testid="cost-calculator-section"
      className="relative py-24 lg:py-32 bg-[#050A15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="bsi-overline mb-4">Instant Estimate</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Know your <span className="bsi-gold-text italic">construction cost</span> in seconds.
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Drag the sliders to get a transparent estimate based on plot area,
              floors and your chosen package. No emails. No sign-ups.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-200">
              <li>· Live ₹/sq.ft rates from our published packages</li>
              <li>· Multi-floor calculation built in</li>
              <li>· Ready to share with your family or banker</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bsi-glass p-8 lg:p-10"
            data-testid="cost-calculator-card"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center border border-[#D4AF37]/40 bsi-gold-text">
                <Calculator className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl">Cost Estimator</h3>
            </div>

            <div className="mt-8">
              <label className="flex items-center justify-between text-sm text-gray-200">
                <span>Plot Area (per floor)</span>
                <span className="font-display text-lg bsi-gold-text">{area} sq.ft</span>
              </label>
              <input
                type="range"
                min="500"
                max="10000"
                step="50"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                data-testid="cost-input-area"
                className="mt-3 w-full accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] text-gray-300 mt-1">
                <span>500</span>
                <span>10,000</span>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-gray-300">Floors</label>
                <select
                  value={floors}
                  onChange={(e) => setFloors(e.target.value)}
                  data-testid="cost-input-floors"
                  className="mt-2 w-full bg-[#050A15] border border-white/15 focus:border-[#D4AF37] outline-none px-4 py-3 text-white"
                >
                  {Object.keys(STORIES).map((f) => (
                    <option key={f} value={f} className="bg-[#0F172A]">{f}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-gray-300">Package</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {Object.keys(RATES).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPkg(p)}
                      data-testid={`cost-input-pkg-${p.toLowerCase()}`}
                      className={`py-3 text-xs uppercase tracking-[0.15em] border transition-all ${
                        pkg === p
                          ? "border-[#D4AF37] bg-[#D4AF37] text-[#050A15] font-semibold"
                          : "border-white/15 text-gray-200 hover:border-[#D4AF37]/50"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 border border-[#D4AF37]/40 bg-[#0F172A]" data-testid="cost-result">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-300">
                Estimated Total ({pkg} · {floors} · {area * STORIES[floors]} sq.ft built-up)
              </div>
              <div className="mt-3 flex items-end gap-2">
                <IndianRupee className="w-7 h-7 bsi-gold-text mb-2" />
                <span className="font-display text-5xl lg:text-6xl font-black bsi-gold-text">
                  {inr(total)}
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-300">
                Indicative price at ₹{RATES[pkg]}/sq.ft × {STORIES[floors]} floors. Final quote varies with site conditions and design.
              </div>

              <button
                data-testid="cost-cta-quote"
                onClick={goContact}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bsi-gold-bg text-[#050A15] font-semibold py-3.5 hover:bg-[#F3E5AB] transition-colors"
              >
                Get Detailed Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
