import { motion } from "framer-motion";
import oqoodLogo from "../assets/oqoodicon.png";
import { Landmark, Hourglass } from "lucide-react";

export default function HeroSection({ language }) {
  const isAr = language === "ar";

  return (
    <section
      id="home"
      dir={isAr ? "rtl" : "ltr"}
      className="relative min-h-screen pt-[88px] overflow-hidden bg-[#070b14]"
    >
      <div
        className="hidden sm:block absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div
        className="sm:hidden absolute inset-0 bg-cover bg-center scale-125"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop')",
          backgroundPosition: "center top",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-[#050812]/75" />
      <div
        className={`absolute inset-0 ${
          isAr
            ? "sm:bg-gradient-to-l sm:from-[#050812]/85 sm:via-[#070b14]/35 sm:to-transparent"
            : "sm:bg-gradient-to-r sm:from-[#050812]/85 sm:via-[#070b14]/35 sm:to-transparent"
        }`}
      />

      <div
        className={`relative max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-20 lg:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center ${
          isAr ? "text-right" : "text-left"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-center ${isAr ? "lg:text-right" : "lg:text-left"}`}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-black tracking-wide text-[#C8922E]">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            {isAr
              ? "تدريب احترافي لأنظمة دائرة الأراضي"
              : "PROFESSIONAL DLD SYSTEM TRAINING"}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5 max-w-3xl">
            {isAr
              ? "منصة تدريب وإرشاد أنظمة دائرة الأراضي"
              : "DLD Systems Training Platform"}
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-6 max-w-3xl">
            {isAr ? (
              <>
                <span className="text-[#6B3FA0] drop-shadow-[0_0_12px_rgba(107,63,160,0.45)]">
                  OQOOD
                </span>{" "}
                <span className="text-white">و</span>{" "}
                <span className="text-[#E74C3C] drop-shadow-[0_0_12px_rgba(231,76,60,0.45)]">
                  TAS
                </span>{" "}
                <span className="text-white">دعم وإرشاد</span>
              </>
            ) : (
              <>
                <span className="text-[#6B3FA0] drop-shadow-[0_0_12px_rgba(107,63,160,0.45)]">
                  OQOOD
                </span>{" "}
                <span className="text-white">&</span>{" "}
                <span className="text-[#E74C3C] drop-shadow-[0_0_12px_rgba(231,76,60,0.45)]">
                  TAS
                </span>{" "}
                Guidance & Support
              </>
            )}
          </h2>

          <p
            className={`text-slate-200 leading-relaxed text-base sm:text-lg max-w-2xl mb-8 ${
              isAr ? "mx-auto lg:mr-0 lg:ml-auto" : "mx-auto lg:mx-0"
            }`}
          >
            {isAr
              ? "منصة احترافية لمساعدة المستخدمين في التدريب والإرشاد على إجراءات وأنظمة OQOOD و TAS مع إرسال الطلبات بشكل منظم وسهل."
              : "Professional platform helping users with OQOOD and TAS training, guidance, and workflow support through organized request submissions."}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center ${
              isAr ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <a
              href="#training"
              className="inline-flex items-center justify-center gap-2 bg-[#C8922E] hover:bg-[#D6A84B] text-black px-7 py-4 rounded-xl font-black transition shadow-[0_0_28px_rgba(200,146,46,0.35)]"
            >
              {isAr ? "احجز تدريب ↓" : "Book Training ↓"}
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-4 rounded-xl font-bold transition"
            >
              {isAr ? "معرفة المزيد" : "Learn More"}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl bg-[#101625]/80 border border-white/10 backdrop-blur-xl shadow-2xl p-5 sm:p-8 lg:p-10"
        >
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#0d1424] border border-[#6B3FA0]/40 p-5 sm:p-6 hover:border-[#6B3FA0]/70 transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <img
                    src={oqoodLogo}
                    alt="OQOOD"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h3 className="text-[#6B3FA0] font-black text-xl">OQOOD</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {isAr
                  ? "الإجراءات، الاستفسارات، التقارير، التسجيلات، وإدارة سير العمل."
                  : "Procedures, inquiries, reports, registrations, and workflow management."}
              </p>
            </div>

            <div className="rounded-2xl bg-[#0d1424] border border-[#A32116]/40 p-5 sm:p-6 hover:border-[#A32116]/70 transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Landmark size={24} className="text-[#A32116]" />
                </div>

                <h3 className="text-[#A32116] font-black text-xl">TAS</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {isAr
                  ? "حسابات الضمان، الطلبات المالية، خطط الدفع، وإدارة المستفيدين."
                  : "Trust accounts, financial requests, payment plans, and beneficiary management."}
              </p>
            </div>

            <div className="rounded-2xl bg-[#0d1424]/70 border border-dashed border-[#C8922E]/30 p-5 sm:p-6 hover:border-[#C8922E]/60 transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Hourglass size={24} className="text-[#C8922E]" />
                </div>

                <h3 className="text-[#C8922E] font-black text-xl">
                  {isAr ? "قريباً" : "Coming Soon"}
                </h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed">
                Dubai REST, Ejari, Trakheesi, Mollak, RDC, Dubai Broker, TABU.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}