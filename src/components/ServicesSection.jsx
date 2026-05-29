import { motion } from "framer-motion";

export default function ServicesSection({ language }) {
  const isAr = language === "ar";

  const mainServices = isAr
    ? [
        {
          title: "طلبات التدريب",
          text: "احجز تدريب منظم على أنظمة OQOOD أو TAS حسب الإجراء المطلوب.",
          icon: "🎓",
        },
        {
          title: "إرشاد الإجراءات",
          text: "احصل على شرح واضح لخطوات الإجراءات والمتطلبات داخل النظام.",
          icon: "🧭",
        },
        {
          title: "دعم المستخدمين",
          text: "مساعدة المستخدمين عند وجود صعوبة أو عدم وضوح في سير العمل.",
          icon: "🛠️",
        },
      ]
    : [
        {
          title: "Training Requests",
          text: "Book structured training for OQOOD or TAS based on the required procedure.",
          icon: "🎓",
        },
        {
          title: "Procedure Guidance",
          text: "Get clear explanation of procedure steps, requirements, and system workflow.",
          icon: "🧭",
        },
        {
          title: "User Support",
          text: "Support users when they face unclear steps, workflow issues, or technical observations.",
          icon: "🛠️",
        },
      ];

  const comingSoon = isAr
    ? [
        "اشتراكات شهرية للدعم المستمر",
        "قاعدة معرفة ودروس تعليمية",
        "تقارير وتحليل الطلبات",
      ]
    : [
        "Monthly support subscriptions",
        "Knowledge base and tutorials",
        "Reports and request analytics",
      ];

  return (
    <section
      className="relative py-20 sm:py-28 bg-[#060912] overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#6B3FA0]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A32116]/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,146,46,0.06),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C8922E] bg-white/5 border border-[#C8922E]/20 rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            {isAr ? "الخدمات" : "Services"}
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
            {isAr ? (
              <>
                خدمات <span className="text-[#42ff86]">تدريب</span>{" "}
                <span className="text-[#6B3FA0]">وإرشاد</span>{" "}
                <span className="text-[#A32116]">احترافية</span>
              </>
            ) : (
              <>
                Professional{" "}
                <span className="text-[#42ff86]">Training</span>{" "}
                <span className="text-[#6B3FA0]">Guidance</span>{" "}
                <span className="text-[#A32116]">Support</span>
              </>
            )}
          </h2>

          <p className="text-slate-400 leading-relaxed">
            {isAr
              ? "منصة تساعد المستخدمين وشركات التطوير على طلب التدريب، فهم الإجراءات، والحصول على الدعم بطريقة منظمة."
              : "A platform that helps users and development companies request training, understand procedures, and receive organized support."}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-[#0c1220]/95 rounded-3xl p-7 border border-white/10 shadow-xl hover:border-[#C8922E]/50 transition"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8922E]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#C8922E]/10 border border-[#C8922E]/30 flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>

                <p className="text-[#C8922E] text-xs font-black tracking-widest uppercase mb-3">
                  0{index + 1}
                </p>

                <h3 className="font-black text-white text-xl mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[#0c1220] via-[#111827] to-[#0c1220] border border-dashed border-[#C8922E]/30 p-6 sm:p-8"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-center">
            <div>
              <p className="text-[#C8922E] text-xs font-black tracking-widest uppercase mb-3">
                {isAr ? "قريباً" : "Coming Soon"}
              </p>

              <h3 className="text-white text-2xl font-black mb-3">
                {isAr ? "خدمات إضافية قريباً" : "More Services Coming Soon"}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {isAr
                  ? "سيتم تطوير المنصة لتشمل خدمات أكثر تساعد المستخدمين على المتابعة والتعلم بشكل أسرع."
                  : "The platform will expand with more services to help users follow up, learn faster, and manage requests better."}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {comingSoon.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4"
                >
                  <span className="text-[#42ff86] text-sm font-black">
                    0{index + 4}
                  </span>

                  <p className="text-slate-300 text-sm font-semibold mt-2 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}