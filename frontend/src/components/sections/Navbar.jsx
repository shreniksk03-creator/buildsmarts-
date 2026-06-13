import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050A15]/85 border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          data-testid="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-sm bsi-gold-bg flex items-center justify-center font-display font-black text-[#050A15] text-lg group-hover:scale-105 transition-transform">
            B
          </span>
          <span className="font-display text-xl tracking-wide">
            Build Smarts <span className="bsi-gold-text">Infra</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={() => go(l.href)}
              className="text-sm tracking-wide text-gray-300 hover:text-[#D4AF37] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <button
          data-testid="navbar-cta-quote"
          onClick={() => go("#contact")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bsi-gold-bg text-[#050A15] font-semibold text-sm hover:bg-[#F3E5AB] transition-colors"
        >
          Get Quote
        </button>

        <button
          data-testid="navbar-mobile-toggle"
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#050A15] border-t border-white/10"
            data-testid="navbar-mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  onClick={() => go(l.href)}
                  className="text-left text-base text-gray-200 hover:text-[#D4AF37] py-2 border-b border-white/5"
                >
                  {l.label}
                </button>
              ))}
              <button
                data-testid="mobile-nav-cta-quote"
                onClick={() => go("#contact")}
                className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 bsi-gold-bg text-[#050A15] font-semibold"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
