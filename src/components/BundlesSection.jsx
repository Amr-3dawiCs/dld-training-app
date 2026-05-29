import { useState } from "react";
import { motion } from "framer-motion";

export default function BundlesSection({ language }) {
  const isAr = language === "ar";
  const [selectedSystem, setSelectedSystem] = useState("");

  const goToPayment = (bundle) => {
    const selectedPackage = {
      title: bundle.title,
      system: bundle.hasSystemSelection ? selectedSystem : "Project Registration",
      price: bundle.hasSystemSelection
        ? selectedSystem === "OQOOD"
          ? "500 - 1,000 AED"
          : selectedSystem === "TAS"
          ? "700 - 1,000 AED"
          : ""
        : bundle.price,
    };

    if (bundle.hasSystemSelection && !selectedSystem) {
      alert(isAr ? "يرجى اختيار النظام أولاً." : "Please select the system first.");
      return;
    }

    localStorage.setItem("selectedPackage", JSON.stringify(selectedPackage));
    window.dispatchEvent(new Event("packageSelected"));
    document.getElementById("payment")?.scrollIntoView({ behavior: "smooth" });
  };

  const bundles = isAr
    ? [
        {
          title: "باقة تسجيل المشاريع",
          description:
            "باقة تدريبية احترافية مخصصة للمطورين العقاريين لفهم وتنفيذ إجراءات تسجيل المشاريع والمتطلبات المرتبطة بها بشكل واضح ومنظم.",
          border: "border-[#6B3FA0]/50",
          glow: "shadow-[0_0_45px_rgba(107,63,160,0.30)]",
          badge: "الأكثر طلباً",
          icon: "🏗️",
          price: "3,000 AED",
          features: [
            "تدريب فني على طلب تسجيل المشروع",
            "تدريب فني على طلب معاينة المشروع",
            "تدريب فني على طلب المسح العقاري",
            "شرح تفصيلي لسير العمل الخاص بكل إجراء",
            "توضيح الموافقات والإدارات المعنية بكل إجراء",
          ],
        },
        {
          title: "باقة المتابعة وتتبع الطلبات",
          description:
            "باقة دعم مرنة تساعد المستخدم على فهم إجراء محدد، ومتابعة الطلب، ومعالجة الملاحظات الفنية مع الجهات المختصة.",
          border: "border-[#A32116]/50",
          glow: "shadow-[0_0_45px_rgba(163,33,22,0.25)]",
          badge: "مرنة",
          icon: "📋",
          hasSystemSelection: true,
          features: [
            "تدريب على إجراء محدد حسب اختيار المستخدم",
            "إرشاد عملي لفهم خطوات تنفيذ الإجراء",
            "متابعة الطلب مع الإدارات الفنية المختصة",
            "المساعدة في معالجة الملاحظات الفنية خلال يومي عمل",
          ],
        },
      ]
    : [
        {
          title: "Project Registration Pack",
          description:
            "A professional training package designed for real estate developers to understand and apply project registration procedures and related DLD requirements with clarity.",
          border: "border-[#6B3FA0]/50",
          glow: "shadow-[0_0_45px_rgba(107,63,160,0.30)]",
          badge: "MOST REQUESTED",
          icon: "🏗️",
          price: "3,000 AED",
          features: [
            "Technical training on Project Registration Request",
            "Technical training on Project Inspection Request",
            "Technical training on Property Survey Request",
            "Detailed workflow explanation for each procedure",
            "Clarification of approvals and responsible departments",
          ],
        },
        {
          title: "Follow-up & Track Pack",
          description:
            "A flexible support package that helps users understand a selected procedure, follow up requests, and resolve technical observations with the relevant department.",
          border: "border-[#A32116]/50",
          glow: "shadow-[0_0_45px_rgba(163,33,22,0.25)]",
          badge: "FLEXIBLE SUPPORT",
          icon: "📋",
          hasSystemSelection: true,
          features: [
            "Training on one selected procedure",
            "Practical guidance on procedure execution steps",
            "Follow-up with the relevant technical department",
            "Support in resolving technical observations within 2 working days",
          ],
        },
      ];

  const getSelectedPrice = () => {
    if (selectedSystem === "OQOOD") return "500 - 1,000 AED";
    if (selectedSystem === "TAS") return "700 - 1,000 AED";
    return "";
  };

  return (
    <section
      id="packages"
      dir={isAr ? "rtl" : "ltr"}
      className="relative py-20 sm:py-28 bg-[#060912] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#6B3FA0]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#A32116]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/5 border border-[#C8922E]/20 text-xs font-black tracking-wide text-[#C8922E]">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            {isAr ? "باقات الخدمات الاحترافية" : "PROFESSIONAL SERVICE PACKAGES"}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            {isAr ? (
              <>
                حلول <span className="text-[#42ff86]">احترافية</span>{" "}
                <span className="text-[#6B3FA0]">لـ OQOOD</span>{" "}
                <span className="text-[#A32116]">و TAS</span>
              </>
            ) : (
              <>
                Professional <span className="text-[#42ff86]">Support</span>{" "}
                <span className="text-[#6B3FA0]">OQOOD</span> &{" "}
                <span className="text-[#A32116]">TAS</span> Packages
              </>
            )}
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? "اختر الباقة المناسبة لاحتياجات التدريب والإرشاد والمتابعة الخاصة بشركتك."
              : "Choose the right package for your organization’s training, guidance, and follow-up needs."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border ${bundle.border} bg-[#0c1220]/90 backdrop-blur-xl p-6 sm:p-8 ${bundle.glow} transition`}
            >
              <div className="absolute top-5 right-5 text-[10px] font-black px-3 py-1 rounded-full bg-white/5 border border-[#C8922E]/20 text-[#C8922E]">
                {bundle.badge}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center text-3xl mb-6">
                {bundle.icon}
              </div>

              <h3 className="text-white text-2xl font-black leading-snug mb-3">
                {bundle.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {bundle.description}
              </p>

              <div className="space-y-3 mb-8">
                {bundle.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-[#42ff86] mt-0.5">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                {bundle.hasSystemSelection && (
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <label className="text-xs uppercase tracking-widest text-slate-500">
                        {isAr ? "اختر النظام" : "Select System"}
                      </label>

                      {selectedSystem && (
                        <span className="text-xs sm:text-sm font-semibold text-[#42ff86] whitespace-nowrap">
                          {getSelectedPrice()}
                        </span>
                      )}
                    </div>

                    <select
                      value={selectedSystem}
                      onChange={(e) => setSelectedSystem(e.target.value)}
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8922E]"
                    >
                      <option value="">{isAr ? "يرجى الاختيار" : "Please Select"}</option>
                      <option value="OQOOD">OQOOD</option>
                      <option value="TAS">TAS</option>
                    </select>
                  </div>
                )}

                {!bundle.hasSystemSelection && (
                  <div className="flex justify-end mb-5">
                    <span className="text-sm font-bold text-[#42ff86]">
                      {bundle.price}
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => goToPayment(bundle)}
                  className="block text-center w-full py-3 rounded-xl font-black transition bg-[#C8922E] hover:bg-[#D6A84B] text-black"
                >
                  {isAr ? "ادفع الآن ←" : "Pay Now →"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}