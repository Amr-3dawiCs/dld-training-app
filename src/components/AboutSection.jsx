import { motion } from "framer-motion";

export default function AboutSection({ language }) {
  const isAr = language === "ar";

  const cards = isAr
    ? [
        ["إرشاد عملي", "مساعدة المستخدمين على فهم خطوات OQOOD و TAS.", "🧭"],
        ["دعم فني", "توجيه واضح عند وجود صعوبة أو ملاحظة فنية.", "🛠️"],
        ["تنظيم الطلبات", "اختيار النظام والإجراء المطلوب بشكل واضح.", "✅"],
        ["متابعة احترافية", "استلام الطلب والتعامل معه بطريقة منظمة.", "📩"],
      ]
    : [
        ["Practical Guidance", "Help users understand OQOOD and TAS steps.", "🧭"],
        ["Technical Support", "Clear guidance for workflow or technical issues.", "🛠️"],
        ["Organized Requests", "Select the required system and procedure clearly.", "✅"],
        ["Professional Follow-up", "Requests are received and handled professionally.", "📩"],
      ];

  return (
    <section
      id="about"
      dir={isAr ? "rtl" : "ltr"}
      className="relative py-16 sm:py-24 bg-[#070b14] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#6B3FA0]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A32116]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C8922E] bg-white/5 border border-[#C8922E]/20 rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            {isAr ? "عن المنصة" : "About Platform"}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            {isAr ? (
              <>
                تدريب وإرشاد لمستخدمي{" "}
                <span className="text-[#42ff86]">OQOOD</span>{" "}
                <span className="text-[#6B3FA0]">&</span>{" "}
                <span className="text-[#A32116]">TAS</span>
              </>
            ) : (
              <>
                Training and Guidance for{" "}
                <span className="text-[#42ff86]">OQOOD</span>{" "}
                <span className="text-[#6B3FA0]">&</span>{" "}
                <span className="text-[#A32116]">TAS</span>{" "}
                Users
              </>
            )}
          </h2>

          <p className="text-slate-400 leading-relaxed mb-5">
            {isAr
              ? "منصة تساعد المطورين والمستخدمين على طلب التدريب أو الإرشاد عند الحاجة إلى فهم الإجراءات أو حل الملاحظات الفنية."
              : "A platform that helps developers and users request training or guidance when they need to understand procedures or resolve technical observations."}
          </p>

          <a
            href="#training"
            className="inline-flex rounded-xl bg-[#C8922E] hover:bg-[#D6A84B] text-black px-6 py-3 font-black transition"
          >
            {isAr ? "طلب تدريب" : "Request Training"}
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map(([title, text, icon], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#0c1220]/95 border border-white/10 p-6 hover:border-[#C8922E]/50 transition"
            >
              <div className="text-2xl mb-4">{icon}</div>
              <h3 className="font-black text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}