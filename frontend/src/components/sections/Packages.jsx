import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Check, X, Star, ChevronDown, ChevronUp } from "lucide-react";

const packages = [
  {
    key: "silver",
    name: "Silver",
    price: "1,799",
    tag: "Essential",
    highlights: [
      "2D Floor Plan with Furniture Layout",
      "M20 Cement",
      "ACC / Birla Shakthi",
      "Teak Main Door ₹30,000",
      "Tile / Granite ₹50/Sq.ft",
      "Fireproof Finolex Wires",
    ],
  },
  {
    key: "gold",
    name: "Gold",
    price: "1,999",
    tag: "Most Popular",
    popular: true,
    highlights: [
      "3D Exterior Views (2 Options)",
      "M20 Cement",
      "Prime Gold / Sunvik TMT",
      "Teak Main Door ₹40,000",
      "Tile / Granite ₹80/Sq.ft",
      "Anchor Roma Switches",
      "Enhanced Premium Specifications",
    ],
  },
  {
    key: "diamond",
    name: "Diamond",
    price: "2,250",
    tag: "Signature Luxury",
    highlights: [
      "Luxury Elevation Design + 3D Proposal",
      "M25 Cement",
      "ACC / Ultratech",
      "Teak Main Door ₹60,000",
      "Granite Flooring ₹180/Sq.ft",
      "Home Automation Provision",
      "Premium Finishes",
    ],
  },
];

const comparisonGroups = [
  {
    group: "Design",
    rows: [
      ["Design & Drawings — 1", "2D Floor Plan with Furniture Layout", "2D Floor Plan with Furniture Layout", "2D Floor Plan with Furniture Layout"],
      ["Design & Drawings — 2", "3D External view with 2 options", "3D External view with 2 options", "3D External view with 2 options"],
      ["Design & Drawings — 3", "Structural Drawings", "Structural Drawings", "Structural Drawings"],
      ["MEP", "NA", "Electrical / Plumbing / Drainage Layout", "Electrical / Plumbing / Drainage Layout"],
      ["Tests", "Soil Test report", "Soil Test report", "Soil Test report"],
    ],
  },
  {
    group: "Structure",
    rows: [
      ["Cement", "Nagarjuna, Bharthi, Chettinad", "ACC, Birla Shakthi, Birla A1", "ACC, Ultratech, Birla Super"],
      ["RMC", "M20", "M20", "M25"],
      ["Steel", "A1 Gold, Kamdhenu, Meenakshi", "Prime Gold, Sunvik TMT", "Indus, SK TMT"],
      ["Wall", '6" and 4" Blocks', '6" and 4" Blocks', '8" and 4" Blocks'],
      ["Sand", "M sand", "M sand", "M sand"],
      ["Plastering Sand", "P sand", "P sand", "P sand"],
      ["Aggregate 20mm/12.5mm", "Crushed stone", "Crushed stone", "Crushed stone"],
      ["Waterproofing", "Dr. Fixit", "Dr. Fixit", "Fosroc Brush Bond"],
      ["Under Ground Sump", '6" Block Work — 7000 ltrs', '6" or 8" Block Work — 9000 ltr', "RCC Sump — 10000 Ltr"],
      ["Floor to Roof finish level", "10 ft", "10 ft 6 inches", "11 ft"],
      ["Internal/external/toilet wall", "Column joints with chicken mesh", "Column joints with chicken mesh", "Column joints with chicken mesh"],
      ["Earth work", "Anti termite treatment", "Anti termite treatment", "Anti termite treatment"],
      ["Plinth height from Road level", "Car park — 1.5ft / Building 2ft", "Car park — 1.5ft / Building 2ft", "Car park — 1.5ft / Building 2ft"],
    ],
  },
  {
    group: "Steel Works",
    rows: [
      ["Staircase Railing", "MS railing as per design", "MS railing as per design", "SS Railing without Glass"],
      ["Window Grill", "10mm MS Rod", "Round/Square 12mm Rod", "Round/Square 12mm Rod"],
    ],
  },
  {
    group: "Joineries",
    rows: [
      ["Main Door (Teak)", "₹30,000 / door", "₹40,000 / door", "₹60,000 / door"],
      ["Puja Room Door", "₹16,000", "₹20,000", "₹25,000"],
      ["Bed Room Doors", "Mahagoni, Skin shutter ₹6,000", "Sal frame & flush ₹9,000", "Sal frame & flush ₹12,000"],
      ["Toilet Doors", "₹6,000 / door", "₹7,500 / door", "₹10,000 / door"],
      ["Windows", "Aluminium 2.5 / 4mm ₹280/sft", "UPVC 2.5 / 4mm ₹380/sft", "UPVC 2.5 / 5mm ₹450/sft"],
    ],
  },
  {
    group: "Flooring",
    rows: [
      ["Kitchen & Room tile/granite", "₹50/sft", "₹80/sft", "₹90/sft"],
      ["Living tile/granite", "₹70/sft", "₹100/sft", "₹180/sft"],
      ["Staircase granite", "Sadarali ₹65/sft", "Sadarali / Steel Grey ₹70/sft", "Granite ₹150/sft"],
      ["Balcony / Parking tile", "₹35/sft", "₹50/sft", "₹75/sft"],
      ["Kitchen Slab", "30mm granite ₹100/sft", "32mm granite ₹130/sft", "32mm granite ₹170/sft"],
    ],
  },
  {
    group: "Elevation",
    rows: [
      ["Elevation Treatment", "Plain Elevation designs", "Plain Elevation designs", "Luxurious elevation + 3D"],
    ],
  },
  {
    group: "Electricals",
    rows: [
      ["Wires", "Fireproof — Finolex", "Fireproof — Finolex", "Fireproof — Finolex / Havells"],
      ["Light & power points", "Unlimited", "Unlimited", "Unlimited + automation"],
      ["DB & MCB", "ABB", "ABB", "ABB / Schneider / Legrand"],
      ["Switches & Sockets", "Hi-Fi / GM (White)", "Anchor Roma (White)", "Anchor Roma Plus / Legrand"],
    ],
  },
  {
    group: "Bath & Kitchen",
    rows: [
      ["Bathroom Dado", "7' ht ₹35/sft", "10' ht ₹40/sft", "Full ht ₹75/sft"],
      ["Kitchen Sink", "SS/Granite/Carysil ₹10,000", "SS/Granite/Carysil ₹13,000", "SS/Granite/Carysil ₹22,000"],
      ["Bath Accessories", "₹20,000 / bathroom", "₹30,000 / bathroom", "Jaquar/Hindware ₹40,000"],
    ],
  },
  {
    group: "Plumbing",
    rows: [
      ["Pipes & fittings", "Astral / Ashirvad", "Astral / Ashirvad / Supreme", "Astral / Ashirvad / Supreme"],
      ["Overhead tank (1000 ltr)", "Ganga / Kaveri Triple Layered", "Ganga / Kaveri Triple Layered", "Sintex / Kaveri Triple Layered"],
      ["Chamber Cover", "Cement cover", "Cement cover", "FRP Cover"],
    ],
  },
  {
    group: "Paint",
    rows: [
      ["Internal Paint", "Birla / Asian — 2 Putty + 2 Tractor", "Birla / Asian — 2 Putty + 2 Tractor", "Birla / Asian — 2 Putty + 2 Premium"],
      ["External Paint", "Ace Exterior — Asian", "Ace Exterior — Asian", "Apex Exterior — Asian"],
      ["MS & Wood Paint", "Enamel Paint", "MS & Shutter Enamel, Pooja Polish", "MS & Shutter Enamel, Pooja Polish"],
    ],
  },
];

export default function Packages() {
  const [showCompare, setShowCompare] = useState(false);

  const go = (key) => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    sessionStorage.setItem("bsi_pkg", key);
  };

  return (
    <section
      id="packages"
      data-testid="packages-section"
      className="relative py-24 lg:py-32 bg-[#0A101C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bsi-overline mb-4">Construction Packages</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            One transparent price. <br />
            <span className="bsi-gold-text italic">Zero hidden costs.</span>
          </h2>
          <p className="mt-6 text-gray-400">
            Pick the package that matches your vision — every material, brand
            and rate listed upfront. No surprises at handover.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" data-testid="packages-grid">
          {packages.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-8 lg:p-10 transition-all duration-500 ${
                p.popular
                  ? "bg-gradient-to-b from-[#1a1505] to-[#0F172A] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.18)] lg:-translate-y-4"
                  : "bg-[#0F172A] border border-white/10 hover:border-[#D4AF37]/40"
              }`}
              data-testid={`package-card-${p.key}`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bsi-gold-bg text-[#050A15] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#050A15]" /> Most Popular
                </div>
              )}
              <div className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                {p.tag}
              </div>
              <h3 className="mt-3 font-display text-4xl font-bold">
                {p.name}{" "}
                <span className="text-sm font-body font-normal text-gray-500 align-middle">Package</span>
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl text-gray-400 font-light">₹</span>
                <span className="font-display text-6xl font-black bsi-gold-text">
                  {p.price}
                </span>
                <span className="text-gray-400 text-sm"> / Sq.ft</span>
              </div>

              <div className="mt-8 h-px bg-white/10" />

              <ul className="mt-7 space-y-3.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 bsi-gold-text mt-0.5 shrink-0" strokeWidth={2.5} />
                    {h}
                  </li>
                ))}
              </ul>

              <button
                data-testid={`package-cta-${p.key}`}
                onClick={() => go(p.key)}
                className={`mt-10 w-full py-3.5 font-semibold tracking-wider text-sm transition-all duration-300 ${
                  p.popular
                    ? "bsi-gold-bg text-[#050A15] hover:bg-[#F3E5AB]"
                    : "border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                Choose {p.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison table toggle */}
        <div className="mt-16 text-center">
          <button
            data-testid="packages-compare-toggle"
            onClick={() => setShowCompare(!showCompare)}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gray-300 hover:text-[#D4AF37] transition-colors border-b border-white/20 hover:border-[#D4AF37] pb-1"
          >
            {showCompare ? "Hide" : "View"} Full Specification Comparison
            {showCompare ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {showCompare && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-10 overflow-x-auto bsi-glass"
            data-testid="packages-compare-table"
          >
            <table className="w-full min-w-[900px] text-sm">
              <thead className="sticky top-0">
                <tr className="bg-[#050A15]">
                  <th className="text-left p-4 font-semibold text-gray-400 uppercase text-xs tracking-widest w-1/4">Specification</th>
                  <th className="text-left p-4 font-display text-lg">Silver <span className="text-xs text-gray-500 block">₹1,799/sft</span></th>
                  <th className="text-left p-4 font-display text-lg bsi-gold-text">Gold <span className="text-xs text-gray-500 block">₹1,999/sft</span></th>
                  <th className="text-left p-4 font-display text-lg">Diamond <span className="text-xs text-gray-500 block">₹2,250/sft</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonGroups.map((g) => (
                  <Fragment key={g.group}>
                    <tr className="bg-[#D4AF37]/10">
                      <td colSpan={4} className="p-3 px-4 font-display text-base text-[#D4AF37] uppercase tracking-[0.2em]">
                        {g.group}
                      </td>
                    </tr>
                    {g.rows.map((row, idx) => (
                      <tr key={g.group + idx} className="border-t border-white/5 hover:bg-[#0F172A]/40">
                        <td className="p-3 px-4 text-gray-400 text-xs uppercase tracking-wider">{row[0]}</td>
                        <td className="p-3 px-4 text-gray-300">{row[1]}</td>
                        <td className="p-3 px-4 text-white">{row[2]}</td>
                        <td className="p-3 px-4 text-gray-300">{row[3]}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </section>
  );
}
