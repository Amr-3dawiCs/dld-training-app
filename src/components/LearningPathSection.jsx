import { motion } from "framer-motion";

export default function LearningPathSection({ language }) {
  const isAr = language === "ar";

  const steps = isAr
    ? [
        ["01", "اختر النظام", "حدد OQOOD أو TAS حسب احتياجك."],
        ["02", "اختر الإجراء", "حدد الإجراء المطلوب التدريب أو الدعم عليه."],
        ["03", "احجز الباقة", "اختر الباقة أو الاشتراك المناسب."],
        ["04", "ابدأ التدريب", "احصل على الإرشاد والمتابعة بشكل منظم."],
      ]
    : [
        ["01", "Choose System", "Select OQOOD or TAS based on your need."],
        ["02", "Select Procedure", "Choose the procedure requiring training or support."],
        ["03", "Book Package", "Select the right package or subscription plan."],
        ["04", "Start Training", "Receive structured guidance and follow-up."],
      ];

  return (
    <section className="relative py-20 bg-[#070b14]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C8922E] bg-white/5 border border-[#C8922E]/20 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            {isAr ? "رحلة المستخدم" : "User Journey"}
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-white">
            {isAr ? "طريقة عمل المنصة" : "How DevAcademy Works"}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map(([num, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#0c1220]/95 border border-white/10 p-6 hover:border-[#C8922E]/50 transition"
            >
              <span className="text-[#C8922E] font-black text-sm">{num}</span>

              <h3 className="text-white text-xl font-black mt-4 mb-3">
                {title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}