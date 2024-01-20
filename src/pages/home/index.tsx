import React from "react";
import HeroSection from "./HeroSection";
// import FeatureSection from "./FeatureSection";
// import BenefitSection from "./BenefitSection";
import HowToUseSection from "./HowToUseSection";
import FaqSection from "./FaqSection";
import PricingSection from "./PricingSection";
import Testimonials from "./Testimonials";

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* <FeatureSection /> */}
      {/* <BenefitSection /> */}
      <HowToUseSection />
      <PricingSection />
      <Testimonials />
      <FaqSection />
    </>
  );
};
