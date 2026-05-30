import { Bot, Sparkles } from "lucide-react";

export default function AIAssistantPreview({ language }) {
  const isAr = language === "ar";

  return (
    <section className="relative py-20 bg-[#060912]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C8922E] bg-white/5 border border-[#C8922E]/20 rounded-full px-4 py-2 mb-5">
            <Sparkles size={14} />
            {isAr ? "قريباً" : "Coming Soon"}
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-5">
            {isAr ? (
              <>
                مساعد <span className="text-[#C8922E]">DevAcademy AI</span>
              </>
            ) : (
              <>
                Meet <span className="text-[#C8922E]">DevAcademy AI</span>
              </>
            )}
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            {isAr
              ? "مساعد ذكي لمساعدة المستخدمين على فهم إجراءات OQOOD و TAS، المتطلبات، خطوات العمل، وأسباب الملاحظات الفنية."
              : "An intelligent assistant designed to help users understand OQOOD and TAS procedures, requirements, workflows, and technical observations."}
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              isAr ? "شرح الإجراءات" : "Procedure guidance",
              isAr ? "متطلبات الطلب" : "Request requirements",
              isAr ? "أسباب الرفض" : "Rejection reasons",
              isAr ? "مسار التعلم" : "Learning path",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#0c1220] border border-white/10 p-4 text-slate-300"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-[#0c1220]/95 border border-[#C8922E]/20 p-6 shadow-[0_0_45px_rgba(200,146,46,0.12)]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-[#C8922E]/10 border border-[#C8922E]/30 flex items-center justify-center">
              <Bot className="text-[#C8922E]" />
            </div>

            <div>
              <h3 className="text-white font-black">DevAcademy AI</h3>
              <p className="text-slate-500 text-sm">Procedure Assistant</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="bg-[#111827] rounded-2xl p-4 text-slate-300">
              How can I register a new project in OQOOD?
            </div>

            <div className="bg-[#C8922E]/10 border border-[#C8922E]/20 rounded-2xl p-4 text-slate-200">
              I can guide you through the Project Registration Request,
              required steps, workflow, and common approval points.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}