import logo from "../assets/logo.png";
import { Globe } from "lucide-react";

export default function Navbar({ language, setLanguage }) {
  const isAr = language === "ar";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060912]/95 border-b border-[#C8922E]/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-[76px] sm:h-[88px] flex items-center justify-between gap-3">
        <a href="#home" className="flex items-center">
  <img
    src={logo}
    alt="DevAcademy"
    className="
      h-20
      sm:h-14
      md:h-16
      lg:h-16
      w-auto
      object-contain
    "
  />

  <div className="hidden sm:block ml-3">
    <h1 className="text-white text-xl font-bold tracking-[0.12em]">
      DevAcademy
    </h1>

    <p className="hidden md:block text-[#C8922E] text-[10px] uppercase">
      Real Estate Training & Support
    </p>
  </div>
</a>

        <div className="hidden lg:flex items-center gap-8 text-slate-300 text-sm font-semibold">
          <a href="#packages" className="hover:text-[#C8922E] transition">
            {isAr ? "الباقات" : "Packs"}
          </a>

          <a href="#about" className="hover:text-[#C8922E] transition">
            {isAr ? "عن المنصة" : "About"}
          </a>

          <a href="#subscription" className="hover:text-[#C8922E] transition">
            {isAr ? "الاشتراكات" : "Subscription"}
          </a>

          <a href="#training" className="hover:text-[#C8922E] transition">
            {isAr ? "التدريب" : "Training"}
          </a>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setLanguage(isAr ? "en" : "ar")}
            className="flex items-center gap-1.5 rounded-xl bg-[#0B1020] border border-white/10 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:border-[#C8922E]/50 transition"
          >
            <Globe size={15} className="text-[#C8922E]" />
            <span>{isAr ? "EN" : "العربية"}</span>
          </button>

          <a
            href="#training"
            className="bg-[#C8922E] hover:bg-[#D6A84B] text-black px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-[0_0_22px_rgba(200,146,46,0.35)]"
          >
            {isAr ? "احجز" : "Book"}
          </a>
        </div>
      </div>
    </nav>
  );
}