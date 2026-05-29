import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ language }) {
  const isAr = language === "ar";
  const [open, setOpen] = useState(0);

  const faqs = isAr
    ? [
        ["ما الأنظمة المتاحة حالياً؟", "حالياً التدريب والإرشاد متاحان لنظامي OQOOD و TAS فقط."],
        ["هل يمكن اختيار OQOOD و TAS؟", "نعم، يمكن اختيار النظام المطلوب حسب الباقة أو طلب التدريب."],
        ["هل المنصة للتدريب فقط؟", "لا، المنصة تشمل التدريب، الإرشاد، المتابعة، ودعم الملاحظات الفنية."],
        ["هل يتم إرسال تأكيد؟", "نعم، يتم إرسال تأكيد تلقائي إلى البريد الإلكتروني المدخل."],
      ]
    : [
        ["Which systems are available now?", "Currently, training and guidance are available for OQOOD and TAS only."],
        ["Can I select OQOOD or TAS?", "Yes, you can select the required system depending on the package or training request."],
        ["Is this only for training?", "No, the platform covers training, guidance, follow-up, and technical observation support."],
        ["Will I receive confirmation?", "Yes, an automatic confirmation is sent to the submitted email address."],
      ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#060912] overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C8922E] bg-white/5 border border-[#C8922E]/20 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            FAQ
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map(([q, a], index) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-[#0c1220]/95 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
              >
                <span className="font-black text-white">{q}</span>
                <span className="w-9 h-9 rounded-full bg-white/5 border border-[#C8922E]/20 flex items-center justify-center text-xl text-[#C8922E]">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <div className="px-5 sm:px-6 pb-6 text-slate-400 border-t border-white/10 pt-4">
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}