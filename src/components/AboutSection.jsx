export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#6B3FA0] mb-3">
            About
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] mb-5">
            Training and guidance for OQOOD & TAS users
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            This website helps users request training and guidance for OQOOD and
            TAS systems, especially when they need support understanding
            procedures, workflows, or system steps.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Users can choose the system, select the required topics, and submit
            their request so the training team can guide them clearly and
            professionally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Guidance", "Support for users facing issues in OQOOD or TAS."],
            ["Training", "Step-by-step explanation of system procedures."],
            ["Organized", "Users can select the exact modules they need."],
            ["Support", "Requests are received and followed up by the team."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5"
            >
              <h3 className="font-black text-[#1E293B] mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}