import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const PROJECT_TYPES = [
  "Residential Villa",
  "Apartment",
  "Commercial Building",
  "Interior Design",
  "Renovation",
  "Turnkey Project",
];

const BUDGETS = [
  "Under ₹50 Lakh",
  "₹50 Lakh - ₹1 Crore",
  "₹1 Crore - ₹2 Crore",
  "₹2 Crore - ₹5 Crore",
  "Above ₹5 Crore",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in name, phone and email.");
      return;
    }
    setSending(true);
    // Simulate submit (no backend wiring per user request)
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    toast.success("Thanks! Our team will reach out within 24 hours.");
    setForm({ name: "", phone: "", email: "", projectType: "", budget: "", message: "" });
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 lg:py-32 bg-[#0A101C] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="bsi-overline mb-4">Get in touch</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Let&apos;s build <br />
              <span className="bsi-gold-text italic">something legendary.</span>
            </h2>
            <p className="mt-6 text-gray-400">
              Share a few details and we&apos;ll schedule a complimentary
              consultation at your convenience.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210", testid: "contact-phone" },
                { icon: Mail, label: "Email", value: "contact@buildsmartsinfra.com", href: "mailto:contact@buildsmartsinfra.com", testid: "contact-email" },
                { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India", href: "https://maps.google.com/?q=Bengaluru", testid: "contact-location" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  data-testid={c.testid}
                  className="group flex items-start gap-4 p-5 border border-white/8 bg-[#0F172A]/60 hover:border-[#D4AF37]/40 transition-all"
                >
                  <div className="w-11 h-11 flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-all shrink-0">
                    <c.icon className="w-4 h-4 bsi-gold-text group-hover:text-[#050A15]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500">{c.label}</div>
                    <div className="mt-1 text-white">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Map */}
            <div className="mt-6 border border-white/10 overflow-hidden" data-testid="contact-map">
              <iframe
                title="Build Smarts Infra · Office Location"
                src="https://www.google.com/maps?q=Bengaluru,Karnataka,India&output=embed"
                width="100%"
                height="240"
                style={{ border: 0, filter: "grayscale(40%) contrast(1.1)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={submit}
            className="lg:col-span-7 bsi-glass p-8 lg:p-10"
            data-testid="contact-form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Name *</label>
                <input
                  data-testid="contact-input-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-white placeholder:text-gray-600"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Phone *</label>
                <input
                  data-testid="contact-input-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-white placeholder:text-gray-600"
                  placeholder="+91"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Email *</label>
                <input
                  data-testid="contact-input-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-white placeholder:text-gray-600"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Project Type</label>
                <select
                  data-testid="contact-input-project-type"
                  value={form.projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-white"
                >
                  <option value="" className="bg-[#0F172A]">Select</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[#0F172A]">{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Budget</label>
                <select
                  data-testid="contact-input-budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-white"
                >
                  <option value="" className="bg-[#0F172A]">Select</option>
                  {BUDGETS.map((t) => (
                    <option key={t} value={t} className="bg-[#0F172A]">{t}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Message</label>
                <textarea
                  data-testid="contact-input-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-[#D4AF37] outline-none py-3 text-white placeholder:text-gray-600 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            <button
              type="submit"
              data-testid="contact-submit"
              disabled={sending}
              className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bsi-gold-bg text-[#050A15] font-semibold tracking-wide hover:bg-[#F3E5AB] transition-all disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Inquiry"} <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
