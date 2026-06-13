import { motion } from "framer-motion";
import { Download, FileDown } from "lucide-react";
import { toast } from "sonner";

export default function BrochureDownload() {
  const handleDownload = () => {
    // Placeholder — wire to your hosted PDF asset path if available.
    toast.success("Brochure download will begin shortly. Check your downloads folder.");
    // Trigger a "fake" download for now
    const link = document.createElement("a");
    link.href = "/build-smarts-infra-brochure.pdf";
    link.download = "BuildSmartsInfra-Brochure.pdf";
    link.click();
  };

  return (
    <section
      data-testid="brochure-section"
      className="relative py-14 bg-[#02040A] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-[#D4AF37]/40 bsi-gold-text">
              <FileDown className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <div className="bsi-overline mb-1">Company Brochure · 2026</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Take Build Smarts Infra with you.
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Download our full company profile, project portfolio &amp; package details (PDF).
              </p>
            </div>
          </div>
          <button
            data-testid="brochure-download-btn"
            onClick={handleDownload}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bsi-gold-bg text-[#050A15] font-semibold tracking-wide hover:bg-[#F3E5AB] transition-colors"
          >
            Download Brochure
            <Download className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
