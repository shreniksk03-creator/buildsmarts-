import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyEstimate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = () => {
    const el = document.querySelector("#cost-calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          data-testid="sticky-estimate-button"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
          onClick={go}
          className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 origin-left -rotate-90 translate-y-1/2 bsi-gold-bg text-[#050A15] font-semibold px-5 py-3 items-center gap-2 shadow-2xl hover:bg-[#F3E5AB] transition-colors"
          style={{ transformOrigin: "left top" }}
        >
          <Sparkles className="w-4 h-4" />
          Get Free Estimate
        </motion.button>
      )}
    </AnimatePresence>
  );
}
