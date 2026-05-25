import dldLogo from "../components/DLDLogos.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC]/95 to-[#EEE7F7]/80" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex mb-5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold shadow-sm">
            Professional DLD System Training
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E293B] leading-tight mb-5">
            DLD Systems Training Platform
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
            Submit organized training requests for OQOOD and TAS, select the
            required modules, and receive automatic confirmation by email.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#training"
              className="w-full sm:w-auto text-center bg-[#1E293B] hover:bg-slate-800 text-white px-7 py-3 rounded-xl font-bold transition shadow-md"
            >
              Book Training
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-[#1E293B] px-7 py-3 rounded-xl font-bold border border-slate-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white/95 rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-200">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={dldLogo}
              alt="Dubai Land Department"
              className="h-20 sm:h-15 object-contain"
            />

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1E293B]">
                Dubai Land Dept. Systems
              </h3>

              {/* <p className="text-sm text-slate-500 mt-1">
                DLD Systems
              </p> */}
            </div>
          </div>

          {/* OQOOD */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#EEE7F7] border border-[#6B3FA0]/30 hover:shadow-md transition">
              <h4 className="text-lg font-black text-[#6B3FA0]">
                OQOOD
              </h4>

              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Procedures, inquiries, reports, registrations, and workflows.
              </p>
            </div>

            {/* TAS */}
            <div className="p-5 rounded-2xl bg-[#FDECEC] border border-[#A32116]/30 hover:shadow-md transition">
              <h4 className="text-lg font-black text-[#A32116]">
                TAS
              </h4>

              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Trust account requests, financial requests, and payment plans.
              </p>
            </div>

            {/* Coming Soon */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-dashed border-slate-300">
              <h4 className="text-lg font-black text-slate-500">
                Coming Soon
              </h4>

              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Dubai REST, Ejari, Trakheesi, Mollak, RDC, Dubai Broker, TABU.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}