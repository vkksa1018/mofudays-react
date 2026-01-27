import React from "react";
import "./pages/Home/Home.scss";
import HeroSection from "./pages/Home/components/HeroSection";
import AboutSection from "./pages/Home/components/AboutSection";
import ServiceSection from "./pages/Home/components/ServiceSection";
import ProcessSection from "./pages/Home/components/ProcessSection";
import ReviewCarouselSection from "./pages/Home/components/ReviewCarouselSection";
import FloatingChat from "./pages/Home/components/FloatingChat";
import NewsModal from "./pages/Home/components/NewsModal";

function App() {
  return (
    <div className="app-wrapper">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProcessSection />
      <ReviewCarouselSection />

      {/* 浮動元件與彈窗 */}
      <FloatingChat />
      <NewsModal />
    </div>
  );
}

export default App;
