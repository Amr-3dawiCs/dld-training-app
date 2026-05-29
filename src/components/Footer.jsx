import logo from "../assets/logo.png";

export default function Footer({ language }) {
  const isAr = language === "ar";

  return (
    <footer id="contact" dir={isAr ? "rtl" : "ltr"} className="relative bg-[#050812] text-slate-300 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] gap-10 border-b border-white/10 pb-12">
          <div>
            <img src={logo} alt="PRO Training" className="h-24 w-auto object-contain mb-5" />
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {isAr
                ? "منصة احترافية للتدريب والإرشاد والدعم لمستخدمي أنظمة OQOOD و TAS وشركات التطوير العقاري في دبي."
                : "Professional training, guidance, and support for OQOOD, TAS users, and real estate developers in Dubai."}
            </p>
          </div>

          <div>
            <h4 className="text-white font-black mb-5">{isAr ? "روابط" : "Links"}</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a href="#packages" className="hover:text-[#C8922E]">Packs</a>
              <a href="#about" className="hover:text-[#C8922E]">About</a>
              <a href="#subscription" className="hover:text-[#C8922E]">Subscription</a>
              <a href="#training" className="hover:text-[#C8922E]">Training</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-5">{isAr ? "الخدمات" : "Services"}</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <span>OQOOD Training</span>
              <span>TAS Training</span>
              <span>Developer Support</span>
              <span>Request Follow-up</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-5">{isAr ? "تواصل" : "Contact"}</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Dubai, United Arab Emirates</p>
              <a href="mailto:profftrainings@gmail.com" className="block hover:text-[#C8922E]">
                profftrainings@gmail.com
              </a>
            </div>

            <a
              href="#training"
              className="inline-flex mt-6 rounded-xl bg-[#C8922E] hover:bg-[#D6A84B] text-black px-5 py-3 font-black transition"
            >
              {isAr ? "احجز الآن" : "Book Now"}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 DevAcademy. {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
          <p>{isAr ? "منصة تدريب ودعم لأنظمة العقارات في دبي." : "Dubai real estate systems training & support platform."}</p>
        </div>
      </div>
    </footer>
  );
}