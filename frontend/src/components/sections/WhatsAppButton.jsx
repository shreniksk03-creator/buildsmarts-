import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const url =
    "https://wa.me/919876543210?text=Hi%20Build%20Smarts%20Infra%2C%20I%27m%20interested%20in%20a%20consultation.";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-button"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
      <span className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
      </span>
    </a>
  );
}
