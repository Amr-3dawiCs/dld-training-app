export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#1E293B] text-white flex items-center justify-center font-black">
            PT
          </div>

          <div>
            <h1 className="text-lg font-black text-[#1E293B]">
              ProfTrainings
            </h1>
            <p className="hidden sm:block text-xs text-slate-500">
              DLD Training Platform
            </p>
          </div>
        </a>

        <div className="flex items-center gap-5 sm:gap-8 text-sm font-semibold text-slate-700">
          <a href="#about" className="hover:text-[#6B3FA0]">About</a> 
          <a href="#training" className="hover:text-[#6B3FA0]">Training</a>
          <a href="#contact" className="hover:text-[#6B3FA0]">Contact</a>
        </div>
      </div>
    </nav>
  );
}