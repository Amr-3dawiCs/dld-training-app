import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TrainingSection from "./components/TrainingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TrainingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;