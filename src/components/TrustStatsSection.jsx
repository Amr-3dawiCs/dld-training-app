import { motion } from "framer-motion";

export default function TrustStatsSection({ language }) {
  const isAr = language === "ar";

  const stats = isAr
    ? [
        ["2", "أنظمة رئيسية", "OQOOD و TAS"],
        ["50+", "إجراء مدعوم", "تدريب وإرشاد"],
        ["24h", "استجابة أولية", "تنظيم ومتابعة"],
        ["2026", "منصة حديثة", "تجربة رقمية متطورة"],
      ]
    : [
        ["2", "Core Systems", "OQOOD & TAS"],
        ["50+", "Supported Procedures", "Training & guidance"],
        ["24h", "Initial Response", "Structured follow-up"],
        ["2026", "Modern Platform", "Future-ready experience"],
      ];

  return (
    <section className="relative py-14 bg-[#060912]" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(([number, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#0c1220]/95 border border-[#C8922E]/15 p-6 text-center"
            >
              <h3 className="text-4xl font-black text-[#C8922E] mb-2">
                {number}
              </h3>

              <p className="text-white font-black">{title}</p>

              <p className="text-slate-500 text-sm mt-1">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}