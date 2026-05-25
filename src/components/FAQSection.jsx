import { useState } from "react";

const faqs = [
  {
    q: "Which systems are available now?",
    a: "Currently, training is available for OQOOD and TAS only. More systems will be added soon.",
  },
  {
    q: "Can I choose both OQOOD and TAS?",
    a: "Yes. You can select OQOOD, TAS, or both systems in the form.",
  },
  {
    q: "Who can submit the request?",
    a: "Individual trainers and trainers from development companies can submit training requests.",
  },
  {
    q: "Will I receive confirmation?",
    a: "Yes. The trainer receives an automatic confirmation email after submission.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
            FAQ
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left p-5"
              >
                <span className="font-semibold text-slate-900">
                  {item.q}
                </span>
                <span className="text-xl text-slate-500">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}