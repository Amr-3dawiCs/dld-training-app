import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "../firebase/firebase";

const oqoodModules = {
  "User Management": [
    "New Developer (7500 AED)",
    "Existing Developer (1050 AED)",
  ],
  Inquiries: ["Procedure Inquiry", "General Inquiry", "Property Inquiry"],
  "Procedure Managements": [
    "Off-plan sell (Sell Pre-Registration)",
    "Procedure Modifications",
    "Project Completion Sell (Sale)",
    "Project Completion Sell (Delayed Sell)",
  ],
  "Property Survey": ["New Request", "Search"],
  "Property Termination": ["Power Of Attorney", "Termination", "Settlement"],
  Reports: ["Project Inquiry", "Developer Title Deed", "Project Report"],
};

const tasModules = {
  "Financial Request": [
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
  ],
  "Trust Account Requests": [
    "Project Registration",
    "Project Re-registration",
    "Project Inspection",
    "Project Cancellation",
  ],
};

export default function TrainingSection({ language }) {
  const isAr = language === "ar";
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    selectedSystem: "",
    oqood: [],
    tas: [],
    otherProcedure: "",
    traineeType: "",
    developmentCompany: "",
    fullName: "",
    email: "",
    phone: "",
    eid: "",
  });

  const showOqood =
    formData.selectedSystem === "OQOOD" ||
    formData.selectedSystem === "BOTH";

  const showTas =
    formData.selectedSystem === "TAS" ||
    formData.selectedSystem === "BOTH";

  const inputClass =
    "w-full p-4 rounded-xl bg-[#111827] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8922E] transition";

  const selectClass =
    "w-full p-4 rounded-xl bg-[#111827] border border-white/10 text-white focus:outline-none focus:border-[#C8922E] transition";

  const labelClass = "font-semibold text-slate-200";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, phone: onlyNumbers });
  };

  const handleEidChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 15);

    let formatted = digits;

    if (digits.length > 3) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }

    if (digits.length > 7) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(
        3,
        7
      )}-${digits.slice(7)}`;
    }

    if (digits.length > 14) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(
        3,
        7
      )}-${digits.slice(7, 14)}-${digits.slice(14, 15)}`;
    }

    setFormData({ ...formData, eid: formatted });
  };

  const handleCheckbox = (type, value) => {
    const exists = formData[type].includes(value);

    setFormData({
      ...formData,
      [type]: exists
        ? formData[type].filter((item) => item !== value)
        : [...formData[type], value],
    });
  };

  const handleNext = () => {
    if (!formData.selectedSystem) {
      alert(isAr ? "يرجى اختيار النظام." : "Please select the system.");
      return;
    }

    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const eidRegex = /^784-\d{4}-\d{7}-\d{1}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert(
        isAr
          ? "رقم الهاتف يجب أن يتكون من 10 أرقام فقط."
          : "Phone number must be exactly 10 numbers."
      );
      return;
    }

    if (!eidRegex.test(formData.eid)) {
      alert(
        isAr
          ? "رقم الهوية يجب أن يكون بهذا الشكل: 784-xxxx-xxxxxxx-x"
          : "EID must be in this format: 784-xxxx-xxxxxxx-x"
      );
      return;
    }

    try {
      setLoading(true);

      const submissionData = {
        selectedSystem: formData.selectedSystem,
        oqood: formData.oqood,
        tas: formData.tas,
        otherProcedure: formData.otherProcedure,
        traineeType: formData.traineeType,
        developmentCompany: formData.developmentCompany,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        eid: formData.eid,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "trainingRequests"), submissionData);

      const emailParams = {
        to_admin: "info@dltrainings.com",
        user_email: formData.email,
        user_name: formData.fullName,
        phone: formData.phone,
        eid: formData.eid,
        selected_system: formData.selectedSystem,
        trainee_type: formData.traineeType,
        development_company: formData.developmentCompany || "Not Applicable",
        oqood_modules: formData.oqood.length
          ? formData.oqood.join(", ")
          : "Not Selected",
        tas_modules: formData.tas.length
          ? formData.tas.join(", ")
          : "Not Selected",
        other_procedure: formData.otherProcedure || "None",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert(
        isAr
          ? "تم إرسال طلب التدريب بنجاح!"
          : "Training Request Submitted Successfully!"
      );

      setFormData({
        selectedSystem: "",
        oqood: [],
        tas: [],
        otherProcedure: "",
        traineeType: "",
        developmentCompany: "",
        fullName: "",
        email: "",
        phone: "",
        eid: "",
      });

      setStep(1);
    } catch (error) {
      console.error(error);
      alert(
        isAr
          ? "فشل إرسال الطلب. يرجى التحقق من الإعدادات."
          : "Submission failed. Please check EmailJS or Firebase setup."
      );
    } finally {
      setLoading(false);
    }
  };

  const renderModules = (modules, type) => (
    <div className="space-y-6 mt-6">
      {Object.entries(modules).map(([category, items]) => (
        <div
          key={category}
          className="bg-[#111827] rounded-2xl p-5 border border-white/10"
        >
          <h3 className="font-black text-white mb-4">{category}</h3>

          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((item) => (
              <label
                key={item}
                className="flex gap-3 items-start bg-[#0c1220] p-3 rounded-xl border border-white/10 hover:border-[#C8922E]/60 cursor-pointer text-slate-300 transition"
              >
                <input
                  type="checkbox"
                  checked={formData[type].includes(item)}
                  onChange={() => handleCheckbox(type, item)}
                  className="mt-1 accent-[#C8922E]"
                />

                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="training"
      className="relative py-16 sm:py-24 bg-[#070b14] scroll-mt-24 overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#6B3FA0]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#A32116]/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C8922E] bg-white/5 border border-[#C8922E]/20 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8922E]" />
            {isAr ? "طلب تدريب" : "Training Request"}
          </p>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            {isAr ? (
              <>
                هل تحتاج إلى تدريب على{" "}
                <span className="text-[#6B3FA0]">OQOOD</span>{" "}
                أو <span className="text-[#E74C3C]">TAS</span>؟
              </>
            ) : (
              <>
                Ready for{" "}
                <span className="text-[#6B3FA0]">OQOOD</span>{" "}
                & <span className="text-[#E74C3C]">TAS</span>{" "}
                Training?
              </>
            )}
          </h2>

          <p className="text-slate-400 leading-relaxed">
            {isAr
              ? "أرسل طلب التدريب أو الإرشاد الخاص بك وحدد الإجراءات التي تحتاج إلى دعم فيها."
              : "Submit your training or guidance request and tell us what procedures you need support with."}
          </p>
        </div>

        <div className="bg-[#0c1220]/95 rounded-[2rem] p-5 sm:p-8 shadow-[0_0_50px_rgba(200,146,46,0.08)] border border-[#C8922E]/15">
          {step === 1 && (
            <>
              <label className={labelClass}>
                {isAr ? "النظام المطلوب للتدريب *" : "System to be Trained *"}
              </label>

              <select
                name="selectedSystem"
                value={formData.selectedSystem}
                onChange={handleChange}
                required
                className={`${selectClass} mt-2`}
              >
                <option value="">
                  {isAr ? "يرجى الاختيار" : "Please Select"}
                </option>
                <option value="OQOOD">OQOOD</option>
                <option value="TAS">TAS</option>
                <option value="BOTH">
                  {isAr ? "كلاهما OQOOD و TAS" : "BOTH (OQOOD & TAS)"}
                </option>
              </select>

              {showOqood && renderModules(oqoodModules, "oqood")}
              {showTas && renderModules(tasModules, "tas")}

              {formData.selectedSystem && (
                <div className="mt-6">
                  <label className={labelClass}>
                    {isAr ? "إجراء آخر" : "Other Procedure"}
                  </label>

                  <textarea
                    name="otherProcedure"
                    value={formData.otherProcedure}
                    onChange={handleChange}
                    placeholder={
                      isAr
                        ? "أضف أي إجراء آخر هنا..."
                        : "Add any other procedure type here..."
                    }
                    rows="4"
                    className={`${inputClass} mt-2`}
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="w-full mt-8 bg-[#C8922E] hover:bg-[#D6A84B] text-black py-4 rounded-xl font-black text-lg transition shadow-[0_0_28px_rgba(200,146,46,0.25)]"
              >
                {isAr ? "التالي" : "Next"}
              </button>
            </>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className={labelClass}>
                {isAr ? "نوع المتدرب *" : "Trainer Type *"}
              </label>

              <select
                name="traineeType"
                value={formData.traineeType}
                onChange={handleChange}
                required
                className={selectClass}
              >
                <option value="">
                  {isAr ? "يرجى الاختيار" : "Please Select"}
                </option>

                <option value="Individual Trainer">
                  {isAr ? "متدرب فردي" : "Individual Trainer"}
                </option>

                <option value="Development Company Trainer">
                  {isAr
                    ? "متدرب من شركة تطوير عقاري"
                    : "Trainer from Development Company"}
                </option>
              </select>

              {formData.traineeType === "Development Company Trainer" && (
                <input
                  type="text"
                  name="developmentCompany"
                  placeholder={
                    isAr
                      ? "اسم شركة التطوير العقاري *"
                      : "Development Company Name *"
                  }
                  value={formData.developmentCompany}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              )}

              <input
                type="text"
                name="fullName"
                placeholder={isAr ? "الاسم الكامل *" : "Full Name *"}
                value={formData.fullName}
                onChange={handleChange}
                required
                className={inputClass}
              />

              <input
                type="email"
                name="email"
                placeholder={isAr ? "البريد الإلكتروني *" : "Email Address *"}
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />

              <input
                type="tel"
                name="phone"
                placeholder={
                  isAr
                    ? "رقم الهاتف - 10 أرقام *"
                    : "Phone Number - 10 digits *"
                }
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                maxLength="10"
                className={inputClass}
              />

              <input
                type="text"
                name="eid"
                placeholder={
                  isAr ? "784-xxxx-xxxxxxx-x *" : "EID: 784-xxxx-xxxxxxx-x *"
                }
                value={formData.eid}
                onChange={handleEidChange}
                required
                maxLength="18"
                className={inputClass}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full bg-white/10 hover:bg-white/15 text-white py-4 rounded-xl font-black border border-white/10 transition"
                >
                  {isAr ? "رجوع" : "Back"}
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C8922E] hover:bg-[#D6A84B] disabled:opacity-60 text-black py-4 rounded-xl font-black transition shadow-[0_0_28px_rgba(200,146,46,0.25)]"
                >
                  {loading
                    ? isAr
                      ? "جارٍ الإرسال..."
                      : "Submitting..."
                    : isAr
                    ? "إرسال الطلب"
                    : "Submit Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}