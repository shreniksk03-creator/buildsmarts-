import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["About", "Team", "Services", "Packages", "Portfolio", "Contact"];
const servicesList = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Design",
  "Renovation",
  "Architecture & Planning",
  "Turnkey Projects",
];

export default function Footer() {
  const go = (id) => {
    const el = document.querySelector(`#${id.toLowerCase()}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid="footer"
      className="relative bg-[#02040A] text-gray-300 pt-20 pb-10 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-sm bsi-gold-bg flex items-center justify-center font-display font-black text-[#050A15] text-lg">
                B
              </span>
              <span className="font-display text-2xl text-white">
                Build Smarts <span className="bsi-gold-text">Infra</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-sm">
              Building Dreams with Precision &amp; Innovation. Trusted construction
              and infrastructure company in Bengaluru.
            </p>

            <div className="mt-7 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((I, idx) => (
                <a
                  key={idx}
                  data-testid={`footer-social-${idx}`}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050A15] transition-all"
                  aria-label="Social link"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.3em] bsi-gold-text">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l}>
                  <button
                    data-testid={`footer-link-${l.toLowerCase()}`}
                    onClick={() => go(l)}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] bsi-gold-text">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {servicesList.map((s) => (
                <li key={s} className="text-gray-400 hover:text-white transition-colors">{s}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] bsi-gold-text">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 bsi-gold-text mt-0.5 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#D4AF37]">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 bsi-gold-text mt-0.5 shrink-0" />
                <a href="mailto:contact@buildsmartsinfra.com" className="hover:text-[#D4AF37] break-all">
                  contact@buildsmartsinfra.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 bsi-gold-text mt-0.5 shrink-0" />
                Bengaluru, Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        {/* Massive type */}
        <div className="mt-20 mb-10 overflow-hidden">
          <h2 className="font-display font-black text-[16vw] leading-none text-white/5 select-none whitespace-nowrap tracking-tight">
            BUILD SMARTS INFRA
          </h2>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>© 2026 Build Smarts Infra. All Rights Reserved.</div>
          <div>Building Dreams with Precision &amp; Innovation.</div>
        </div>
      </div>
    </footer>
  );
}
