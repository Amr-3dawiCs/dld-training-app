import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20c55a] flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
}