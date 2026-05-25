import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "../firebase/firebase";

const oqoodModules = {
  "User Management": [
    "New Developer (7500 AED)",
    "Existing Developer (1050 AED)",
  ],

  Inquiries: [
    "Procedure Inquiry",
    "General Inquiry",
    "Property Inquiry",
  ],

  "Procedure Managements": [
    "Off-plan sell (Sell Pre-Registration)",
    "Procedure Modifications",
    "Project Completion Sell (Sale)",
    "Project Completion Sell (Delayed Sell)",
  ],

  "Property Survey": ["New Request", "Search"],

  "Property Termination": [
    "Power Of Attorney",
    "Termination",
    "Settlement",
  ],

  Reports: [
    "Project Inquiry",
    "Developer Title Deed",
    "Project Report",
  ],
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

export default function TrainingSection() {
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
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
      alert("Please select the system.");
      return;
    }

    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      alert("Training Request Submitted Successfully!");

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
      alert("Submission failed. Please check EmailJS or Firebase setup.");
    } finally {
      setLoading(false);
    }
  };

  const renderModules = (modules, type) => (
    <div className="space-y-6 mt-6">
      {Object.entries(modules).map(([category, items]) => (
        <div
          key={category}
          className="bg-white rounded-2xl p-5 border border-slate-200"
        >
          <h3 className="font-bold text-[#0b4f6c] mb-4">
            {category}
          </h3>

          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((item) => (
              <label
                key={item}
                className="flex gap-3 items-start bg-slate-50 p-3 rounded-xl border hover:border-[#01baef] cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData[type].includes(item)}
                  onChange={() => handleCheckbox(type, item)}
                  className="mt-1"
                />

                <span className="text-sm text-slate-700">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="training" className="py-16 sm:py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Training Request
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] mb-4">
            Ready to Train Your Team?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Book professional OQOOD and TAS systems training. Other DLD systems will
            be available soon.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-200">

          {step === 1 && (
            <>
              <label className="font-semibold text-[#0b4f6c]">
                System to be Trained *
              </label>

              <select
                name="selectedSystem"
                value={formData.selectedSystem}
                onChange={handleChange}
                required
                className="w-full mt-2 p-4 rounded-xl border border-slate-300"
              >
                <option value="">Please Select</option>
                <option value="OQOOD">OQOOD</option>
                <option value="TAS">TAS</option>
                <option value="BOTH">
                  BOTH (OQOOD & TAS)
                </option>
              </select>

              {showOqood && renderModules(oqoodModules, "oqood")}
              {showTas && renderModules(tasModules, "tas")}

              {formData.selectedSystem && (
                <div className="mt-6">
                  <label className="font-semibold text-[#0b4f6c]">
                    Other Procedure
                  </label>

                  <textarea
                    name="otherProcedure"
                    value={formData.otherProcedure}
                    onChange={handleChange}
                    placeholder="Add any other procedure type here..."
                    rows="4"
                    className="w-full mt-2 p-4 rounded-xl border border-slate-300"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="w-full mt-8 bg-[#1E293B] hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="font-semibold text-[#0b4f6c]">
                Trainer Type *
              </label>

              <select
                name="traineeType"
                value={formData.traineeType}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-slate-300"
              >
                <option value="">Please Select</option>

                <option value="Individual Trainer">
                  Individual Trainer
                </option>

                <option value="Development Company Trainer">
                  Trainer from Development Company
                </option>
              </select>

              {formData.traineeType ===
                "Development Company Trainer" && (
                  <input
                    type="text"
                    name="developmentCompany"
                    placeholder="Development Company Name *"
                    value={formData.developmentCompany}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-slate-300"
                  />
                )}

              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-slate-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-slate-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-slate-300"
              />

              <input
                type="text"
                name="eid"
                placeholder="EID Number *"
                value={formData.eid}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-slate-300"
              />


              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full bg-slate-300 hover:bg-slate-400 text-slate-800 py-4 rounded-xl font-bold"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0b4f6c] hover:bg-[#08384d] text-white py-4 rounded-xl font-bold"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}