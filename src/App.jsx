import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BundlesSection from "./components/BundlesSection";
import AboutSection from "./components/AboutSection";
import SubscriptionSection from "./components/SubscriptionSection";
import ServicesSection from "./components/ServicesSection";
import TrainingSection from "./components/TrainingSection";
import FAQSection from "./components/FAQSection";
import WhatsAppButton from "./components/WhatsAppButton";
import TrustStatsSection from "./components/TrustStatsSection";
import LearningPathSection from "./components/LearningPathSection";
import AIAssistantPreview from "./components/AIAssistantPreview";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-[#070b14] text-slate-900"
    >
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <TrustStatsSection language={language} />
      <BundlesSection language={language} />
      <AboutSection language={language} />
      <LearningPathSection language={language} />
      <SubscriptionSection language={language} />
      <ServicesSection language={language} />
      <AIAssistantPreview language={language} />
      <TrainingSection language={language} />
      <FAQSection language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;