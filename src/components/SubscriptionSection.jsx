import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";

const oqoodProcedures = [
  "New Developer",
  "Existing Developer",
  "Procedure Inquiry",
  "General Inquiry",
  "Property Inquiry",
  "Off-plan Sell",
  "Procedure Modifications",
  "Project Completion Sell",
  "Property Survey - New Request",
  "Property Survey - Search",
  "Power Of Attorney",
  "Termination",
  "Settlement",
  "Project Inquiry",
  "Developer Title Deed",
  "Project Report",
];

const tasProcedures = [
  "Account Activation",
  "Beneficiary Approval Request",
  "Update Beneficiary Request",
  "Email Notification",
  "Payment Request",
  "Completed Requests Search",
  "Project Payment Plan",
  "Property Payment Plan",
  "Request Monitor",
  "Transfer Project AC to AC",
  "Project Registration",
  "Project Re-registration",
  "Project Inspection",
  "Project Cancellation",
];

export default function SubscriptionSection({ language }) {
  const isAr = language === "ar";

  const [standardSystem, setStandardSystem] = useState("");
  const [standardProcedure, setStandardProcedure] = useState("");

  const [goldSystem, setGoldSystem] = useState("");
  const [goldInquiry, setGoldInquiry] = useState("");
  const [goldProcedure, setGoldProcedure] = useState("");

  const [premiumSystem, setPremiumSystem] = useState("");
  const [premiumProcedure, setPremiumProcedure] = useState("");

  const getProcedures = (system) => {
    if (system === "OQOOD") return oqoodProcedures;
    if (system === "TAS") return tasProcedures;
    return [];
  };

  const getStandardPrice = () => {
    if (!standardSystem || !standardProcedure) return "";
    return standardSystem === "OQOOD" ? "500 AED" : "700 AED";
  };

  const getGoldPrice = () => {
    if (!goldSystem || !goldProcedure) return "";
    return goldSystem === "OQOOD" ? "1,000 AED" : "1,200 AED";
  };

  const getPremiumPrice = () => {
    if (!premiumSystem || !premiumProcedure) return "";
    return premiumSystem === "OQOOD" ? "1,500 AED" : "1,700 AED";
  };

  const plans = [
    {
      name: isAr ? "أساسي" : "Standard",
      subtitle: isAr ? "تدريب على إجراء محدد" : "Specific procedure training",
      description: isAr
        ? "هذه الباقة مخصصة لاختيار نظام وإجراء معين والتدريب على طريقة التقديم وإكمال الإجراء."
        : "This package is designed for selecting one system and one specific procedure, then getting trained on how to apply and complete it.",
      system: standardSystem,
      setSystem: setStandardSystem,
      procedure: standardProcedure,
      setProcedure: setStandardProcedure,
      price: getStandardPrice(),
      color: "border-[#6B3FA0]/45",
      iconColor: "text-[#6B3FA0]",
      iconBorder: "border-[#6B3FA0]/40",
      iconBg: "bg-[#6B3FA0]/10",
      icon: GraduationCap,
    },
    {
      name: isAr ? "ذهبي" : "Gold",
      subtitle: isAr
        ? "استفسارات ودعم الإجراءات"
        : "Inquiries & procedure support",
      description: isAr
        ? "هذه الباقة مخصصة للاستفسارات والدعم على الإجراءات مع توضيح المتطلبات والخطوات."
        : "This package is for inquiries and support on procedures, including clarification of requirements and steps.",
      system: goldSystem,
      setSystem: setGoldSystem,
      inquiry: goldInquiry,
      setInquiry: setGoldInquiry,
      procedure: goldProcedure,
      setProcedure: setGoldProcedure,
      price: getGoldPrice(),
      color: "border-[#C8922E]/50",
      iconColor: "text-[#C8922E]",
      iconBorder: "border-[#C8922E]/40",
      iconBg: "bg-[#C8922E]/10",
      icon: MessageCircleQuestion,
      hasInquiry: true,
    },
    {
      name: isAr ? "بريميوم" : "Premium",
      subtitle: isAr
        ? "تدريب ومتابعة ودعم فني"
        : "Training, tracking & technical support",
      description: isAr
        ? "هذه الباقة تشمل التدريب وتتبع الإجراء وتقديم الدعم في حال وجود أي مشكلة فنية."
        : "This package includes training, procedure tracking, and support if any technical issue occurs.",
      system: premiumSystem,
      setSystem: setPremiumSystem,
      procedure: premiumProcedure,
      setProcedure: setPremiumProcedure,
      price: getPremiumPrice(),
      color: "border-[#A32116]/45",
      iconColor: "text-[#A32116]",
      iconBorder: "border-[#A32116]/40",
      iconBg: "bg-[#A32116]/10",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="subscription"
      dir={isAr ? "rtl" : "ltr"}
      className="relative py-20 sm:py-28 bg-[#070b14] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C8922E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#6B3FA0]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/5 border border-[#C8922E]/20 text-xs font-black tracking-wide text-[#C8922E]">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            {isAr ? "الاشتراكات" : "SUBSCRIPTION PLANS"}
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            {isAr ? (
              <>
                اختر <span className="text-[#C8922E]">باقة الدعم</span>{" "}
                المناسبة
              </>
            ) : (
              <>
                Choose Your{" "}
                <span className="text-[#C8922E]">Support Plan</span>
              </>
            )}
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? "اختر النظام والإجراء المطلوب للحصول على التدريب أو الدعم المناسب."
              : "Select the system and procedure to receive the right training or support package."}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`rounded-3xl bg-[#0c1220]/95 border ${plan.color} p-6 sm:p-7 transition h-full min-h-[760px] flex flex-col overflow-visible shadow-[0_0_35px_rgba(200,146,46,0.08)]`}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${plan.iconBg} border ${plan.iconBorder} flex items-center justify-center mb-5`}
                  >
                    <Icon size={32} strokeWidth={2.2} className={plan.iconColor} />
                  </div>

                  <h3 className="text-3xl font-black text-white mb-3">
                    {plan.name}
                  </h3>

                  <p className="text-[#C8922E] font-bold text-sm mb-5">
                    {plan.subtitle}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed min-h-[105px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                    {isAr ? "النظام" : "System"}
                  </label>

                  <select
                    value={plan.system}
                    onChange={(e) => {
                      plan.setSystem(e.target.value);
                      plan.setProcedure("");
                    }}
                    className="w-full bg-[#111827] border border-[#C8922E]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8922E]"
                  >
                    <option value="">
                      {isAr ? "يرجى الاختيار" : "Please Select"}
                    </option>
                    <option value="OQOOD">OQOOD</option>
                    <option value="TAS">TAS</option>
                  </select>
                </div>

                {plan.hasInquiry && (
                  <div className="mb-8">
                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                      {isAr ? "الاستفسار" : "Inquiry"}
                    </label>

                    <textarea
                      value={plan.inquiry}
                      onChange={(e) => plan.setInquiry(e.target.value)}
                      rows="4"
                      placeholder={
                        isAr
                          ? "اكتب استفسارك هنا..."
                          : "Write your inquiry here..."
                      }
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8922E]"
                    />
                  </div>
                )}

                <div className="mb-8 pt-4 border-t border-white/5">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
                    {isAr ? "الإجراء" : "Procedure"}
                  </label>

                  <select
                    value={plan.procedure}
                    onChange={(e) => plan.setProcedure(e.target.value)}
                    disabled={!plan.system}
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white disabled:opacity-50 focus:outline-none focus:border-[#C8922E]"
                  >
                    <option value="">
                      {plan.system
                        ? isAr
                          ? "يرجى اختيار الإجراء"
                          : "Please Select Procedure"
                        : isAr
                        ? "اختر النظام أولاً"
                        : "Select System First"}
                    </option>

                    {getProcedures(plan.system).map((procedure) => (
                      <option key={procedure} value={procedure}>
                        {procedure}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between mb-6 border-t border-white/10 pt-5">
                    <span className="text-xs uppercase tracking-widest text-slate-500">
                      {isAr ? "السعر" : "Price"}
                    </span>

                    <span className="text-sm font-bold text-[#42ff86]">
                      {plan.price || "—"}
                    </span>
                  </div>

                  <a
                    href="#training"
                    className="block text-center w-full py-3 rounded-xl font-black transition text-black bg-[#C8922E] hover:bg-[#D6A84B]"
                  >
                    {isAr ? "احجز الآن" : "Book Now"}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}