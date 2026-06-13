import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

export default function LeadMagnet() {
  const [form, setForm] = useState({ firstName: "", email: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.success("Guide on its way! Check your inbox shortly.");
    setForm({ firstName: "", email: "" });
  };

  return (
    <section
      id="lead-magnet"
      data-testid="lead-magnet-section"
      className="relative py-14 lg:py-16 bg-gradient-to-r from-[#0F172A] via-[#1a1505] to-[#0F172A] border-y border-[#D4AF37]/20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12"
        >
          <div className="flex items-start gap-5 lg:max-w-xl">
            <div className="shrink-0 w-14 h-14 flex items-center justify-center border border-[#D4AF37]/40 bsi-gold-text">
              <FileText className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <div className="bsi-overline mb-2">Free Resource · 2026 Edition</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                Get the <span className="bsi-gold-text">2026 Home Construction Cost Guide</span>
              </h3>
              <p className="mt-2 text-sm text-gray-200 leading-relaxed">
                Bengaluru&apos;s most detailed sq.ft pricing breakdown — materials, labour and timelines.
              </p>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="flex-1 w-full grid grid-cols-1 sm:grid-cols-12 gap-3"
            data-testid="lead-magnet-form"
          >
            <input
              type="text"
              data-testid="lead-magnet-firstname"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="sm:col-span-4 bg-[#050A15] border border-white/15 focus:border-[#D4AF37] outline-none px-4 py-3.5 text-white placeholder:text-gray-500"
            />
            <input
              type="email"
              data-testid="lead-magnet-email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="sm:col-span-5 bg-[#050A15] border border-white/15 focus:border-[#D4AF37] outline-none px-4 py-3.5 text-white placeholder:text-gray-500"
            />
            <button
              type="submit"
              data-testid="lead-magnet-submit"
              disabled={loading}
              className="sm:col-span-3 inline-flex items-center justify-center gap-2 bsi-gold-bg text-[#050A15] font-semibold tracking-wide px-5 py-3.5 hover:bg-[#F3E5AB] transition-colors disabled:opacity-60"
            >
              {loading ? "Sending..." : "Download Now"}
              <Download className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
