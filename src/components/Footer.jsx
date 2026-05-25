export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1E293B] text-slate-300 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-black mb-3">
            DLD Pro Trainings
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Professional DLD (OQOOD and TAS) training  platform.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Navigation</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#training" className="hover:text-white">Training</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-slate-400">
            <p>Dubai, United Arab Emirates</p>
            <p>profftrainings@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-white/10 mt-10 pt-6 text-center text-sm text-slate-500">
        © 2026 DLD ProfTrainings. All rights reserved.
      </div>
    </footer>
  );
}